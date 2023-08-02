import { ReactNode } from "react";

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
      reviews : string[]
    }
    
    export type TypeNewAI = Omit<TypeSingleAI, 'id'>;
  
    export interface TypeSingleReview {
      id: string;
      app_id: string;
      reviewer: string;
      star: StarRating;
      content: string;
      time_review: string;
      like: number;
      dislike: number
    }
  
    export type TypeNewReview = Omit<TypeSingleReview, 'id'>;

    export interface TypeAppBarTabProps {
      children: ReactNode;
      to?: string;
      [key: string]: any; // Allows any additional props
    }

    export interface TypeAppBarProps {
      currentUser?: any; 
      onSignOut?: () => void;
    }

    export interface TypeSignInFormProps {
      onSubmit: () => void;
    }

    export interface TypeSignUpFormProps {
      onSubmit: () => void;
    }

    export interface TypeSingleNew {
      id: string;
      title: string;
      content: string;
      likes: number;
      dislikes: number;
      date: string;
    }


    export interface TypeSellSingleAI extends TypeSingleAI {
      typename: 'TypeSellSingleAI'; 
      sold: number; 
      totalRevenue: number; 
      date: string;
    }