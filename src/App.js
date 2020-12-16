import React from "react";
import Section from "./common/Section";
import Tile from "./common/Tile";
import Main from "./common/Main";

function App() {
  return (
    <Main>
      <Section
        body={<Tile title={"Magdalena Chęciński"} inset={"this is"}></Tile>}
      ></Section>
    </Main>
  );
}

export default App;
