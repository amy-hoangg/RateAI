/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// services/newsService.ts
import { Types } from "mongoose";
import New from "../models/new";
import User from "../models/user";

import { TypeNewNew, TypeSingleNew } from "../types";

const getAll = async (): Promise<TypeSingleNew[]> => {
  try {
    const allNew = await New.find();
    console.log("All New fetched successfully:", allNew);
    return allNew;
  } catch (error) {
    console.error("Error fetching all New:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

const createNewNew = async (newNew: TypeNewNew): Promise<TypeSingleNew> => {
  try {
    const createdNew = await New.create(newNew);
    console.log("New New created successfully:", createdNew);
    return createdNew;
  } 
  
  catch (error) {
    console.error("Error creating new New:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

const getOneNew = async (id: string): Promise<TypeSingleNew | undefined> => {
  try {
    const onenew = await New.findOne({ _id: new Types.ObjectId(id) });
    console.log("New fetched by ID:", onenew);
    return onenew ? onenew.toObject() : undefined;
  } catch (error) {
    console.error("Error fetching New by ID:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

const like = async (id: string, user_id: string): Promise<TypeSingleNew | undefined> => {
  try {
    const news = await New.findOne({ _id: new Types.ObjectId(id) });

    if (!news) {
      console.log("news not found");
      return undefined;
    }
    news.new_likes += 1;
    await news.save();

    //increase the like news in user
    const user = await User.findById(user_id);
    if (user) {
      // Update the seller's seller_list_ai_id property
      user.user_likes_new_id?.push(news._id);
      await user.save();
    } 
    else {
      throw new Error('user not found');
    }

    console.log("news saves updated:", news);
    return news.toObject();
  } 
  
  catch (error) {
    console.error("Error updating news saves:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

export default {
  getAll,
  createNewNew,
  getOneNew,
  like
};
