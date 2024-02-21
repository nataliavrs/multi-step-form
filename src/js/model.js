import { pageKeys } from "./config";

class Model {
  #state = {
    pages: {
      PERSONAL_INFO: {
        name: "",
        email: "",
        phone: "",
      },
      SELECT_PLAN: {
        plan: "",
        recurrence: "",
      },
      ADD_ONS: {
        addOn: "",
      },
      SUMMARY: {},
      THANK_YOU: {},
    },
    currentPage: {
      key: "",
      position: 0,
    },
  };

  get state() {
    return this.#state;
  }

  // TODO
  #storeState() {
    if (!localStorage.getItem("pages")) return;
    const previousPages = JSON.parse(localStorage.getItem("pages"));
    localStorage.setItem(
      "pages",
      JSON.stringify(...previousPages, ...this.#state.pages)
    );
  }

  getPageData(page) {
    console.log("getpagedata", this.#state.pages[page]);
    return this.#state.pages[page];
  }

  async fetchPageData(page) {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });

      switch (page) {
        // case pageKeys.personalInfo:
        //   const url = "baseUrl/personal";
        //   const response = await fetch("www.test");
        //   if (!response.ok) throw new Error("Error fetching data");
        //   const data = await response.json();
        //   return data;
        default:
          return null;
      }
    } catch (error) {
      console.error("An error occurred:", error);
      return null;
    }
  }

  getData(key) {
    return this.#state[key];
  }

  updateState(key, data) {
    this.#state = { ...this.#state, [key]: data };
    this.#storeState();
    console.log(this.#state);
  }

  updateCurrentPosition(key, position) {
    this.#state.currentPage.position = position;
    this.#state.currentPage.key = key;
  }

  updatePage(page, data) {
    console.log("update page", page, data);
    this.#state.pages[page] = data;
  }

  updateStateWithStoredData(pages) {
    this.#state = {
      ...this.#state,
      page1: {
        ...pages[1],
      },
      page2: {
        ...pages[2],
      },
    };
  }
}

export default new Model();
