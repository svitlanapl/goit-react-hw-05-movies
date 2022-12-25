import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY = '3413619603c71871ad15e482a73e3df2';

export const getMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
    if (response.data.results === 0) {
      throw Error('please, reload page!');
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
      throw Error('There is no server response. Try later again!');
    } else {
      console.log('Error', error.message);
      throw error;
    }
  }
};
