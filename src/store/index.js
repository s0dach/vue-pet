import { createStore } from "vuex";

export default createStore({
  state: {
    likes: 1,
  },
  getters: {
    // doubleLikes(state) {
    //   console.log(state);
    //   return state.likes * 2;
    // },
  },
  mutations: {
    incrementLikes(state) {
      return (state.likes += 1);
    },
    decrementLikes(state) {
      return (state.likes -= 1);
    },
  },
  actions: {},
  modules: {},
});
