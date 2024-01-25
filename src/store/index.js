import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    cats:[],
    article:[],
    latestArticles:[],
    tags:[],
    search:[]
  },
  getters: {
    getCats(state){
      return state.cats
    },
    getLatestArticles(state){
      return state.latestArticles
    },
    getArticle(state){
      return state.article
    },
  },
  mutations: {
    setCats(state, cats){
      state.cats = cats
    },
    setLatestArticles(state, latestArticles){
      state.latestArticles = latestArticles
    },
    setArticle(state, article){
      state.article = article
    },
  },
  actions: {
    fetchCats({ commit }){
      axios.get("/siteapi/sort/v1/cats")
      .then(response => {
        commit("setCats", response.data)})
      .catch(err => {
        console.log(err)})
    },
    fetchLatestArticles({ commit }){
      axios.get("/siteapi/posts/v1/posts")
      .then(response => {
        commit("setLatestArticles", response.data.results)
      })
      .catch(err => {
        console.log(err)
        console.log("مشکلی پیش آمد! لطفا به مسِولان سایت اطلاع دهید. با تشکر")
      })
    },
    fetchArticle({ commit }, slug){
      axios.get("/siteapi/posts/v1/post/" + slug)
      .then(response => {
        commit("setArticle", response.data)
      })
      .catch(err => {
        console.log(err)
        console.log("مشکلی پیش آمد! لطفا به مسِولان سایت اطلاع دهید. با تشکر")
      })
    },
  },
  modules: {
  }
})
