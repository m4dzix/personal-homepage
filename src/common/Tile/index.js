import React from "react";
import {
  Container,
  Photo,
  Inset,
  Title,
  ContentContainer,
  Description,
  Button,
  List,
  Item,
} from "./styled";
import { mySkilles, SkillsIWantToLearn } from "./arraysWithSkills";

const Tile = ({
  inset,
  title,
  typeOfContent,
  IntroducingYourself,
  contact,
  MyGithubProjects,
}) => {
  return (
    <>
      <Container
        IntroducingYourself={IntroducingYourself}
        contact={contact}
        MyGithubProjects={MyGithubProjects}
      >
        <Photo hidden={typeOfContent !== "IntroducingYourself"}></Photo>
        <div>
          <Inset>{inset}</Inset>
          <Title MyGithubProjects={MyGithubProjects} contact={contact}>
            {title}
          </Title>
        </div>
        <ContentContainer>
          {(() => {
            switch (typeOfContent) {
              case "IntroducingYourself":
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
              case "SkillsIWantToLearn":
                return (
                  <List>
                    {SkillsIWantToLearn.map((skill) => (
                      <Item key={skill}>{skill}</Item>
                    ))}
                  </List>
                );
              case "MyGithubProjects":
                return (
                  <>
                    <Description>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </Description>
                    <List MyGithubProjects={MyGithubProjects}>
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
