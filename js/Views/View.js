class View {
  #data;

  render(page, data) {
    this.#data = data;
    const markup = this.generateMarkup(page, data);
    // if (!render) return markup;
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  update(page) {
    // update side bar
  }

  validateForm() {}

  renderSpinner() {}

  clear() {}
}
