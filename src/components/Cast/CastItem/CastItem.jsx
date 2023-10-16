import React from 'react';
import { CastImetStyled } from './CastItem.styled';

const CastItem = ({ profile_path, name, character }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w200';
  return (
    <CastImetStyled>
      {profile_path ? (
        <img src={`${BASE_IMG}${profile_path}`} alt={character} />
      ) : (
        <img src="https://via.placeholder.com/200" alt={character} />
      )}
      <h2>{name}</h2>
      <span>{character}</span>
    </CastImetStyled>
  );
};

export default CastItem;
