import Cube from "./Cube";

import { RowContainer, RowTitle } from "./RowStyles";

const Row = () => {
  const counterFunctionality = (counter) => counter + 1;
  return (
    <RowContainer>
      <RowTitle>Count by addition 1</RowTitle>
      <Cube functionality={counterFunctionality} />
      <Cube functionality={counterFunctionality} />
      <Cube functionality={counterFunctionality} />
    </RowContainer>
  );
};

export default Row;
