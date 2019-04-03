import Vue from 'vue';
import Vuex from 'vuex';
import User from './services/User';
import Post from './services/Post';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: [],
    posts: [],
    post: null,
    user: null,
    loading: false
  },
  getters: {
    users: state => state.users,
    posts: state => state.posts,
    currentPost: state => state.post,
    user: state => state.user,
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
            resolve(response.data);
          })
          .catch(response => {
            state.loading && commit('LOADED_MUTATION');
            reject(response);
          });
      });
    },
    getPost ({commit, state}, id) {
      return new Promise ((resolve, reject) => {
        const post = state.posts.find(p => p.id === id);
        if (!!post) {
          commit('LOADED_POST_MUTATION', post);
        } else {
          !state.loading && commit('LOADING_MUTATION');

          Post.get(id)
            .then(response => {
              commit('LOADED_POST_MUTATION', response.data);
              state.loading && commit('LOADED_MUTATION');
              resolve(response.data);
            })
            .catch(response => {
              state.loading && commit('LOADED_MUTATION');
              reject(response);
            });
        }
      });
    },
    getUser ({commit, state}, id) {
      return new Promise ((resolve, reject) => {
        const user = state.users.find(u => u.id === id);
        if (!!user) {
          commit('LOADED_USER_MUTATION', user);
        }
        else {
          !state.loading && commit('LOADING_MUTATION');

          User.get(id)
            .then(response => {
              commit('LOADED_USER_MUTATION', response.data);
              state.loading && commit('LOADED_MUTATION');
              resolve(response.data);
            })
            .catch(response => {
              state.loading && commit('LOADED_MUTATION');
              reject(response);
            });
        }
      });
    }
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
    },
    LOADED_POST_MUTATION (state, post) {
      state.posts.push(post);
      state.post = post;
    },
    LOADED_USER_MUTATION (state, user) {
      state.users.push(user);
      state.user = user;
    }
  }
});

export default store;