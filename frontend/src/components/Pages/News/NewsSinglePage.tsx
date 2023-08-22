import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TypeSingleNew } from '../../../types';
import newsService from '../../../service/newsService';
import usersService from '../../../service/usersService';
import { useAuth } from '../../../context/AuthContext';

type Params = {
  id: string;
};

const NewsSinglePage = () => {
  const { isAuthenticated } = useAuth();
  const { id } = useParams<Params>();
  const [newsDetails, setNewsDetails] = useState<TypeSingleNew | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const [newsLiked, setNewsLiked] = useState<TypeSingleNew[]>([]);
  const [newsDisliked, setNewsDisliked] = useState<TypeSingleNew[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
    const fetchData = async () => {
      if (id) {
        try {
          const newsData = await newsService.getOneNew(id);
          setNewsDetails(newsData);

          const userId = localStorage.getItem('userId');
          if (userId) {
            try {
              const user = await usersService.getOneUser(userId);
              if (user.user_likes_new_id) {
                setNewsLiked(user.user_likes_new_id);
              }
              
              if (user.user_dislikes_new_id) {
                setNewsDisliked(user.user_dislikes_new_id);
              }

              if (user && user.user_likes_new_id) {
                const isLikedNew = user.user_likes_new_id.some(
                  (likedNew) => likedNew._id === newsData._id
                );
                setIsLiked(isLikedNew);
              }

              if (user && user.user_dislikes_new_id) {
                const isDislikedNew = user.user_dislikes_new_id.some(
                  (dislikedNew) => dislikedNew._id === newsData._id
                );
                setIsDisliked(isDislikedNew);
              }
            } catch (error) {
              console.error('Error checking user likes and dislikes:', error);
            }
          }
        } catch (error) {
          console.error('Error fetching New details:', error);
        }
      }
    };

    fetchData();
  }
}, [isAuthenticated, id, newsLiked]);


  const handleLike = async () => {
    try {
      if (newsDetails && isLiked) {
          await newsService.removeLikeNews(newsDetails._id);
        } 
      else if (newsDetails && isDisliked) {
          await newsService.likeNews(newsDetails._id);
          await newsService.removeDislikeNews(newsDetails._id);
        }
      else if (newsDetails) {
        await newsService.likeNews(newsDetails._id);
      }
    } 
    catch (error) {
      console.error('Error handling like:', error);
    }
  };

  const handleDislike = async () => {
    try {
      if (newsDetails && isLiked) {
          await newsService.removeLikeNews(newsDetails._id);
          await newsService.dislikeNews(newsDetails._id);
        } 
      else if (newsDetails && isDisliked) {
          await newsService.removeDislikeNews(newsDetails._id);
        }
      else if (newsDetails) {
        await newsService.dislikeNews(newsDetails._id);
      }
    } catch (error) {
      console.error('Error handling dislike:', error);
    }
  };


  if (!newsDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{newsDetails.new_title}</h2>
      <p>{newsDetails.new_content}</p>
      <p>Likes: {newsDetails.new_likes}</p>
      <p>Dislikes: {newsDetails.new_dislikes}</p>
      <p>Date: {new Date(newsDetails.new_date).toLocaleDateString()}</p>

      <button onClick={handleLike}>
        {isLiked ? 'Unlike' : 'Like'}
      </button>
      <button onClick={handleDislike}>
        {isDisliked ? 'Undislike' : 'Dislike'}
      </button>
    </div>
  );
};

export default NewsSinglePage;
