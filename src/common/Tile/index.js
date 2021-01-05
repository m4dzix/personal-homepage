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
  Link,
  Icon,
  Subheader,
} from "./styled";
import message from "../Assets/message.svg";
import githubIcon from "../Assets/github.svg";
import linkedinIcon from "../Assets/linkedin.svg";
import facebookIcon from "../Assets/facebook.svg";
import instagramIcon from "../Assets/instagram.svg";
import { MySkills, SkillsIWantToLearn } from "./arraysWithSkills";
import { selectDarkMode } from "../../projectsSlice";
import { useSelector } from "react-redux";

const Tile = ({
  inset,
  title,
  typeOfContent,
  aboutMe,
  contact,
  portfolio,
  myGithubProjects,
  mySkills,
  skillsIWantToLearn,
}) => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <>
      <Container
        aboutMe={aboutMe}
        contact={contact}
        portfolio={portfolio}
        myGithubProjects={myGithubProjects}
      >
        <Photo hidden={typeOfContent !== "aboutMe"}></Photo>
        <div>
          <Inset portfolio={portfolio}>
            {typeOfContent !== "portfolio" ? (
              inset
            ) : (
              <img src={githubIcon} alt=""></img>
            )}
          </Inset>
          <Title
            aboutMe={aboutMe}
            portfolio={portfolio}
            myGithubProjects={myGithubProjects}
            contact={contact}
            mySkills={mySkills}
            skillsIWantToLearn={skillsIWantToLearn}
          >
            {title}
          </Title>
        </div>
        <ContentContainer>
          {(() => {
            switch (typeOfContent) {
              case "aboutMe":
                return (
                  <>
                    <Description>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </Description>
                    <a href="mailto:madlen.checinski@gmail.com">
                      {" "}
                      <Button>
                        <img src={message} alt=""></img> Hire me
                      </Button>
                    </a>
                  </>
                );

              case "mySkills":
                return (
                  <List>
                    {MySkills.map((skill) => (
                      <Item key={skill}>{skill}</Item>
                    ))}
                  </List>
                );
              case "skillsIWantToLearn":
                return (
                  <List>
                    {SkillsIWantToLearn.map((skill) => (
                      <Item key={skill}>{skill}</Item>
                    ))}
                  </List>
                );
              case "portfolio":
                return <Subheader>My recent projects</Subheader>;
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
                        <Link href="https://m4dzix.github.io/movies-browser/">
                          https://m4dzix.github.io/movies-browser/
                        </Link>{" "}
                      </Item>
                      <Item>
                        Live:{" "}
                        <Link href="https://m4dzix.github.io/movies-browser/">
                          https://m4dzix.github.io/movies-browser/
                        </Link>{" "}
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
                    <List contact={contact}>
                      <Item>
                        <a href="https//google.pl">
                          <Icon
                            darkMode={darkMode}
                            src={githubIcon}
                            alt=""
                          ></Icon>
                        </a>
                      </Item>
                      <Item>
                        <a href="https//google.pl">
                          {" "}
                          <Icon
                            darkMode={darkMode}
                            src={facebookIcon}
                            alt=""
                          ></Icon>
                        </a>
                      </Item>
                      <Item>
                        <a href="https//google.pl">
                          {" "}
                          <Icon
                            darkMode={darkMode}
                            src={linkedinIcon}
                            alt=""
                          ></Icon>
                        </a>{" "}
                      </Item>
                      <Item>
                        <a href="https//google.pl">
                          {" "}
                          <Icon
                            darkMode={darkMode}
                            src={instagramIcon}
                            alt=""
                          ></Icon>
                        </a>{" "}
                      </Item>
                    </List>
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
