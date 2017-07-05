import Vuex from 'vuex'

const store = function () {
  return new Vuex.Store({
    state: {
      counter : 0
    },
    mutations: {
      increment: function(state){
        state.counter ++
      }
    }
  })
}

export default store