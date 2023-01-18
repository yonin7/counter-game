import Cube from "./components/Cube";
import "./App.css";

function App() {
  return (
    <div className="App">
      <svg viewBox="0 0 500 150">
        <path
          id="curve"
          fill="transparent"
          d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
        />
        <text
          style={{
            fontFamily: "Luckiest Guy",
            width: 500,
            fontSize: "50px",
            fill: "#ff9800",
          }}
        >
          <textPath href="#curve">COUNTER GAME</textPath>
        </text>
      </svg>
      <main className="MainContainer">
        <Cube />
        <Cube />
        <Cube />
      </main>
    </div>
  );
}

export default App;
