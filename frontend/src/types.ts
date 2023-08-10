
import { ReactNode } from "react";

export interface TypeAppBarTabProps {
  children: ReactNode;
  to?: string;
  [key: string]: any; // Allows any additional props
}
export interface TypeAppBarProps {
  currentUser?: any;
  onSignOut?: () => void;
}

export interface HomeSearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export interface SellRegisterFormProps {
  onSubmit: (formData: TypeNewSeller) => void;
}

export interface TypeSignInFormProps {
  onSubmit: () => void;
}

export interface TypeSignUpFormProps {
  onSubmit: () => void;
}





export enum StarRating {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}



export interface TypeSingleAI {

  _id: string;
  ai_name: string;
  ai_star_rating: number;
  ai_description: string;
  ai_saves: number;
  ai_price: string;
  ai_categories: string[];
  ai_timecreated: Date;
  ai_sold: number;
  ai_reviews_review_id: TypeSingleReview[]; // Update to an array of TypeSingleReview
  ai_seller_id?: string;
}

export interface TypeSingleNew {

  _id: string;
  new_title: string;
  new_content: string;
  new_likes: number;
  new_dislikes: number;
  new_date: Date;
}

export interface TypeSingleReview {

  _id: string;
  review_ai_id: string;
  review_reviewer_id: string;
  review_star: number;
  review_content: string;
  review_time: Date;
  review_like: number;
  review_dislike: number;
}

export interface TypeUser {

  _id: string;
  user_name: string;
  user_password: string;
  user_firstname: string;
  user_lastname: string;
  user_email: string;
  user_saves_ai_id?: string[];
  user_carts_ai_id?: string[];
  user_reviews_review_id?: string[];
  user_likes_review_id?: string[];
  user_dislikes_review_id?: string[];
  user_likes_new_id?: string[];
  user_dislikes_new_id?: string[];
  user_purchases_ai_id?: string[];
  user_seller_id?: string;
}

export interface TypeSeller {

  _id: string;
  seller_storeName: string;
  seller_phoneNumber: string;
  seller_Address: string;
  seller_user_id: string;
  seller_list_ai_id: string[];
  seller_sold_ai_id?: string[];
}





export type TypeNewSeller = Omit<TypeSeller, '_id'>

export type TypeNewAI = Omit<TypeSingleAI, "_id">;

export type TypeNewReview = Omit<TypeSingleReview, "_id">;

export type TypeNewUser = Omit<TypeUser, '_id'>

export type TypeNewNew = Omit<TypeSingleNew, "_id">;