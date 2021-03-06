import React, { useState } from "react";
import axios from "axios";



const Volunteer = () => {
  const [tasks, setTasks] = useState();

  const getTasks = () => {
    axios
      .get("https://bw-backend-clouds.herokuapp.com/api/volunteers/tasks")
      .then((res) => {
        console.log("res.data", res.data);
        setTasks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      this
      <button onClick={getTasks}> You should click here prolly i dunno</button>
      {tasks.map(task => {
        return (<div> {task.task_name} </div>);
      })}
    </div>
  );
};

export default Volunteer;
