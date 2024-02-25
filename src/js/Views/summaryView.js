import View from "./View";

class SummaryView extends View {
  #parentElement = "personal__info";
  #data;

  validatedForm() {
    // this.#parentElement get form etc
    console.log("validate personal info");

    return "formdata";
  }

  addHandlerJumpToPage(handler) {
    // parent.get change text
    window.addEventListener("click", async function (e) {
      await handler();
    });
  }

  getPrices() {}
}

export default new SummaryView();
