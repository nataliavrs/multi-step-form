// import iconAdvanced from "url:../../assets/images/icon-advanced.svg";

class NavigationBarView {
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

  updateBtnText() {}

  hideBar() {}

  hideGoBack() {}

  disableSubmit() {}
}

export default new NavigationBarView();
