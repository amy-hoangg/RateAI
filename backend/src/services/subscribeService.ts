import { TypeSubcriber } from "../types";
import Subscriber from "../models/subscriber";

const getAll = async (): Promise<TypeSubcriber[]> => {
    try {
      const allSubcribers = await Subscriber.find();
      console.log("All Subcriber fetched successfully:", allSubcribers);
      return allSubcribers;
    } 
    catch (error) {
      console.error("Error fetching all Subcriber:", error);
      throw error; // Rethrow the error to be caught in the route handler
    }
  };
  

const subscribe = async (newSubscriber: TypeSubcriber): Promise<TypeSubcriber> => {
    try {
        const createdSubscriber = await Subscriber.create(newSubscriber);
        console.log("Subscriber created successfully:", createdSubscriber);
        return createdSubscriber;
    } catch (error) {
        console.error("Error creating new Subscriber:", error);
        throw error; // Rethrow the error to be caught in the route handler
    }
};

export default {
    getAll,
    subscribe
};
