import { Schema, model, Document } from "mongoose";
import { TypeSubcriber } from "../types";

const subcriberSchema = new Schema<TypeSubcriber>({
  subcriber_email: { type: String, required: true },
});

export default model<TypeSubcriber & Document>("Subscriber", subcriberSchema);
