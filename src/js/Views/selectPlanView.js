// import iconAdvanced from "url:../../assets/images/icon-advanced.svg";

import View from "./View";

class SelectPlanView extends View {
  _parentElement = document.querySelector(".page__container");
  _data;

  addHandlerSelectPlan(handler) {
    handler(selectedPlan);
  }

  addHandlerSelectRecurrence() {
    this._parentElement
      .querySelector("form")
      .addEventListener("input", (event) => {
        const target = event.target;
        if (target.name !== "recurrence") return;

        console.log(target);
        console.log(event);

        this.updatePlans(target.value);
        this.update();
      });
  }
}

export default new SelectPlanView();
