<template>
  <div class="flex items-center align-center justify-center h-full">
    <div class="text-center">
      <div style="left: -22.5px" class="relative">
        <!-- <img src="/assets/images/i7.jpeg" alt="i7" width="200" class="rounded-1 relative inline z-10"
        > -->
        <!-- <img src="/assets/images/i9.jpeg" alt="i9" width="200" class="rounded-1 inline absolute"
             style="left: 45px" 
        > -->
      </div>

      <br/>
      <LoginButton text="现在登录" :join="true"/>
    </div>
  </div>

</template>

<script setup>
import {NA, NH1, NP, NText} from 'naive-ui'
import LoginButton from "../../components/LoginButton.vue";

//
</script>
