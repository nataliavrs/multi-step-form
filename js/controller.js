import addOnsView from "./Views/addOnsView";
import navigationBarView from "./Views/navigationBarView";
import pageView from "./Views/pageView";
import personalInfoView from "./Views/personalInfoView";
import selectPlanView from "./Views/selectPlanView";
import sideBarView from "./Views/sideBarView";
import summaryView from "./Views/summaryView";
import thankYouView from "./Views/thankYouView";
import { pageKeys } from "./config";
import model from "./model";

// TODO
const goNext = function () {
  // validate form
  const currentPosition = model.getItem("currentPage").key;
  const isFormValid = VIEWS_INSTANCE_MAP[currentPosition].isFormValid();
  // if invalid
  if (!isFormValid) return;

  // if valid
  // save data state & storage
  model.updateState(currentPosition, "currentPage");
  model.updateState(currentForm.data, currentPosition);
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
  const currentPage = model.getData("currentPage").key || pageKeys[1];
  // update state with current page
  if (!model.getData("currentPage").key) {
    model.updateState(currentPage, "currentPage");
  }

  // render current page
  pageView.render(currentPage);

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

init();

const VIEWS_INSTANCE_MAP = {
  PERSONAL_INFO: personalInfoView,
  SELECT_PLAN: selectPlanView,
  ADD_ONS: addOnsView,
  SUMMARY: summaryView,
  THANK_YOU: thankYouView,
};
