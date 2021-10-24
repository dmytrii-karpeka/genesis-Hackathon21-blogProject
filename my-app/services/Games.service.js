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

export const getGamesDetails = async (id) => {
  try {
      const resp = await AxiosAdapter.get('/game', { params: { id } });

      return [null, resp.data];
  } catch (err) {
      console.log('err', err);
      return [
        {
            type: 'FAILED_GAME_DETAILS_FETCH',
            message: err.response?.data.error,
        },
        null,
    ];
  }
};
