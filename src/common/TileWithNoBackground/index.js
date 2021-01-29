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

  typeOfContent,
  aboutMe,
  contact,
  bodyList,
}) => {
  return (
    <Container aboutMe={aboutMe} contact={contact}>
      <Photo hidden={typeOfContent !== "aboutMe"}></Photo>

      <Inset>{inset}</Inset>
      <Title aboutMe={aboutMe} contact={contact}>
        {title}
      </Title>
      <ContentContainer aboutMe={aboutMe} contact={contact}>
        {typeOfContent === "aboutMe" ? (
          <>
            <Description aboutMe={aboutMe}>
              My name is Magdalena. I am an ambitious person taking my first
              steps in the front-end. I recently completed the Become a
              Front-End Developer course, organized by Youcode.pl. I've already
              learned a lot about HTML, CSS, JS and also React- which I love. I
              would like to further expand my knowledge and skills. Below are
              some of my projects
            </Description>
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
            <Description>
              I am open to any proposals for cooperation and development
              opportunities. If you want to have your own website or application
              - please contact me. We can help each other
            </Description>
            <List>{bodyList}</List>
          </>
        )}
      </ContentContainer>
    </Container>
  );
};

export default TileWithNoBackground;
