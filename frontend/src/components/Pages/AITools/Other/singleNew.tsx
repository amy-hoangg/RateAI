import React from 'react'; 
import { TypeSingleNew } from '../../../../types'; 
import { Link } from "react-router-dom";


type Props = {
    eachNew: TypeSingleNew
};

const SingleNew = ({ eachNew }: Props) => {
  return (
    <div>
      <ul>
      <li>
          Name: 
          <Link to={`/news/${eachNew._id}`}>
            {eachNew.new_title}
          </Link>
        </li>

        <li>Title: {eachNew.new_title}</li>
        <li>Content: {eachNew.new_content}</li>
        <li>Likes: {eachNew.new_likes}</li>
        <li>Dislikes: {eachNew.new_dislikes}</li>
        <li>Date: {eachNew.new_date.toLocaleString()}</li>
      </ul>
    </div>
  );
};

export default SingleNew;