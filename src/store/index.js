import { createStore } from "vuex";

import coachesModule from "@/store/modules/coaches/index.js";
import requestsModule from "@/store/modules/requests/index.js";

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
  state() { //rootState
    return {
      userId: "c3",
    };
  },
  getters: { //rootGetters
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
