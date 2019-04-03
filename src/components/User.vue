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

    <a
      v-if="full"
      :href="`http://${user.website}`"
      class="user__website"
      title="User's website"
    >
      {{ user.website }}
    </a>
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
      },
      full: {
        type: Boolean,
        default: false
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
    margin-bottom: 1em;

    &__avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      background-color: #27b043;
      border-radius: 100%;
      margin-bottom: 0.5em;
    }

    &__name {
      margin-top: 0;
      margin-bottom: 0.5em;
      text-align: center;
    }
    
    &__website {
      color: #4a90e2;
      text-decoration: none;
    }
  }
</style>