export const getProject = async () => {
  const api = `https://api.github.com/repos/m4dzix/movies-browser`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const project = await response.json();

  return project;
};
