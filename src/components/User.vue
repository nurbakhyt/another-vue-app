<template>
  <div class="user">
    <div
      v-if="avatar"
      :style="style"
      class="user__avatar"
    >
      {{ avaLetter }}
    </div>
    <p
      v-if="name"
      class="user__name"
    >
      {{ user.name }}
    </p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'User',
    props: {
      userId: {
        type: Number,
        required: true
      },
      avatar: {
        type: Boolean,
        default: true
      },
      name: {
        type: Boolean,
        default: true
      },
      width: {
        type: String,
        default: '60'
      },
      height: {
        type: String,
        default: '60'
      }
    },
    computed: {
      ...mapGetters(['users']),
      user () {
        return this.users.find(user => user.id === this.userId);
      },
      avaLetter () {
        return this.user.name[0];
      },
      style () {
        return {
          height: `${this.height}px`,
          width: `${this.width}px`
        }
      }
    }
  }
</script>

<style lang="scss">
  .user {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      background-color: #27b043;
      border-radius: 100%;
    }

    &__name {
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      text-align: center;
    }
  }
</style>