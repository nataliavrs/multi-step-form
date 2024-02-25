export default class View {
  render(page, data) {
    const markup = this.generateMarkup(page, data);
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  getFormData() {
    const form = document.getElementById("form");
    if (!form) return;
    const formElementsNodes = form.querySelectorAll("input");
    const formData = Array.from(formElementsNodes).reduce(
      (acc, { name, value, checked, type }) => {
        if (type === "radio") {
          if (checked) acc[name] = value;
        } else if (type === "checkbox") {
          acc[name] = !!checked;
        } else {
          acc[name] = value;
        }
        return acc;
      },
      {}
    );
    return formData;
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
