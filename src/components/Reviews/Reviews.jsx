import ReviewsList from 'components/ReviewsList/ReviewsList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async id => {
      try {
        const { results } = await getReviews(id);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      } finally {
        setLoading(true);
      }
    };
    fetchData(movieId);
  }, [movieId]);
  return (
    <>
      {loading && (
        <section>
          <div>
            {reviews.length === 0 ? (
              <h3>No reviews</h3>
            ) : (
              <ReviewsList reviews={reviews} />
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Reviews;
