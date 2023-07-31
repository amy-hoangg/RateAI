import React, { useEffect, useState } from 'react';
import SingleAI from "./components/singleAI";
import AddNewAIForm from './components/addNewAIForm';
import { TypeSingleAI } from "./types";
import aisService from "./service/aisService";

const App = () => {
  const [ais, setAIs] = useState<TypeSingleAI[]>([]);

  const webName = "MyAI.com";

  useEffect(() => {
    aisService.getAllAIs()
      .then((data) => setAIs(data))
      .catch((error) => console.error('Error fetching AIs:', error));
  }, []);

  const submitNewAI = async (values: TypeSingleAI) => {
      const ai = await aisService.createNewAI(values);
      setAIs(ais.concat(ai));
  };
  
  return (
    <div>
      <h1>{webName}</h1>

      {ais.map(ai => (
        <div key={ai.name}>
          <SingleAI eachAI={ai} />
        </div>
      ))}

      <AddNewAIForm onSubmit={submitNewAI}/>
    </div>
  );
};

export default App;
