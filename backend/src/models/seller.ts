import { Schema, model, Document} from 'mongoose';
import { TypeSeller } from '../types'; // Adjust the import path to the actual location of types.ts


const sellerSchema = new Schema<TypeSeller>({
    seller_storeName: { type: String, required: true },
    seller_phoneNumber: { type: String, required: true },
    seller_Address: { type: String, required: true },
    
    seller_user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    seller_list_ai_id: [{ type: Schema.Types.ObjectId, ref: 'AI' }],
    seller_sold_ai_id: [{ type: Schema.Types.ObjectId, ref: 'AI' }],
});

export default model<TypeSeller & Document>('Seller', sellerSchema);
