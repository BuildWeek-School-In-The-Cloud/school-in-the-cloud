import React from 'react';


export default function StudentLanding(props) {
  const {currentUser} = props;

  return (
    <div>
      Student landing
      {console.log(currentUser)}
    </div>
  );
}