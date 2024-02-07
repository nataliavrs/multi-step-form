class Model {
  #state = {
    pages: {
      page1: {},
      page2: {
        api: "",
      },
      page3: {
        api: "",
      },
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
