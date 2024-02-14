import View from "./View";

class PageView extends View {
  _parentElement = document.querySelector(".page__container");
  // #data;

  generateMarkup(pageKey, data) {
    return this.PAGE_LAYOUT_MAP[pageKey](data);
  }

  PAGE_LAYOUT_MAP = {
    PERSONAL_INFO: (data) => {
      return `
        <div class="page__title">
          <h1>Personal info</h1>
          <p>Please provide your name, email address and phone number</p>
        </div>
        <form id="form">
          <label for="name">Name</label>
          <input type="text" name="name" value="${data.name || ""}" />
          <label for="email">Email</label>
          <input type="text" name="email" value="${data.email || ""}" />
          <label for="phone">Phone</label>
          <input type="text" name="phone" value="${data.phone || ""}" />
        </form>`;
    },
    SELECT_PLAN: (data) => {
      return "";
    },
    ADD_ONS: (data) => {
      return "";
    },
    SUMMARY: (data) => {
      return "";
    },
    THANK_YOU: (data) => {
      return "";
    },
  };
}

export default new PageView();
