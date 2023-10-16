import { Container } from 'components/App.styled';
import ReviewItem from 'components/ReviewItem/ReeviewItem';
import React from 'react';

const ReviewsList = ({ reviews }) => {
  return (
    <Container>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <ReviewItem key={id} author={author} content={content} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ReviewsList;
