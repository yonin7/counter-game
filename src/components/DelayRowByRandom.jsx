import Cube from "./Cube";

import { RowContainer, RowTitle, ColumnContainer } from "./RowStyles";

const DelayRowByRandom = () => {
  const counterFunctionality = (counter) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return counter + randomNumber;
  };

  return (
    <RowContainer>
      <RowTitle>Count by addition random number with 2Sec delay</RowTitle>
      <ColumnContainer>
        <Cube functionality={counterFunctionality} delay={true} />
        <Cube functionality={counterFunctionality} delay={true} />
        <Cube functionality={counterFunctionality} delay={true} />
      </ColumnContainer>
    </RowContainer>
  );
};

export default DelayRowByRandom;
