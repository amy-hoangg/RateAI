import React, { useEffect, useState } from "react";
import usersService from "../../../../service/usersService";
import { TypeSingleAI } from "../../../../types";
import AIsList from "../../AITools/AIsList";
import { useAuth } from "../../../../context/AuthContext";

const CartPage = () => {
  const { isAuthenticated } = useAuth();
  const [aisInCart, setAisInCart] = useState<TypeSingleAI[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      const user_id = localStorage.getItem("userId");
      if (user_id) {
        usersService
          .getOneUser(user_id)
          .then((user) => {
            if (user.user_carts_ai_id) {
              setAisInCart(user.user_carts_ai_id);
            }
          })
          .catch((error) => console.error("Error fetching user:", error));
      }
    }
  }, [isAuthenticated, aisInCart]);
  return (
    <>
      {!isAuthenticated ? (
        <div>
          <h1>Welcome to Your Cart</h1>
          <p>
            Please <a href="http://localhost:3000/sign-in">log in</a> to add AIs to your wishlist. Don't have an account
            yet?
            <a href="http://localhost:3000/sign-up"> Sign up</a>
          </p>
        </div>
      ) : (
        <div>
          <h1>My Cart</h1>
          <p>Number of items in cart: {aisInCart.length}</p>
          {/* Render the list of saved AI items */}
          <AIsList ais={aisInCart} />
        </div>
      )}
    </>
  );
};

export default CartPage;
   