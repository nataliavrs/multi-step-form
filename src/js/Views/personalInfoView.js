import View from "./View";

class PersonalInfoView extends View {
  _parentElement = "PersonalInfoView";
  _formData;
  _isFormValid;

  get isFormValid() {
    return true || this._isFormValid;
  }

  get formData() {
    const form = document.getElementById("form");
    console.log(form.elements);
    return this._formData;
  }

  validateForm() {
    // this.#parentElement get form etc
    console.log("PersonalInfoView");
    this._isFormValid = "PersonalInfoView";
    this._formData = "";
    // return "";
  }

  validateOnValueChange(input) {
    input.addEventListener("input", (e) => {
      console.log(e.target.value);
    });
  }
}

export default new PersonalInfoView();