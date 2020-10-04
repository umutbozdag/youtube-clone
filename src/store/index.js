import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSidebarOpen: true,
  },
  mutations: {
    setIsSidebarOpenHandler(state, payload) {
      state.isSidebarOpen = payload;
    },
  },
  actions: {
    setIsSidebarOpen({ commit }, payload) {
      commit("setIsSidebarOpenHandler", payload);
    },
  },
  modules: {},
});
