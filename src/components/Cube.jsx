import { CounterCubeContainer, Button, CounterCube } from "./CubeStyles";

const Cube = ({ clickHandler, cubeNumber, counter, resetCounter }) => {
  const counterHandler = () => {
    clickHandler(cubeNumber);
  };

  const resetCounterHandler = () => {
    resetCounter(cubeNumber);
  };

  return (
    <CounterCubeContainer>
      <CounterCube onClick={counterHandler}>
        ${counter.toLocaleString("en-US")}
      </CounterCube>
      <Button onClick={resetCounterHandler}>Reset</Button>
    </CounterCubeContainer>
  );
};

export default Cube;
