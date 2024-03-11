import View from "./View";

class ThankYouView extends View {
  _formData;
  _isFormValid;

  get navigationBarVisibilityRules() {
    return {
      hideNavigationBarView: true,
    };
  }

  generateMarkup() {
    return `
        <div class="thanks--container">
          <p>
            Thank you! Thanks for confirming your subscription! We hope you
            have fun using our platform. If you ever need support, please feel
            free to email us at nubi@gmail.com
          </p>
        </div>
      `;
  }

  validateForm() {
    // this.#parentElement get form etc
    console.log("thank you view");
    this._isFormValid = "thank you view";
    this._formData = "";
    // return "";
  }
}

export default new ThankYouView();
