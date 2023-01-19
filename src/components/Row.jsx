import Cube from "./Cube";

import { RowContainer, RowTitle, ColumnContainer } from "./RowStyles";

const Row = () => {
  const counterFunctionality = (counter) => counter + 1;
  return (
    <RowContainer>
      <RowTitle>Count by addition 1</RowTitle>
      <ColumnContainer>
        <Cube functionality={counterFunctionality} />
        <Cube functionality={counterFunctionality} />
        <Cube functionality={counterFunctionality} />
      </ColumnContainer>
    </RowContainer>
  );
};

export default Row;
