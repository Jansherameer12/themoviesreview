import React, { useState, useEffect } from 'react';
import close from '../close.png';
import menu from '../menu.png';
import logo from '../Themoviereview.svg';

const API_KEY = '64a13163b01819fef8108ffad0531eb1';

export const navLinks = [
 
  {
    id: "top-rated",
    title: "Top Rated",
    onClick: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
  {
    id: "now-playing",
    title: "Now Playing",
    onClick: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  },
  {
    id: "upcoming",
    title: "Upcoming ",
    onClick: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  },
  {
    id: "trending",
    title: "Trending",
    onClick: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
  },
  {
    id: "action",
    title: "Action",
    onClick: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US&page=1`,
  },
  {
    id: "horror",
    title: "Horror",
    onClick: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US&page=1`,
  },
  {
    id: "romance",
    title: "Romance",
    onClick: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US&page=1`,
  },
  {
    id: "science-fiction",
    title: "Science Fiction",
    onClick: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878&language=en-US&page=1`,
  },
];


const Navbar = ({ setMovieType, setCategory }) =>  {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (toggle && !e.target.closest('.navbar')) {
        setToggle(false);
      }
    };
  
    const handleScroll = () => {
      setToggle(false);
    };
  
    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggle]);

  const home = 'https://api.themoviedb.org/3/movie/popular?api_key=64a13163b01819fef8108ffad0531eb1&language=en-US&page=1';
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <a onClick={() => { setMovieType(home); setCategory("Home") }}><img className='cursor-pointer rounded-full w-[150px]' src={logo} alt="Logo" /></a>
      <ul className="list-none sm:flex hidden justify-end items-center  flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-gray-500" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => {
              setToggle(false);
              setMovieType(nav.onClick);
              setActive(nav.title);
              setToggle(!toggle);
              setCategory(nav.title)

            }}
          >
            <a>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none bg-white rounded-md p-4 flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins  font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-gray-500" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setMovieType(nav.onClick);
                  setActive(nav.title);
                  setCategory(nav.title)
                }}
              >
                <a>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
