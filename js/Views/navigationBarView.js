// import iconAdvanced from "url:../../assets/images/icon-advanced.svg";

import { pageKeys } from "../config";
import View from "./View";

class NavigationBarView extends View {
  generateMarkup(data) {
    return "currentPage.key === pageKeys[1] ? noback : markup";
  }

  addHandlerNavigateNext(handler) {
    window.addEventListener("click", function (e) {
      // e.preventDefault();
      handler();
    });
  }

  addHandlerNavigateBack(handler) {
    window.addEventListener("click", function (e) {
      // e.preventDefault();
      handler();
    });
  }

  updateBtnText() {
    if ("confirm") {
      // get next step update text
    }
  }

  hideBar() {}

  hideGoBack() {}

  disableSubmit() {}
}

export default new NavigationBarView();
