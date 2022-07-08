export const PATHS = {
  ABOUT_PAGE: {
    ROUTE: "/",
  },
  FORMATIONS_PAGE: {
    ROUTE: "/formation",
  },
  SKILLS_PAGE: {
    ROUTE: "/skills",
  },
  EXPERIENCES_PAGE: {
    ROUTE: "/experiences",
  },
  ACTIVITIES_PAGE: {
    ROUTE: "/activities",
  },
  CONTACT_PAGE: {
    ROUTE: "/contact",
  },
};

export const getRouteWithParameters = (
  route: string,
  params: { [key: string]: string }
): string => {
  let resultRoute = route;
  Object.entries(params).forEach((parameters) => {
    resultRoute = resultRoute.replace(`:${parameters[0]}`, parameters[1]);
  });

  return resultRoute;
};
