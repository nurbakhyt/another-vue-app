import API from './API';

export default {
  all () {
    return API().get('users');
  },
  get (id) {
    return API().get(`users/${id}`)
  }
}