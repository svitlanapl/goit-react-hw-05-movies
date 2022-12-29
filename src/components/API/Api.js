import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY = '3413619603c71871ad15e482a73e3df2';

export const getMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
    if (response.data.results.length === 0) {
      throw Error('Please, try againe!');
    }
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error.config);
    if (error.response) {
      throw Error('Ooops. Something went wrong... Try  again!');
    } else if (error.request) {
      throw Error('Ooops. Something went wrong... Try  again!');
    } else {
      throw error;
    }
  }
};

export const getMovieById = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${KEY}&language=en-US`
    );
    if (response.data.length === 0) {
      throw Error('No movies found!');
    }
    // console.log(response.data);

    return response.data;
  } catch (error) {
    if (error.response) {
      throw Error('Ooops. Something went wrong... Try  again!');
    } else if (error.request) {
      throw Error('Ooops. Something went wrong... Try  again!');
    } else {
      throw error;
    }
  }
};

export const getCast = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );
    if (!response.data.cast.length) {
      throw Error('No casts found!');
    }
    // console.log(response.data.cast);

    return response.data.cast;
  } catch (error) {
    if (error.response) {
      throw Error('Ooops. Something went wrong... Try  again!');
    } else if (error.request) {
      throw Error('Ooops. Something went wrong... Try  again!');
    } else {
      throw error;
    }
  }
};

export const getReviews = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
    );
    if (!response.data.results.length) {
      throw Error('No reviews found!');
    }
    // console.log(response.data.results);

    return response.data.results;
  } catch (error) {
    if (error.response) {
      throw Error('Ooops. Something went wrong... Try  again!');
    } else if (error.request) {
      throw Error('Ooops. Something went wrong... Try  again!');
    } else {
      throw error;
    }
  }
};

export const searchMovies = async searchQuery => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`
    );
    if (!response.data.results.length) {
      throw Error('No movies found!!');
    }

    return response.data.results;
  } catch (error) {
    if (error.response) {
      throw Error('Ooops. Something went wrong... Try  again!');
    } else if (error.request) {
      throw Error('Ooops. Something went wrong... Try  again!');
    } else {
      throw error;
    }
  }
};
