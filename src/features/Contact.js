import React from "react";
import Section from "../common/Section";
import TileWithNoBackground from "../common/TileWithNoBackground";

const Contact = () => {
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
        ></TileWithNoBackground>
      }
    ></Section>
  );
};

export default Contact;
