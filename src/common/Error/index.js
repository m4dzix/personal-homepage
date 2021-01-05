import React from "react";
import errorIcon from "../Assets/lightMode/error.svg";
import darkModeErrorIcon from "../Assets/darkMode/error.svg";
import { Container, Subheader, Text, GoToGithubButton } from "./styled";
import { selectDarkMode } from "../../projectsSlice";
import { useSelector } from "react-redux";

const Error = () => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <Container>
      <img src={!darkMode ? errorIcon : darkModeErrorIcon} alt=""></img>
      <Subheader>Ooops! Something went wrong...</Subheader>
      <Text>
        Sorry, failed to load Github projects.
        <br />
        You can check them directly on Github.
      </Text>
      <GoToGithubButton href="https://github.com/m4dzix">
        Go to Github
      </GoToGithubButton>
    </Container>
  );
};

export default Error;
