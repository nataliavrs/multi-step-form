import View from "./View";

class ThankYouView extends View {
  _parentElement = "personal__info";
  _formData;
  _isFormValid;

  validateForm() {
    // this.#parentElement get form etc
    console.log("thank you view");
    this._isFormValid = "thank you view";
    this._formData = "";
    // return "";
  }
}

export default new ThankYouView();
