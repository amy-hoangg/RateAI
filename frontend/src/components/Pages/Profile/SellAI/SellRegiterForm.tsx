import React, { useState } from 'react';
import { SellRegisterFormProps, TypeNewSeller } from '../../../../types';

const SellRegisterForm: React.FC<SellRegisterFormProps> = ({ onSubmit }) => {
  const [user_id, setUserID] = useState('currentid')
  const [username, setUserName] = useState('currentUser')
  const [password, setPassword] = useState('currentPassword')
  const [firstName, setFirstName] = useState('currentFirstName')
  const [lastName, setLastName] = useState('currentLastName')
  const [email, setEmail] = useState('currentEmail')
  const [saves, setSaves] = useState([])
  const [purchases, setPurchases] = useState([])  
  const [storeName, setStoreName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [ai_list, setAIList] = useState([])

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
      id: user_id,
      username,
      password,
      firstname: firstName,
      lastname: lastName,
      email,
      saves,
      purchases,
      storeName,
      phoneNumber,
      address,
      ai_list
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
