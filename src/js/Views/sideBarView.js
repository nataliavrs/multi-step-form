import { pageKeys } from "../config";
import View from "./View";

class SideBarView extends View {
  parentElement = document.querySelector(".side__bar");
  _currentStep;

  generateMarkup() {
    return `
    <div class="side__bar--steps">
      ${this.getSteps()}
    </div>`;
  }

  // TODO testare
  activateStep(currentPageKey) {
    if (this._currentStep)
      this._currentStep
        .querySelector(".position-circle")
        .classList.remove("active");

    const stepsNodes = this.parentElement.querySelectorAll(".side__bar--step");
    const currentStep = Array.from(stepsNodes).find((step) => {
      return step.dataset.key === currentPageKey;
    });
    this._currentStep = currentStep;
    currentStep.querySelector(".position-circle").classList.add("active");
  }

  getSteps() {
    const pages = Object.values(pageKeys).slice(0, -1);
    return pages
      .map((page, index) => {
        const position = index + 1;
        return `<div class="side__bar--step" data-key="${page}">              
              <div class="position-circle">
                <span class="position-number">${position}</span>
              </div>
              <div class="title">
                <span class="position-name">STEP ${position}</span>
                <span class="page-title">${page.replace("_", " ")}</span>
              </div>
      </div>`;
      })
      .join("");
  }
}

export default new SideBarView();
