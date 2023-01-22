import Cube from "./Cube";

import { RowContainer, RowTitle, ColumnContainer } from "./RowStyles";

const DelayRowByRandom = () => {
  const counterFunctionality = (clicks, counter) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return counter + randomNumber;
  };

  return (
    <RowContainer>
      <RowTitle>Count by addition random number with 2 sec delay</RowTitle>
      <ColumnContainer>
        <Cube functionality={counterFunctionality} delay={2000} />
        <Cube functionality={counterFunctionality} delay={2000} />
        <Cube functionality={counterFunctionality} delay={2000} />
      </ColumnContainer>
    </RowContainer>
  );
};

export default DelayRowByRandom;
