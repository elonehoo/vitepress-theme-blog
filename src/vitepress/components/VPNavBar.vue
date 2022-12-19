<script setup lang="ts">
import {useDark} from '@vueuse/core'
import { useConfig } from '../composables/config'
const { config } = useConfig()

const isDark = useDark()
</script>

<template>
  <div class="VPNavBar">
    <div class="container">
      <router-link
      class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
      to="/"
      focusable="false"
    >
      <img v-show="isDark" :src="config.logo?.dark" alt="logo">
      <img v-show="!isDark" :src="config.logo?.light" alt="logo">
    </router-link>
    </div>
  </div>
</template>

<style scoped>
.VPNavBar{
  z-index:40;
}
</style>
