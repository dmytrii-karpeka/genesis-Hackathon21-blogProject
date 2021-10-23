import AxiosAdapter from '../adapters/Axios.adapter';

export const getGamesList = async (params) => {
  try {
      const resp = await AxiosAdapter.get('/games', { params });

      return [null, resp.data];
  } catch (err) {
      console.log('err', err);
      return [
        {
            type: 'FAILED_ITEMS_FETCH',
            message: err.response?.data.error,
        },
        null,
    ];
  }
};
