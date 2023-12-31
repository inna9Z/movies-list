import dom from '../dom.js';
import addMovie from '../../apis/addMovies.js';
import updateMovie from '../../apis/updateMovies.js';
import createMovie from '../components/createMovie.js';

const addMovieHandler = async (e) => {
    e.preventDefault();

    const newMovie = {
        title: dom.titleInput.value,
        src: dom.sourceInput.value
    };

    if (dom.btn.innerText === 'Add movie') {
        const movieDom = createMovie(newMovie);
        dom.movies.prepend(movieDom);
        const movieAdd = await addMovie(newMovie);
    } else {
        const movieDom = document.querySelector('.selected');
        movieDom.querySelector('img').src = newMovie.src;
        movieDom.querySelector('img').alt = newMovie.title;
        movieDom.querySelector('h6').innerText = newMovie.title;
        const id = Number(movieDom.id);
        await updateMovie(id, newMovie);
        movieDom.classList.remove('selected');
        dom.btn.innerText = 'Add Movie';
    }

    dom.titleInput.value = '';
    dom.sourceInput.value = '';
};

export default addMovieHandler;
