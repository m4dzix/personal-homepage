import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProject, selectLoading, fetchProject } from "../projectsSlice";
import Section from "../common/Section";
import Tile from "../common/Tile";
import Loading from "../common/Loading";
import Error from "../common/Error";

const MyGithubProjects = () => {
  const projects = useSelector(selectProject);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  if (!loading && projects.length > 0) {
    return (
      <Section
        myGithubProjects={true}
        body={projects.map((project) => {
          return (
            <Tile
              key={project.name}
              myGithubProjects={true}
              title={project.name}
              typeOfContent={"myGithubProjects"}
              urlAdressToDemo={project.html_url}
              urlAdressToLive={`https://${project.owner.login}.github.io/${project.name}/`}
            ></Tile>
          );
        })}
      ></Section>
    );
  } else if (!!loading) {
    return <Loading />;
  } else {
    return <Error />;
  }
};

export default MyGithubProjects;
