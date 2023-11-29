import React, { useState, useEffect } from 'react';

const MovieList = (props) => {
  const defaultMovieType = props.movieType;
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Resul, setResul] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${props.movieType}`);
        const jsonData = await response.json();
        const results = jsonData.results || [];
        setResul(results.filter(content => content.media_type === 'movie'))
        setData(results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [defaultMovieType]);

  if (loading) {
    return <div className='h-screen w-full  text-white flex justify-center items-center text-2xl '>
      <div className="border-t-4 border-r-4 border-blue-500 rounded-full animate-spin h-24 w-24"></div>
    </div>;
  }

  return (
   <div >
    <h1 className='py-4 font-semibold underline'>{props.category}</h1>
     <div className="flex flex-wrap -mx-4">
    {data.map((movie) => (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8" key={movie.id}>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-center">{movie.title}</h3>
          <p className="text-gray-600 mb-2 text-center">Released Date: {movie.release_date}</p>
          {Resul.length === 0 ? (
  <span>No reviews</span>
) : (
  <span>Reviews: {Resul}</span>
)}
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto mb-4 rounded-lg"
          />
          <p className="text-gray-700 mb-4">{movie.overview}</p>
          {/* <div className="flex justify-center"><span className=' border-2 text-center p-2'>Popularity: {movie.popularity}</span>
</div> */}
                  </div>
      </div>
    ))}
  </div>
   </div>
  
  );
}

export default MovieList;
