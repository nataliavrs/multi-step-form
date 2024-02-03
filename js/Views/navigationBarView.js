// import iconAdvanced from "url:../../assets/images/icon-advanced.svg";

class NavigationBarView {
  addHandlerNavigateNext(handler) {
    window.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new NavigationBarView();
