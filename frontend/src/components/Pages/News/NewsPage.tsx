import React, { useState, useEffect } from "react";
import newsService from "../../../service/newsService";
import { TypeSingleNew } from "../../../types";
import NewsList from "./NewsList";

const NewPage = () => {
  const [news, setNews] = useState<TypeSingleNew[]>([]);

  useEffect(() => {
    newsService.getAllNews()
      .then((data) => setNews(data))
      .catch((error) => console.error('Error fetching News:', error));
  }, []);

  if (!news) {
    return <div>Loading...</div>; // You can add a loading indicator while wnewting for data to load.
  }

  return (
    <div>
      <NewsList news={news}/>
    </div>
  );
};

export default NewPage;
