import React from 'react';
import SingleNew from '../../AITools/Other/singleNew';
import { TypeSingleNew } from '../../../../types';


type Props = {
  news: TypeSingleNew[];
};

const HomeNewsList = ({ news }: Props) => {
  const visibleNews = news.slice(0, 6);

  return (
    <div>
      <h2>News List</h2>
      {visibleNews.map((each_new) => (
        <div key={each_new.id}>
          <SingleNew eachNew={each_new} />
        </div>
      ))}
    </div>
  )
};

export default HomeNewsList;
