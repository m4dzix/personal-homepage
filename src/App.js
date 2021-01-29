import React from "react";
import Main from "./common/Main";
import DarkModeButton from "./common/DarkModeButton";
import AboutMe from "./features/AboutMe";
import ListsOfSkills from "./features/ListsOfSkills";
import Portfolio from "./features/Portfolio";
import MyGithubProjects from "./features/MyGithubProjects";
import Contact from "./features/Contact/";
import { selectDarkMode } from "./projectsSlice";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <ThemeProvider theme={!darkMode ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Main>
        <DarkModeButton />
        <AboutMe />
        <ListsOfSkills />
        <Portfolio />
        <MyGithubProjects />
        <Contact />
      </Main>
    </ThemeProvider>
  );
}

export default App;
