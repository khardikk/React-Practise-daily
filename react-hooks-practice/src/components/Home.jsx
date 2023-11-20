import React, {useState, useEffect} from 'react'

const Home = () => {
  
    // UseState is a hook that allows us to use state in a functional component
    const [count, setCount] = useState(0);

    //UseEffect is a hook that allows us to use lifecycle methods in a functional components
    useEffect(() => {
        console.log("useEffect is running");

        return () => {

            console.log("useEffect cleanup");
            console.log({count});
            
        }
    } , [count])

    return (
    <div>
        <button onClick={()=>{
            setCount(count+1)
        }}>Add</button>
        <button onClick={()=>{
            setCount(count-1)
        }}>Subtract</button>

        <h1>{count}</h1>
    </div>
  )
}

export default Home