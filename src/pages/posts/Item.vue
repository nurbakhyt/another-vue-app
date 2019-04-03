<template>
  <section class="section post-page">

    <post
      v-if="!!post"
      :post="post"
      full
    />

    <h3 v-else>404. Not Found</h3>

  </section>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Post from '../../components/Post';

  export default {
    name: 'PostItem',
    components: {Post},
    computed: {
      ...mapGetters([
        'users',
        'posts'
      ]),
      post () {
        let post = this.posts.find(item => item.id == this.$route.params.id);
        if (!!post) {
          return post;
        }
      }
    }
  }
</script>

<style lang="scss">
  .post-page {

  }
</style>