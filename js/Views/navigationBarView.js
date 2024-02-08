// import iconAdvanced from "url:../../assets/images/icon-advanced.svg";

import { pageKeys } from "../config";
import View from "./View";

class NavigationBarView extends View {
  generateMarkup(_, data) {
    return "markup";
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

  showBar() {}

  hideGoBack() {}

  showGoBack() {}

  disableSubmit() {}

  enableSubmit() {}
}

export default new NavigationBarView();
