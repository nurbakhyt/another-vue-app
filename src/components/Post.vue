<template>
  <article
    class="post"
    :class="{'post--small': small}"
  >
    <div class="post-author">
      <user :user-id="post.userId"/>
    </div>

    <div class="post-body">
      <router-link
        :to="{ name: 'post-item', params: { id: post.id } }"
        class="post__title"
      >
        {{ post.title }}
      </router-link>

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
      }
    }
  }
</script>

<style lang="scss">
  .post {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
    padding: 4px 8px;

    &--small {
      padding: 4px;
    }

    &__title {
      color: #3951a7;
      display: block;
      font-size: 1.2em;
      margin: 0 0 0.5em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-decoration: none;
    }

    &__text {
      margin: 0 0 0.5em;
    }

    @media (min-width: 768px) {
      margin-bottom: 8px;
      padding: 8px 16px;
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