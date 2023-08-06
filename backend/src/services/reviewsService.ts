/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Types } from "mongoose";
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

const createNewReview = async (
  newReview: TypeNewReview
): Promise<TypeSingleReview> => {
  try {
    const createdReview = await Review.create(newReview);

    // Get the user_id from the newly created Review
    const user_id = createdReview.review_reviewer_id;
    // Fetch the corresponding user from the database
    const user = await User.findById(user_id);
    // Update the user's user_list_review_id property
    if (user) {
      user.user_reviews_review_id.push(createdReview._id);
      await user.save();
    }

    // Get the user_id from the newly created Review
    const ai_id = createdReview.review_ai_id;
    // Fetch the corresponding user from the database
    const ai = await AI.findById(ai_id);
    // Update the user's user_list_review_id property
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

const getOneReview = async (
  id: string
): Promise<TypeSingleReview | undefined> => {
  try {
    const review = await Review.findOne({ _id: new Types.ObjectId(id) });
    console.log("Review fetched by ID:", review);
    return review ? review.toObject() : undefined;
  } catch (error) {
    console.error("Error fetching Review by ID:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

export default {
  getAll,
  createNewReview,
  getOneReview,
};
