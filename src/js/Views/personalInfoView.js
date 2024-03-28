import View from "./View";

class PersonalInfoView extends View {
  _formData;
  _isFormValid;

  get navigationBarVisibilityRules() {
    return {
      hideGoBack: true,
    };
  }

  generateMarkup(data) {
    return `
    <div class="page__title">
      <h1>Personal info</h1>
      <p>Please provide your name, email address and phone number</p>
    </div>
    <form id="form">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" value="${data?.name || ""}" />
      <label for="email">Email</label>
      <input type="text" id="email" name="email" value="${data?.email || ""}" />
      <label for="phone">Phone</label>
      <input type="text" id="phone" name="phone" value="${data?.phone || ""}" />
    </form>`;
  }

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
