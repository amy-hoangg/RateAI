/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// services/usersService.ts
import { Types } from "mongoose";
import User from "../models/user";
import Seller from '../models/seller';

import { TypeNewUser, TypeUser } from "../types";

const getAll = async (): Promise<TypeUser[]> => {
  try {
    const allUser = await User.find();
    console.log("All User fetched successfully:", allUser);
    return allUser;
  } catch (error) {
    console.error("Error fetching all User:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

const createNewUser = async (newUser: TypeNewUser): Promise<TypeUser> => {
  try {

    
    const createdUser = await User.create(newUser);
    // Get the seller_id from the newly created User
    const seller_id = createdUser.user_seller_id;
    // Fetch the corresponding seller from the database
    const seller = await Seller.findById(seller_id);
    // Update the seller's seller_list_user_id property
    if (seller) {
      seller.seller_user_id = createdUser._id;
      await seller.save();
    }


    console.log("New User created successfully:", createdUser);
    return createdUser;
  } 
  
  catch (error) {
    console.error("Error creating new User:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

const getOneUser = async (id: string): Promise<TypeUser | undefined> => {
  try {
    const user = await User.findOne({ _id: new Types.ObjectId(id) });
    console.log("User fetched by ID:", user);
    return user ? user.toObject() : undefined;
  } catch (error) {
    console.error("Error fetching User by ID:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

export default {
  getAll,
  createNewUser,
  getOneUser,
};
