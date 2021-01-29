import React from "react";
import { Container, Text, Loader } from "./styled";

const Loading = () => {
  return (
    <Container>
      <Text>Please wait, projects are being loaded...</Text>
      <Loader />
    </Container>
  );
};

export default Loading;
