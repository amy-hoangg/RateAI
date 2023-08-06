import React, { useState } from 'react';
import { TypeNewSeller } from '../../../../types';

interface SellRegisterFormProps {
  onSubmit: (newSeller: TypeNewSeller) => void;
}

const SellRegisterForm: React.FC<SellRegisterFormProps> = ({ onSubmit }) => {
  const [user_id, setUserID] = useState('currentid');
  const [storeName, setStoreName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [ai_list, setAIList] = useState<string[]>([]);

  const handleStoreNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreName(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData: TypeNewSeller = {
      seller_storeName: storeName,
      seller_phoneNumber: phoneNumber,
      seller_Address: address,
      seller_user_id: user_id,
      seller_list_ai_id: ai_list,
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="storeName">Store Name:</label>
        <input
          type="text"
          id="storeName"
          value={storeName}
          onChange={handleStoreNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SellRegisterForm;
