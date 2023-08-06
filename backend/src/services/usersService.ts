/*import users from '../../data/usersdata';
import { v1 as uuid } from 'uuid';
import {TypeNewUser, TypeUser} from '../types';

const getAll = (): TypeUser[] => {
    return users;
  };
  
const createNewUser = (newUser: TypeNewUser): TypeUser=> {
    const addedUser = {
      ...newUser,
      id: uuid()
    };
    return addedUser;
  };
  
  const getOneUser = (id: string): TypeUser| undefined => {
    return users.find(p => p.id === id);
  };

  export default {
    getAll,
    createNewUser,
    getOneUser
  };

//how can it fetch data from database
*/