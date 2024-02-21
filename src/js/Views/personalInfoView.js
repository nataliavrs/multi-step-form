import View from "./View";

class PersonalInfoView extends View {
  _parentElement = document.querySelector(".page__container");
  _formData;
  _isFormValid;

  get isFormValid() {
    this._validateForm();
    return true || this._isFormValid;
  }

  getFormData() {
    const form = document.getElementById("form");
    const formElementsNodes = form.querySelectorAll("input");
    const formData = Array.from(formElementsNodes).reduce(
      (acc, { name, value }) => {
        acc[name] = value;
        return acc;
      },
      {}
    );
    console.log(formData);
    return formData;
  }

  _validateForm() {
    // this.#parentElement get form etc
    this._isFormValid = "PersonalInfoView";
    this._formData = "";
    this.formData;
    // return ;
  }

  validateOnValueChange(input) {
    input.addEventListener("input", (e) => {
      console.log(e.target.value);
    });
  }
}

export default new PersonalInfoView();
