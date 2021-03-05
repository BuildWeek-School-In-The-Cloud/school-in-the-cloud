// Task Form for adding and editing tasks

import React from 'react'

const TaskForm = (props) => {
    // Pass in empty strings on 'Add' and existing obj on 'Edit'
    const {task, submit, change, closeModal} = props
    //Prevent default page reload on submit
    const onSubmit = e => {
        e.preventDefault()
        submit()
    }
     //onChange Event
    const onChange = e => {
        const {
            name,
            value,    
        } = e.target
        change(name, value)
    }
    // Task Form
    return (
            <form className='form container' onSubmit={onSubmit}>
                <div>
                    {/* Enter task name and description */}
                    <span className='name'>
                        <input
                            name='name'
                            type='text'
                            value={task.name}
                            placeholder='Name your task'
                            maxLength='45'
                            onChange={onChange}
                        />
                    </span>
                    <span className='description'>
                        <textarea
                            name='description'
                            type='text'
                            value={task.description}
                            placeholder='Describe the task you wish to assign'
                            rows={4}
                            cols={40}
                            onChange={onChange}
                        />
                    </span>
                    {/* Submit task */}
                    <span className='btnSubmit'>
                        <button>Submit</button>
                    </span>
                    <span>
                        <button className="close" onClick={closeModal}>cancel</button>
                    </span>
                </div>
            </form>
    )
}
export default TaskForm;