import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
const URL = 'http://localhost:3000';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders:[],
    userData:"",
    state:[],
    Loading:true,
  },
  actions: {
    findUser({commit}, Login) {
      return new Promise((resolve, reject) => {
        commit('changeLoadingState', true);
        axios.get(URL+'/users?email='+Login.email+'&password='+Login.password)
        .then((response) => {
          commit('getUser', response.data)
          commit('changeLoadingState', false);
          resolve(response.data);})
        .catch(err => reject(err))
      });
    },
    getStates({commit}){
      return new Promise((resolve, reject) => {
        commit('changeLoadingState', true);
        axios.get(URL+'/states')
        .then((response) => {
          commit('updateStates', response.data)
          commit('changeLoadingState', false);
          resolve(response.data);})
        .catch(err => reject(err))
      });
    },
    getOrders({commit}){
      return new Promise((resolve, reject) => {
        commit('changeLoadingState', true);
        axios.get(URL+'/orders')
        .then((response) => {
          commit('updateOrders', response.data)
          commit('changeLoadingState', false);
          resolve(response.data);})
        .catch(err => reject(err))
      });
    },
    putOrder({commit}, order){
      return new Promise((resolve, reject) => {
        commit('changeLoadingState', true);
        axios.put(URL+'/orders/'+order.id, order)
        .then((response) => {
          commit('changeLoadingState', false);
          resolve(response.data);})
        .catch(err => reject(err))
      });
    },
  },
  mutations: {
    changeLoadingState(state, loading) {
      state.loading = loading
    },
    getUser(state, response){
      state.userData={
        "id":response[0].id,
        "email":response[0].email,
        "password":response[0].password,
        "name": response[0].name,
        "surname":response[0].surname,
        "token":response[0].token
      }
    },
    updateStates(state, response){
        state.states=response;
    },
    updateOrders(state, response){
      state.orders=response;
  },
    
  },
  modules: {

  }
})
