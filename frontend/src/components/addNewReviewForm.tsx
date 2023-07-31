import React, { useState } from 'react';
import { StarRating, TypeNewReview } from "../types";
import { categoriesList } from '../utils/categoriesList';

type Props = {
  onSubmit: (newReview: TypeNewReview) => void;
};

const AddNewReviewForm = ({ onSubmit }: Props) => {
  const [appID, setAppID] = useState('');
  const [reviewer, setReviewer] = useState('');
  const [star, setStar] = useState(StarRating.ONE);
  const [content, setContent] = useState('');
  const [timeReview, setTimeReview] = useState('');
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newReview: TypeNewReview = {
      app_id: appID,
      reviewer,
      star,
      content,
      time_review: timeReview,
      like,
      dislike
    };

    onSubmit(newReview);
    // Clear the form fields after submission
    setAppID('');
    setReviewer('');
    setStar(StarRating.ONE);
    setContent('');
    setTimeReview('');
    setLike(0);
    setDislike(0);
  };

  return (
    <div>
      <h2>Add New Review</h2>
      <form onSubmit={handleSubmit}>
        <label>App ID:</label>
        <input
          type="text"
          value={appID}
          onChange={(e) => setAppID(e.target.value)}
        />

        <label>Reviewer:</label>
        <input
          type="text"
          value={reviewer}
          onChange={(e) => setReviewer(e.target.value)}
        />

        <label>Star Rating:</label>
        <select
          value={star}
          onChange={(e) => setStar(Number(e.target.value) as StarRating)}
        >
          {Object.values(StarRating).map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>

        <label>Review Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label>Time of Review:</label>
        <input
          type="datetime-local"
          value={timeReview}
          onChange={(e) => setTimeReview(e.target.value)}
        />

        <button type="submit">Add Review</button>
      </form>
    </div>
  );
};

export default AddNewReviewForm;

