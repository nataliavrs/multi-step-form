class ThankYouView extends View {
  _parentElement = "personal__info";
  _data;
  _isFormValid;

  validateForm() {
    // this.#parentElement get form etc
    console.log("validate personal info");
    this._isFormValid = "";
    return "";
  }
}

export default new ThankYouView();
