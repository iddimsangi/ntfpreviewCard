import "./App.scss";
import img from "./images/image-equilibrium.jpg";
import loc from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import avatar from "./images/image-avatar.png";
function App() {
  return (
    <div className="App">
      <div className="App-div">
        <img src={img} alt="img" />
        <h2>
          Equilibrium #3429
          <br />
          <span>Our Equilibrium collection promotes balance and calm.</span>
        </h2>
        <div>
          <span>
            <img src={loc} alt="loc" />
            0.041ETH
          </span>
          <span>
            <img src={clock} alt="loc" />
            3days left
          </span>
        </div>
        <div>
          <img src={avatar} alt="avatar" />
          <h3>
            Creation of <span>Jules Wyvern</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
