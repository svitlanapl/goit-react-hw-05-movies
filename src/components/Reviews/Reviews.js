import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getReviews } from '../API/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const movieReviews = await getReviews(movieId);

        setMovieReviews(movieReviews);
      } catch (error) {
        toast(error.message);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  if (!movieReviews) {
    return;
  }

  return (
    <div>
      {movieReviews.length === 0 && (
        <p>We don't have any reviews for this movie</p>
      )}
      <ul>
        {movieReviews.map(review => (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p> {review.content} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
