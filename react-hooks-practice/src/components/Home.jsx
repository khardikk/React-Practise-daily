import React, {useContext, useRef, useEffect} from 'react'
import {custom} from '../main.jsx'


const Row = () => {

    const data = useContext(custom);

    const customRef = useRef(null);
    
    useEffect(() => {
    console.log(customRef.current);
    }, [customRef]);

    return (
        <div ref={customRef}>
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