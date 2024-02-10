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
    // render navigation bar
    // TODO
    // render new page with data
    pageView.render(nextPageKey, nextPageData);
    // activateStep side bar
    sideBarView.activateStep(currentPage);
    // update current position state
    model.updateCurrentPosition(currentPageKey, currentIndex);
  } catch (error) {
    console.error("Error navigating to next step", error);
  }
};

const goBack = async function () {
  // find current page
  const currentPagePosition = model.getData("currentPage").position;
  // get previous page
  const allPagesKeys = Object.values(pageKeys);
  const previousPageKey = allPagesKeys[currentPagePosition - 1];
  // loading spinner
  VIEWS_INSTANCE_MAP[previousPageKey].renderSpinner();
  // fetch next page data
  const previousPageData = await model.fetchPageData(previousPageKey);
  // get data of previous page
  const previousPageFormData = model.getPageData(previousPageKey);
  // render UI with data
  pageView.render(previousPageKey, {
    ...previousPageData,
    ...previousPageFormData,
  });
  // render navigation bar
  // TODO
  // activateStep side bar
  sideBarView.activateStep(previousPageKey);
  // update current position state
  const previousIndex = model.getData("currentPage").position - 1;
  model.updateCurrentPosition(previousPageKey, previousIndex);
};

// TODO jumpToPreviousPage

// TODO renderNavigationBar

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
