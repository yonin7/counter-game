import Cube from "./Cube";

import { RowContainer, RowTitle, ColumnContainer } from "./RowStyles";

const DelayRowByOne = () => {
  const counterFunctionality = (clicks, counter) => counter + 1;

  return (
    <RowContainer>
      <RowTitle>Count by addition 1 with 2 sec delay</RowTitle>
      <ColumnContainer>
        <Cube functionality={counterFunctionality} delay={2000} />
        <Cube functionality={counterFunctionality} delay={2000} />
        <Cube functionality={counterFunctionality} delay={2000} />
      </ColumnContainer>
    </RowContainer>
  );
};

export default DelayRowByOne;
