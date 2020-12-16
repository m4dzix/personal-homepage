import React from "react";
import Section from "./common/Section";
import Tile from "./common/Tile";
import Main from "./common/Main";

function App() {
  return (
    <Main>
      <Section
        body={
          <Tile
            inset={"this is"}
            title={"Magdalena Chęciński"}
            typeOfContent={"IntroducingYourself"}
          ></Tile>
        }
      ></Section>
      <Section
        body={
          <>
            {" "}
            <Tile
              title={"My Skillset includes"}
              typeOfContent={"mySkills"}
            ></Tile>{" "}
            <Tile
              title={"Skills I want to learn"}
              typeOfContent={"SkillsIWantToLearn"}
            ></Tile>
          </>
        }
      ></Section>
      <Section
        body={
          <>
            <Tile
              title={"Movies Browser"}
              typeOfContent={"MyGithubProjects"}
            ></Tile>
            <Tile
              title={"Movies Browser"}
              typeOfContent={"MyGithubProjects"}
            ></Tile>
            <Tile
              title={"Movies Browser"}
              typeOfContent={"MyGithubProjects"}
            ></Tile>
            <Tile
              title={"Movies Browser"}
              typeOfContent={"MyGithubProjects"}
            ></Tile>
          </>
        }
      ></Section>
      <Section
        body={
          <Tile
            inset={"let's talk!"}
            title={
              <a href="mailto:madlen.checinski@gmail.com">
                madlen.checinski@gmail.com
              </a>
            }
          ></Tile>
        }
      ></Section>
    </Main>
  );
}

export default App;
