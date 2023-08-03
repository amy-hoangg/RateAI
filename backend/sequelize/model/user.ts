/**
 * // user.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize';

interface UserType extends Model {
  id: string;
  username: string;
  // Add other fields from your TypeUser interface
}

const User = sequelize.define<UserType>('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // Add other fields from your TypeUser interface
});

export default User;

 */

