import React, { useEffect } from 'react';


export default function StudentLanding(props) {
  const {currentUser, getVolunteerAvailability} = props;

  // const [volunteerAvail, setVolunteerAvail] = useState([]);

  useEffect( () => {
    getVolunteerAvailability()
  }, []);

  return (
    <div>
      Student landing
      {/*  /api/student/volunteers */}
      {/* {console.log(currentUser)} */}
      <br />show list of appointments
    </div>
  );
}