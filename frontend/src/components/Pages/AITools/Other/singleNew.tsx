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
          <Link to={`/ais/${eachNew.id}`}>
            {eachNew.title}
          </Link>
        </li>

        <li>Title: {eachNew.title}</li>
        <li>Content: {eachNew.content}</li>
        <li>Likes: {eachNew.likes}</li>
        <li>Dislikes: {eachNew.dislikes}</li>
        <li>Date: {eachNew.date}</li>
      </ul>
    </div>
  );
};

export default SingleNew;

