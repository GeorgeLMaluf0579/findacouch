import { createStore } from "vuex";

import coachesModule from '@/store/modules/coaches/index.js'

const store = createStore({
  modules: {
    coaches: coachesModule
  }
})

export default store
