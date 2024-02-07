export default class View {
  #data;

  render(page, data) {
    this.#data = data;
    const markup = this.generateMarkup(page, data);
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  update(page) {
    // update side bar
  }

  renderSpinner() {}

  clear() {}
}
