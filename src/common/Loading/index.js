import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../projectsSlice";
import { Container, Text, Loader } from "./styled";

const Loading = () => {
  const darkMode = useSelector(selectDarkMode);

  return (
    <Container>
      <Text>Please wait, projects are being loaded...</Text>
      <Loader darkMode={darkMode}></Loader>
    </Container>
  );
};

export default Loading;
