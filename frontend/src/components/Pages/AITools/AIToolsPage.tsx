import React, { useState, useEffect } from "react";
import aisService from "../../../service/aisService";
import { TypeSingleAI } from "../../../types";
import AIsList from "./AIsList";

const AIPage = () => {
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
      <AIsList ais={ais}/>
    </div>
  );
};

export default AIPage;
