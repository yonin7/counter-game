import Row from "./components/Row";
import DelayRowByOne from "./components/DelayRowByOne";
import DelayRowByAddition from "./components/DelayRowByAddition";
import DelayRowByRandom from "./components/DelayRowByRandom";

import { AppContainer, Header, Title, MainContainer } from "./AppStyles";

function App() {
  return (
    <AppContainer>
      <Header>
        <Title>COUNTER GAME</Title>
      </Header>
      <MainContainer>
        <Row />
        <DelayRowByOne />
        <DelayRowByAddition />
        <DelayRowByRandom />
      </MainContainer>
    </AppContainer>
  );
}

export default App;
