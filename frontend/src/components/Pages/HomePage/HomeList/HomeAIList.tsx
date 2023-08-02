import React from 'react';
import SingleAI from '../../AITools/Other/singleAI';
import { TypeSingleAI } from '../../../../types';

type Props = {
  ais: TypeSingleAI[];
};

const HomeAIsList = ({ ais }: Props) => {
  const visibleAIs = ais.slice(0, 6);

  return (
    <div>
      {visibleAIs.map((ai) => (
        <div key={ai.id}>
          <SingleAI eachAI={ai} />
        </div>
      ))}
    </div>
  );
};

export default HomeAIsList;
