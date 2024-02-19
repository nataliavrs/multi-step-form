export default class View {

  render(page, data) {
    const markup = this.generateMarkup(page, data);
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  isFormValid() {
    this.validateForm();
    return this._parentElement.isFormValid();
  }

  getFormData() {
    return "";
    return this._parentElement.formData();
  }

  renderSpinner() {
    const markup = `
      <h4 class="loader__message">Loading...</h4>
      <span class="loader"></span>
    `;
    const pageContainer = document.querySelector(".page__container");
    pageContainer.innerHTML = "";
    pageContainer.insertAdjacentHTML("beforeEnd", markup);
  }

  clear() {
    this._parentElement.innerHTML = "";
  }
}
