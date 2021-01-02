import React from "react";
import Main from "./common/Main";
import DarkModeButton from "./common/DarkModeButton";
import AboutMe from "./features/AboutMe";
import ListsOfSkills from "./features/ListsOfSkills";
import Portfolio from "./features/Portfolio";
import MyGithubProjects from "./features/MyGithubProjects";
import Contact from "./features/Contact";

function App() {
  return (
    <Main>
      <DarkModeButton />
      <AboutMe />
      <ListsOfSkills />
      <Portfolio />
      <MyGithubProjects />
      <Contact />
    </Main>
  );
}

export default App;
