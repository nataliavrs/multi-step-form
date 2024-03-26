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
        advancedPrice: 0,
        arcadePrice: 0,
        proPrice: 0,
      },
      ADD_ONS: {
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
        onlineServicePrice: 0,
        largerStoragePrice: 0,
        customizableProfilePrice: 0,
      },
      SUMMARY: {},
    },
    currentPage: {
      key: "",
      position: 0,
    },
  };

  #storeState() {
    if (!localStorage.getItem("pages")) {
      localStorage.setItem("pages", JSON.stringify(this.#state.pages));
    } else {
      const previousPages = JSON.parse(localStorage.getItem("pages"));
      localStorage.setItem(
        "pages",
        JSON.stringify({ ...previousPages, ...this.#state.pages })
      );
    }
  }

  getPageData(page) {
    const pages = this.#state.pages;
    if (page === pageKeys.SUMMARY) {
      return {
        ...pages[pageKeys.SELECT_PLAN],
        addOns: pages[pageKeys.ADD_ONS],
      };
    }
    return pages[page];
  }

  getData(key) {
    return this.#state[key];
  }

  updateState(key, data) {
    this.#state = { ...this.#state, [key]: data };
    this.#storeState();
    // console.log(this.#state);
  }

  updateCurrentPosition(key, position) {
    this.#state.currentPage.position = position;
    this.#state.currentPage.key = key;
  }

  updatePage(page, data) {
    const STATE_MAP = {
      SELECT_PLAN: {
        subscription: data.subscription,
        price: Object.entries(data)
          .filter(
            ([key, _]) =>
              key.includes(data.subscription) && key.includes("Price")
          )
          .map(([_, value]) => value)[0],
        recurrence: data.recurrence,
      },
      ADD_ONS: {
        onlineService: {
          selected: data.onlineService,
          price: data.onlineServicePrice,
        },
        largerStorage: {
          selected: data.largerStorage,
          price: data.largerStoragePrice,
        },
        customizableService: {
          selected: data.customizableService,
          price: data.customizableServiceService,
        },
      },
      // SUMMARY: {
      //   plan: {
      //     plan: selectPlanData.plan,
      //     recurrence: selectPlanData.recurrence,
      //     price: advancedPrice ?? arcadePrice ?? proPrice,
      //   },
      //   addOns: [
      //     {
      //       advancedPrice: false,
      //       price: 0,
      //     },
      //     {
      //       arcadePrice: false,
      //       price: 0,
      //     },
      //     {
      //       proPrice: false,
      //       price: 0,
      //     },
      //   ],
      // },
      DEFAULT: (this.#state.pages[page] = data),
    };

    console.log("page data", data);
    this.#state.pages[page] = STATE_MAP[page] || STATE_MAP["DEFAULT"];
    this.#storeState();
    console.log("update page data", this.#state.pages[page]);
  }

  updateStateWithStoredData(pages) {
    this.#state = {
      pages: { ...JSON.parse(pages) },
    };
  }
}

export default new Model();
