export const getProject = async () => {
  const api = `https://api.github.com/users/m4dzix/repos`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const project = await response.json();

  return project;
};
console.log(getProject());
