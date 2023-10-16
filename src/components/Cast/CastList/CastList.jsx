import React from 'react';
import CastItem from '../CastItem/CastItem';
import { CastListStyle } from './CastList.styled';

const CastList = ({ cast }) => {
  const set = new Set();
  return (
    <CastListStyle>
      {cast &&
        cast.map(({ id, name, profile_path, character }) => {
          if (!set.has(id)) {
            set.add(id);
            return (
              <CastItem
                key={id}
                name={name}
                profile_path={profile_path}
                character={character}
              />
            );
          } else {
            return null;
          }
        })}
    </CastListStyle>
  );
};

export default CastList;
