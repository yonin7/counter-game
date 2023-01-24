import { useState } from "react";
import Cube from "./Cube";

import { RowContainer, RowTitle, ColumnContainer } from "./RowStyles";

const DelayRowByOne = () => {
  const [firstCubeCounter, setFirstCubeCounter] = useState(0);
  const [secondCubeCounter, setSecondCubeCounter] = useState(0);
  const [thirdCubeCounter, setThirdCubeCounter] = useState(0);

  const counterCalculator = (updater) => {
    setTimeout(() => {
      updater((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  const clickHandler = (cubeNumber) => {
    if (cubeNumber === "first") counterCalculator(setFirstCubeCounter);
    if (cubeNumber === "second") counterCalculator(setSecondCubeCounter);
    if (cubeNumber === "third") counterCalculator(setThirdCubeCounter);
  };

  const resetCounterHandler = (cubeNumber) => {
    if (cubeNumber === "first") setFirstCubeCounter(0);
    if (cubeNumber === "second") setSecondCubeCounter(0);
    if (cubeNumber === "third") setThirdCubeCounter(0);
  };
  return (
    <RowContainer>
      <RowTitle>Count by addition 1 with 2 sec delay</RowTitle>
      <ColumnContainer>
        <Cube
          clickHandler={clickHandler}
          cubeNumber={"first"}
          counter={firstCubeCounter}
          resetCounter={resetCounterHandler}
        />
        <Cube
          clickHandler={clickHandler}
          cubeNumber={"second"}
          counter={secondCubeCounter}
          resetCounter={resetCounterHandler}
        />
        <Cube
          clickHandler={clickHandler}
          cubeNumber={"third"}
          counter={thirdCubeCounter}
          resetCounter={resetCounterHandler}
        />
      </ColumnContainer>
    </RowContainer>
  );
};

export default DelayRowByOne;
