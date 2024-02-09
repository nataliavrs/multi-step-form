import View from "./View";

class SideBarView extends View {
  generateMarkup() {}

  activateStep(currentPage) {
    this.update();
  }
}

export default new SideBarView();
