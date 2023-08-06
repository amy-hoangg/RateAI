/*import reviews from '../../data/reviewsdata';
import { v1 as uuid } from 'uuid';
import {TypeNewReview, TypeSingleReview} from '../types';

const getAll = (): TypeSingleReview[] => {
    return reviews;
  };
  
const createNewReview = (newreview: TypeNewReview): TypeSingleReview=> {
    const addedReview = {
      ...newreview,
      id: uuid()
    };
    return addedReview;
  };
  
  const getOneReview = (id: string): TypeSingleReview| undefined => {
    return reviews.find(p => p.id === id);
  };

  export default {
    getAll,
    createNewReview,
    getOneReview
  };
*/