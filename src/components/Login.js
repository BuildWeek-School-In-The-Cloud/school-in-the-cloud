import React, { useEffect } from 'react';


export default function Login(props) {
  const {values, update, login} = props;

  const onChange = evt => {
    const {name, value} = evt.target;
    update(name, value);
  }

  useEffect(() => {
    login();
  }, []);

  return (
    <form className='form container' onSubmit={login}>
      Login test
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
        <div className='submit'>
          <button>submit</button>
        </div>
      </div>

    </form>
  );
}