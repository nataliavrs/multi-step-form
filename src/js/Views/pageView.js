import View from "./View";

class PageView extends View {
  _parentElement = document.querySelector(".page__container");

  generateMarkup(pageKey, data) {
    return this.PAGE_LAYOUT_MAP[pageKey](data);
  }

  PAGE_LAYOUT_MAP = {
    PERSONAL_INFO: (data) => {
      console.log("data received viw", data);
      return `
        <div class="page__title">
          <h1>Personal info</h1>
          <p>Please provide your name, email address and phone number</p>
        </div>
        <form id="form">
          <label for="name">Name</label>
          <input type="text" name="name" value="${data.name || ""}" autofocus />
          <label for="email">Email</label>
          <input type="text" name="email" value="${data.email || ""}" />
          <label for="phone">Phone</label>
          <input type="text" name="phone" value="${data.phone || ""}" />
        </form>`;
    },
    SELECT_PLAN: (data) => {
      return `
        <div class="page__title">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        <form id="form">
          <div class="input__container">
            <label>90€</label>
            <input type="button" class="arcade-btn" value="Arcade">
            <label>2 months free</label>
          </div>
          <div class="input__container">
            <label>90€</label>
            <input type="button" class="arcade-btn" value="Arcade">
            <label>2 months free</label>
          </div>
          <div class="input__container">
            <label>90€</label>
            <input type="button" class="arcade-btn" value="Arcade">
            <label>2 months free</label>
          </div>
          <div class="input__container">
            <label>90€</label>
            <input type="button" class="arcade-btn" value="Arcade">
            <label>2 months free</label>
          </div>
          <div class="radios__container">
            <label for="monthly">Monthly</label>
            <input type="radio" name="recurrence" value="monthly">
            <label for="yearly">Yearly</label>
            <input type="radio" name="recurrence" value="yearly">
          </div>
        </form>
      `;
    },
    ADD_ONS: (data) => {
      return `
        <div class="page__title">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience</p>
        </div>
        <form id="form">
          <div class="input__container">
            <label for="online-service">Online service</label>
            <p>Access to multiplayer games</p>
            <input type="checkbox" id="online-service" class="addon-checkbox" value="onlineService" />
            <span class="value">+1€/mo</span>
          </div>
          <div class="input__container">
            <label for="larger-storage">Larger storage</label>
            <p>Extra 1TB of cloud save</p>
            <input type="checkbox" id="larger-storage" class="addon-checkbox" value="largerStorage" />
            <span class="value">+1€/mo</span>
          </div>
          <div class="input__container">
            <label for="customizable-profile">Customizable profile</label>
            <p>Custom theme on your profile</p>
            <input type="checkbox" id="customizable-profile" class="addon-checkbox" value="customizableProfile" />
            <span class="value">+1€/mo</span>
          </div>
        </form>
      `;
    },
    SUMMARY: (data) => {
      return `
        <div class="page__title">
          <h1>Finishing up</h1>
          <p>Double-check everything looks right before confirming.</p>
        </div>
        <div class="summary--container">
          <div class="summary--item--container">
            <span>Arcade (yearly)</span>
            <span>90€</span>
            <button type="button">Change</button>
          </div>
          <div class="summary--item--container">
            <span>Online service</span>
            <span>90€</span>
            <button type="button">Change</button>
          </div>
          <div class="summary--item--container">
            <span>Larger storage</span>
            <span>90€</span>
            <button type="button">Change</button>
          </div>
          <div class="total">
            <span>Total (per year)</span>
            <span>270€/yr</span>
          </div>
        </div>
      `;
    },
    THANK_YOU: (data) => {
      return `
        <div class="thanks--container">
          <p>
            Thank you! Thanks for confirming your subscription! We hope you
            have fun using our platform. If you ever need support, please feel
            free to email us at nubi@gmail.com
          </p>
        </div>
      `;
    },
  };
}

export default new PageView();
