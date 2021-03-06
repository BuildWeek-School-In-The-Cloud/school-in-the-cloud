//* Admin Tasks -> Task.js + Edit button

//* Imports
import React from 'react'
import Task from './Task'
import { useHistory } from 'react-router-dom';


//edit button calls modal with TaskForm

//code to open modal

const AdminTask  = (props) => {
    const {task, edit} = props
    const history = useHistory()


    const matchID = () => {
        history.push(`/admin/${task.id}`)
    }

    return (
        <div>
            <Task task={task} key={task.id} />
            <button className='btnEditTask' onClick={matchID} data-record={task.id}>Edit</button>
        </div>
    )
}
export default AdminTask;