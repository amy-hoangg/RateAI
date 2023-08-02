import React from 'react';
import SingleNew from '../AITools/Other/singleNew';
import { TypeSingleNew } from '../../../types';

type Props = {
  ais: TypeSingleNew[];
};

const NewsList = ({ ais }: Props) => {
  return (
    <div>
      {ais.map((ai) => (
        <div key={ai.id}>
          <SingleNew eachNew={ai} />
        </div>
      ))}
    </div>
  );
};

export default NewsList;
