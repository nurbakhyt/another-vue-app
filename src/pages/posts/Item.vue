<template>
  <section class="section post-page">

    <post
      v-if="!!currentPost"
      :post="currentPost"
      :user="user"
      full
    />

    <h3 v-else>404. Not Found</h3>

  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import Post from '../../components/Post';

  export default {
    name: 'PostItem',
    components: {Post},
    computed: {
      ...mapGetters([
        'users',
        'posts',
        'currentPost',
        'user'
      ]),

    },
    mounted () {
      this.getPost(this.$route.params.id)
        .then(post => {
          this.getUser(post.userId);
        });
    },
    methods: {
      ...mapActions([
        'getPost',
        'getUser'
      ])
    }
  }
</script>

<style lang="scss">
  .post-page {

  }
</style>