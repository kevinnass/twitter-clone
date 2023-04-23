export const state = () => ({
  token: null,
  user: null
})
  
export const mutations = {
    set_token(value) {
      state.token = value;
      // console.log('SET_TOKEN:' + state.token);
    },

    set_user(value) {
      console.log('SET_user', value);
      state.user = value;
    }
  };


  export const getters = {
    getToken() { 
      console.log('token = ' + state.token);
      return state.token;
    },

    getUser() {
      return state.user;
    },
}