import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    console.log(data)
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/khardikk')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img className='flex flex-1 justify-center align-s' src={data.avatar_url} alt="Git picture" width={300} />
    <h1>Name : {data.name}</h1>
    <ul>
        <li>Company : {data.company}</li>
        <li>Location : {data.location}</li>
        <li>Public Repos : {data.public_repos}</li>
        <li>Followers : {data.followers}</li>
        <li>Following : {data.following}</li>
    </ul>


    
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/khardikk')
    return response.json()
}