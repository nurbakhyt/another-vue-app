<template>
  <article
    class="post"
    :class="{'post--small': small}"
    :style="style"
  >
    <div class="post-author">
      <user
        :user-id="post.userId"
        :full="full"
      />
    </div>

    <div class="post-body">
      <router-link
        v-if="!full"
        :to="{ name: 'post-item', params: { id: post.id } }"
        class="post__title"
      >
        {{ post.title }}
      </router-link>

      <h3
        v-else
        class="post__title post__title--not-link"
      >
        {{ post.title }}
      </h3>

      <p class="post__text">
        {{ post.body }}
      </p>
    </div>

  </article>
</template>

<script>
  import User from './User';

  export default {
    name: 'Post',
    components: {User},
    props: {
      post: {
        type: Object,
        required: true
      },
      small: {
        type: Boolean,
        default: false
      },
      full: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      style () {
        if (this.full) {
          return {flexDirection: 'column'}
        }
      }
    }
  }
</script>

<style lang="scss">
  .post {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
    padding-top: 16px;
    padding-bottom: 16px;

    &--small {
      padding: 4px;
    }

    &__title {
      color: #3951a7;
      display: block;
      font-size: 1.2em;
      margin: 0 0 0.5em;
      text-decoration: none;
      
      &--not-link {
        text-align: center;
      }
    }

    &__text {
      margin: 0 0 0.5em;
    }
  }

  .post-author {
    flex-basis: 100px;
    flex-shrink: 0;
  }

  .post-body {
    flex-basis: auto;
    overflow: hidden;
  }
</style>