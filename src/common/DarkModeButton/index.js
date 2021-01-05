import React from "react";
import { Container, Text, Button } from "./styled";
import darkModeButton from "../Assets/darkMode/modeButton.svg";
import lightModeButton from "../Assets/lightMode/modeButton.svg";
import { selectDarkMode, toggleDarkMode } from "../../projectsSlice";
import { useSelector, useDispatch } from "react-redux";

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
        <img
          src={!darkMode ? lightModeButton : darkModeButton}
          alt="toggle mode"
        ></img>
      </Button>
    </Container>
  );
};

export default DarkModeButton;
