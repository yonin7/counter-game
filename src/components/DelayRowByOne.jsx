import Cube from "./Cube";

import { RowContainer, RowTitle } from "./RowStyles";

const DelayRowByOne = () => {
  const counterFunctionality = (counter) => counter + 1;

  return (
    <RowContainer>
      <RowTitle>Count by addition 1 with 2Sec delay</RowTitle>
      <Cube functionality={counterFunctionality} delay={true} />
      <Cube functionality={counterFunctionality} delay={true} />
      <Cube functionality={counterFunctionality} delay={true} />
    </RowContainer>
  );
};

export default DelayRowByOne;
