import { useParams } from 'react-router-dom';
const MovieDetails = () => {
  const { movieid } = useParams();
  const movieDetails = getMovieById(movieid);
  return (
    <main>
      <img src={movieid.poster_path} alt="" />
      <div>
        <h2>
           {movieid.title}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
};
export default MovieDetails;
