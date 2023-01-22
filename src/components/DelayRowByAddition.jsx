import Cube from "./Cube";

import { RowContainer, RowTitle, ColumnContainer } from "./RowStyles";

const DelayRowByAddition = () => {
  const counterFunctionality = (clicks, counter, prevClicks) => {
    if (counter === 0) return clicks;
    let newCoun = (clicks - prevClicks + 1) * counter;
    return newCoun;
  };

  return (
    <RowContainer>
      <RowTitle>Count by click's number with 2 sec delay</RowTitle>
      <ColumnContainer>
        <Cube functionality={counterFunctionality} delay={2000} />
        <Cube functionality={counterFunctionality} delay={2000} />
        <Cube functionality={counterFunctionality} delay={2000} />
      </ColumnContainer>
    </RowContainer>
  );
};

export default DelayRowByAddition;
