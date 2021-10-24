import * as axios from 'axios';

const AxiosAdapter = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/',
  headers: {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': '63718b35f4msh0e912daa7ae9f20p17f914jsn454c4d8b1880',
  }
});

export default AxiosAdapter;
