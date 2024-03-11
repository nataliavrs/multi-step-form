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
          data?.onlineService ? "checked" : ""
        } id="onlineService" name="onlineService" class="addon-checkbox" value="onlineService" />
        <span class="value">+1€/mo</span>
      </div>
      <div class="add-on-container">
        <label for="largerStorage">Larger storage</label>
        <p>Extra 1TB of cloud save</p>
        <input type="checkbox" ${
          data?.largerStorage ? "checked" : ""
        } id="largerStorage" name="largerStorage" class="addon-checkbox" value="largerStorage" />
        <span class="value">+2€/mo</span>
      </div>

      <div class="add-on-container">
        <label for="customizableService">Customizable profile</label>
        <p>Custom theme on your profile</p>
        <input type="checkbox" ${
          data?.customizableService ? "checked" : ""
        } id="customizableService" name="customizableService" class="addon-checkbox" value="customizableService" />
        <span class="value">+2€/mo</span>
      </div>
    </form>
  `;
  }

  validatedForm() {
    // this.#parentElement get form etc

    return "formdata";
  }
}

export default new AddOnsView();
