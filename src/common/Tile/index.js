import React from "react";
import {
  Container,
  Photo,
  Title,
  ContentContainer,
  Description,
  Button,
  List,
  Item,
  Inset,
} from "./styled";
import { mySkilles, skillsIWantToLearn } from "./arraysWithSkills";

const Tile = ({
  inset,
  title,
  typeOfContent,
  introducingYourself,
  contact,
  myGithubProjects,
}) => {
  return (
    <>
      <Container
        introducingYourself={introducingYourself}
        contact={contact}
        myGithubProjects={myGithubProjects}
      >
        <Photo hidden={typeOfContent !== "introducingYourself"}></Photo>
        <div>
          <Inset>{inset}</Inset>
          <Title
            introducingYourself={introducingYourself}
            myGithubProjects={myGithubProjects}
            contact={contact}
          >
            {title}
          </Title>
        </div>
        <ContentContainer>
          {(() => {
            switch (typeOfContent) {
              case "introducingYourself":
                return (
                  <>
                    <Description>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </Description>
                    <Button>Hire me</Button>
                  </>
                );

              case "mySkills":
                return (
                  <List>
                    {mySkilles.map((skill) => (
                      <Item key={skill}>{skill}</Item>
                    ))}
                  </List>
                );
              case "skillsIWantToLearn":
                return (
                  <List>
                    {skillsIWantToLearn.map((skill) => (
                      <Item key={skill}>{skill}</Item>
                    ))}
                  </List>
                );
              case "myGithubProjects":
                return (
                  <>
                    <Description myGithubProjects={myGithubProjects}>
                      Project description, e.g. website where you can search for
                      favourite movies and people. Project description, e.g.
                      website where you can search.
                    </Description>
                    <List myGithubProjects={myGithubProjects}>
                      <Item>
                        {" "}
                        Demo:{" "}
                        <a href="https://m4dzix.github.io/movies-browser/">
                          https://m4dzix.github.io/movies-browser/
                        </a>
                      </Item>
                      <Item>
                        Live:{" "}
                        <a href="https://m4dzix.github.io/movies-browser/">
                          https://m4dzix.github.io/movies-browser/
                        </a>
                      </Item>
                    </List>
                  </>
                );

              default:
                return (
                  <>
                    <Description>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet.
                    </Description>
                  </>
                );
            }
          })()}
        </ContentContainer>
      </Container>
    </>
  );
};

export default Tile;
