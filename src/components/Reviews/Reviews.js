import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getMovieReviews } from 'servises/movieApi';

import { ReviewsTitle, ReviewsText } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const movieReviews = await getMovieReviews(movieId);

        setReviews(movieReviews);
      } catch (error) {
        toast(error.message);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      {reviews.length === 0 && (
        <p>Sorry, no reviews were found for this movie.</p>
      )}
      <ul>
        {reviews.map(review => (
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
