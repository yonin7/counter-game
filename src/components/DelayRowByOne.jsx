import Cube from "./Cube";

import { RowContainer } from "./RowStyles";

const DelayRowByOne = () => {
  const counterFunctionality = (counter) => counter + 1;

  return (
    <RowContainer>
      <Cube functionality={counterFunctionality} delay={true} />
      <Cube functionality={counterFunctionality} delay={true} />
      <Cube functionality={counterFunctionality} delay={true} />
    </RowContainer>
  );
};

export default DelayRowByOne;
