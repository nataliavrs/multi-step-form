import View from "./View";

class AddOnsView extends View {
  _parentElement = document.querySelector(".page__container");
  _data;

  validatedForm() {
    // this.#parentElement get form etc

    return "formdata";
  }
}

export default new AddOnsView();
