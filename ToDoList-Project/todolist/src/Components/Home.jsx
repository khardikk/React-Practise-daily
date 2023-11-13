import React from 'react'

const Home = () => {
  return (
    <div className="container">
        <h1>ToDo List</h1>
        <form>
            <input type="text" placeholder="Enter your task here" />
            <textarea placeholder="Enter your description here" />

            <button type="submit">ADD</button>

        </form>
    </div>
  )
}

export default Home