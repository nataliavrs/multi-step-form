export default class View {
  #data;

  render(page, data) {
    this.#data = data;
    const markup = this.generateMarkup(page, data);
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  update(page) {
    // update side bar
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
    // this.clear();
    const pageContainer = document.querySelector(".page__container");
    pageContainer.innerHTML = "";
    pageContainer.insertAdjacentHTML("beforeEnd", markup);
  }

  clear() {
    console.log("clear", this._parentElement);
    this._parentElement.innerHTML = "";
  }
}
