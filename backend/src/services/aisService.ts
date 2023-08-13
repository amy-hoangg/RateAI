/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// services/aisService.ts
import { Types } from "mongoose";
import AI from "../models/ai";
import Seller from '../models/seller';
import User from "../models/user";

import { TypeNewAI, TypeSingleAI } from "../types";

const getAll = async (): Promise<TypeSingleAI[]> => {
  try {
    const allAI = await AI.find()
    .populate({
      path: 'ai_reviews_review_id',
      populate: {
        path: 'review_reviewer_id',
        model: 'User' // Change 'User' to the actual model name for reviewers
      }
    })
    .populate('ai_seller_id')
    .exec();
    console.log("All AI fetched successfully:", allAI);
    return allAI;
  } catch (error) {
    console.error("Error fetching all AI:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

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


const getOneAI = async (id: string): Promise<TypeSingleAI | undefined> => {
  try {
    const ai = await AI.findOne({ _id: new Types.ObjectId(id) })
      .populate({
        path: 'ai_reviews_review_id',
        populate: {
          path: 'review_reviewer_id',
          model: 'User' // Change 'User' to the actual model name for reviewers
        }
      })
      .populate('ai_seller_id')
      .exec();
    if (!ai) {
      console.log('AI not found');
      return undefined;
    }

    console.log('AI fetched by ID:', ai);
    return ai.toObject();
  } 
  catch (error) {
    console.error('Error fetching AI by ID:', error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};



const updateSaves = async (id: string): Promise<TypeSingleAI | undefined> => {
  try {
    const ai = await AI.findOne({ _id: new Types.ObjectId(id) });

    if (!ai) {
      console.log("AI not found");
      return undefined;
    }
    ai.ai_saves += 1;
    await ai.save();

    console.log("AI saves updated:", ai);
    return ai.toObject();
  } 
  
  catch (error) {
    console.error("Error updating AI saves:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};


export default {
  getAll,
  createNewAI,
  getOneAI,
  updateSaves
};