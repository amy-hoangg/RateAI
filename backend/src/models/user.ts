// src/models/user.ts
/**
 * import { Schema, model, Document } from 'mongoose';

export interface UserType extends Document {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  saves: string[];
  purchases: string[];
  seller_id: string;
}

const userSchema = new Schema<UserType>({
  id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  saves: { type: [String], default: [] },
  purchases: { type: [String], default: [] },
  seller_id: { type: String, required: true },
});

export default model<UserType>('User', userSchema);
 */


import { Schema, model, Document} from 'mongoose';
import { TypeUser } from '../types'; // Adjust the import path to the actual location of types.ts


const userSchema = new Schema<TypeUser>({
  user_name: { type: String, required: true },
  user_password: { type: String, required: true },
  user_firstname: { type: String, required: true },
  user_lastname: { type: String, required: true },
  user_email: { type: String, required: true },
  user_saves_ai_id: [{ type: Schema.Types.ObjectId, ref: 'Ai' }],
  user_carts_ai_id: [{ type: Schema.Types.ObjectId, ref: 'Ai' }],
  user_reviews_review_id: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  user_likes_review_id: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  user_dislikes_review_id: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  user_likes_new_id: [{ type: Schema.Types.ObjectId, ref: 'New' }],
  user_dislikes_new_id: [{ type: Schema.Types.ObjectId, ref: 'New' }],
  user_purchases_ai_id: [{ type: Schema.Types.ObjectId, ref: 'Ai' }],
  user_seller_id: { type: Schema.Types.ObjectId, ref: 'Seller' },
});

export default model<TypeUser & Document>('User', userSchema);
