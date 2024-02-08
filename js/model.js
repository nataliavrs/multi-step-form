class Model {
  #state = {
    page: {
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

  getState() {}

  getPageData(page) {}

  fetchPageData(page) {}

  getData(key) {}

  updateState(data, key) {
    this.state = { ...this.#state, [key]: data };

    this.#storeState();
  }

  updatePage(data, page) {}

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

  #storeState() {
    // local storage.set
  }
}

export default new Model();
