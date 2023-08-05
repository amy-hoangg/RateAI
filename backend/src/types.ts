import { Types } from "mongoose";

export enum StarRating {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

export interface TypeSingleAI {
  id: string;
  name: string;
  star_rating: StarRating;
  description: string;
  saves: number;
  price: string;
  categories: string[];
  review_count: number;
  reviews: string[];
}

export interface TypeSingleNew {
  id: string;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  date: string;
}

export interface TypeSingleReview {
  id: string;
  app_id: string;
  reviewer: string;
  star: StarRating;
  content: string;
  time_review: string;
  like: number;
  dislike: number;
}

export interface TypeSellSingleAI extends TypeSingleAI {
  sold: number; 
  totalRevenue: number; 
  date: string; 
}

export interface TypeUser extends Document {
  user_name: string;
  user_password: string;
  user_firstname: string;
  user_lastname: string;
  user_email: string;
  user_saves_ai_id?: Types.ObjectId[];
  user_carts_ai_id?: Types.ObjectId[];
  user_reviews_review_id?: Types.ObjectId[];
  user_likes_review_id?: Types.ObjectId[];
  user_dislikes_review_id?: Types.ObjectId[];
  user_likes_new_id?: Types.ObjectId[];
  user_dislikes_new_id?: Types.ObjectId[];
  user_purchases_ai_id?: Types.ObjectId[];
  user_seller_id?: Types.ObjectId;
}

export interface TypeSeller extends TypeUser {
  storeName: string;
  phoneNumber: string;
  address: string;
  ai_list: string[]
}





export type TypeNewSeller = Omit<TypeSeller, 'seller_id'>;

export type TypeNewAI = Omit<TypeSingleAI, "id">;

export type TypeNewReview = Omit<TypeSingleReview, "id">;

export type TypeNewUser = Omit<TypeUser, 'id'>;