export default class View {
  #data;

  render(page, data) {
    this.#data = data;
    const markup = this.generateMarkup(page, data);
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerNavigateNext(handler) {
    const form = document.querySelector("form");
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      await handler();
    });
  }

  update(page) {
    // update side bar
  }

  isFormValid() {
    this.validateForm();
    return this._parentElement.isFormValid();
  }

  getFormData() {
    return this._parentElement.formData();
  }

  renderSpinner() {}

  clear() {
    this._parentElement.innerHTML = "";
  }
}
