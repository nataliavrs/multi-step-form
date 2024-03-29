import View from "./View";

class SelectPlanView extends View {
  _data;

  normalizeData(data, updatedRecurrence) {
    const normalizedData = {
      ...data,
      arcadePrice: this.getPrice(
        "arcade",
        updatedRecurrence || data?.recurrence
      ),
      proPrice: this.getPrice("pro", updatedRecurrence || data?.recurrence),
      advancedPrice: this.getPrice(
        "advanced",
        updatedRecurrence || data?.recurrence
      ),
      price: this.getPrice(
        data?.subscription,
        updatedRecurrence || data?.recurrence
      ),
    };
    return normalizedData;
  }

  generateMarkup(data) {
    this._data = this.normalizeData(data);

    return `
    <div class="page__title">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
    </div>
    <form id="form">
      <div class="input__container">            
        <input type="radio" id="arcadeSubscription" name="subscription" ${
          data?.subscription === "arcade" ? "checked" : ""
        } class="arcade-btn" value="arcade">
        <label for="arcadeSubscription">Arcade</label>
        <span class="price">${this._data?.arcadePrice}€/mo</span>
        <input name="arcadePrice" type="text"  value="${
          this._data?.arcadePrice
        }" hidden>
        <span class="recurrence-gift">${this.getGift("arcade")}</span>
      </div>

      <div class="input__container">            
          <input type="radio" id="advancedSubscription" name="subscription" ${
            data?.subscription === "advanced" ? "checked" : ""
          }  class="advanced-btn" value="advanced">
          <label for="advancedSubscription">Advanced</label>
          <span class="price">${this._data?.advancedPrice}€/mo</span>
          <input name="advancedPrice" type="text" value="${
            this._data?.advancedPrice
          }" hidden>
          <span class="recurrence-gift">${this.getGift("advanced")}</span>
      </div>

      <div class="input__container">
          <input type="radio" id="proSubscription" name="subscription" ${
            data?.subscription === "pro" ? "checked" : ""
          } class="pro-btn" value="pro">
          <label for="proSubscription">Pro</label>
          <span class="price">${this._data?.proPrice}€/mo</span>
          <input name="proPrice" type="text" value="${
            this._data?.proPrice
          }" hidden>
          <span class="recurrence-gift">${this.getGift("pro")}</span>
      </div>

      <div class="radios__container">
        <label for="monthlyRecurrence">Monthly</label>
        <input type="radio" id="monthlyRecurrence" name="monthlyRecurrence" ${
          data?.recurrence === "monthly" ? "checked" : ""
        } value="monthly">
        <label for="yearlyRecurrence">Yearly</label>
        <input type="radio" id="yearlyRecurrence" name="yearlyRecurrence" ${
          data?.recurrence === "yearly" ? "checked" : ""
        } value="yearly">
      </div>
    </form>
  `;
  }

  getPrice(subscription, recurrence) {
    if (!subscription && !recurrence) return 0;

    const SUBSCRIPTION_PRICE_MAP = {
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

    return SUBSCRIPTION_PRICE_MAP[recurrence || "monthly"][subscription];
  }

  getGift(subscription) {
    if (!subscription && !this._data?.recurrence) return "";

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
    const gift =
      GIFT_PRICE_MAP[this._data.recurrence || "monthly"][subscription];
    return gift > 0 ? `${gift} months for free` : "";
  }

  addHandlerSelectRecurrence() {
    this.parentElement
      .querySelector("form")
      .addEventListener("input", (event) => {
        const target = event.target;
        if (target.name !== "recurrence") return;
        this.updateHTML({
          ...this.normalizeData(this._data, target.value),
          recurrence: target.value,
        });
      });
  }
}

export default new SelectPlanView();
