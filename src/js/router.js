class Router {
  _routes = [
    {
      route: "personalInfo",
      component: PersonalInfoView,
    },
  ];

  navigate(route) {}
}

export default new Router();
