import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
