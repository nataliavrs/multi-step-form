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

const goNext = async function () {
  try {
    const currentPosition =
      VIEWS_INSTANCE_MAP[model.getData("currentPage").key];
    // validate form
    const isFormValid = currentPosition.isFormValid();
    // if invalid
    if (!isFormValid) {
      // show validation errors
      return;
    }

    // if valid
    // save data state
    const currentFormData = currentPosition.getFormData();
    model.updatePage(
      currentFormData,
      pageKeys[model.getData("currentPage").key]
    );
    // loading spinner
    currentPosition.renderSpinner();
    // get next step
    const allPagesKeys = Object.values(pageKeys);
    const currentIndex = model.getData("currentPage").position;
    const nextPageKey = allPagesKeys[currentIndex + 1];
    // fetch next page data
    const nextPageData = await model.fetchPageData(nextPageKey);
    // render new page with data
    pageView.render(nextPageKey, nextPageData);
    // activateStep side bar
    sideBarView.activateStep(currentPage);
    // update current position state
    model.updatePosition(currentIndex);
  } catch (error) {
    console.error("Error navigating to next step", error);
  }
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
  const currentPageKey =
    model.getData("currentPage").key || pageKeys.personalInfo;
  // update state with current page
  if (!model.getData("currentPage").key) {
    model.updateState(currentPageKey, "currentPage");
  }

  // render current page
  pageView.render(currentPageKey);

  // render side bar
  sideBarView.render();
  sideBarView.activateStep(currentPageKey);

  // render navigationBar
  navigationBarView.render();
  currentPageKey.key === pageKeys.personalInfo &&
    navigationBarView.hideGoBack();
  currentPageKey.key === pageKeys.summary &&
    navigationBarView.updateBtnText("confirm");
  currentPageKey.key === pageKeys.thankYou && navigationBarView.hideBar();
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
