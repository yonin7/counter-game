import Cube from "./Cube";

import { RowContainer } from "./RowStyles";

const Row = () => {
  const counterFunctionality = (counter) => counter + 1;
  return (
    <RowContainer>
      <Cube functionality={counterFunctionality} />
      <Cube functionality={counterFunctionality} />
      <Cube functionality={counterFunctionality} />
    </RowContainer>
  );
};

export default Row;
