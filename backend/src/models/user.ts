// src/models/user.ts

import { Schema, model, Document } from 'mongoose';

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
