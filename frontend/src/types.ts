export enum StarRating {
      ONE = 1,
      TWO = 2,
      THREE = 3,
      FOUR = 4,
      FIVE = 5,
    }
    
    export interface TypeSingleAI {
      name: string;
      star_rating: StarRating;
      description: string;
      saves: number;
      price: string;
      categories: string[];
    }
    