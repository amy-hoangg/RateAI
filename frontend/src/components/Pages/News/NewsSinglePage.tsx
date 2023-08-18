import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TypeSingleNew } from '../../../types';
import newsService from '../../../service/newsService';

type Params = {
  id: string;
};

const NewsSinglePage = () => {
    const { id } = useParams<Params>();
    const [aiDetails, setNewDetails] = useState<TypeSingleNew | null>(null);
  
    useEffect(() => {
      const fetchNewDetails = async () => {
        if (id) {
          try {
            const aiData = await newsService.getOneNew(id);

            setNewDetails(aiData);
          } 
          catch (error) {
            console.error('Error fetching New details:', error);
          }
        }
      };
  
      fetchNewDetails();
    }, [id]);
  
    if (!aiDetails) {
      return <div>Loading...</div>;
    }

  return (
    <div>
      <h2>{aiDetails.new_title}</h2>
      <p>{aiDetails.new_content}</p>
      <p>Likes: {aiDetails.new_likes}</p>
      <p>Dislikes: {aiDetails.new_dislikes}</p>
      <p>Date: {new Date(aiDetails.new_date).toLocaleDateString()}</p>

      <button>like</button>
      <button>dislike</button>
      
    </div>
  );
};

export default NewsSinglePage;