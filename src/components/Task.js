import React from 'react'

const Task = (props) => {
    const {task} = props
    return (
        <div id={task.id}>
            <span>{task.name}: </span>
            <span>{task.description}</span>
        </div>
    )
}
export default Task;

