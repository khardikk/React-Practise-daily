import React, { useState } from 'react'
import Task from './Task'


const Home = () => {

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
     
        setTasks([...tasks, { title, description }]);
    }


  return (
    <div className="container">
        <h1>ToDo List</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter your task here" value={title} onChange={(e) =>setTitle(e.target.value)} />
            <textarea placeholder="Enter your description here" value={description} onChange={(e) =>setDescription(e.target.value)} />

            <button type="submit">ADD</button>

        </form>
    {tasks.map((item,index) => (
        <Task key={index} title={item.title} description={item.description}/>
    ))}
    </div>
  );
};

export default Home