//* Admin Tasks -> Task.js + Edit button

//* Imports
import React from 'react'
import Task from './Task'


//edit button calls modal with TaskForm

//code to open modal

const AdminTask  = (props) => {
    const {task, edit} = props
    return (
        <div>
            <Task task={task} key={task.id} />
            <button className='btnEditTask' onClick={edit} data-record={task.id}>Edit</button>
        </div>
    )
}
export default AdminTask;