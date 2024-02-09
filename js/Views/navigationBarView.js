// import iconAdvanced from "url:../../assets/images/icon-advanced.svg";

import { pageKeys } from "../config";
import View from "./View";

class NavigationBarView extends View {
  generateMarkup(_, data) {
    return "markup";
  }

  addHandlerNavigateNext(handler) {
    window.addEventListener("click", async function (e) {
      // e.preventDefault();
      await handler();
    });
  }

  addHandlerNavigateBack(handler) {
    window.addEventListener("click", async function (e) {
      // e.preventDefault();
      await handler();
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
}

export default new NavigationBarView();
