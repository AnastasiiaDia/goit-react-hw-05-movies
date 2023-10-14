import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsCastMovie } from 'services/api';
import CastList from './CastList/CastList';

const Cast = () => {
  const [cast, setCast] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async id => {
      try {
        const { cast } = await getCreditsCastMovie(id);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
        setError(true);
        setLoading(false);
      } finally {
        setLoading(true);
      }
    };
    fetchData(movieId);
  }, [movieId]);
  return (
    <section>
      <div>
        {loading && <CastList cast={cast} />}
        {error && <h1>Error</h1>}
      </div>
    </section>
  );
};

export default Cast;
