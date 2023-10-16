import { Link } from 'react-router-dom';
import { HomeItemStyled } from './HomeItem.styled';

const HomeItem = ({ id, title, poster_path }) => {
  return (
    <HomeItemStyled>
      <Link to={`/movies/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
        />
        <h3 className="titles">{title}</h3>
      </Link>
    </HomeItemStyled>
  );
};
export default HomeItem;
