import { descriptionOfProjects } from "./descriptionOfProjects";

export const findDescriptionOfProject = (name) => {
  const findProject = descriptionOfProjects.find(
    (descriptionOfProject) => descriptionOfProject.name === name
  );
  return findProject.description;
};
