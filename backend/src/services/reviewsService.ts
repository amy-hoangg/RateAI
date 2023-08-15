/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import mongoose, { Types } from "mongoose";
import Review from "../models/review";
import User from "../models/user";
import AI from "../models/ai";

import { TypeNewReview, TypeSingleReview } from "../types";

const getAll = async (): Promise<TypeSingleReview[]> => {
  try {
    const allReview = await Review.find();
    console.log("All Review fetched successfully:", allReview);
    return allReview;
  } catch (error) {
    console.error("Error fetching all Review:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

const createNewReview = async (newReview: TypeNewReview, user_id: string): Promise<TypeSingleReview> => {
  try {
    newReview.review_reviewer_id = new mongoose.Types.ObjectId(user_id); // Convert user_id to ObjectId
    const createdReview = await Review.create(newReview);

    // UPDATE USER
    const user = await User.findById(user_id);
    if (user) {
      user.user_reviews_review_id.push(createdReview._id);
      await user.save();
    }

    // UPDATE AI
    const ai_id = createdReview.review_ai_id;
    const ai = await AI.findById(ai_id);
    if (ai) {
      ai.ai_reviews_review_id.push(createdReview._id);
      await ai.save();
    }

    console.log("New Review created successfully:", createdReview);
    return createdReview;
  } catch (error) {
    console.error("Error creating new Review:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};


const getOneReview = async (id: string): Promise<TypeSingleReview | undefined> => {
  try {
    const review = await Review.findOne({ _id: new Types.ObjectId(id) })
    .populate('review_reviewer_id') // Populate the reviews
    .exec();

    console.log("Review fetched by ID:", review);
    return review ? review.toObject() : undefined;
  } 
  catch (error) {
    console.error("Error fetching Review by ID:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

export default {
  getAll,
  createNewReview,
  getOneReview,
};
