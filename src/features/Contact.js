import React from "react";
import Section from "../common/Section";
import Tile from "../common/Tile";

const Contact = () => {
  return (
    <Section
      body={
        <Tile
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
        ></Tile>
      }
    ></Section>
  );
};

export default Contact;
