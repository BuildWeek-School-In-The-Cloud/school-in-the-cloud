import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from "../axiosWithAuth"

const initialFormValues = {
  username: '',
  password: '',
  role: '',
}

export default function Login(props) {
const [ formValues, setFormValues ] = useState(initialFormValues)
const history = useHistory()


  const onChange = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value
    })

  };

  const onSubmit = evt => {
    evt.preventDefault();
    console.log("formValues", formValues)
    axiosWithAuth()
    .post(
      `https://bw-backend-clouds.herokuapp.com/api/auth/login`, formValues
    ).then((res) => {
      localStorage.setItem('token', res.data.token);
      if(formValues.role === "student" ) {
        history.push('/student');
      } 
      else if ( formValues.role === "admin" ) {
        history.push('/admin')
      } 
      else if ( formValues.role === "volunteer" ) {
        history.push('/volunteer')
      }
      console.log("res", res);
    }).catch((err) => {
      console.log("Login Function Error", err);
    });
    history.push('/login')
  }

  return (
    <form className="form container" onSubmit={onSubmit}>
      <br></br>
      <h1> Login </h1>
      <div className="form-group inputs">
        <label>
          Username
          <input
            name="username"
            type="text"
            value={formValues.username}
            onChange={onChange}
            placeholder="Type username here..."
          ></input>
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={formValues.password}
            onChange={onChange}
            placeholder="Please enter a secure password..."
          />
          <label>
            Role
            <select name="role" value={formValues.role} onChange={onChange}>
              <option value="">--- select role ---</option>
              <option value="admin">Administrator</option>
              <option value="volunteer">Volunteer</option>
              <option value="student">Student</option>
            </select>
          </label>
        </label>
        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
