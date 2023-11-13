import React from 'react'

const Task = ({title,description}) => {
    return (
        <div className="task">
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <button>-</button>
        </div>
    )
}

export default Task