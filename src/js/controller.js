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
      VIEWS_INSTANCE_MAP[model.getData("currentPage")?.key];
    const currentPageKey = model.getData("currentPage")?.key;

    // validate form
    const isFormValid = "mock" || currentPosition.isFormValid;
    // if invalid
    if (!isFormValid) {
      // show validation errors
      return;
    }

    // if valid
    // save data state
    const currentFormData = currentPosition.getFormData();
    model.updatePage(currentPageKey, currentFormData);
    // loading spinner
    currentPosition.renderSpinner();
    // get next step
    const allPagesKeys = Object.values(pageKeys);
    const currentIndex = model.getData("currentPage").position;
    const nextPageKey = allPagesKeys[currentIndex + 1];
    // fetch next page data
    const nextPageData = await model.fetchPageData(nextPageKey);
    const nextPageStoredData = model.getPageData(nextPageKey);
    // render new page with data
    if (nextPageKey === pageKeys.SUMMARY) {
      summaryView.render({
        ...nextPageData,
        ...nextPageStoredData,
      });
    } else {
      pageView.render(nextPageKey, { ...nextPageData, ...nextPageStoredData });
    }
    // add handlers
    addHandlers(nextPageKey);
    // manage navigationBar
    manageNavigationBar(nextPageKey);
    // update current position state
    model.updateCurrentPosition(nextPageKey, currentIndex + 1);
    // activateStep side bar
    if (nextPageKey === pageKeys.THANK_YOU) {
      return;
    } else {
      sideBarView.activateStep(nextPageKey);
    }
    // console.log("next position", model.getData("currentPage").position);
  } catch (error) {
    console.error("Error navigating to next step", error);
  }
};

const manageNavigationBar = function (pageKey) {
  pageKey !== pageKeys.PERSONAL_INFO && navigationBarView.showGoBack();
  pageKey === pageKeys.PERSONAL_INFO && navigationBarView.hideGoBack();
  pageKey === pageKeys.SUMMARY && navigationBarView.showConfirmBtn();
  pageKey !== pageKeys.SUMMARY && navigationBarView.showNextStepBtn();
  pageKey === pageKeys.THANK_YOU && navigationBarView.hideBar();
};

const addHandlers = function (pageKey) {
  switch (pageKey) {
    case pageKeys.SUMMARY:
      summaryView.addHandlerJumpToPage(jumpToPreviousPage);
      break;
    case pageKeys.SELECT_PLAN:
      selectPlanView.addHandlerSelectRecurrence();
      break;
    default:
      break;
  }
};

const goBack = async function () {
  // find current page
  const currentPagePosition = model.getData("currentPage")?.position;
  // get previous page
  const allPagesKeys = Object.values(pageKeys);
  const previousPageKey = allPagesKeys[currentPagePosition - 1];
  // loading spinner
  VIEWS_INSTANCE_MAP[previousPageKey].renderSpinner();
  // // fetch next page data
  // const previousPageData = await model.fetchPageData(previousPageKey);
  // get data of previous page
  const previousPageFormData = model.getPageData(previousPageKey);
  // render UI with data
  if (previousPageKey === pageKeys.SUMMARY) {
    summaryView.render({
      // ...previousPageData,
      ...previousPageFormData,
    });
  } else {
    pageView.render(previousPageKey, {
      // ...previousPageData,
      ...previousPageFormData,
    });
  }
  // add handlers
  addHandlers(previousPageKey);
  // manage navigationBar
  manageNavigationBar(previousPageKey);
  // activateStep side bar
  sideBarView.activateStep(previousPageKey);
  // update current position state
  const previousIndex = model.getData("currentPage").position - 1;
  model.updateCurrentPosition(previousPageKey, previousIndex);
  console.log("back position", model.getData("currentPage").position);
};

const jumpToPreviousPage = async function (pageKey) {
  // fetch page data
  const previousPageData = await model.fetchPageData(pageKey);
  // get data of previous page
  const previousPageFormData = model.getPageData(pageKey);
  // render UI with data
  pageView.render(pageKey, {
    ...previousPageData,
    ...previousPageFormData,
  });
  // manage navigationBar
  manageNavigationBar(pageKey);
  // activateStep side bar
  sideBarView.activateStep(pageKey);
};

const init = function () {
  // get state in localStorage if any
  const storedPages = localStorage.getItem("pages");
  // update state with localStorage if any
  storedPages && model.updateStateWithStoredData(storedPages);

  // current page
  const currentPageKey =
    model.getData("currentPage")?.key || pageKeys.PERSONAL_INFO;
  // update state with current page
  if (!model.getData("currentPage")?.key) {
    model.updateState("currentPage", { key: currentPageKey, position: 0 });
  }

  // render current page
  const pageData = model.getPageData(currentPageKey);
  pageView.render(currentPageKey, pageData);

  // render side bar
  sideBarView.render();
  sideBarView.activateStep(currentPageKey);

  // render navigationBar
  navigationBarView.render();
  // manage navigationBar
  manageNavigationBar(currentPageKey);

  // add event listeners
  navigationBarView.addHandlerNavigateNext(goNext);
  navigationBarView.addHandlerNavigateBack(goBack);
};

const VIEWS_INSTANCE_MAP = {
  PERSONAL_INFO: personalInfoView,
  SELECT_PLAN: selectPlanView,
  ADD_ONS: addOnsView,
  SUMMARY: summaryView,
  THANK_YOU: thankYouView,
};

init();
