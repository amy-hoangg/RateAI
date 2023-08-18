import React, { useEffect, useState } from "react";
import SellRegisterForm from "./SellRegiterForm";
import SellAIList from "./SellAIList";
import SellAddNewAIForm from "./SellAddNewAIForm";
import { TypeSeller, TypeUser, TypeSingleAI } from "../../../../types";
import SellerInfo from "./SellerInfo";
import aisService from "../../../../service/aisService";
import usersService from "../../../../service/usersService";
import { useAuth } from "../../../../context/AuthContext"; // Update with the correct import path

const SellAIPage = () => {
  const [ais, setAIs] = useState<TypeSingleAI[]>([]);
  const [user, setUser] = useState<TypeUser | null>(null);
  const [seller, setSeller] = useState<TypeSeller | null>(null);
  const { isAuthenticated } = useAuth(); // Use the isAuthenticated function from your AuthContext

  useEffect(() => {
    aisService
      .getAllAIs()
      .then((data) => setAIs(data))
      .catch((error) => console.error("Error fetching AIs:", error));
  }, [ais]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      usersService
        .getOneUser(userId)
        .then((data) => {
          console.log("Fetched user data:", data);
          setUser(data);

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

      {!isAuthenticated && (
        <p>
          Please <a href="http://localhost:3000/sign-in">log in</a> to sell your AI. Don't have an account yet?
          <a href="http://localhost:3000/sign-up"> Sign up</a>
        </p>
      )}

      {isAuthenticated && (
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
