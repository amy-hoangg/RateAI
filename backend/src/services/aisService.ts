/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// services/aisService.ts
import { Types } from "mongoose";
import AI from "../models/ai";
import Seller from '../models/seller';

import { TypeNewAI, TypeSingleAI } from "../types";

const getAll = async (): Promise<TypeSingleAI[]> => {
  try {
    const allAI = await AI.find();
    console.log("All AI fetched successfully:", allAI);
    return allAI;
  } catch (error) {
    console.error("Error fetching all AI:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

const createNewAI = async (newAI: TypeNewAI): Promise<TypeSingleAI> => {
  try {
    const createdAI = await AI.create(newAI);

    // Get the seller_id from the newly created AI
    const seller_id = createdAI.ai_seller_id;

    // Fetch the corresponding seller from the database
    const seller = await Seller.findById(seller_id);

    // Update the seller's seller_list_ai_id property
    if (seller) {
      seller.seller_list_ai_id.push(createdAI._id);
      await seller.save();
    }
    console.log("New AI created successfully:", createdAI);
    return createdAI;
  } 
  
  catch (error) {
    console.error("Error creating new AI:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

const getOneAI = async (id: string): Promise<TypeSingleAI | undefined> => {
  try {

    const ai = await AI.findOne({ _id: new Types.ObjectId(id) });
    if (!ai) {
      console.log("AI not found");
      return undefined;
    }

    console.log("AI fetched by ID:", ai);
    return ai.toObject();
  } 
  
  catch (error) {
    console.error("Error fetching AI by ID:", error);
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
