import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getMovieReviews } from 'servises/movieApi';

import { ReviewsTitle, ReviewsText } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const movieReviews = await getMovieReviews(movieId);

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
        <p>Sorry, no reviews were found for this movie.</p>
      )}
      <ul>
        {movieReviews.map(review => (
          <li key={review.id}>
            <ReviewsTitle>Author: {review.author}</ReviewsTitle>
            <ReviewsText> {review.content} </ReviewsText>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
