import { Schema, model, Document} from 'mongoose';
import { TypeSingleReview } from '../types'; // Adjust the import path to the actual location of types.ts


const reviewSchema = new Schema<TypeSingleReview>({
    review_ai_id: { type: Schema.Types.ObjectId, ref: 'AI' },
    review_reviewer_id: { type: Schema.Types.ObjectId, ref: 'User' },
    review_star: { type: Number, required: true },
    review_content: { type: String, required: true },
    review_time: { type: Date, required: true },
    review_like: { type: Number, required: true },
    review_dislike: { type: Number, required: true },
});

export default model<TypeSingleReview & Document>('Review', reviewSchema);
