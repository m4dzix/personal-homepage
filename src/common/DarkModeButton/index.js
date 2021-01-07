import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDarkMode, toggleDarkMode } from "../../projectsSlice";
import { Container, Text, Button } from "./styled";
import darkModeButton from "../Assets/darkMode/modeButton.svg";
import lightModeButton from "../Assets/lightMode/modeButton.svg";

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
