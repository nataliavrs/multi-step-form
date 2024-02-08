import View from "./View";

class SelectPlanView extends View {
  #parentElement = "select__plan";
  #data;

  addHandlerSelectPlan(handler) {
    handler(selectedPlan);
  }

  addHandlerSelectTime(handler) {
    handler(selectedTime);
  }
}

export default new SelectPlanView();
