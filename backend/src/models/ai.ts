import { Schema, model, Document } from "mongoose";
import { TypeSingleAI } from "../types";

const aiSchema = new Schema<TypeSingleAI>({
  ai_name: { type: String, required: true },
  ai_star_rating: { type: Number, required: true },
  ai_description: { type: String, required: true },
  ai_saves: { type: Number, required: true },
  ai_sold: { type: Number, required: true },
  ai_price: { type: Number, required: true },
  ai_categories: { type: [String], required: true },
  ai_timecreated: { type: Date, required: true },
  ai_reviews_review_id: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  ai_seller_id: { type: Schema.Types.ObjectId, ref: "Seller" },
});

// Add text indexes to the fields you want to search
aiSchema.index({ ai_name: "text", ai_description: "text" });

export default model<TypeSingleAI & Document>("AI", aiSchema);
