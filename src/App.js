import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <header id="header" class="alt">
        <h1><a href="index.html">School In The Cloud</a></h1>
        <nav id="nav">
          <ul>
            <li class="special">
              <a href="#menu" class="menuToggle"><span>Menu</span></a>
              <div id="menu">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="generic.html">About Us</a></li>
                  <li><a href="elements.html">Meet The Team</a></li>
                  <li><a href="#">Sign Up</a></li>
                  <li><a href="#">Log In</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      {/* Banner */}
      <section id="banner">
        <div class="inner">
          <h2>School In The Cloud</h2>
          <p>
            School in the Cloud is a platform that trains senior volunteers to teach students in a group or individual setting.
          </p>
          <ul class="actions special">
            <li><a href="#" class="button primary">Explore</a></li>
          </ul>
        </div>
        <a href="#one" class="more scrolly">Learn More</a>
      </section>
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


    </div>
  );
}

export default App;
