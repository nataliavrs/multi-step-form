import View from "./View";

class SummaryView extends View {
  _data;

  get navigationBarVisibilityRules() {
    return {
      showConfirmBtn: true,
    };
  }

  validatedForm() {
    // this.#parentElement get form etc
    return "formdata";
  }

  generateAddOns(addOns) {
    const activeAddOns = Object.entries(addOns)
      .map(([addOn, selected]) => (selected.selected ? addOn : null))
      .filter((selectedAddOn) => selectedAddOn)
      .map(
        (addOn) => `
        <div class="summary--add-on--container">
          <span>${this.getAddOnLabel(addOn) || ""}:</span>
          <span class="price">${this.getPrice(addOn) || ""}€</span>
        </div>
        `
      )
      .join("");
    return activeAddOns;
  }

  getPrice(service) {
    if (!service) return 0;

    const SERVICE_PRICE_MAP = {
      onlineService: this._data?.addOns?.onlineService?.price,
      largerStorage: this._data?.addOns?.largerStorage?.price,
      customizableService: this._data?.addOns?.customizableService?.price,
    };
    return SERVICE_PRICE_MAP[service];
  }

  getAddOnLabel(addOn) {
    if (!addOn) return "";
    const ADD_LABEL_MAP = {
      onlineService: "Online service",
      largerStorage: "Larger storage",
      customizableService: "Customizable profile",
    };
    return ADD_LABEL_MAP[addOn];
  }

  getTotal() {
    const addOnsPrices = Object.values(this._data.addOns).reduce(
      (acc, { selected, price }) => {
        return selected ? acc + +price : acc;
      },
      0
    );
    const total = `Total: ${addOnsPrices + +(this._data.price || 0)}€ / ${
      this._data.recurrence === "yearly" ? "yr" : "mo"
    }`;
    return total;
  }

  generateMarkup(data) {
    this._data = data;
    return `
    <div class="page__title">
      <h1>Finishing up</h1>
      <p>Double-check everything looks right before confirming.</p>
    </div>
    <div class="summary--container">
      <div class="summary--item--container">
        <span>${
          data?.subscription
            ? data?.subscription[0]?.toUpperCase() + data?.subscription.slice(1)
            : ""
        } (${
      data?.recurrence
        ? data?.recurrence[0].toUpperCase() + data?.recurrence.slice(1)
        : "---"
    }):</span>
    <span>${data?.subscription === "yearly" ? "2 months for free" : ""}</span>
        <span class="price">${data?.price ?? "---"}€</span>
        <button class="change-button" type="button">Change</button>
      </div>
      <br>
        ${this.generateAddOns(data?.addOns)}
      </br>
      <div class="total-container">
        <span class="total">${this.getTotal()}</span>
      </div>
    </div>
    `;
  }

  addHandlerJumpToPage(handler) {
    const change = this.parentElement.querySelector(".change-button");
    change.addEventListener("click", function (e) {
      console.log("jump to page");
      handler("SELECT_PLAN");
    });
  }
}

export default new SummaryView();
