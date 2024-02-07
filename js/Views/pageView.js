import View from "./View";

class PageView extends View {
  #parentElement = "pageContainer";
  #data;

  generateMarkup(pageKey, data) {
    return this.PAGE_INFO_MAP[pageKey](data);
  }

  PAGE_INFO_MAP = {
    PERSONAL_INFO: (data) => {
      return "form";
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
