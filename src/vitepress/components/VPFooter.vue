<script lang="ts" setup>
import { useConfig } from '../composables/config'
const { config } = useConfig()
</script>

<template>
  <div class="VPFooter">
    <span v-if="config.footer?.license" class="text-sm">
      <a target="_blank" :href="config.footer.license.link" style="color:inherit"> {{ config.footer.license.text }} </a>
      {{ config.footer.copyright }}
    </span>
    <div class="flex-auto" />
  </div>
</template>

<style scoped>
.VPFooter {
  opacity:0.5;
  margin:auto;
  display:flex;
  margin-top:2.5rem;
  margin-bottom:1.5rem;
}
</style>
