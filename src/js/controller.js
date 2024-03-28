import addOnsView from "./Views/addOnsView";
import navigationBarView from "./Views/navigationBarView";
import personalInfoView from "./Views/personalInfoView";
import selectPlanView from "./Views/selectPlanView";
import sideBarView from "./Views/sideBarView";
import summaryView from "./Views/summaryView";
import thankYouView from "./Views/thankYouView";
import { pageKeys } from "./config";
import model from "./model";

const goNext = function () {
  try {
    // get current position
    const currentPageKey = model.getData("currentPage")?.key;
    const currentPositionInstance = VIEWS_INSTANCE_MAP[currentPageKey];
    // validate form
    const isFormValid = "mock" || currentPositionInstance.isFormValid;
    // if form invalid
    if (!isFormValid) {
      // show validation errors
      return;
    }
    // if form valid
    // save data state
    const currentFormData = currentPositionInstance.getFormData();
    model.updatePage(currentPageKey, currentFormData);
    // loading spinner
    currentPositionInstance.renderSpinner();
    // get next step
    const allPagesKeys = Object.values(pageKeys);
    const currentIndex = model.getData("currentPage").position;
    const nextPageKey = allPagesKeys[currentIndex + 1];
    // fetch next page data
    const nextPageStoredData = model.getPageData(nextPageKey);
    // get all data to show in summary
    const summaryData =
      nextPageKey === pageKeys.SUMMARY
        ? {
            ...model.getPageData(pageKeys.SELECT_PLAN),
            ...model.getPageData(pageKeys.ADD_ONS),
          }
        : null;
    // render new page with data
    VIEWS_INSTANCE_MAP[nextPageKey].render({
      ...summaryData,
      ...nextPageStoredData,
    });
    // add event handlers
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
  const rules = VIEWS_INSTANCE_MAP[pageKey].navigationBarVisibilityRules;

  if (rules?.hideNavigationBarView) {
    navigationBarView.hideBar();
    return;
  }

  rules?.hideGoBack
    ? navigationBarView.hideGoBack()
    : navigationBarView.showGoBack();

  rules?.showConfirmBtn
    ? navigationBarView.showConfirmBtn()
    : navigationBarView.showNextStepBtn();
};

const addHandlers = function (pageKey) {
  switch (pageKey) {
    case pageKeys.SUMMARY:
      summaryView.addHandlerJumpToPage(jumpToPreviousPage);
      break;
    case pageKeys.SELECT_PLAN:
      selectPlanView.addHandlerSelectRecurrence(model.getPageData(pageKey));
      break;
    default:
      break;
  }
};

const goBack = function () {
  // get previous page
  const allPagesKeys = Object.values(pageKeys);
  const currentPagePosition = model.getData("currentPage")?.position;
  const previousPageKey = allPagesKeys[currentPagePosition - 1];
  const previousPositionInstance =
    VIEWS_INSTANCE_MAP[allPagesKeys[currentPagePosition - 1]];
  // loading spinner
  previousPositionInstance.renderSpinner();
  // get data of previous page
  const previousPageFormData = model.getPageData(previousPageKey);
  // render UI with data
  previousPositionInstance.render({
    ...previousPageFormData,
  });
  // add event handlers
  addHandlers(previousPageKey);
  // manage navigationBar
  manageNavigationBar(previousPageKey);
  // activateStep side bar
  sideBarView.activateStep(previousPageKey);
  // update current position state
  const previousIndex = model.getData("currentPage").position - 1;
  model.updateCurrentPosition(previousPageKey, previousIndex);
};

const jumpToPreviousPage = function (pageKey) {
  // get data of previous page
  const previousPageFormData = model.getPageData(pageKey);
  // render UI with data
  VIEWS_INSTANCE_MAP[pageKey].render({
    ...previousPageFormData,
  });
  // manage navigationBar
  manageNavigationBar(pageKey);
  // activateStep side bar
  sideBarView.activateStep(pageKey);
  // update current position state
  const newPositionIndex = Object.values(pageKeys).findIndex(
    (page) => page === pageKey
  );
  model.updateCurrentPosition(pageKey, newPositionIndex);
};

const init = function () {
  // get state in localStorage if any
  const storedPages = localStorage.getItem("pages");
  // update state with localStorage if any
  storedPages && model.updateStateWithStoredData(storedPages);

  // current page
  const currentPageKey = model.getPageData()?.key || pageKeys.PERSONAL_INFO;
  // update state with current page
  if (!model.getData("currentPage")?.key) {
    model.updateState("currentPage", { key: currentPageKey, position: 0 });
  }

  // render current page
  const pageData = model.getPageData(currentPageKey);
  VIEWS_INSTANCE_MAP[currentPageKey].render(pageData);

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

  // listen to keyboard enter press
  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      goNext();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      goBack();
    }

    if (e.key === "ArrowRight") {
      goNext();
    }
  });
};

const VIEWS_INSTANCE_MAP = {
  PERSONAL_INFO: personalInfoView,
  SELECT_PLAN: selectPlanView,
  ADD_ONS: addOnsView,
  SUMMARY: summaryView,
  THANK_YOU: thankYouView,
};

init();
