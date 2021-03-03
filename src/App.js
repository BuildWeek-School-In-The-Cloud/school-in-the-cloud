import React, { useState } from 'react';
import { Route, Link, Switch, NavLink, useHistory } from 'react-router-dom';

import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import StudentLanding from './components/StudentLanding';
import './assets/css/main.css';
import './images/banner.jpg';


const initialFormValues = {
  email: '',
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
      [inputName]: inputValue
    })
  };

  const submitForm = () => {
    // create new user to submit
    const newUser = {
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      role: formValues.role, 
    }
    // null checks
    if (newUser.email === '' || newUser.password === '' || newUser.role === ''){
      return;
    }
    // TODO: axios call to backend
    axios.post(
        `/api/auth/register`, 
        newUser
      ).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    // TODO: set current user upon axios post success

    // DELETE-THIS-WHEN-DONE: dummy call to make sure values are picked up
    console.log(newUser);
    setCurrentUser(newUser);
    history.push('/student');
    // TODO: rethinking this
    // TODO: reset values if successful
    setFormValues(initialFormValues);
  }

  return (
    <div className="page-wrapper">
      <Switch>
        <Route exact path='/'>
          {/* Header */}
          {/* notes go here */}
          <Header />
          {/* Banner */}
          {/* 
            notes go here 
          */}
          <Banner />
          {/* One */}
          <section id="one" class="wrapper style1 special">
            <div class="inner">
              <header class="major">
                <h2>
                  Arcu aliquet vel lobortis ata nisl<br />
                  eget augue amet aliquet nisl cep donec
                </h2>
                <p>
                  Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
                  eleifend<br />
                  fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
                  ullamcorper.
                </p>
              </header>
              <ul class="icons major">
                <li>
                  <span class="icon fa-gem major style1"
                    ><span class="label">Lorem</span></span
                  >
                </li>
                <li>
                  <span class="icon fa-heart major style2"
                    ><span class="label">Ipsum</span></span
                  >
                </li>
                <li>
                  <span class="icon solid fa-code major style3"
                    ><span class="label">Dolor</span></span
                  >
                </li>
              </ul>
            </div>
          </section>
          {/* Two */}
          <section id="two" class="wrapper alt style2">
            <section class="spotlight">
              <div class="image"><img src="images/pic01.jpg" alt="" /></div>
              <div class="content">
                <h2>
                  Magna primis lobortis<br />
                  sed ullamcorper
                </h2>
                <p>
                  Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                  imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
                </p>
              </div>
            </section>
            <section class="spotlight">
              <div class="image"><img src="images/pic02.jpg" alt="" /></div>
              <div class="content">
                <h2>
                  Tortor dolore feugiat<br />
                  elementum magna
                </h2>
                <p>
                  Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                  imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
                </p>
              </div>
            </section>
            <section class="spotlight">
              <div class="image"><img src="images/pic03.jpg" alt="" /></div>
              <div class="content">
                <h2>
                  Augue eleifend aliquet<br />
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
          <section id="three" class="wrapper style3 special">
            <div class="inner">
              <header class="major">
                <h2>Accumsan mus tortor nunc aliquet</h2>
                <p>
                  Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
                  eleifend<br />
                  fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
                  ullamcorper.
                </p>
              </header>
              <ul class="features">
                <li class="icon fa-paper-plane">
                  <h3>Arcu accumsan</h3>
                  <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                    tincidunt nullam amet leo Aenean ligula consequat consequat.
                  </p>
                </li>
                <li class="icon solid fa-laptop">
                  <h3>Ac Augue Eget</h3>
                  <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                    tincidunt nullam amet leo Aenean ligula consequat consequat.
                  </p>
                </li>
                <li class="icon solid fa-code">
                  <h3>Mus Scelerisque</h3>
                  <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                    tincidunt nullam amet leo Aenean ligula consequat consequat.
                  </p>
                </li>
                <li class="icon solid fa-headphones-alt">
                  <h3>Mauris Imperdiet</h3>
                  <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                    tincidunt nullam amet leo Aenean ligula consequat consequat.
                  </p>
                </li>
                <li class="icon fa-heart">
                  <h3>Aenean Primis</h3>
                  <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                    tincidunt nullam amet leo Aenean ligula consequat consequat.
                  </p>
                </li>
                <li class="icon fa-flag">
                  <h3>Tortor Ut</h3>
                  <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                    tincidunt nullam amet leo Aenean ligula consequat consequat.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          {/* CTA */}
          <section id="cta" class="wrapper style4">
            <div class="inner">
              <header>
                <h2>Arcue ut vel commodo</h2>
                <p>
                  Aliquam ut ex ut augue consectetur interdum endrerit imperdiet
                  amet eleifend fringilla.
                </p>
              </header>
              <ul class="actions stacked">
                {/* <li><a href="#" class="button fit primary">Explore</a></li> */}
                <li><NavLink to="#" activeClassName="button fit primary">Explore</NavLink></li>
                {/* <li><a href="#" class="button fit">Learn More</a></li> */}
                <li><NavLink to="#" activeClassName="button fit">Learn More</NavLink></li>
              </ul>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </Route>
        <Route path='/signup'>
          <Header />

          {/* Signup */}
          <SignUp 
            values={formValues}
            update={updateForm}
            submit={submitForm}
          />
        </Route>
        <Route path='/login'>
          {/* Login */}
        </Route>
        <Route path='/student'>
          {/* Student Landing */}
          <StudentLanding 
            currentUser={currentUser}
          />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
