<template>
  <div class="flex items-center align-center justify-center h-full">
    <div class="text-center">
      <br/>
      <LoginButton text="用莱云账号登录" :join="true"/>
      <LoginButtonLoCyan text="用LCF账号登录" :join="true"/>
    </div>
  </div>

</template>

<script setup>
import {NA, NH1, NP, NText} from 'naive-ui'
import LoginButton from "../../components/LoginButton.vue";
import LoginButtonLoCyan from "../../components/LoginButton-LoCyan.vue";

//
</script>
