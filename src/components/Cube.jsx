import React, { useEffect, useState } from "react";
import { CounterCubeContainer, Button, CounterCube } from "./CubeStyles";

const Cube = ({ functionality, delay }) => {
  const [clicks, setClicks] = useState(1);
  const [prevClicks, setPrevClicks] = useState(0);
  const [counter, setCounter] = useState(0);
  const [clearCounter, setClearCounter] = useState(false);

  const counterHandler = () => {
    setClicks((prevSate) => prevSate + 1);
    if (delay) {
      const timer = setTimeout(() => {
        let newCounter = functionality(clicks, counter, prevClicks);
        setPrevClicks(clicks);
        counter && setClearCounter(false);
        setCounter(newCounter);
      }, delay);
      return () => clearTimeout(timer, 1);
    }
    const newCounter = functionality(clicks, counter);

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
