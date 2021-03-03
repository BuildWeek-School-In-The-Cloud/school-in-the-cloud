import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App-container">
      <head>
        <title> School In The Cloud</title>
      </head>
      <Header>
        <H1>
          <a href="/"> School In The Cloud </a>
        </H1>
        <Nav>
          <ul>
            <li>
              <a href="#menu" className="menuToggle">
                <span> MENU </span>
              </a>
            </li>
          </ul>
        </Nav>
      </Header>
      <Banner>
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
      </Banner>
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
        <Spotlight>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1461532257246-777de18cd58b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1355&q=80"
              alt=""
            />
          </div>
          <div className="content">
            <h2>MAGNA PRIMIS LOBORTIS SED ULLAMCORPER</h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
              imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
            </p>
          </div>
        </Spotlight>
        <Spotlight>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1583468991267-3f068b607ae1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2113&q=80"
              alt=""
            />
          </div>
          <div className="content">
            <h2> TORTOR DOLORE FEUGIAT ELEMENTUM MAGNA </h2>
            <p>
              {" "}
              Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
              imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
            </p>
          </div>
        </Spotlight>
        <Spotlight>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
          </div>
          <div className="content">
            <h2> AUGUE ELEIFEND ALIQUET SED CONDIMENTUM </h2>
            <p>
              {" "}
              Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
              imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.{" "}
            </p>
          </div>
        </Spotlight>
      </section>
      <section id="three">
        <div className="inner">
          <header>
            <h2>ACCUMSAN MUS TORTOR NUNC ALIQUET</h2>
            <p>
              ACCUMSAN MUS TORTOR NUNC ALIQUET Aliquam ut ex ut augue
              consectetur interdum. Donec amet imperdiet eleifend fringilla
              tincidunt. <br></br>
              Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.
            </p>
          </header>
          <ul className="features">
            <li className="icon paper-plane">
              <h3> ARCU ACCUMSAN </h3>
              <p>
                {" "}
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.{" "}
              </p>
            </li>
            <li className="icon laptop">
              <h3> AC AUGUE EGET </h3>
              <p>
                {" "}
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.{" "}
              </p>
            </li>
            <li className="icon code">
              <h3> MUS SCELERISQUE </h3>
              <p>
                {" "}
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.{" "}
              </p>
            </li>
            <li className="icon headphone">
              <h3> MAURIS IMPERDIET </h3>
              <p>
                {" "}
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.{" "}
              </p>
            </li>
            <li className="icon heart">
              <h3> AENEAN PRIMIS </h3>
              <p>
                {" "}
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.{" "}
              </p>
            </li>
            <li className="icon flag">
              <h3> TORTOR UT </h3>
              <p>
                {" "}
                Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                tincidunt nullam amet leo Aenean ligula consequat consequat.{" "}
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section id="cta">
        <div className="inner">
          <header>
            <h2> ARCUE UT VEL COMMODO </h2>
          </header>
          <p>
            {" "}
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.{" "}
          </p>
          <ul className="actions">
            <li>
              <a href="#explore" className="button">
                EXPLORE
              </a>
            </li>
            <li>
              <a href="#learnMore" className="button">
                LEARN MORE
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer id="footer">
        <ul className="icons">
          <li>
            <a href="#twitter" className="icon twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#facebook" className="icon facebook">
              <span className="label">facebook</span>
            </a>
          </li>
          <li>
            <a href="#instagram" className="icon instagram">
              <span className="label">instagram</span>
            </a>
          </li>
          <li>
            <a href="#dribble" className="icon dribble">
              <span className="label">dribble</span>
            </a>
          </li>
          <li>
            <a href="#email" className="icon envelope">
              <span className="label">email</span>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

const Header = styled.header`
  height: 3em;
  line-height: 3em;
  width: 100%;
  left: 10;
  top: 0;
  z-index: 10000;
  position: fixed;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  transition: background-color 0.2s ease;
  background: #2e3842;
`;

const H1 = styled.h1`
  transition: opacity 0.2s ease;
  height: inherit;
  left: 1.25em;
  line-height: inherit;
  position: absolute;
  top: 0;
  color: #fff;
  font-weight: 400;
  letter-spacing: 0.225em;
  margin: 0 0 1em 0;
  text-transform: uppercase;
  display: block;
`;
const Nav = styled.nav`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
`;
const Banner = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
`;

const Spotlight = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  /* background-color: ; */
`;

export default App;
