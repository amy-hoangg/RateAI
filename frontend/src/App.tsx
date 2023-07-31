import React, { useEffect, useState } from 'react';
import SingleAI from "./singleAI";
import { TypeSingleAI } from "./types";
import { getAllAIs } from "./service/aisService";

const App = () => {
  const [ais, setAIs] = useState<TypeSingleAI[]>([]);
  const webName = "MyAI.com";

  useEffect(() => {
    getAllAIs()
      .then((data) => setAIs(data))
      .catch((error) => console.error('Error fetching AIs:', error));
  }, []);
  
  return (
    <div>
      <h1>{webName}</h1>
      {ais.map(ai => (
        <div key={ai.name}>
          <SingleAI eachAI={ai} />
        </div>
      ))}
    </div>
  );
};

export default App;
