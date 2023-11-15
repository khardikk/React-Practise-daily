import React from 'react'
import {useParams, useNavigate} from 'react-router-dom' 


const User = () => {

  const params = useParams()
  const navigate = useNavigate()

  console.log(params) 

  return (
    <div className='user'>
    <button onClick={()=> navigate("/about")}> CLICK ME</button>
    </div>
  )
}

export default User