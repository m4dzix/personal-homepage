import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProject, selectLoading, fetchProject } from "../projectsSlice";
import Section from "../common/Section";
import GithubProjectsTile from "../common/GithubProjectsTile";
import Loading from "../common/Loading";
import Error from "../common/Error";

const MyGithubProjects = () => {
  const projects = useSelector(selectProject);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  console.log(projects);
  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  if (!loading && projects.length > 0) {
    return (
      <Section
        myGithubProjects={true}
        body={projects.map((project) => {
          return (
            <GithubProjectsTile
              key={project.name}
              myGithubProjects={true}
              title={project.name}
              typeOfContent={"myGithubProjects"}
              description={project.description}
              urlAdressToDemo={project.html_url}
              urlAdressToLive={`https://${project.owner.login}.github.io/${project.name}/`}
            ></GithubProjectsTile>
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
