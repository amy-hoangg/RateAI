//implement 6 news and a button see all news -> navigate import React from 'react';
import SingleNews from '../../NewsTools/Other/singleNews';
import { TypeSingleNew } from '../../../../types';

type Props = {
  news: TypeSingleNew[];
};

const NewssList = ({ news }: Props) => {
  const visibleNews = news.slice(0, 6);

  return (
    <div>
      {visibleNews.map((new) => (
        <div key={new.id}>
          <SingleNews eachNews={new} />
        </div>
      ))}
    </div>
  );
};

export default NewssList;
