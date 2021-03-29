const resolveRoutes = (route) => {
  if (route === '/') {
    return route;
  }
  if (route.length <= 3) {
    return '/:id';
  }
  return `/${route}`;
};

export default resolveRoutes;