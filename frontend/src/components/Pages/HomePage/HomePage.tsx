import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeBannerBestAI from './HomeBanner/HomeBannerBestAI';
import HomeAIsList from './HomeList/HomeAIList';
import HomeNewsList from './HomeList/HomeNewsList';
import HomeFilterButton from './HomeSearch/HomeFilter/HomeFilterButton';
import HomeSearchBar from './HomeSearch/HomeSearchBar';
import HomeNewsLetter from './HomeNewsLetter';

const HomePage = () => {
  const handleSearch = (searchTerm: string) => {
    console.log('Searching for:', searchTerm);
  };

  const fakeAIs = [
    {
        "id": "d2773336-f723-11e9-8f0b-362b9e155667",
        "name": "ChatGenius",
        "star_rating": 4,
        "description": "AI-powered chatbot for customer support.",
        "saves": 1234,
        "price": "Free",
        "categories": ["chatbot", "management"],
        "review_count": 1,
        "reviews": [
          "r2773336-f723-11e9-8f0b-362b9e155667",
        ]
      },
    // Add more fake AI data here...
  ];

  // Fake data for HomeNewsList
  const fakeNews = [
    {
      id: 'news1',
      title: 'News 1',
      content: 'This is News 1',
      likes: 12,
      dislikes: 23,
      date: "ffss"
    },
    // Add more fake news data here...
  ];


  return (
    <div>
      <HomeSearchBar onSearch={handleSearch} />
      <HomeFilterButton />
      <HomeBanner />
      <HomeAIsList ais={fakeAIs} />
      <HomeBannerBestAI />
      <HomeNewsList news={fakeNews} />
      <HomeNewsLetter />
    </div>
  );
};

export default HomePage;
