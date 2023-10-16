import React from 'react';
import { Link } from 'react-router-dom';

const NoFound = () => {
  return (
    <div>
      <h2>
        Oops...Something went wrong. Go back to <Link to="/">Home page</Link>{' '}
        and try again.
      </h2>
    </div>
  );
};

export default NoFound;
