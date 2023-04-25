import axios from 'axios';

const movieDb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'c2fdeb24edd254ed1f8d8a5997f683ea',
        language: 'es-ES',
    },
});

export default movieDb;
