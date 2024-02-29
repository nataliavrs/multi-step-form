import View from "./View";

class SummaryView extends View {
  _parentElement = document.querySelector(".page__container");
  _data;

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

  getPrice(service) {
    if (!service) return;
    const SERVICE_PRICE_MAP = {
      arcade: 91,
      pro: 200,
      onlineService: 200,
      largerStorage: 10,
      customizableService: 10,
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

  generateAddOns(addOns) {
    const activeAddOns = Object.entries(addOns)
      .map(([addOn, selected]) => (selected ? addOn : null))
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

  // TODO
  getTotal() {
    return 666;
  }

  render(data) {
    console.log("summaryview", data);
    const markup = `
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
        <span>${
          data?.subscription ? this.getPrice(data?.subscription) : "---"
        }€</span>
        <button class="change-button" type="button">Change</button>
      </div>
      ${this.generateAddOns(data?.addOns)}
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
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerJumpToPage(handler) {
    const change = this._parentElement.querySelector(".change-button");
    change.addEventListener("click", function (e) {
      console.log("jump to page");
      handler();
    });
  }
}

export default new SummaryView();
