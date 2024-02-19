// import iconAdvanced from "url:../../assets/images/icon-advanced.svg";

import View from "./View";

class SelectPlanView extends View {
  #parentElement = document.querySelector(".page__container");
  #data;

  // TODO if plan yearly there is discount

  addHandlerSelectPlan(handler) {
    handler(selectedPlan);
  }

  addHandlerSelectTime(handler) {
    handler(selectedTime);
  }
}

export default new SelectPlanView();
