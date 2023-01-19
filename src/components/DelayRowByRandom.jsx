import Cube from "./Cube";

import { RowContainer } from "./RowStyles";

const DelayRowByRandom = () => {
  const counterFunctionality = (counter) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return counter + randomNumber;
  };

  return (
    <RowContainer>
      <Cube functionality={counterFunctionality} delay={true} />
      <Cube functionality={counterFunctionality} delay={true} />
      <Cube functionality={counterFunctionality} delay={true} />
    </RowContainer>
  );
};

export default DelayRowByRandom;
