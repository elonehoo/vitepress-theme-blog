<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps<{
  href?: string
  noIcon?: boolean
}>()
const isExternal = computed(() => props.href && /^[a-z]+:/i.test(props.href))
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    class="vt-link"
    :class="{ link: href }"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </component>
</template>
