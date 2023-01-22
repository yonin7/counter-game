import Cube from "./Cube";

import { RowContainer, RowTitle, ColumnContainer } from "./RowStyles";

const Row = () => {
  const counterFunctionality = (clicks, counter) => counter + 1;
  return (
    <RowContainer>
      <RowTitle>Count by addition 1</RowTitle>
      <ColumnContainer>
        <Cube functionality={counterFunctionality} delay={0} />
        <Cube functionality={counterFunctionality} delay={0} />
        <Cube functionality={counterFunctionality} delay={0} />
      </ColumnContainer>
    </RowContainer>
  );
};

export default Row;
