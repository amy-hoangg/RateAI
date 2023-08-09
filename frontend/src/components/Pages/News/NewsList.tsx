import React from 'react';
import SingleNew from '../AITools/Other/singleNew';
import { TypeSingleNew } from '../../../types';

type Props = {
  news: TypeSingleNew[];
};

const NewsList = ({ news }: Props) => {
  return (
    <div>
      {news.map((each_new) => (
        <div key={each_new._id}>
          <SingleNew eachNew={each_new} />
        </div>
      ))}
    </div>
  );
};

export default NewsList;
