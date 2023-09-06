import createMovie from '../components/createMovie.js';
import getMovies from '../../apis/getMovies.js';

import dom from '../dom.js';
const loadHandler = async () => {
    const movies = await getMovies();
    if (movies) {
        movies.forEach((movieData) => {
            const movieDom = createMovie(movieData);
            dom.movies.append(movieDom);
        });
    }
};

export default loadHandler;
