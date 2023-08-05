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
