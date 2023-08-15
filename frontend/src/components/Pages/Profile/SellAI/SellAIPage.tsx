import React, { useEffect, useState } from "react";
import SellRegisterForm from "./SellRegiterForm";
import SellAIList from "./SellAIList";
import SellAddNewAIForm from "./SellAddNewAIForm";
import { TypeSeller, TypeUser, TypeSingleAI } from "../../../../types";
import SellerInfo from "./SellerInfo";
import aisService from "../../../../service/aisService";
import usersService from "../../../../service/usersService";

const SellAIPage = () => {
  const [ais, setAIs] = useState<TypeSingleAI[]>([]);
  const [user, setUser] = useState<TypeUser | null>(null); // Initialize user as null
  const [seller, setSeller] = useState<TypeSeller | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    aisService
      .getAllAIs()
      .then((data) => setAIs(data))
      .catch((error) => console.error("Error fetching AIs:", error));
  }, []);

  useEffect(() => {
    // Retrieve user data from local storage (assuming you store user data as "user" key)
    const userId = localStorage.getItem("userId");

    if (userId) {
      usersService
        .getOneUser(userId)
        .then((data) => {
          console.log("Fetched user data:", data);
          setUser(data);

          // Set seller ID if user_seller_id exists, otherwise set it to null
          if (data.user_seller_id) {
            setSeller(data.user_seller_id);
          } else {
            setSeller(null);
          }
        })
        .catch((error) => console.error("Error fetching user:", error));
    }
  }, []);

  return (
    <div>
      <h1>This is the Sell AI page</h1>

      {!isLoggedIn && (
        <p>
          Please <a href="http://localhost:3000/sign-in">log in</a> to add AIs
          to your wishlist. Don't have an account yet?
          <a href="http://localhost:3000/sign-up"> Sign up</a>
        </p>
      )}

      {isLoggedIn && (
        <>
          {!seller && <SellRegisterForm />}
          {seller && (
            <>
              <SellAIList ais={ais} />
              <SellAddNewAIForm />
              <SellerInfo />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SellAIPage;
