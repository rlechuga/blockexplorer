import { styled } from "styled-components";

import "./App.css";
import BlockExplorer from "./components/BlockExplorer/BlockExplorer";

function App() {
  return (
    <>
      <Container>
        <ExplorerButton> Block Explorer </ExplorerButton>
        <Message> This Block Explorer shows the latest block with all its transactions. </Message>
      </Container>
      <BlockExplorer></BlockExplorer>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #10002b;
`;

const Message = styled.div`
  color: #e0aaff;
  font-size: 1em;
  margin: 1em;
  padding: 0em 025em;
`;

const ExplorerButton = styled.div`
  color: #e0aaff;
  font-size: 2em;
  margin-top: 0.55em;
`;

export default App;
