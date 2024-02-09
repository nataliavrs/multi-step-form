import View from "./View";

class PersonalInfoView extends View {
  _parentElement = "PersonalInfoView";
  _formData;
  _isFormValid;

  get isFormValid() {
    return this._isFormValid;
  }

  get formData() {
    return this._formData;
  }

  validateForm() {
    // this.#parentElement get form etc
    console.log("PersonalInfoView");
    this._isFormValid = "PersonalInfoView";
    this._formData = "";
    // return "";
  }
}

export default new PersonalInfoView();
