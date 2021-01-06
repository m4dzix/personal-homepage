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
import githubIcon from "../Assets/lightMode/github.svg";
import linkedinIcon from "../Assets/lightMode/linkedin.svg";
import facebookIcon from "../Assets/lightMode/facebook.svg";
import instagramIcon from "../Assets/lightMode/instagram.svg";
import darkModeGithubIcon from "../Assets/darkMode/github.svg";
import darkModeLinkedinIcon from "../Assets/darkMode/linkedin.svg";
import darkModeFacebookIcon from "../Assets/darkMode/facebook.svg";
import darkModeInstagramIcon from "../Assets/darkMode/instagram.svg";
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
  urlAdressToDemo,
  urlAdressToLive,
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
                    <Description aboutMe={aboutMe}>
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
                  <List darkMode={darkMode}>
                    {MySkills.map((skill) => (
                      <Item key={skill}>{skill}</Item>
                    ))}
                  </List>
                );
              case "skillsIWantToLearn":
                return (
                  <List darkMode={darkMode}>
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
                        <Link href={urlAdressToDemo}>
                          {urlAdressToDemo}
                        </Link>{" "}
                      </Item>
                      <Item>
                        Live:{" "}
                        <Link href={urlAdressToLive}>{urlAdressToLive}</Link>{" "}
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
                            src={!darkMode ? githubIcon : darkModeGithubIcon}
                            alt=""
                          ></Icon>
                        </a>
                      </Item>
                      <Item>
                        <a href="https//google.pl">
                          {" "}
                          <Icon
                            darkMode={darkMode}
                            src={
                              !darkMode ? facebookIcon : darkModeFacebookIcon
                            }
                            alt=""
                          ></Icon>
                        </a>
                      </Item>
                      <Item>
                        <a href="https//google.pl">
                          {" "}
                          <Icon
                            darkMode={darkMode}
                            src={
                              !darkMode ? linkedinIcon : darkModeLinkedinIcon
                            }
                            alt=""
                          ></Icon>
                        </a>{" "}
                      </Item>
                      <Item>
                        <a href="https//google.pl">
                          {" "}
                          <Icon
                            darkMode={darkMode}
                            src={
                              !darkMode ? instagramIcon : darkModeInstagramIcon
                            }
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
