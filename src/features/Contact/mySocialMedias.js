import githubIcon from "../../common/Assets/lightMode/github.svg";
import linkedinIcon from "../../common/Assets/lightMode/linkedin.svg";
import facebookIcon from "../../common/Assets/lightMode/facebook.svg";
import instagramIcon from "../../common/Assets/lightMode/instagram.svg";
import darkModeGithubIcon from "../../common/Assets/darkMode/github.svg";
import darkModeLinkedinIcon from "../../common/Assets/darkMode/linkedin.svg";
import darkModeFacebookIcon from "../../common/Assets/darkMode/facebook.svg";
import darkModeInstagramIcon from "../../common/Assets/darkMode/instagram.svg";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../projectsSlice";

export const useSocialMedia = () => {
  const darkMode = useSelector(selectDarkMode);
  return [
    {
      name: "github",
      socialMediaIcon: () => (!darkMode ? githubIcon : darkModeGithubIcon),
      urlAdress: "https://github.com/m4dzix",
      alt: "Link to my github",
      title: "https://github.com",
    },
    {
      name: "facebook",
      socialMediaIcon: () => (!darkMode ? facebookIcon : darkModeFacebookIcon),
      urlAdress: "https://www.facebook.com/magda.piatkowska.146",
      alt: "Link to my facebook",
      title: "www.facebook.com",
    },
    {
      name: "linkedin",
      socialMediaIcon: () => (!darkMode ? linkedinIcon : darkModeLinkedinIcon),
      urlAdress: "https://www.linkedin.com/",
      alt: "Link to my linkedin",
      title: "https://www.linkedin.com/",
    },
    {
      name: "instagram",
      socialMediaIcon: () =>
        !darkMode ? instagramIcon : darkModeInstagramIcon,
      urlAdress: "https://www.instagram.com/madzix08/",
      alt: "Link to my instagram",
      title: "https://www.instagram.com/",
    },
  ];
};
