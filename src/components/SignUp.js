import React from 'react';


export default function SignUp(props) {
  const { values, update, submit } = props;

  



  return (
    <form className='form container'>
      <div className='form-group inputs'>
        <label>Email
          <input
            name='email'
            type='email'
            value={values.email}
            placeholder='Type username here...'
          ></input>
        </label>
        <label>Password
          <input 
            name='password'
            type='password'
            value={values.password}
            placeholder='Please enter a secure password...'
          />
        </label>
        <label>
          <select 
            name='role'
            value={values.role}
          >
            <option value=''>--- select role ---</option>
            <option value='Volunteer'>Volunteer</option>
            <option value='Student'>Student</option>
          </select>
        </label>
        <div className='submit'>
          <button>submit</button>
        </div>
        
      </div>
    </form>
  );
}