import React from 'react';

export default function StudentLanding(props) {
  const {currentUser, getVolunteerAvailability} = props;

  return (
    <div >
      <br></br>
      <h1>Student Landing</h1>
      {/*  /api/student/volunteers */}
      {JSON.stringify({currentUser})}
      
  
      {console.log(currentUser)}
      <br />show list of appointments
    </div>
  );
}
