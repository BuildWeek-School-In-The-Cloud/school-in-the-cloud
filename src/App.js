import "./App.css";

function App() {
  return (
    <div className="App-container">
      <header id="header">
        <h1>School In The Cloud</h1>
        <nav id="nav">
          <ul>
            <li>
              <a href="#menu" className="menuToggle">
                <span> MENU </span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="banner">
        <div className="inner">
          <h2> SCHOOL IN THE CLOUD </h2>
          <p>
            {" "}
            SCHOOL IN THE CLOUD IS A PLATFORM THAT TRAINS SENIOR VOLUNTEERS TO
            TEACH STUDENTS IN A GROUP OR INDIVIDUAL SETTING{" "}
          </p>
          <ul>
            <li>
              <a href="#explore" className="button primary">
                {" "}
                EXPLORE
              </a>
            </li>
          </ul>
        </div>
        <a href="#one" className="scrolly">
          "LEARN MORE"
        </a>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>
              ARCU ALIQUET VEL LOBORTIS ATA NISL EGET AUGUE
              <br></br>
              AMET ALIQUET NISL CEP DONEC
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
              eleifend fringilla tincidunt.
              <br></br>
              Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.
            </p>
          </header>
          <ul className="icons">
            <li>
              <span className="gem icon">
                <span className="label">Lorem</span>
              </span>
            </li>
            <li>
              <span className="icon heart">
                <span className="label">Ipsum</span>
              </span>
            </li>
            <li>
              <span className="icon code">
                <span className="label">Dolor</span>
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section id="two">
        <section className="spotlight">
          <div className="img">
            <img src="images.pic01.jpg" alt="" />
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
