<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { User, Post } from '@/types'
import UserService from '@/services/UserService'

const props = defineProps<{
  user: User
}>()

const posts = ref<Post[] | null>(null)

onMounted(() => {
  UserService.getUserPosts(props.user.id)
    .then((response) => {
      posts.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id" class="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style scoped>
.posts {
  max-width: 500px;
  margin: 0 auto;
}

.post {
  margin-bottom: 20px;
}
</style>