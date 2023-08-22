import React, { useEffect, useState } from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeBannerBestAI from "./HomeBanner/HomeBannerBestAI";
import HomeAIsList from "./HomeList/HomeAIList";
import HomeNewsList from "./HomeList/HomeNewsList";
import HomeFilterButton from "./HomeSearch/HomeFilter/HomeFilterPage";
import HomeSearchBar from "./HomeSearch/HomeSearchBar";
import HomeNewsLetter from "./HomeNewsLetter";
import { TypeSingleAI, TypeSingleNew } from "../../../types";
import aisService from "../../../service/aisService";
import newsService from "../../../service/newsService";

const HomePage = () => {

  const [ais, setAIs] = useState<TypeSingleAI[]>([]);

  useEffect(() => {
    aisService
      .getAllAIs()
      .then((data) => setAIs(data))
      .catch((error) => console.error("Error fetching AIs:", error));
  }, []);

  if (!ais) {
    return <div>Loading...</div>; // You can add a loading indicator while waiting for data to load.
  }

  const [news, setNews] = useState<TypeSingleNew[]>([]);

  useEffect(() => {
    newsService
      .getAllNews()
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching News:", error));
  }, []);

  if (!news) {
    return <div>Loading...</div>; // You can add a loading indicator while wnewting for data to load.
  }

  return (
    <div>
      <HomeSearchBar/>
      <HomeFilterButton />
      <HomeBanner />
      <HomeAIsList ais={ais} />
      <HomeBannerBestAI />
      <HomeNewsList news={news} />
      <HomeNewsLetter />
    </div>
  );
};

export default HomePage;
