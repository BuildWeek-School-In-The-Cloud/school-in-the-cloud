import React from "react";

export default function Login(props) {
  const { values, update, login } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };


  return (
    <form className="form container" onSubmit={login}>
      <br></br>
      <h1> Login Test </h1>
      <div className="form-group inputs">
        <label>
          Username
          <input
            name="username"
            type="text"
            value={values.username}
            onChange={onChange}
            placeholder="Type username here..."
          ></input>
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={onChange}
            placeholder="Please enter a secure password..."
          />
          <label>
            Role
            <select name="role" value={values.role} onChange={onChange}>
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
