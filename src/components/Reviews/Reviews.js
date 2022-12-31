import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getMovieReviews } from 'servises/movieApi';
import { ParagraphRev, TitleReviews } from './Reviews.styled';

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
        <p>We don't have any reviews for this movie</p>
      )}
      <ul>
        {movieReviews.map(review => (
          <li key={review.id}>
            <TitleReviews>Author: {review.author}</TitleReviews>
            <ParagraphRev> {review.content} </ParagraphRev>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
