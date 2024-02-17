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

  #storeState() {
    // local storage.set
  }

  getPageData(page) {
    return this.#state.pages[page];
  }

  async fetchPageData(page) {
    try {
      switch (page) {
        case pageKeys.personalInfo:
          const url = "baseUrl/personal";
          fetch("www.test")
            .then((res) => {
              if (!res.ok) throw new Error("errore");
              return res.json();
            })
            .then((data) => data);
          break;
        default:
          Promise.resolve();
          break;
      }
    } catch (error) {}
  }

  getData(key) {
    console.log(this.#state[key]);
    return this.#state[key];
  }

  updateState(data, key) {
    this.#state = { ...this.#state, [key]: data };

    this.#storeState();
    console.log(this.#state);
  }

  updateCurrentPosition(key, position) {
    this.#state.currentPage.position = position;
    this.#state.currentPage.key = key;
  }

  updatePage(data, page) {
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
