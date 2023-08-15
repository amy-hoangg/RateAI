import { TypeSubcriber } from "../types";
import Subscriber from "../models/subscriber";

const subcribe = async (newSubscriber: TypeSubcriber): Promise<TypeSubcriber> => {
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
    subcribe
};
