import API from './API';

export default {
  all () {
    return API().get('posts');
  },
  get (id) {
    return API().get(`posts/${id}`)
  }
}