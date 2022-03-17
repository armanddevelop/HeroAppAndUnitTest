export const buildPaths = (path) => {
  if (path !== "") {
    const lastPathSearch = JSON.parse(path);
    const builPath = `${lastPathSearch.pathname}${lastPathSearch.search}`;
    return builPath;
  } else {
    return path;
  }
};
