import deleteMovieHandler from '../handlers/deleteMovieHandler.js';
import dom from '../dom.js';

const createMovie = (movieData) => {
    const id = movieData.id;
    const container = document.createElement('div');
    container.classList.add('image-box');
    container.id = movieData.id;

    const img = document.createElement('img');
  
    img.src = movieData.src;
    img.alt = movieData.title;

    const title = document.createElement('h6');
    title.innerText = movieData.title;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'deleteBtn';
    deleteButton.innerText = 'Delete';

    deleteButton.addEventListener('click', () => {
        deleteMovieHandler(id);
    });

    const editBtn = document.createElement('button');
    editBtn.className = 'editBtn';

    editBtn.innerText = 'Edit';

    editBtn.addEventListener('click', () => {
        dom.btn.innerText = 'Edit Movie';
        container.classList.add('selected');
        dom.titleInput.value = movieData.title;
        dom.sourceInput.value = movieData.src;
    });

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    btnContainer.append(deleteButton, editBtn);

    container.append(img, title, btnContainer);

    return container;
};

export default createMovie;
