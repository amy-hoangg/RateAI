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
    const user = await User.findOne({ _id: new Types.ObjectId(id) })
    .populate({
      path: 'user_saves_ai_id',
      populate: {
        path: 'ai_seller_id',
        model: 'Seller'
      }
    })
    .populate({
      path: 'user_carts_ai_id',
      populate: {
        path: 'ai_seller_id',
        model: 'Seller'
      }
    })
    .populate('user_likes_new_id')
    .populate('user_dislikes_new_id')
    .populate('user_seller_id')
    .exec();
    console.log("User fetched by ID:", user);
    return user ? user.toObject() : undefined;
  } catch (error) {
    console.error("Error fetching User by ID:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

const putOnCart = async (ai_id: string, user_id: string): Promise<TypeUser | undefined> => {
  try {
    // Find the user by user_id
    const user = await User.findById(user_id);
    
    if (user) {
      // Update the user's user_carts_ai_id array
      user.user_carts_ai_id.push(new Types.ObjectId(ai_id));
      await user.save();
      
      console.log("User carts updated:", user);
      return user.toObject(); // Return the updated user object
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error("Error updating user carts:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

const removeFromCart = async (ai_id: string, user_id: string) => {
  try {
    // Find the user by user_id
    const user = await User.findById(user_id);
    
    if (user) {
      // Remove the ai_id from the user's user_carts_ai_id array
      user.user_carts_ai_id = user.user_carts_ai_id.filter(
        (cartAI_id) => cartAI_id.toString() !== ai_id
      );
      await user.save();
      
      console.log("User carts updated:", user);
      return user.toObject(); // Return the updated user object
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error("Error updating user carts:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

const editUserEmail = async (email: string, user_id: string) => {
  try {
    // Find the user by user_id
    const user = await User.findById(user_id);
    
    if (user) {
      // Update the user's email
      user.user_email = email;
      await user.save();
      
      console.log("User email updated:", user);
      return user.toObject(); // Return the updated user object
    } 
    else {
      throw new Error('User not found');
    }
  } 
  catch (error) {
    console.error("Error updating user email:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};


export default {
  getAll,
  createNewUser,
  getOneUser,
  putOnCart,
  removeFromCart,
  editUserEmail
};
