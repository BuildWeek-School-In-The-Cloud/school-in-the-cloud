import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SignUp(props) {
  const { values, update, submit } = props;

  const onChange = evt => {
    const {name, value} = evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Username
          <input
            name='username'
            type='text'
            value={values.username}
            onChange={onChange}
            placeholder='Type username here...'
          ></input>
        </label>
        <label>Password
          <input 
            name='password'
            type='password'
            value={values.password}
            onChange={onChange}
            placeholder='Please enter a secure password...'
          />
        </label>
        <label>Role
          <select 
            name='role'
            value={values.role}
            onChange={onChange}
          >
            <option value=''>--- select role ---</option>
            <option value='admin'>Administrator</option>
            <option value='volunteer'>Volunteer</option>
            <option value='student'>Student</option>
          </select>
        </label>
        <div className='submit'>
          <button>submit</button>
        </div>
        
      </div>
    </form>
  );
}