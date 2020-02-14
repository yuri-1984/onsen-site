import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coffees:[],
    keyword:'',
    apiUrl: "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=&pref=PREF13&hit_per_page=15&freeword=",
    user: null,
    isAuthenticated:false,
    userFavolites:[]
  },
  mutations: {
    setOnsens(state, payload){
      state.coffees = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setUserFavolites(state,payload){
      state.userFavolites = payload;
    }

  },
  actions: {
    async getOnsens({ state, commit },keyword) {
     
      try {
        let response = await axios.get(`${state.apiUrl}`+keyword);
        commit("setOnsens", response.data.rest);
        
      } catch (error) {
        commit("setOnsens", []);
      }
    },
    userJoin({commit},{email,password}){
      firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(user =>{
        commit('setUser',user);
        commit('setIsAuthenticated',true);
        router.push('/about')
      })
      .catch(()=>{
        commit('setUser',null);
        commit('setIsAuthenticated',false);
        router.push('/');
      });
    

  },
  userLogin({ commit }, { email, password }) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        commit('setUser', user);
        commit('setIsAuthenticated', true);
        router.push('/about');
      })
      .catch(() => {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        router.push('/');
      });
  },
  userSignOut({commit}){
    firebase
    .auth()
    .signOut()
    .then(() =>{
      commit('setUser',null);
      commit('setIsAuthenticated', false);
      router.push('/');
    })
    .catch(() =>{
      commit('setUser',null);
      commit('setIsAuthenticated',false);
      router.push('/')
    });

  },
  addFavolite({state},payload){
    firebase
    .database()
    .ref('users')
    .child(state.user.user.uid)
    .push(payload);

  },
  getUserFavolites({ state, commit }) {
    return firebase
      .database()
      .ref('users/' + state.user.user.uid)
      .once('value', snapshot => {
        commit('setUserFavolites', snapshot.val());
      });
  }
  
  
},
getters: {
  isAuthenticated(state) {
    return state.user !== null && state.user !== undefined;
  },
  
},
  modules: {
  }
})
 