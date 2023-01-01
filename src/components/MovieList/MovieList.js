import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import { List, Item,} from './MovieList.styled';

export const MovieCard = ({ movies }) => {
  const location = useLocation();
  
  return (
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </Item>
        ))}
      </List>
  );
};

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

