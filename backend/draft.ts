const createNewAI = async (newAI: TypeNewAI, user_id: string): Promise<TypeSingleAI> => {
    try {
      const createdAI = await AI.create(newAI);
  
      // Fetch the user based on the user_id
      const user = await User.findById(user_id);
  
      console.log(user_id);
      if (!user) {
        throw new Error('User not found');
      }
  
      // Get the seller_id from the user
      const seller_id = user.user_seller_id;
      console.log(seller_id)
  
      if (!seller_id) {
        throw new Error('Seller ID not found for the user');
      }
      // Set the seller_id in the new AI
      createdAI.ai_seller_id = seller_id;
  
      // Fetch the corresponding seller from the database
      const seller = await Seller.findById(seller_id);
  
      if (seller) {
        // Update the seller's seller_list_ai_id property
        seller.seller_list_ai_id.push(createdAI._id);
        await seller.save();
      } else {
        throw new Error('Seller not found');
      }
  
      console.log("New AI created successfully:", createdAI);
      return createdAI;
    } catch (error) {
      console.error("Error creating new AI:", error);
      throw error;
    }
  };


  const createNewSeller = async (newSeller: TypeNewSeller, user_id: string): Promise<TypeSeller > => {
    try {
      newSeller.seller_user_id = user_id;
      const createdSeller = await Seller.create(newSeller);

      // Fetch the corresponding user from the database
      const user = await User.findById(user_id);
      // Update the user's user_list_seller_id property
      if (user) {
        user.user_seller_id = createdSeller._id;
        await user.save();
      }
  
      console.log("New Seller created successfully:", createdSeller);
      return createdSeller;
    } catch (error) {
      console.error("Error creating new Seller:", error);
      throw error; // Rethrow the error to be caught in the route handler
    }
  };