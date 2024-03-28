import View from "./View";

class AddOnsView extends View {
  _data;

  generateMarkup(data) {
    return `
    <div class="page__title">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>
    </div>

    <form id="form">

      <div class="add-on-container">
        <label for="onlineService">Online service</label>
        <p>Access to multiplayer games</p>
        <input type="checkbox" ${
          data?.onlineService?.selected ? "checked" : ""
        } id="onlineService" name="onlineService" class="addon-checkbox" value="onlineService" />
        <span class="price">${this.getPrice("onlineService")}€/mo</span>
        <input name="onlineServicePrice" type="text" value="${this.getPrice(
          "onlineService"
        )}" hidden>
      </div>

      <div class="add-on-container">
        <label for="largerStorage">Larger storage</label>
        <p>Extra 1TB of cloud save</p>
        <input type="checkbox" ${
          data?.largerStorage?.selected ? "checked" : ""
        } id="largerStorage" name="largerStorage" class="addon-checkbox" value="largerStorage" />
        <span class="price">${this.getPrice("largerStorage")}€/mo</span>
        <input name="largerStoragePrice" type="text" value="${this.getPrice(
          "largerStorage"
        )}" hidden>
      </div>

      <div class="add-on-container">
        <label for="customizableService">Customizable profile</label>
        <p>Custom theme on your profile</p>
        <input type="checkbox" ${
          data?.customizableService?.selected ? "checked" : ""
        } id="customizableService" name="customizableService" class="addon-checkbox" value="customizableService" />
        <span class="price">${this.getPrice("customizableService")}€/mo</span>
        <input name="customizableServiceService" type="text" value="${this.getPrice(
          "customizableService"
        )}" hidden>
      </div>

    </form>
  `;
  }

  getPrice(addOn) {
    if (!addOn && !this._data.recurrence) return 0;

    const ADD_ON_PRICE_MAP = {
      onlineService: 10,
      largerStorage: 20,
      customizableService: 30,
    };

    return ADD_ON_PRICE_MAP[addOn];
  }

  validatedForm() {}
}

export default new AddOnsView();
