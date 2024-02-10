import View from "./View";

class SideBarView extends View {
  generateMarkup() {}

  activateStep(currentPageKey) {
    this.update();
  }
}

export default new SideBarView();
