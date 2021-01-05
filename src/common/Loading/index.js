import React from "react";
import { Container, Text, Loader } from "./styled";
import { selectDarkMode } from "../../projectsSlice";
import { useSelector } from "react-redux";

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
