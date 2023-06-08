import logo from "./logoSpacers.svg";
import "./App.css";

function App() {
  return (
    <div className="screen">
      <img src={logo} className="logoSpacers" alt="Spacers" />
      <div className="mainContent">
        <p className="aboutGameText">Inovativna igra koja spaja AI, AR i klasičnu arkadnu akciju</p>
        <p className="aboutGameHeader">SPACERS</p>
        <p className="aboutGameSubheader">3 KARAKTERA</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
