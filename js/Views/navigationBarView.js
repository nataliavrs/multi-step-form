import View from "./View";

class NavigationBarView extends View {
  _parentElement = document.querySelector(".navigation__bar");

  generateMarkup(_, _) {
    return `
      <button type="submit" class="btn--back">Next step</button>
      <button class="btn--next">Back</button>
    `;
  }

  addHandlerNavigateNext(handler) {
    const form = document.querySelector("form");
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      await handler();
    });
  }

  addHandlerNavigateBack(handler) {
    this._parentElement
      .querySelector(".btn--back")
      .addEventListener("click", async function (e) {
        e.preventDefault();
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
