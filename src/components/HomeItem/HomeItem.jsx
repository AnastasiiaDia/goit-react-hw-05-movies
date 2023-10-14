import { Link } from 'react-router-dom';

const HomeItem = ({ id, title, poster_path }) => {
  return (
    <li key={id}>
      <Link to={`/movies/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
        />
        <h3>{title}</h3>
      </Link>
    </li>
  );
};
export default HomeItem;
