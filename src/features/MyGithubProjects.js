import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProject, selectLoading, fetchProject } from "../projectsSlice";
import { StyledSection } from "../common/StyledSection";
import GithubProjectsTile from "../common/GithubProjectsTile";
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
      <StyledSection
        myGithubProjects={true}
        children={projects.map((project) => {
          return (
            <GithubProjectsTile
              key={project.name}
              myGithubProjects={true}
              title={project.name}
              typeOfContent={"myGithubProjects"}
              description={project.description}
              urlAdressToDemo={project.html_url}
              urlAdressToLive={project.homepage}
            ></GithubProjectsTile>
          );
        })}
      ></StyledSection>
    );
  } else if (!!loading) {
    return <Loading />;
  } else {
    return <Error />;
  }
};

export default MyGithubProjects;
