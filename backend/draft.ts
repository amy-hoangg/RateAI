router.patch('/unsave/:id', async (req: Request, res: Response) => {
    const newsId = req.params.id;
  
    try {
      console.log('UnSave endpoint hit. News ID:', newsId); // Add this log
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
  
      // Update the saves count for the News
      const updatedNews = await newsService.unSave(newsId, decodedToken.id);
  
      if (!updatedNews) {
        return res.status(404).json({ error: "News not found" });
      }
  
      // Respond with the updated News
      return res.json(updatedNews); // Add the "return" statement here
    } 
    catch (error) {
      console.error("Error unsaving News saves:", error);
      return res.status(500).json({ error: "An error occurred while unsaving News saves" });
    }
  });