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
  const clearCounterHandler = () => {
    setClearCounter(true);
  };

  useEffect(() => {
    if (clearCounter) {
      setCounter(0);
    }
  }, [clearCounter]);

  return (
    <CounterCubeContainer>
      <Button onClick={clearCounterHandler}>Clear</Button>
      <CounterCube onClick={counterHandler}>{counter}</CounterCube>
    </CounterCubeContainer>
  );
};

export default Cube;
