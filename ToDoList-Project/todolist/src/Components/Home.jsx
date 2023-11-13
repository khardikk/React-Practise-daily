import React, { useEffect, useState } from 'react'
import Task from '../Components/Task';


const Home = () => {

    const initialState = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

    const [tasks, setTasks] = useState(initialState);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks, { title, description }]);
        setTitle("");
        setDescription("");
    }

    const deleteTask = (index) => {
        const filteredArr = tasks.filter((val, i) =>{ 
        return i !== index;
    });

    setTasks(filteredArr);

    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])
    



  return (
    <div className="container">
        <h1>ToDo List</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter your task here" value={title} onChange={(e) =>setTitle(e.target.value)} />
            <textarea placeholder="Enter your description here" value={description} onChange={(e) =>setDescription(e.target.value)} />

            <button type="submit">ADD</button>

        </form>
    {tasks.map((item,index) => (
        <Task key={index} title={item.title} description={item.description}
        deleteTask={deleteTask}
        index={index}
        />
    ))}
    </div>
  );
};

export default Home