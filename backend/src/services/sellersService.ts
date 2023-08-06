/*import sellers from '../../data/sellersdata';
import { v1 as uuid } from 'uuid';
import {TypeNewSeller, TypeSeller} from '../types';

const getAll = (): TypeSeller[] => {
    return sellers;
  };
  
const createNewSeller = (newSeller: TypeNewSeller): TypeSeller=> {
    const addedSeller = {
      ...newSeller,
      seller_id: uuid()
    };
    return addedSeller;
  };
  
  const getOneSeller = (id: string): TypeSeller| undefined => {
    return sellers.find(p => p.id === id);
  };

  export default {
    getAll,
    createNewSeller,
    getOneSeller
  };

//how can it fetch data from database
*/