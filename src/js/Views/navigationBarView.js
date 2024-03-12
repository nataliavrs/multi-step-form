import View from "./View";

class NavigationBarView extends View {
  parentElement = document.querySelector(".navigation__bar");

  generateMarkup() {
    return `
      <button class="btn--back">Back</button>
      <button type="submit" class="btn--next">Next step</button>
    `;
  }

  addHandlerNavigateBack(handler) {
    this.parentElement
      .querySelector(".btn--back")
      .addEventListener("click", async function () {
        await handler();
      });
  }

  addHandlerNavigateNext(handler) {
    const btnNxt = document.querySelector(".btn--next");
    btnNxt.addEventListener("click", async function () {
      await handler();
    });
  }

  hideBar() {
    this.parentElement.classList.add("hide");
  }

  showBar() {
    this.parentElement.classList.remove("hide");
  }

  showConfirmBtn() {
    this.parentElement.querySelector(".btn--next").textContent = "Confirm";
  }

  showNextStepBtn() {
    this.parentElement.querySelector(".btn--next").textContent = "Next step";
  }

  hideGoBack() {
    this.parentElement.querySelector(".btn--back").classList.add("hide");
  }

  showGoBack() {
    this.parentElement.querySelector(".btn--back").classList.remove("hide");
  }
}

export default new NavigationBarView();
