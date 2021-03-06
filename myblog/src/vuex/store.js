import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-type'
import api from '../api'

Vue.use(Vuex)

const state = {
  articleList: [],
  showLoading: false,
  articleLoaded: false
}

const mutations = {
  [types.GET_ALL_ARTICLES] (state, articleList) {
    state.articleList = articleList
  },
  [types.ARTICLE_LOADED] (state, articleLoaded) {
    state.articleLoaded = articleLoaded
  }
}

const getters = {
  articleList: state => state.articleList,
  showLoading: state => state.showLoading,
  articleLoaded: state => state.articleLoaded
}

const actions = {
  'getAllArticles': ({ commit }) => {
    return new Promise((resolve, reject) => {
      api.getAllArticles().then((res) => {
        console.log(res)
        commit(types.GET_ALL_ARTICLES, res.data.articleList)
        resolve(res)
      }).catch((err) => {
        alert(err)
      })
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
