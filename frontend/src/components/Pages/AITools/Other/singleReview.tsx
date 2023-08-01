import React from 'react'; 
import { TypeSingleReview } from "../types";

type Props = {
    eachReview: TypeSingleReview
};

const SingleReview = ({ eachReview }: Props) => {
  return (
    <div>
      <ul>
        <li>App: {eachReview.app_id}</li>
        <li>Reviewer: {eachReview.reviewer}</li>
        <li>Star: {eachReview.star}</li>
        <li>Content: {eachReview.content}</li>
        <li>Time Review: {eachReview.time_review}</li>
        <li>Likes: {eachReview.like}</li>
        <li>Dislikes: {eachReview.dislike}</li>
      </ul>
    </div>
  );
};

export default SingleReview;
