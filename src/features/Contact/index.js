import React from "react";
import Section from "../../common/Section";
import { Item, Icon } from "./styled";
import TileWithNoBackground from "../../common/TileWithNoBackground";
import { useSocialMedia } from "./mySocialMedias";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../projectsSlice";
const Contact = () => {
  const darkMode = useSelector(selectDarkMode);
  const mySocialMedias = useSocialMedia(darkMode);
  console.log(mySocialMedias);
  return (
    <Section
      body={
        <TileWithNoBackground
          aboutMe={true}
          contact={true}
          inset={"let's talk!"}
          title={
            <a
              href="mailto:madlen.checinski@gmail.com"
              rel="noreferrer noopener"
            >
              madlen.checinski@gmail.com
            </a>
          }
          bodyList={mySocialMedias.map((mySocialMedia) => {
            return (
              <Item key={mySocialMedia.name}>
                <a
                  href={mySocialMedia.urlAdress}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Icon
                    darkMode={darkMode}
                    src={mySocialMedia.socialMediaIcon()}
                    alt={mySocialMedia.alt}
                  ></Icon>
                </a>
              </Item>
            );
          })}
        ></TileWithNoBackground>
      }
    ></Section>
  );
};

export default Contact;
