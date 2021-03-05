import React, { useEffect } from 'react';
import axios from "axios"

export default function StudentLanding(props) {
  const {currentUser, getVolunteerAvailability} = props;

  // const [volunteerAvail, setVolunteerAvail] = useState([]);

  useEffect( () => {
    getVolunteerAvailability()
  }, []);

  return (
    <div>
      <br></br>
      <h1>Student Landing</h1>
      {/*  /api/student/volunteers */}

      
  
      {console.log(currentUser)}
      <br />show list of appointments
    </div>
  );
}

// axios .get 'https://bw-backend-clouds.herokuapp.com/'


/*/api/auth/register
 /api/auth/login
 /api/admin/tasks (post/get all tasks)
 /api/admin/tasks/:id  (get/edit/delete task by id)
 /api/volunteers/tasks (get all tasks)
 /api/volunteers/tasks/:id (put/get by id/delete at id)
 /api/student/volunteers (get all volunteers info)
 /api/student/volunteers/:id (get/edit/delete volunteers by id) */