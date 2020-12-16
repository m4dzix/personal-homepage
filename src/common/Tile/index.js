import React from "react";
import {
  Container,
  Photo,
  Inset,
  Title,
  ContentContainer,
  Description,
  Button,
} from "./styled";

const Tile = ({ inset, title }) => {
  return (
    <>
      <Container>
        <Photo></Photo>
        <div>
          <Inset>{inset}</Inset>
          <Title>{title}</Title>
        </div>
        <ContentContainer>
          <>
            <Description>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Description>
            <Button>Hire me</Button>
          </>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Tile;
