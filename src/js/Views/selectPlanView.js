// import iconAdvanced from "url:../../assets/images/icon-advanced.svg";

import View from "./View";

class SelectPlanView extends View {
  _data;

  generateMarkup(data) {
    return `
    <div class="page__title">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
    </div>
    <form id="form">
      <div class="input__container">            
        <input type="radio" name="subscription" ${
          data?.subscription === "arcade" ? "checked" : ""
        } id="arcade" class="arcade-btn" value="arcade">
        <label for="arcade">Arcade</label>
        <label>9€/mo</label>
        ${data?.recurrence === "yearly" ? "<label>2 months free</label>" : ""}  
      </div>

      <div class="input__container">            
          <input type="radio" name="subscription" ${
            data?.subscription === "advanced" ? "checked" : ""
          } id="advanced" class="advanced-btn" value="advanced">
          <label for="advanced">Advanced</label>
          <label>12€/mo</label>
          ${
            data?.recurrence === "yearly" ? "<label>2 months free</label>" : ""
          }  
      </div>

      <div class="input__container">
          <input type="radio" name="subscription" ${
            data?.subscription === "pro" ? "checked" : ""
          } id="pro" class="pro-btn" value="pro">
          <label for="pro">Pro</label>
          <label>15€/mo</label>
          ${
            data?.recurrence === "yearly" ? "<label>2 months free</label>" : ""
          }              
      </div>

      <div class="radios__container">
        <label for="monthly">Monthly</label>
        <input type="radio" name="recurrence" ${
          data?.recurrence === "monthly" ? "checked" : ""
        } value="monthly">
        <label for="yearly">Yearly</label>
        <input type="radio" name="recurrence" ${
          data?.recurrence === "yearly" ? "checked" : ""
        } value="yearly">
      </div>
    </form>
  `;
  }

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

        // this.updatePlans(target?.value);
        // this.update();
      });
  }
}

export default new SelectPlanView();
