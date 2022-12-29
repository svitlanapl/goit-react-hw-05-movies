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
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      throw Error('There is no server response. Try later again!');
    } else if (error.request) {
      console.log(error.request);
      throw Error('There is no server request. Try later again!');
    } else {
      console.log('Error', error.message);
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
      throw Error('There is no any match on your request!');
    }
    // console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error.config);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      throw Error('There is no server response. Try later again!');
    } else if (error.request) {
      console.log(error.request);
      throw Error('There is no server request. Try later again!');
    } else {
      console.log('Error', error.message);
      throw error;
    }
  }
};

export const getCast = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );
    if (response.data.results.length === 0) {
      throw Error('There is no any match on your request!');
    }
    // console.log(response.data.cast);

    return response.data.cast;
  } catch (error) {
    console.log(error.config);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      throw Error('There is no server response. Try later again!');
    } else if (error.request) {
      console.log(error.request);
      throw Error('There is no server request. Try later again!');
    } else {
      console.log('Error', error.message);
      throw error;
    }
  }
};

export const getReviews = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
    );
    if (response.data.results.length === 0) {
      throw Error('There is no any match on your request!');
    }
    // console.log(response.data.results);

    return response.data.results;
  } catch (error) {
    console.log(error.config);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      throw Error('There is no server response. Try later again!');
    } else if (error.request) {
      console.log(error.request);
      throw Error('There is no server request. Try later again!');
    } else {
      console.log('Error', error.message);
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
      throw Error('There is no any match on your request!');
    }

    return response.data.results;
  } catch (error) {
    if (error.response) {
      throw Error('There is no server response. Try later again!');
    } else if (error.request) {
      throw Error('There is no server request. Try later again!');
    } else {
      throw error;
    }
  }
};
