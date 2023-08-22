import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TypeSingleNew, TypeUser } from '../../../types';
import newsService from '../../../service/newsService';
import usersService from '../../../service/usersService';

type Params = {
  id: string;
};

const NewsSinglePage = () => {
  const { id } = useParams<Params>();
  const [newsDetails, setNewDetails] = useState<TypeSingleNew | null>(null);
  const [user, setUser] = useState<TypeUser | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  useEffect(() => {
    const checkIfLikeOrDisliked = async () => {
      const userId = localStorage.getItem('userId');

      if (userId && newsDetails) {
        try {
          const user = await usersService.getOneUser(userId);
          if (user && user.user_likes_new_id) {
            const isLikedNew = user.user_likes_new_id.some(
              (likedNew) => likedNew._id === newsDetails._id
            );
            setIsLiked(isLikedNew);
          }

          if (user && user.user_dislikes_new_id) {
            const isDislikedNew = user.user_dislikes_new_id.some(
              (dislikedNew) => dislikedNew._id === newsDetails._id
            );
            setIsDisliked(isDislikedNew);
          }

        } catch (error) {
          console.error('Error checking if AI is saved:', error);
        }
      }
    };

    checkIfLikeOrDisliked();
  }, [newsDetails]);

  useEffect(() => {
    const fetchNewDetails = async () => {
      if (id) {
        try {
          const aiData = await newsService.getOneNew(id);
          setNewDetails(aiData);
        } catch (error) {
          console.error('Error fetching New details:', error);
        }
      }
    };
    fetchNewDetails();
  }, [id]);

  if (!newsDetails) {
    return <div>Loading...</div>;
  }

  const handleLike = async () => {
    if (!user || !newsDetails) {
      return;
    }

    if (isLiked) {
      setIsLiked(false);
      await newsService.removeLikeNews(newsDetails._id);
    } 
    else if (isDisliked) {
      setIsLiked(true);
      setIsDisliked(false);
      await newsService.likeNews(newsDetails._id);
      await newsService.removeDislikeNews(newsDetails._id)
    } 
    else {
      setIsLiked(true);
      await newsService.likeNews(newsDetails._id);
    }
  };
  
  const handleDislike = async () => {
    if (!user || !newsDetails) {
      return;
    }

    if (isLiked) {
      setIsLiked(false);
      setIsDisliked(true);
      await newsService.removeLikeNews(newsDetails._id);
      await newsService.dislikeNews(newsDetails._id);
    } 
    else if (isDisliked) {
      setIsDisliked(false);
      await newsService.removeDislikeNews(newsDetails._id);
    } 
    else {
      setIsDisliked(true);
      await newsService.dislikeNews(newsDetails._id);
    }
  };

  return (
    <div>
      <h2>{newsDetails.new_title}</h2>
      <p>{newsDetails.new_content}</p>
      <p>Likes: {newsDetails.new_likes}</p>
      <p>Dislikes: {newsDetails.new_dislikes}</p>
      <p>Date: {new Date(newsDetails.new_date).toLocaleDateString()}</p>

      <button onClick={handleLike}>{isLiked ? 'Unlike' : 'Like'}</button>
      <button onClick={handleDislike}>{isDisliked ? 'Undislike' : 'Dislike'}</button>
    </div>
  );
};

export default NewsSinglePage;
