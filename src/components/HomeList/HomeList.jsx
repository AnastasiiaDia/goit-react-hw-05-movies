import HomeItem from 'components/HomeItem/HomeItem';
import { Ul } from './HomeList.styled';

const HomeList = ({ movies }) => {
  return (
    <Ul>
      {movies.map(({ id, title, poster_path }) => (
        <HomeItem key={id} title={title} poster_path={poster_path} id={id} />
      ))}
    </Ul>
  );
};
export default HomeList;
