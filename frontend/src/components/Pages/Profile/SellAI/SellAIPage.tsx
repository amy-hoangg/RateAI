import React, { useEffect, useState } from "react";
import SellRegisterForm from "./SellRegiterForm";
import SellAIList from "./SellAIList";
import SellAddNewAIForm from "./SellAddNewAIForm";
import { TypeSingleAI } from "../../../../types";
import SellerInfo from "./SellerInfo";
import aisService from "../../../../service/aisService";


const SellAIPage = () => {

  const [ais, setAIs] = useState<TypeSingleAI[]>([]);

  useEffect(() => {
    aisService.getAllAIs()
      .then((data) => setAIs(data))
      .catch((error) => console.error('Error fetching AIs:', error));
  }, []);

  if (!ais) {
    return <div>Loading...</div>; // You can add a loading indicator while waiting for data to load.
  }

  return (
    <div>
      <h1>This is the Sell AI page</h1>
      <SellRegisterForm />

      <SellAIList ais={ais} />

      <SellAddNewAIForm/>

      <SellerInfo />
    </div>
  );
};

export default SellAIPage;
