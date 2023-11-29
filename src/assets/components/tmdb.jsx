import axios from 'axios';

const API_KEY = '64a13163b01819fef8108ffad0531eb1';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async () => {
    const [Data, setData] = useState([])
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
    setData(response.data.results)
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
};

export { fetchMovies, fetchMovieDetails };
