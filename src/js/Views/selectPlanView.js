// import iconAdvanced from "url:../../assets/images/icon-advanced.svg";

import View from "./View";

class SelectPlanView extends View {
  _data;

  generateMarkup(data) {
    this._data = data;

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
        <label class="price">${this.getPrice("arcade")}€/mo</label>
        <input name="arcadePrice" type="text" value="${this.getPrice(
          "arcade"
        )}" hidden>
        <label class="recurrence-gift">${this.getGift("arcade")}</label>
      </div>

      <div class="input__container">            
          <input type="radio" name="subscription" ${
            data?.subscription === "advanced" ? "checked" : ""
          } id="advanced" class="advanced-btn" value="advanced">
          <label for="advanced">Advanced</label>
          <label class="price">${this.getPrice("advanced")}€/mo</label>
          <input name="advancedPrice" type="text" value="${this.getPrice(
            "advanced"
          )}" hidden>
          <label class="recurrence-gift">${this.getGift("advanced")}</label>
      </div>

      <div class="input__container">
          <input type="radio" name="subscription" ${
            data?.subscription === "pro" ? "checked" : ""
          } id="pro" class="pro-btn" value="pro">
          <label for="pro">Pro</label>
          <label class="price">${this.getPrice("pro")}€/mo</label>
          <input name="proPrice" type="text" value="${this.getPrice(
            "pro"
          )}" hidden>
          <label class="recurrence-gift">${this.getGift("pro")}</label>
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

  getPrice(service) {
    if (!service && !this._data.recurrence) return 0;

    const SERVICE_PRICE_MAP = {
      monthly: {
        arcade: 10,
        advanced: 20,
        pro: 30,
      },
      yearly: {
        arcade: 100,
        advanced: 200,
        pro: 300,
      },
    };

    return SERVICE_PRICE_MAP[this._data.recurrence][service];
  }

  getGift(service) {
    if (!service && !this._data.recurrence) return "";

    const GIFT_PRICE_MAP = {
      monthly: {
        arcade: 0,
        advanced: 0,
        pro: 0,
      },
      yearly: {
        arcade: 2,
        advanced: 2,
        pro: 2,
      },
    };
    const gift = GIFT_PRICE_MAP[this._data.recurrence][service];
    return gift > 0 ? `${gift} months for free` : "";
  }

  addHandlerSelectRecurrence() {
    this.parentElement
      .querySelector("form")
      .addEventListener("input", (event) => {
        const target = event.target;
        if (target.name !== "recurrence") return;
        this.update({ ...this._data, recurrence: target.value });
      });
  }
}

export default new SelectPlanView();
