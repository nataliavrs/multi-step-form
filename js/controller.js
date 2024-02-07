import navigationBarView from "./Views/navigationBarView";
import pageView from "./Views/pageView";
import sideBarView from "./Views/sideBarView";
import { pageKeys } from "./config";
import model from "./model";

// TODO
const goNext = function () {
  // validate form
  const currentPosition = "sideBarView" || model.getItem("currentPage").key;
  const currentForm = currentPosition.validatedForm();
  // if invalid
  if (!currentForm.valid) return;

  // if valid
  // save data state & storage
  model.updateState(currentPosition);
  model.updateState(currentForm.data);
  // get next step data
  // loading spinner
  // render new page with data
  // this.pageView.render(pageKeys[currentPage.position], currentPage);
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
  const storedPages = localStorage.getItem("pages");
  // update state with localStorage if any
  storedPages && model.updateStateWithStoredData(storedPages);

  // current page
  const currentPage = storedPages.pages.currentPage || pageKeys[1];
  // render current page
  pageView.render(currentPage.key);

  // render side bar
  sideBarView.render();
  sideBarView.activateStep(currentPage);

  // render navigationBar
  navigationBarView.render();
  currentPage.key === pageKeys[1] && navigationBarView.hideGoBack();
  currentPage.key === pageKeys["penumtilma"] &&
    navigationBarView.updateBtnText("confirm");
  currentPage.key === pageKeys["last"] && navigationBarView.hideBar();
  // add event listeners to navigationBar
  navigationBarView.addHandlerNavigateNext(goNext);
  navigationBarView.addHandlerNavigateBack(goBack);
};

// init();
