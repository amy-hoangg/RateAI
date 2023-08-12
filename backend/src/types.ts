import { Types } from "mongoose";


export enum StarRating {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

export interface TypeSingleAI extends Document {
  ai_name: string;
  ai_star_rating: number;
  ai_description: string;
  ai_saves: number;
  ai_price: number;
  ai_categories: string[];
  ai_timecreated: Date;
  ai_sold: number;
  ai_reviews_review_id: Types.ObjectId[];
  ai_seller_id: Types.ObjectId;
}

export interface TypeSingleNew extends Document {
  new_title: string;
  new_content: string;
  new_likes: number;
  new_dislikes: number;
  new_date: Date;
}

export interface TypeSingleReview extends Document {
  review_ai_id: Types.ObjectId;
  review_reviewer_id:Types.ObjectId;
  review_star: number;
  review_content: string;
  review_time: Date;
  review_like: number;
  review_dislike: number;
}



export interface TypeUser extends Document {
  user_name: string;
  user_password: string;
  user_firstname: string;
  user_lastname: string;
  user_email: string;
  user_saves_ai_id?: Types.ObjectId[];
  user_carts_ai_id?: Types.ObjectId[];
  user_reviews_review_id: Types.ObjectId[];
  user_likes_review_id?: Types.ObjectId[];
  user_dislikes_review_id?: Types.ObjectId[];
  user_likes_new_id?: Types.ObjectId[];
  user_dislikes_new_id?: Types.ObjectId[];
  user_purchases_ai_id?: Types.ObjectId[];
  user_seller_id?: Types.ObjectId;
}

export interface TypeSeller extends Document {
  seller_storeName: string;
  seller_phoneNumber: string;
  seller_Address: string;

  seller_user_id: Types.ObjectId;
  seller_list_ai_id: Types.ObjectId[];
  seller_sold_ai_id?: Types.ObjectId[]
}



export interface TypeSellSingleAI extends TypeSingleAI {
  sold: number; 
  totalRevenue: number; 
  date: string; 
}

export type TypeNewSeller = Omit<TypeSeller, 'seller_id'>;

export type TypeNewAI = Omit<TypeSingleAI, "id">;

export type TypeNewReview = Omit<TypeSingleReview, "id">;

export type TypeNewUser = Omit<TypeUser, 'id'>;

export type TypeNewNew = Omit<TypeSingleNew, "id">;
