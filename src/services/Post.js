import API from './API';

export default {
  all () {
    return API().get('posts');
  }
}