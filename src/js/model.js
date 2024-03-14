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
    if (page === pageKeys.SUMMARY) {
      const selectPlanData = this.#state.pages.SELECT_PLAN;
      this.#state.pages.SUMMARY = {
        plan: {
          plan: selectPlanData.plan,
          recurrence: selectPlanData.recurrence,
          price: advancedPrice ?? arcadePrice ?? proPrice,
        },
        addOns: [
          {
            advancedPrice: false,
            price: 0,
          },
          {
            arcadePrice: false,
            price: 0,
          },
          {
            proPrice: false,
            price: 0,
          },
        ],
      };
    }

    this.#state.pages[page] = data;
    this.#storeState();
  }

  updateStateWithStoredData(pages) {
    this.#state = {
      pages: { ...JSON.parse(pages) },
    };
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
}

export default new Model();
