import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'

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

const Home = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [genres, setGenres] = useState([])


    useEffect(() => {

        const fetchUpcoming = async () => {
            const {
                data:{results},
            } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
            setUpcomingMovies(results)
           
        };
       
        const fetchNowPlaying = async () => {
            const {
                data:{results},
            } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
            setNowPlayingMovies(results)
           
        };
        const fetchPopular = async () => {
            const {
                data:{results},
            } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
            setPopularMovies(results)
           
        };
        const fetchTopRated = async () => {
            const {
                data:{results},
            } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
            setTopRatedMovies(results)
           
        };
        const fetchGenres = async () => {
            const {
                data:{genres},
            } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
            setGenres(genres)
           
        };
        
        fetchUpcoming()
        fetchNowPlaying()
        fetchPopular()
        fetchTopRated()
        fetchGenres()
    }
    ,[]);

  return(
    <section className = "home">    
        <div className = "banner"></div>

        <Row title={"Upcoming"} arr={upcomingMovies}/>
        <Row title={"Now Playing"} arr={nowPlayingMovies}/>
        <Row title={"Popular"} arr={popularMovies}/>
        <Row title={"Top Rated"} arr={topRatedMovies}/>

    </section>
  )
}

export default Home