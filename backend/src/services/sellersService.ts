/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import mongoose, { Types } from "mongoose";
import Seller from "../models/seller";
import User from "../models/user";

import { TypeNewSeller, TypeSeller } from "../types";

const getAll = async (): Promise<TypeSeller[]> => {
  try {
    const allSeller = await Seller.find();
    console.log("All Seller fetched successfully:", allSeller);
    return allSeller;
  } catch (error) {
    console.error("Error fetching all Seller:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};


const createNewSeller = async (newSeller: TypeNewSeller, user_id: string): Promise<TypeSeller> => {
  try {
    newSeller.seller_user_id = new mongoose.Types.ObjectId(user_id); // Convert user_id to ObjectId
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

const getOneSeller = async (
  id: string
): Promise<TypeSeller | undefined> => {
  try {
    const seller = await Seller.findOne({ _id: new Types.ObjectId(id) });
    console.log("Seller fetched by ID:", seller);
    return seller ? seller.toObject() : undefined;
  } catch (error) {
    console.error("Error fetching Seller by ID:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

export default {
  getAll,
  createNewSeller,
  getOneSeller,
};
