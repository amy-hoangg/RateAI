// services/aisService.ts
import { Types } from 'mongoose';
import AI from '../models/ai';
import { TypeNewAI, TypeSingleAI } from '../types';

const getAll = async (): Promise<TypeSingleAI[]> => {
  try {
    const allAI = await AI.find();
    console.log('All AI fetched successfully:', allAI);
    return allAI;
  } catch (error) {
    console.error('Error fetching all AI:', error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

const createNewAI = async (newAI: TypeNewAI): Promise<TypeSingleAI> => {
  try {
    const createdAI = await AI.create(newAI);
    console.log('New AI created successfully:', createdAI);
    return createdAI;
  } catch (error) {
    console.error('Error creating new AI:', error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

const getOneAI = async (id: string): Promise<TypeSingleAI | undefined> => {
  try {
    const ai = await AI.findOne({ _id: new Types.ObjectId(id) });
    console.log('AI fetched by ID:', ai);
    return ai ? ai.toObject() : undefined;
  } catch (error) {
    console.error('Error fetching AI by ID:', error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

export default {
  getAll,
  createNewAI,
  getOneAI,
};


