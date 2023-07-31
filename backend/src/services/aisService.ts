import ais from '../../data/aisdata';
import { v1 as uuid } from 'uuid';
import {TypeNewAI, TypeSingleAI} from '../types';

const getAll = (): TypeSingleAI[] => {
    return ais;
  };
  
const createNewAI = (newAI: TypeNewAI): TypeSingleAI=> {
    const addedAI = {
      ...newAI,
      id: uuid()
    };
    return addedAI;
  };
  
  const getOneAI = (id: string): TypeSingleAI| undefined => {
    return ais.find(p => p.id === id);
  };

  export default {
    getAll,
    createNewAI,
    getOneAI
  };

