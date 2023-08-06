import React from 'react'; 
import { TypeSingleReview } from '../../../../types';

type Props = {
    eachReview: TypeSingleReview
};

const SingleReview = ({ eachReview }: Props) => {
  return (
    <div>
      <ul>
        <li>App: {eachReview.review_ai_id}</li>
        <li>Reviewer: {eachReview.review_reviewer_id}</li>
        <li>Star: {eachReview.review_star}</li>
        <li>Content: {eachReview.review_content}</li>
        <li>Time Review: {eachReview.review_time.toLocaleString()}</li>
        <li>Likes: {eachReview.review_like}</li>
        <li>Dislikes: {eachReview.review_dislike}</li>
      </ul>
    </div>
  );
};

export default SingleReview;
