import React, { useState } from "react";
import { Route,  Switch,  useHistory, BrowserRouter as Router } from "react-router-dom";
import axios from "axios"
import axiosWithAuth from "./axiosWithAuth"

import Header from "./components/Header";
import Banner from "./components/Banner";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import StudentLanding from "./components/StudentLanding";
import Admin from "./components/Admin"
import Volunteer from "./components/Volunteer"
import "./assets/css/main.css";
import "./images/banner.jpg";

const initialFormValues = {
  username: '',
  password: '',
  role: '',
}

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({});

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    // create new user to submit
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      role: formValues.role,
    };
    // null checks
    if (
      newUser.username === "" ||
      newUser.password === "" ||
      newUser.role === ""
    ) {
      return;
    }
    // TODO: axios call to backend
    // REGISTER
    axios.post(
        `https://bw-backend-clouds.herokuapp.com/api/auth/register`, 
        newUser
      ).then((res) => {
        console.log("res",res);
        setFormValues(newUser)
      }).catch((err) => {
        console.log(err);
      })
      // TODO: set current user upon axios post success
      
      // DELETE-THIS-WHEN-DONE: dummy call to make sure values are picked up
      console.log("newUser", newUser);
      setCurrentUser(newUser);
    // history.push("/student");
    // TODO: rethinking this
    // TODO: reset values if successful
    setFormValues(initialFormValues);
  };

  const getVolunteerAvailability = () => {
    // get volunteer information
    axios.get(`https://bw-backend-clouds.herokuapp.com/api/student/volunteers`)
      .then((res) => {

        console.log("Volunteer Res", res);
      }).catch((err) => {
        console.log("Volunteer error", err);
      })
  }

  

  return (
    <Router>
    <div className="page-wrapper">
      <Switch>
        <Route exact path="/">
          {/* Header */}
          {/* notes go here */}
          <Header />
          {/* Banner */}
          {/* 
            notes go here 
          */}
          <Banner />
          {/* One */}
          <section id="one" className="wrapper style1 special">
            <div className="inner">
              <header className="major">
                <h2>
                  Arcu aliquet vel lobortis ata nisl
                  <br />
                  eget augue amet aliquet nisl cep donec
                </h2>
                <p>
                  Aliquam ut ex ut augue consectetur interdum. Donec amet
                  imperdiet eleifend
                  <br />
                  fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
                  ullamcorper.
                </p>
              </header>
              <ul className="icons major">
                <li>
                  <span className="icon fa-gem major style1">
                    <span className="label">Lorem</span>
                  </span>
                </li>
                <li>
                  <span className="icon fa-heart major style2">
                    <span className="label">Ipsum</span>
                  </span>
                </li>
                <li>
                  <span className="icon solid fa-code major style3">
                    <span className="label">Dolor</span>
                  </span>
                </li>
              </ul>
            </div>
          </section>
          {/* Two */}
          <section id="two" className="wrapper alt style2">
            <section className="spotlight">
              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1461532257246-777de18cd58b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
                  alt=""
                />
              </div>
              <div className="content">
                <h2>
                  Magna primis lobortis
                  <br />
                  sed ullamcorper
                </h2>
                <p>
                  Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                  imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
                </p>
              </div>
            </section>
            <section className="spotlight">
              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1583468991267-3f068b607ae1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
                  alt=""
                />
              </div>
              <div className="content">
                <h2>
                  Tortor dolore feugiat
                  <br />
                  elementum magna
                </h2>
                <p>
                  Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                  imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
                </p>
              </div>
            </section>
            <section className="spotlight">
              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
                  alt=""
                />
              </div>
              <div className="content">
                <h2>
                  Augue eleifend aliquet
                  <br />
                  sed condimentum
                </h2>
                <p>
                  Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                  imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
                </p>
              </div>
            </section>
          </section>
          {/* Three */}
          <section id="three" className="wrapper style3 special">
            <div className="inner">
              <header className="major">
                <h2>Accumsan mus tortor nunc aliquet</h2>
                <p>
                  Aliquam ut ex ut augue consectetur interdum. Donec amet
                  imperdiet eleifend
                  <br />
                  fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
                  ullamcorper.
                </p>
              </header>
              <ul className="features">
                <li className="icon fa-paper-plane">
                  <h3>Arcu accumsan</h3>
                  <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris
                    lorem tincidunt nullam amet leo Aenean ligula consequat
                    consequat.
                  </p>
                </li>
                <li className="icon solid fa-laptop">
                  <h3>Ac Augue Eget</h3>
                  <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris
                    lorem tincidunt nullam amet leo Aenean ligula consequat
                    consequat.
                  </p>
                </li>
                <li className="icon solid fa-code">
                  <h3>Mus Scelerisque</h3>
                  <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris
                    lorem tincidunt nullam amet leo Aenean ligula consequat
                    consequat.
                  </p>
                </li>
                <li className="icon solid fa-headphones-alt">
                  <h3>Mauris Imperdiet</h3>
                  <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris
                    lorem tincidunt nullam amet leo Aenean ligula consequat
                    consequat.
                  </p>
                </li>
                <li className="icon fa-heart">
                  <h3>Aenean Primis</h3>
                  <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris
                    lorem tincidunt nullam amet leo Aenean ligula consequat
                    consequat.
                  </p>
                </li>
                <li className="icon fa-flag">
                  <h3>Tortor Ut</h3>
                  <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris
                    lorem tincidunt nullam amet leo Aenean ligula consequat
                    consequat.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          {/* CTA */}
          <CTA />
          {/* Footer */}
          <Footer />
        </Route>
        <Route path="/signup">
          <Header />
          {/* Signup */}
          <SignUp values={formValues} update={updateForm} submit={submitForm} />
        </Route>
        <Route path="/login">
          {/* Login */}
          <Login/>
        </Route>
        <Route path="/student">
          {/* Student Landing */}
          <StudentLanding 
            currentUser={currentUser}
            getVolunteerAvailability={getVolunteerAvailability}/>
        </Route>
        <Route path="/admin" >
          <Admin />
        </Route>
        <Route path="/volunteer" >
          <Volunteer />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
