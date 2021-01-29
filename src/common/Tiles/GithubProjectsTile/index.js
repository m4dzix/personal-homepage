import React from "react";

import {
  Container,
  Title,
  ContentContainer,
  Description,
  List,
  Item,
  Link,
} from "./styled";

const GithubProjectsTile = ({
  title,
  urlAdressToDemo,
  urlAdressToLive,
  description,
}) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <ContentContainer>
          <Description>{description}</Description>
          <List>
            <Item>
              {" "}
              Demo:{" "}
              <Link
                href={urlAdressToDemo}
                rel="noreferrer noopener"
                target="_blank"
              >
                {urlAdressToDemo}
              </Link>{" "}
            </Item>
            <Item>
              Live:{" "}
              <Link
                href={urlAdressToLive}
                rel="noreferrer noopener"
                target="_blank"
              >
                {urlAdressToLive}
              </Link>{" "}
            </Item>
          </List>
        </ContentContainer>
      </Container>
    </>
  );
};

export default GithubProjectsTile;
