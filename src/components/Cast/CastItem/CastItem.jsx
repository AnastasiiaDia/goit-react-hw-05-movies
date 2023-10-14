import React from 'react';

const CastItem = ({ profile_path, name, character }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w200';
  return (
    <div>
      {profile_path ? (
        <img src={`${BASE_IMG}${profile_path}`} alt={character} />
      ) : (
        <img src="https://via.placeholder.com/150" alt={character} />
      )}
      <h2>{name}</h2>
      <p>{character}</p>
    </div>
  );
};

export default CastItem;
