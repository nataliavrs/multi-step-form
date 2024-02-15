// import iconAdvanced from "url:../../assets/images/icon-advanced.svg";

import View from "./View";

class SelectPlanView extends View {
  #parentElement = "select__plan";
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
