import navigationBarView from "./Views/navigationBarView";
import pageView from "./Views/pageView";
import sideBarView from "./Views/sideBarView";

const goNext = function () {
  // validate form
  // if valid
  // save data state
  // get next step data
  // loading
  // render new page with data
  const currentPage = this.model.state.currentPage;
  this.pageView.render(pageKeys[currentPage.position], currentPage);
  // activateStep side bar
  // navigate
  // else
  // disable next button
  // return
};

const goBack = function () {
  // get data
  // activateStep
  // change route
  // render UI with data
};

const init = function () {
  // get state in localStorage if any
  const currentPage = localStorage.getItem("page") || pageKeys[1];
  // update state with localStorage if any
  model.updateState(currentPage, "storedPage");
  // render side bar
  sideBarView.render();
  sideBarView.activateStep(currentPage);

  // render initial page
  pageView.render(currentPage.key, currentPage);
  // render navigationBar
  // add event listeners to navigationBar
  navigationBarView.addHandlerNavigateNext(goNext);
  navigationBarView.addHandlerNavigateBack(goBack);
};

const pageKeys = {
  1: "PERSONAL_INFO",
  2: "SELECT_PLAN",
};

init();
