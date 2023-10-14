import React from 'react';

const ReviewItem = ({ author, content }) => {
  return (
    <li>
      <p>Author: {author}</p>
      <p>Content: {content}</p>
    </li>
  );
};

export default ReviewItem;
