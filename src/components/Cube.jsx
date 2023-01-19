import React, { useEffect, useState } from "react";
import { CounterCubeContainer, Button, CounterCube } from "./CubeStyles";

const Cube = ({ functionality, delay, clicksNumbers }) => {
  const [counter, setCounter] = useState(0);
  const [clearCounter, setClearCounter] = useState(false);
  const [clicks, setClicks] = useState(0);

  const counterHandler = () => {
    if (clicksNumbers) {
      setClicks((pervState) => pervState + 1);
      clicksNumbers(clicks);
    }
    if (delay) {
      const timer = setTimeout(() => {
        const newCounter = functionality(counter);
        counter && setClearCounter(false);
        setCounter((pervStat) => newCounter);
        if (clicksNumbers) {
          clicksNumbers(0);
          setClicks(0);
        }
      }, 2000);
      return () => clearTimeout(timer, 1);
    }
    counter && setClearCounter(false);
    setCounter((pervState) => pervState + 1);
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
