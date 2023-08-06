import { Schema, model, Document} from 'mongoose';
import { TypeSingleNew } from '../types'; 


const newSchema = new Schema<TypeSingleNew>({
    new_title:  { type: String, required: true },
    new_content:  { type: String, required: true },
    new_likes: { type: Number, required: true },
    new_dislikes: { type: Number, required: true },
    new_date: { type: Date, required: true },
  });

export default model<TypeSingleNew & Document>('New', newSchema);

