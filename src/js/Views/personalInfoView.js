import View from "./View";

class PersonalInfoView extends View {
  _parentElement = document.querySelector(".page__container");
  _formData;
  _isFormValid;

  get isFormValid() {
    this._validateForm();
    return true || this._isFormValid;
  }

  _validateForm() {
    // this.#parentElement get form etc
    const formData = this.getFormData();

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
