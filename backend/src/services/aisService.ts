import ais from '../../data/aisdata';
import {TypeSingleAI} from '../types';

const getAll = (): TypeSingleAI[] => {
    return ais;
  };
  
  export default {
    getAll
  };