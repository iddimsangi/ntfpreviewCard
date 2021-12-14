import "./App.scss";
import img from "./images/image-equilibrium.jpg";
import loc from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import avatar from "./images/image-avatar.png";
import view from "./images/icon-view.svg";
function App() {
  return (
    <div className="App">
      <div className="App-div">
        <a href="#" className="App-div-container">
        <img className="App-div-container--img-2" src={view} alt="img" />
        <img className="App-div-container--img-1" src={img} alt="img" />
        </a>

        <h2 className="App-div--heading">
          Equilibrium #3429
          <br />
          <span>Our Equilibrium collection promotes balance and calm.</span>
        </h2>
        <div className="App-div--body">
          <span>
            <img src={loc} alt="loc" />
            0.041ETH
          </span>
          <span>
            <img src={clock} alt="loc" />
            3days left
          </span>
        </div>
        <div className="App-div--footer">
      <div>
      <img src={avatar} alt="avatar" />
          <h3>
            Creation of <span>Jules Wyvern</span>
          </h3>
      </div>
        </div>
      </div>
    </div>
  );
}

export default App;
