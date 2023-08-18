import React, { useEffect, useState } from "react";
import usersService from "../../../../service/usersService";
import { useAuth } from "../../../../context/AuthContext";
import { TypeSeller, TypeUser } from "../../../../types";

const SellerInfo = () => {
  const [seller, setSeller] = useState<TypeSeller | null>(null);
  const { isAuthenticated } = useAuth();
  const [user, setUser] = useState<TypeUser | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      const user_id = localStorage.getItem("userId");
      console.log("user_id:", user_id);
      if (user_id) {
        usersService
          .getOneUser(user_id)
          .then((userData) => {
            console.log("user:", userData);
            setUser(userData);
            if (userData.user_seller_id) {
              console.log("user.user_seller_id:", userData.user_seller_id);
              setSeller(userData.user_seller_id);
            }
          })
          .catch((error) => console.error("Error fetching user:", error));
      }
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h2>Seller Info</h2>
      <ul>
        {isAuthenticated && seller ? (
          <>
            <li>Store: {seller.seller_storeName}</li>
            <li>Phone Number: {seller.seller_phoneNumber}</li>
            <li>Address: {seller.seller_Address}</li>
            {user && 
            <li>Owner: {user.user_firstname} {user.user_lastname}</li>}
          </>
        ) : (
          <li>No seller information available</li>
        )}
      </ul>
    </div>
  );
};

export default SellerInfo;
