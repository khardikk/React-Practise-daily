import React,{useState} from 'react'

const Home = () => {
  
    // UseState is a hook that allows us to use state in a functional component
    const [count, setCount] = useState(0);

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