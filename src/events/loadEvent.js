import loadHandler from '../handlers/loadHandler.js';

const loadListener = () => {
    window.addEventListener('load', (e) => {
        loadHandler(e);
    });
};

export default loadListener;
