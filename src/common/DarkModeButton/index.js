import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDarkMode, toggleDarkMode } from "../../projectsSlice";
import { Container, Text, Button, SwichThemeIcon } from "./styled";

const DarkModeButton = () => {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  return (
    <Container>
      <Text>Dark mode {!darkMode ? "off" : "on"}</Text>
      <Button
        onClick={() => {
          dispatch(toggleDarkMode());
        }}
      >
        <SwichThemeIcon />
      </Button>
    </Container>
  );
};

export default DarkModeButton;
