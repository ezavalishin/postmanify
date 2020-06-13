export const state = () => ({
  values: [],
})

export const mutations = {
  set(state, values) {
    state.values = values
  },
}
export default {
  namespaced: true,
  state,
  mutations,
}
