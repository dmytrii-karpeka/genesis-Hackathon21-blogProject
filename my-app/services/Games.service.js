import AxiosAdapter from '../adapters/Axios.adapter';

export const getGamesList = async () => {
  try {
      const resp = await AxiosAdapter.get('/games');

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
