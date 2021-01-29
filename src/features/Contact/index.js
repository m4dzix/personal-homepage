import React from "react";
import { StyledSection } from "../../common/StyledSection";
import { Item, Icon } from "./styled";
import TileWithNoBackground from "../../common/Tiles/TileWithNoBackground";
import { useSocialMedia } from "./mySocialMedias";

const Contact = () => {
  const mySocialMedias = useSocialMedia();

  return (
    <StyledSection>
      <TileWithNoBackground
        aboutMe={true}
        contact={true}
        inset={"let's talk!"}
        title={
          <a href="mailto:madlen.checinski@gmail.com" rel="noreferrer noopener">
            madlen.checinski@gmail.com
          </a>
        }
        description={
          "I am open to any proposals for cooperation and development opportunities. If you want to have your own website or application - please contact me. We can help each other"
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
                  src={mySocialMedia.socialMediaIcon()}
                  alt={mySocialMedia.alt}
                />
              </a>
            </Item>
          );
        })}
      ></TileWithNoBackground>
    </StyledSection>
  );
};

export default Contact;
