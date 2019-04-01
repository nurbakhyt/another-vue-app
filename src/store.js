import Vue from 'vue';
import Vuex from 'vuex';
import User from './services/User';
import Post from './services/Post';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: [],
    posts: [],
    userId: null,
    postId: null,
    loading: false
  },
  getters: {
    users: state => state.users,
    currentUser: state => state.users.find(user => user.id === state.userId),
    posts: state => state.posts,
    currentPost: state => state.posts.find(post => post.id === state.postId),
    loading: state => state.loading
  },
  actions: {
    fetchUsers ({commit, state}) {
      return new Promise ((resolve, reject) => {
        !state.loading && commit('LOADING_MUTATION');

        User.all()
          .then(response => {
            commit('LOADED_USERS_MUTATION', response.data);
            state.loading && commit('LOADED_MUTATION');
            resolve(response.data);
          })
          .catch(response => {
            state.loading && commit('LOADED_MUTATION');
            reject(response);
          });
      });
    },
    fetchPosts ({commit, state}) {
      return new Promise ((resolve, reject) => {
        !state.loading && commit('LOADING_MUTATION');

        Post.all()
          .then(response => {
            commit('LOADED_POSTS_MUTATION', response.data);
            state.loading && commit('LOADED_MUTATION');
          })
          .catch(response => {
            state.loading && commit('LOADED_MUTATION');
          });
      });
    },
    getPost ({commit}) {},
    getUser ({commit}) {}
  },
  mutations: {
    LOADING_MUTATION (state) {
      state.loading = true;
    },
    LOADED_MUTATION (state) {
      state.loading = false;
    },
    LOADED_USERS_MUTATION (state, users = []) {
      state.users = users;
    },
    LOADED_POSTS_MUTATION (state, posts = []) {
      state.posts = posts;
    },
    SHOW_USER_MUTATION (state, userId) {
      state.userId = userId;
    },
    SHOW_POST_MUTATION (state, postId) {
      state.postId = postId;
    }
  }
});

export default store;