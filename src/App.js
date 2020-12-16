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
            introducingYourself={true}
            inset={"this is"}
            title={"Magdalena Chęciński"}
            typeOfContent={"introducingYourself"}
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
              typeOfContent={"skillsIWantToLearn"}
            ></Tile>
          </>
        }
      ></Section>
      <Section
        myGithubProjects={true}
        body={
          <>
            <Tile
              myGithubProjects={true}
              title={"Movies Browser"}
              typeOfContent={"myGithubProjects"}
            ></Tile>
            <Tile
              myGithubProjects={true}
              title={"Movies Browser"}
              typeOfContent={"myGithubProjects"}
            ></Tile>
            <Tile
              myGithubProjects={true}
              title={"Movies Browser"}
              typeOfContent={"myGithubProjects"}
            ></Tile>
            <Tile
              myGithubProjects={true}
              title={"Movies Browser"}
              typeOfContent={"myGithubProjects"}
            ></Tile>
          </>
        }
      ></Section>
      <Section
        body={
          <Tile
            introducingYourself={true}
            contact={true}
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
