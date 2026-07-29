<script setup lang="ts">
import type { User } from '@/types'

const props = defineProps<{
  user: User
}>()
</script>

<template>
  <div class="profile-info">
    <p>{{ props.user.phone }}</p>
    <p>
      {{ props.user.address.street }}, {{ props.user.address.suite }},
      {{ props.user.address.city }} {{ props.user.address.zipcode }}
    </p>
  </div>
</template>

<style scoped>
.profile-info {
  text-align: center;
}
</style>