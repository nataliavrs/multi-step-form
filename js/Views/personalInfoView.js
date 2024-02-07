class PersonalInfoView extends View {
  #parentElement = "personal__info";
  #data;

  validatedForm() {
    // this.#parentElement get form etc
    console.log("validate personal info");

    return "formdata";
  }
}

export default new PersonalInfoView();
