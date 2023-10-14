import ReviewItem from 'components/ReviewItem/ReeviewItem';
import React from 'react';

const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <ReviewItem key={id} author={author} content={content} />
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
