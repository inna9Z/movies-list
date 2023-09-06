import data from '../src/data.js';
const getMovies = async () => {
    try {
        const res = await fetch(data.baseUrl);
        if (!res.ok) {
            throw new Error(`An error occurred while fetching: ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        console.error(err);
    }
};

export default getMovies;
