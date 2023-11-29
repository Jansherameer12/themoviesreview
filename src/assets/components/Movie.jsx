import React, { useEffect, useState } from 'react';

function Movie() {
  const [data, setData] = useState([]);
  const url = 'https://api.themoviedb.org/3';
  const API_KEY = '64a13163b01819fef8108ffad0531eb1';
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const VIDEO_BASE_URL = 'https://video.tmdb.org/t/p/w500';

  const fetchData = async () => {
    try {
      const response = await fetch(`${url}/movie/popular?api_key=${API_KEY}`);
      const jsonData = await response.json();
      setData(jsonData.results); // Assuming 'results' is the array of movies in the response
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('Data:', data);

  return (
    <>
      <div>
        {data.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Released Date: {movie.release_date}</p>
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              style={{ maxWidth: '200px' }} // Adjust the styling as needed
            />
            <img
              src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
              alt={movie.title}
              style={{ maxWidth: '200px' }} // Adjust the styling as needed
            />
            <video src={`${VIDEO_BASE_URL}${movie.video}`}></video>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movie;
