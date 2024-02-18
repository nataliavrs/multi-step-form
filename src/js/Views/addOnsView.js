import View from "./View";

class AddOnsView extends View {
  #parentElement = "personal__info";
  #data;

  validatedForm() {
    // this.#parentElement get form etc
    console.log("validate personal info");

    return "formdata";
  }

  addHandlerJumpToPage(handler) {
    // const addOn = document.querySelector(".add-on-change");
    // addOn.addEventListener("click", function (e) {
    //   handler();
    // });
  }
}

export default new AddOnsView();
