export default class View {
  render(page, data) {
    const markup = this.generateMarkup(page, data);
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  // TODO wip
  update() {
    const newMarkup = this._parentElement.outerHTML();
    // turn current markup into DOM
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // turn new elements into array
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    // turn current elements into array
    const curElements = Array.from(this._parentElement.querySelectorAll("*"));
    // compare new elements text with current elements text
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        // update the text content where needed
        curEl.textContent = newEl.textContent;
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
    const pageContainer = document.querySelector(".page__container");
    pageContainer.innerHTML = "";
    pageContainer.insertAdjacentHTML("beforeEnd", markup);
  }

  clear() {
    this._parentElement.innerHTML = "";
  }
}
