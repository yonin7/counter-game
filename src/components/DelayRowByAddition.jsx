import { useState } from "react";
import Cube from "./Cube";

import { RowContainer, RowTitle, ColumnContainer } from "./RowStyles";

const DelayRowByAddition = () => {
  const [clicks, setClicks] = useState(0);

  const clicksNumbers = (num) => {
    num > 2 ? setClicks(num + 3) : setClicks(num);
  };

  const counterFunctionality = (counter) => {
    if (clicks <= 1) {
      if (counter <= 1) return counter + 1;
      return counter * 2;
    } else {
      if (counter <= 1) return clicks;
      return counter * clicks;
    }
  };

  return (
    <RowContainer>
      <RowTitle>Count by click's number with 2Sec delay</RowTitle>
      <ColumnContainer>
        <Cube
          functionality={counterFunctionality}
          delay={true}
          clicksNumbers={clicksNumbers}
        />
        <Cube
          functionality={counterFunctionality}
          delay={true}
          clicksNumbers={clicksNumbers}
        />
        <Cube
          functionality={counterFunctionality}
          delay={true}
          clicksNumbers={clicksNumbers}
        />
      </ColumnContainer>
    </RowContainer>
  );
};

export default DelayRowByAddition;
