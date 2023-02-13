<template>
  <div>
    <n-button-group>
      <n-button type="primary" @click="login" v-if="!user.state.token">
        {{ text }}
      </n-button>
    </n-button-group>
  </div>
</template>

<script setup>
import {NButton, NButtonGroup} from 'naive-ui'
import user from '../plugins/stores/user'
import router from '../plugins/router'

function login() {
  router.push({
    name: 'auth.login-locyan'
  })
}

defineProps({
  text: {
    type: String,
    default: '登录'
  },
  join: {
    type: Boolean,
    default: false
  }
})

</script>