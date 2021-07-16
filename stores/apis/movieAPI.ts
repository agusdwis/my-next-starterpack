import createApi from '@/libs/apis';

export const getMovies = async (payload: any) => {
  const api = await createApi();

  const response = await api.get('', {
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
