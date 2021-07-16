import defaultAxios from 'axios';

const axios = defaultAxios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getMovies = async (payload: any) => {
  const response = await axios.get('https://www.omdbapi.com?apikey=faf7e5bb', {
    params: {
      s: payload.search,
      page: payload.page,
      type: 'movie',
      plot: 'full',
    },
  });

  return response.data;
};

export default {
  getMovies,
};
