import './App.css';
import logo from './images/ironhack-logo-xs.png'
import burgerMenu from './images/menu-top-xs.png'
import declarative from './images/menu-tools-xs.png'
import components from './images/landing-page.png'
import singleWay from './images/landing-page-2.png'
import jsx from './images/landing-page-3.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <img src={burgerMenu} className="burgerLogo" alt="logo" />
        </div>
        <div className="text">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and became a super Ninja developer</p>
        <button className="btn btn-light">Awesome!</button>
        </div>
      </header>
      <section>
        <div className="row container">
          <div className= "col-lg-3">
          <img src={declarative} className="declarative-logo" alt="Declarative" />
          <h5>Declarative</h5>
          <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className= "col-lg-3">
          <img src={components} className="components-logo" alt="Components" />
          <h5>Components</h5>
          <p>Build encapsulated components that manage that manage their state.</p>
          </div>
          <div className= "col-lg-3">
          <img src={singleWay} className="singleway-logo" alt="Single way" />
          <h5>Single way</h5>
          <p>A ser of immutable values are passed to the component's.</p>
          </div>
          <div className= "col-lg-3">
          <img src={jsx} className="jsx-logo" alt="JSX" />
          <h5>JSX</h5>
          <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
