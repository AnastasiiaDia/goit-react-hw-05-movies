import HomeItem from 'components/HomeItem/HomeItem';
import { Ul } from './HomeList.styled';

const HomeList = ({ movies }) => {
  return (
    <Ul>
      {movies.map(({ id, title, poster_path, name }) => (
        <HomeItem
          key={id}
          title={name ?? title}
          poster_path={poster_path}
          id={id}
        />
      ))}
    </Ul>
  );
};
export default HomeList;
