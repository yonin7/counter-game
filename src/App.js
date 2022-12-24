import Cube from "./components/Cube";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>COUNTER GAME</h1>
      <div className="MainContainer">
        <Cube />
        <Cube />
        <Cube />
      </div>
    </div>
  );
}

export default App;
