import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'

const apiKey="5f14ce766eee6173f7596d1c0b95564f"
const url="https://api.themoviedb.org/3"
const imgURl="https://image.tmdb.org/t/p/original"
const upcoming = "upcoming"
const Card = ({img}) => (
        <img className='card' src = {img} alt = "cover" /> 
)

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

    useEffect(() => {

        const fetchUpcoming = async () => {
            const {data:{results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
            setUpcomingMovies(results)
            console.log(upcomingMovies)
        };
        fetchUpcoming()
    },[])

  return(
    <section className = "home">    
        <div className = "banner"></div>

        <Row title={"Upcoming Movies"} arr={upcomingMovies}/>
        <Row title={"Popular on Netflix"}/>
        <Row title={"Tv Shows"}/>
        <Row title={"Movies"}/>
        <Row title={"Recently Added"}/>
        <Row title={"My Lists"}/>
    </section>
  )
}

export default Home