<script setup lang="ts">
import type { User } from '@/types'

defineProps<{
  user: User
}>()
</script>

<template>
  <RouterLink class="user-link" :to="{ name: 'user-detail-view', params: { id: user.id } }">
    <div class="user-card">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <p>{{ user.company.name }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.user-card {
  border: 1px solid #39395c;
  padding: 20px;
  width: 250px;
  margin-bottom: 18px;
  cursor: pointer;
}

.user-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.user-link {
  text-decoration: none;
  color: #2c3e50;
}
</style>