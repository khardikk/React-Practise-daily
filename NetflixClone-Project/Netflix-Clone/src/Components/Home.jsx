import React from 'react'
import "./Home.scss"

const Card = ({img}) => (
        <img className='card' src = {img} alt = "cover" /> 
)

const Row = ({title, arr=[{
     img: "https://lumiere-a.akamaihd.net/v1/images/image_174b2bb6.jpeg?region=0%2C0%2C1400%2C2100"
}] }) => (

    <div className = "row">

        <h2>{title}</h2>

        <div>
            {

            arr.map((item) => (
                <Card img = {item.img} />
            ))
            }
        </div>

    </div>
)

const Home = () => {
  return(
    <section className = "home">    
        <div className = "banner"></div>

        <Row title={"Popular on Netflix"}/>
        <Row title={"Tv Shows"}/>
        <Row title={"Movies"}/>
        <Row title={"Recently Added"}/>
        <Row title={"My Lists"}/>
    </section>
  )
}

export default Home