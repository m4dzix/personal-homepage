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
  description,
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
                      My name is Magdalena. I am an ambitious person taking my
                      first steps in the front-end. I recently completed the
                      Become a Front-End Developer course, organized by
                      Youcode.pl. I've already learned a lot about HTML, CSS, JS
                      and also React- which i love. I would like to further
                      expand my knowledge and skills. Below are some of my
                      projects
                    </Description>
                    <a
                      href="mailto:madlen.checinski@gmail.com"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
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
                      {description}
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
                      I am open to any proposals for cooperation and development
                      opportunities. If you want to have your own website or
                      application - please contact me. We can help each other
                    </Description>
                    <List contact={contact}>
                      <Item>
                        <a
                          href="https://github.com/m4dzix"
                          rel="noreferrer noopener"
                          target="_blank"
                        >
                          <Icon
                            darkMode={darkMode}
                            src={!darkMode ? githubIcon : darkModeGithubIcon}
                            alt=""
                          ></Icon>
                        </a>
                      </Item>
                      <Item>
                        <a
                          href="https://www.facebook.com/magda.piatkowska.146"
                          rel="noreferrer noopener"
                          target="_blank"
                        >
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
                        <a href="" rel="noreferrer noopener" target="_blank">
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
                        <a href="" rel="noreferrer noopener" target="_blank">
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
