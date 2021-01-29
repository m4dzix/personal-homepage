const userName = "m4dzix";

export const getProject = async () => {
  const api = `https://api.github.com/users/${userName}/repos`;

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
