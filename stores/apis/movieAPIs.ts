import defaultAxios from 'axios';

const axios = defaultAxios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getMovies = async () => {
  const data = await axios.get('https://www.omdbapi.com?apikey=faf7e5bb', {
    params: {
      s: '2021',
      page: 1,
      type: 'movie',
      plot: 'full',
    },
  });

  return data;
};

export default {
  getMovies,
};
