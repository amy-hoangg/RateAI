import React, { useEffect, useState } from "react";
import SellRegisterForm from "./SellRegiterForm";
import SellAIList from "./SellAIList";
import SellAddNewAIForm from "./SellAddNewAIForm";
import { TypeNewAI, TypeSingleAI } from "../../../../types";
import SellerInfo from "./SellerInfo";
import aisService from "../../../../service/aisService";


const SellAIPage = () => {

  const handleSellerRegister = async () => {
      console.log("Form submitted with data:");
  }


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
      <SellRegisterForm onSubmit={handleSellerRegister} />

      <SellAIList ais={ais} />

      <SellAddNewAIForm onSubmit={function (newAI: TypeNewAI): void {
              throw new Error("Function not implemented.");
          } } />

      <SellerInfo />
    </div>
  );
};

export default SellAIPage;
