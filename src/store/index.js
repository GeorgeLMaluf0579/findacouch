import { createStore } from "vuex";

import coachesModule from "@/store/modules/coaches/index.js";
import requestsModule from "@/store/modules/requests/index.js";
import authModule from '@/store/modules/auth/index.js'

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule,
  },
  state() { //rootState
    return {
      userId: "c3",
    };
  },
});

export default store;
