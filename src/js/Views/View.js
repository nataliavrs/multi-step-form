export default class View {
  _parentElement = document.querySelector(".page__container");

  render(data) {
    const markup = this.generateMarkup(data);
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  // TODO wip
  update() {
    const newMarkup = _parentElement.outerHTML();
    // turn current markup into DOM
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // turn new elements into array
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    // turn current elements into array
    const curElements = Array.from(_parentElement.querySelectorAll("*"));
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

    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("beforeEnd", markup);
  }

  clear() {
    this._parentElement.innerHTML = "";
  }
}
