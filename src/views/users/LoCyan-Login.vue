<template>
  <div class="justify-center items-center flex" style="height: 60vh">
    <div>
      <div v-if="state === 'redirect'">
        <Lottie :height="256" :style="style" name="Wave" />

        <div class="text-center">
          <n-h1>欢迎！要一起加入联合映射吗？</n-h1>

          <n-button :loading="loading" class="text-center" type="info" @click="toLogin">
            现在登录！
          </n-button>
        </div>

      </div>

    </div>
    <div v-if="state === 'error'">
      <Lottie :height="256" :style="style" name="Ghost" />

      <div class="text-center">
        <n-h1 class="mt-5">
          <n-text class="text-center" type="error">
            无法完成登录。
          </n-text>
        </n-h1>

        <n-button type="error" @click="toLogin">
          重新登录
        </n-button>
      </div>
    </div>

    <p v-show="state === 'logging'" class="text-center mt-5">
      <span>莱云的 Logo 动画由 Fofray 制作。</span>
    </p>

    <p v-if="state === 'redirect'" class="text-center mt-5">
      联合映射
      <br />
      由 LoCyan Team & MirrorEdge Network 联合运营
      <br />
    </p>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { NA, NButton, NH1, NH2, NH3, NText } from 'naive-ui'
import http from '../../plugins/http'
import api from '../../config/api'
import user from "../../plugins/stores/user.js";
import Lottie from "../../components/Lottie.vue";
import axios from "axios";
import Base64 from "qs/lib/utils.js";


const style = {
  textAlign: 'center',
  marginTop: '20px',
  marginBottom: '20px'
}

const token = ref('')
const state = ref('redirect')

const loading = ref(false)

const url = ref('')

const connect = () => {
  loading.value = true
  user.commit('updateToken', token.value)
  http.get('/user').then((res) => {
        setTimeout(() => {
          user.commit('updateToken', token.value)
          user.commit('updateUser', res.data)
          location.href = '/'
        }, 3000)
      })
      .catch(() => {
        state.value = 'error'
        user.commit('updateToken', '')
        user.commit('updateUser', {})
        loading.value = true
      })
}

if (getUrlKey("token") !== null) {
  token.value = getUrlKey("token");
  connect()
}

let loginInter = null

const times = ref(0)

function toLogin() {
  if (state.value === 'logging') {
    return
  }

  state.value = 'logging'

  window.open("https://oauth.locyanfrp.cn/login?callback=" + location.href)

}

const logo = ref('Logo-dark')
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  logo.value = 'Logo-white'
}

function getUrlKey(name) {
  let path = window.location.href.split("?") //分割url
  // 拼接链接
  let href = path[0] + "?" + path[1]
  // 如果不存在则抛出null
  if (path[1] === null || path[1] === "" || path[1] === undefined) {
    return null;
  }
  let query = Base64.decode(path[1])  //解码
  href = path[0] + "?" + query //解码后重组
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(href) || [, ""])[1].replace(/\+/g, '%20')) || null
}
</script>