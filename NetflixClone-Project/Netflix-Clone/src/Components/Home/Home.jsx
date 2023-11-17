import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"

const apiKey="5f14ce766eee6173f7596d1c0b95564f"
const url="https://api.themoviedb.org/3"
const imgURl="https://image.tmdb.org/t/p/original"
const upcoming = "upcoming"
const popular = "popular"
const topRated = "top_rated"
const nowPlaying = "now_playing"


const Card = ({img}) => ( <img className='card' src = {img} alt = "cover" /> )


const Row = ({title, arr=[{

}] }) => (

    <div className = "row">

        <h2>{title}</h2>

        <div>
            {

            arr.map((item,index) => (
                <Card key={index} img = {`${imgURl}/${item.poster_path}`} />
            ))
            }
        </div>

    </div>
)

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  
    return (
      <div className='pagination-buttons'>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={pageNumber === currentPage ? 'active' : ''}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };
  
  const Home = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [genre, setGenre] = useState([]);
    const [upcomingPage, setUpcomingPage] = useState(1);
    const [nowPlayingPage, setNowPlayingPage] = useState(1);
    const [popularPage, setPopularPage] = useState(1);
    const [topRatedPage, setTopRatedPage] = useState(1);
  
    const fetchMovies = async (category, setPageFunction, page = 1) => {
      try {
        const { data } = await axios.get(
          `${url}/movie/${category}?api_key=${apiKey}&page=${page}`
        );
        setPageFunction(data.results);
      } catch (error) {
        console.error(`Error fetching ${category} data:`, error);
      }
    };
  
    useEffect(() => {
        const fetchAllData = async () => {
        await fetchGenre();
        console.log('Genre:', genre);
        await fetchUpcoming(upcomingPage);
        await fetchNowPlaying(nowPlayingPage);
        await fetchPopular(popularPage);
        await fetchTopRated(topRatedPage);
      };
  
      fetchAllData();
    }, [upcomingPage, nowPlayingPage, popularPage, topRatedPage]);
  
    const fetchUpcoming = async (page) => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}&page=${page}`);
      setUpcomingMovies(results);
    };
  
    const fetchNowPlaying = async (page) => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}&page=${page}`);
      setNowPlayingMovies(results);
    };
  
    const fetchPopular = async (page) => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}&page=${page}`);
      setPopularMovies(results);
    };
  
    const fetchTopRated = async (page) => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}&page=${page}`);
      setTopRatedMovies(results);
    };
  
    const fetchGenre = async () => {
        const {
            data: { genres },
        } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
        setGenre(genres);
        console.log(genres);
    };
    
    
      
  
    const handlePageChange = (category, newPage) => {
      switch (category) {
        case 'upcoming':
          setUpcomingPage(newPage);
          break;
        case 'now_playing':
          setNowPlayingPage(newPage);
          break;
        case 'popular':
          setPopularPage(newPage);
          break;
        case 'top_rated':
          setTopRatedPage(newPage);
          break;
        default:
          break;
      }
    };
  
    return (
      <section className='home'>
        <div
          className='banner'
          style={{
            backgroundImage: popularMovies[0]
              ? `url(${`${imgURl}/${popularMovies[0].poster_path}`})`
              : 'rgb(16, 16, 16)',
          }}
        >
          {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
          {popularMovies[0] && <p>{popularMovies[0].overview}</p>}
  
          <div>
            <button>
              <BiPlay /> Play{' '}
            </button>
            <button>
              My List <AiOutlinePlus />{' '}
            </button>
          </div>
        </div>
  
        {/* Dynamically generate Row components and Pagination buttons */}
        {[
          { title: 'Upcoming', movies: upcomingMovies, page: upcomingPage },
          { title: 'Now Playing', movies: nowPlayingMovies, page: nowPlayingPage },
          { title: 'Popular', movies: popularMovies, page: popularPage },
          { title: 'Top Rated', movies: topRatedMovies, page: topRatedPage },
        ].map(({ title, movies, page }) => (
          <React.Fragment key={title}>
            <Row title={title} arr={movies} />
            <Pagination
              totalPages={10} // Replace with the actual total number of pages
              currentPage={page}
              onPageChange={(newPage) => handlePageChange(title.toLowerCase().replace(' ', '_'), newPage)}
            />
          </React.Fragment>
        ))}
  
  {genre && Array.isArray(genre) && genre.length > 0 && (
    <div className="genreBox">
        {genre.map((item) => (
            item && item.id && (
                <Link key={item.id} to={`/genre/${item.id}`}>
                    {item.name}
                </Link>
            )
        ))}
    </div>
)}


      </section>
    );
  };
  
  export default Home;