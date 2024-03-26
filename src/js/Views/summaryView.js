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
    console.log("validate personal info");
    return "formdata";
  }

  addHandlerJumpToPage(handler) {
    // parent.get change text
    window.addEventListener("click", async function (e) {
      await handler();
    });
  }

  generateAddOns(addOns) {
    const activeAddOns = Object.entries(addOns)
      .map(([addOn, selected]) => (selected.selected ? addOn : null))
      .filter((selectedAddOn) => selectedAddOn)
      .map(
        (addOn) => `
        <div class="summary--add-on--container">
          <span>${this.getAddOnLabel(addOn) || ""}</span>
          <span>${this.getPrice(addOn) || ""}€</span>
        </div>
        `
      )
      .join("");
    return activeAddOns;
  }

  getPrice(service) {
    if (!service) return 0;

    const SERVICE_PRICE_MAP = {
      [this._data.subscription]: this._data.price,
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

  // TODO
  getTotal() {
    console.log("calculate total", this._data);

    const activeAddOnsPrice = Object.entries(Object.entries(this._data?.addOns))
      .map(([selected, price]) => {
        console.log(selected, price);
        return selected.selected ? addOn : null;
      })
      .filter((selectedAddOn) => selectedAddOn)
      .map((addOn) => {
        console.log(addOn);
        return addOn.price;
      })
      .reduce((acc, curr) => +acc + +curr);
    console.log(activeAddOnsPrice);
  }

  generateMarkup(data) {
    console.log("generate markup summary data 📦", data);
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
        ? data?.recurrence === "monthly"
          ? "Monthly"
          : "Yearly"
        : "---"
    })</span>
        <span>${data?.subscription ? data?.price : "---"}€</span>
        <button class="change-button" type="button">Change</button>
      </div>
      <br>
        ${this.generateAddOns(data?.addOns)}
      </br>
      <div class="total">
        <span>Total  (per ${
          data?.recurrence
            ? data?.recurrence === "monthly"
              ? "month"
              : "year"
            : "---"
        })</span>
        <span>${this.getTotal()}€/${
      data?.recurrence === "monthly" ? "mo" : "yr"
    }</span>
      </div>
    </div>
  `;
  }

  addHandlerJumpToPage(handler) {
    const change = this.parentElement.querySelector(".change-button");
    change.addEventListener("click", function (e) {
      console.log("jump to page");
      handler();
    });
  }
}

export default new SummaryView();
