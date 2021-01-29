import React from "react";
import message from "../Assets/message.svg";
import {
  Container,
  Photo,
  Title,
  ContentContainer,
  Description,
  Button,
  List,
  Inset,
} from "./styled";

const TileWithNoBackground = ({
  inset,
  title,
  description,
  typeOfContent,
  aboutMe,
  contact,
  bodyList,
}) => {
  return (
    <Container aboutMe={aboutMe} contact={contact}>
      <Photo hidden={typeOfContent !== "aboutMe"}></Photo>
      <div>
        <Inset>{inset}</Inset>
        <Title aboutMe={aboutMe} contact={contact}>
          {title}
        </Title>
      </div>
      <ContentContainer aboutMe={aboutMe} contact={contact}>
        {typeOfContent === "aboutMe" ? (
          <>
            <Description aboutMe={aboutMe}>{description}</Description>
            <a
              href="mailto:madlen.checinski@gmail.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <Button>
                <img src={message} alt="Letter icon. Send message"></img> Hire
                me
              </Button>
            </a>
          </>
        ) : (
          <>
            <Description>{description}</Description>
            <List>{bodyList}</List>
          </>
        )}
      </ContentContainer>
    </Container>
  );
};

export default TileWithNoBackground;
