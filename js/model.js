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
  }
}

export default new Model();
