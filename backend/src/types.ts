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

export interface TypeUser {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  saves: string [];
  purchases: string[];
  seller_id: string
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