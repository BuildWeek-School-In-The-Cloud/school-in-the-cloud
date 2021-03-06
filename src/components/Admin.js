//* Imports
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';


import axiosWithAuth from "../axiosWithAuth";
import AdminTask from "./AdminTask";
import TaskForm from "./TaskForm";

//* Initial Form States
const initialFormValues = {
  name: "",
  description: "",
};
//* Dummy array of tasks
const dummyTasks = [
  { name: "to-do", description: "do this", id: 1 },
  { name: "to-do", description: "do this again", id: 2 },
];

const Admin = (props) => {
  //* States
  const [tasks, setTasks] = useState(dummyTasks);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [display, setDisplay] = useState("none");
  const history = useHistory()


  //* On Change
  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //* Submit function
  const formSubmit = () => {
    axiosWithAuth()
    .put(
        `https://bw-backend-clouds.herokuapp.com/api/admin/tasks`,
        formValues
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // let newTask = {
  //   name: formValues.name.trim(),
  //   description: formValues.description.trim(),
  // };
  // //* Add task to existing tasklist
  // setTasks(tasks.concat(newTask));
  // //* Clear form after Submit
  // setFormValues(initialFormValues);

  // //TODO postNewTask(newTask)

  //* Modal functionality for Task form
  // When the user clicks 'Add Task' open the modal
  const openModal = () => {
    setDisplay("block");
  };

  // When the user clicks 'Cancel' close the modal
  const closeModal = () => {
    setDisplay("none");
  };

  //* Edit functionality
  const editTask = (e) => {
    // const recordId = e.target.getAttribute("data-record");
    // const record = tasks.filter((task) => {
    //   return task.id === recordId;
    // });
    //* Set form values to recorded
    // setFormValues(record);

    

    openModal();

    axiosWithAuth()
      .put(
        `https://bw-backend-clouds.herokuapp.com/api/admin/tasks/:id`,
        formValues
      )
      .then((res) => {
        console.log("res.data", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .get("https://bw-backend-clouds.herokuapp.com/api/admin/tasks")
      .then((res) => {
        setTasks(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //* Return
  return (
    <>
      <button onClick={openModal}>Add Task</button>
      <div>
        {tasks.map((task) => {
          return <AdminTask task={task} key={task.id} edit={editTask} />;
        })}
      </div>
      <div className="modal-content" id="modal" style={{ display: display }}>
        <TaskForm
          task={formValues}
          submit={formSubmit}
          change={inputChange}
          closeModal={closeModal}
        />
      </div>
    </>
  );
};
export default Admin;
