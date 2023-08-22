import usersService from "./src/services/usersService";

router.patch('/removefromcart/:id', async (req: Request, res: Response) => {
    const aiId = req.params.id;
  
    try {
      // Extract the token from the authorization header
      const authorizationHeader = req.get('authorization');
      
      if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(401).send('Unauthorized');
      }
      const token = authorizationHeader.substring(7);
      console.log('Token:', token); // Add this log
      // Verify and decode the token
      const decodedToken = jwt.verify(token, process.env.SECRET || " ") as unknown as DecodedToken;
      console.log('Decoded Token:', decodedToken); // Add this log
  
      // Update the saves count for the AI
      const updatedUser = await usersService.removeFromCart(aiId, decodedToken.id);
  
      if (!updatedUser) {
        return res.status(404).json({ error: "user not found" });
      }
  
      // Respond with the updated AI
      return res.json(updatedUser); // Add the "return" statement here
    } 
    catch (error) {
      console.error("Error unsaving user cart:", error);
      return res.status(500).json({ error: "An error occurred while unsaving AI saves" });
    }
  });