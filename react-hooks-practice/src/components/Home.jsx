import React, {useContext} from 'react'
import {custom} from '../main.jsx'


const Row = () => {

    const data = useContext(custom);

    return (
        <div>
          {data}
        </div>
    )
}

const Home = ({data}) => {
  

    return (
    <div>
      <Row/>
    </div>
  )
}

export default Home