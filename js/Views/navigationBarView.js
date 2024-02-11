import View from "./View";

class NavigationBarView extends View {
  _parentElement = document.querySelector(".navigation__bar");

  generateMarkup(page, data) {
    return `
      <button class="btn--back">Back</button>
      <button type="submit" class="btn--next">Next step</button>
    `;
  }

  addHandlerNavigateBack(handler) {
    this._parentElement
      .querySelector(".btn--back")
      .addEventListener("click", async function (e) {
        await handler();
      });
  }

  hideBar() {
    this._parentElement.classList.add("hide");
  }

  showBar() {
    this._parentElement.classList.remove("hide");
  }

  showConfirmBtn() {
    this._parentElement.querySelector(".btn--next").textContent = "Confirm";
  }

  showNextStepBtn() {
    this._parentElement.querySelector(".btn--next").textContent = "Next step";
  }

  hideGoBack() {
    this._parentElement.querySelector(".btn--back").classList.add("hide");
  }

  showGoBack() {
    this._parentElement.querySelector(".btn--back").classList.remove("hide");
  }
}

export default new NavigationBarView();
