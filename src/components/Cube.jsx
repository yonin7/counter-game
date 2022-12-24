import React, { useEffect, useState } from "react";
import { CounterCubeContainer, Button, CounterCube } from "./CubeStyles";

const Cube = () => {
  const [counter, setCounter] = useState(0);
  const [clearCounter, setClearCounter] = useState(false);

  const counterHandler = () => {
    const newCounter = counter + 1;
    counter && setClearCounter(false);
    setCounter(newCounter);
  };
  const resetCounterHandler = () => {
    setClearCounter(true);
  };

  useEffect(() => {
    if (clearCounter) {
      setCounter(0);
    }
  }, [clearCounter]);

  return (
    <CounterCubeContainer>
      <CounterCube onClick={counterHandler}>{counter}</CounterCube>
      <Button onClick={resetCounterHandler}>Reset</Button>
    </CounterCubeContainer>
  );
};

export default Cube;
