import { useState } from "react";
import Cube from "./Cube";

import { RowContainer } from "./RowStyles";

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
    </RowContainer>
  );
};

export default DelayRowByAddition;
