import React from "react";
import { useSelector } from "react-redux";
import { Container, Subheader, Text, GoToGithubButton } from "./styled";
import { selectDarkMode } from "../../projectsSlice";
import errorIcon from "../Assets/lightMode/error.svg";
import darkModeErrorIcon from "../Assets/darkMode/error.svg";

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
      <GoToGithubButton
        href="https://github.com/m4dzix"
        rel="noreferrer noopener"
        target="_blank"
      >
        Go to Github
      </GoToGithubButton>
    </Container>
  );
};

export default Error;
