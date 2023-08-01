import React from 'react';
import SingleAI from './singleAI';
import { TypeSingleAI } from '../../../types';

type Props = {
  ais: TypeSingleAI[];
};

const AIsList = ({ ais }: Props) => {
  return (
    <div>
      {ais.map((ai) => (
        <div key={ai.id}>
          <SingleAI eachAI={ai} />
        </div>
      ))}
    </div>
  );
};

export default AIsList;
