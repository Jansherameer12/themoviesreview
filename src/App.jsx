import React, { useState } from 'react';
import NavBar from './assets/components/navbar';
import MovieList from './assets/components/MovieList';
import Footer from './assets/components/footer';

const App = () => {
  const [Category, setCategory] = useState("Home")
  const [movieType, setMovieType] = useState('https://api.themoviedb.org/3/movie/popular?api_key=64a13163b01819fef8108ffad0531eb1&language=en-US&page=1');
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
        <NavBar setCategory={setCategory} setMovieType={setMovieType} />
        <MovieList category={Category} movieType={movieType} />
        <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
