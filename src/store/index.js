import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    packages: [],
    foundedPackages: [],
    searchHistory: [],
    search: '',
    deatailsModal: false
  },
  mutations: {
    PUT_SEARCH: (state, data) => {
      state.search = data
    },
    PUT_FOUNDED_PACKAGES: (state, foundedPackages) => {
      state.foundedPackages = foundedPackages;
    },
    SET_STATE_DETAIL_POPUP: state => {
      state.deatailsModal = !state.deatailsModal
    },
    SET_USER_SEARCH: (state, searchData) => {
      state.searchHistory.push(searchData)
    }

     
  },

  actions: {

    GET_SEARCH ({commit}, data) {
      commit ('PUT_SEARCH', data)
      return axios ('https://registry.npmjs.com/-/v1/search?size=100&text=' + data, {
        method: 'GET'
      })
      .then ((foundedPackages) => {
        commit ('PUT_FOUNDED_PACKAGES', foundedPackages.data.objects)
        return foundedPackages
      })
      .catch ((foundedError) => {
        
        return foundedError
      })
    },

    DETAIL_POPUP_ACTION ({commit}) {
      commit ('SET_STATE_DETAIL_POPUP')
    },
    GET_USER_SEARCH ({commit}, searchData) {
      commit ('SET_USER_SEARCH', searchData)
    }

    




  },

  getters: {
  
    RESULT_FOUNDED (state) {
      return state.foundedPackages
    },
    DETAIL_POPUP(state) {
      return state.deatailsModal
    },
    SEARCH_HISTORY(state) {
      return state.searchHistory
    }
    
    

  }

})
