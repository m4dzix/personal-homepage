import React from "react";
import errorIcon from "../Assets/error.svg";
import { Container, Subheader, Text, GoToGithubButton } from "./styled";
const Loading = () => {
  return (
    <Container>
      <img src={errorIcon} alt=""></img>
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

export default Loading;
