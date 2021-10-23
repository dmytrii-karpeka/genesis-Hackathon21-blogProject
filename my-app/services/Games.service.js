import AxiosAdapter from '../adapters/Axios.adapter';

export const getGamesList = async () => {
  try {
      const resp = await AxiosAdapter.get('/');
      console.log('resp', resp);
      // return [null, resp.data];
  } catch (err) {
      console.log('err', err);
  }
};