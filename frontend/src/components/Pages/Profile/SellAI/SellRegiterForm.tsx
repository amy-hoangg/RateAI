import React, { useState } from "react";
import { TypeNewSeller } from "../../../../types";
import sellersService from "../../../../service/sellersService";


const SellRegisterForm = () => {
  const [user_id, setUserID] = useState("currentid");
  const [storeName, setStoreName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newSeller: TypeNewSeller = {
      seller_storeName: storeName,
      seller_phoneNumber: phoneNumber,
      seller_Address: address,
      seller_user_id: user_id,
    };

    try {
      const createdSeller = await sellersService.createNewSeller(newSeller);
      console.log("Seller created:", createdSeller);

    } catch (error) {
      console.error("Error creating seller:", error);
    }

    // Clear the form fields after submission
    setUserID("");
    setStoreName("");
    setPhoneNumber("");
    setAddress("");
    setAIList([])
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="storeName">Store Name:</label>
        <input
          type="text"
          id="storeName"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SellRegisterForm;
