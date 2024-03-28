export default class View {
  parentElement = document.querySelector(".page__container");

  render(data) {
    const markup = this.generateMarkup(data);
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  updateHTML(newData) {
    const newMarkup = this.generateMarkup(newData);
    // Turn current markup into DOM
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // Turn new elements into array
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    // Turn current elements into array
    const curElements = Array.from(this.parentElement.querySelectorAll("*"));
    // Compare new elements with current elements
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        // Update the text content
        curEl.textContent = newEl.textContent;
      }

      if (newEl.value !== curEl.value && curEl.name && newEl.name) {
        // Update input value
        curEl.value = newEl.value;
      }
    });
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

    this.parentElement.innerHTML = "";
    this.parentElement.insertAdjacentHTML("beforeEnd", markup);
  }

  clear() {
    this.parentElement.innerHTML = "";
  }
}
