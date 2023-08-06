import React from 'react';
import SellSingleAI from './SellSingleAI';
import { TypeSingleAI } from '../../../../types'; 

type Props = {
  ais: TypeSingleAI[];
};

const SellAIList = ({ ais }: Props) => {
  return (
    <div>
        <h2>sell ai list</h2>
      {ais.map((ai) => (
        <div key={ai.id}>
          <SellSingleAI eachAI={ai} />
        </div>
      ))}
    </div>
  );
};

export default SellAIList;
