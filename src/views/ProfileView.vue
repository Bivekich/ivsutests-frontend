<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const user = computed(() => userStore.user)

const fetchUserProfile = async () => {
  try {
    await userStore.fetchUserProfile()
  } catch (error) {
    console.error(error)
  }
}

const logout = () => {
  userStore.logout()
  router.push('/')
}

onMounted(() => {
  fetchUserProfile()
})
</script>

<template>
  <div class="profile">
    <h2 class="profile__title">Профиль пользователя</h2>
    <div v-if="user" class="profile__info">
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Роль:</strong> {{ user.role }}</p>
    </div>
    <div v-else class="profile__loading">Загрузка...</div>
    <button class="profile__button" @click="logout">Выйти</button>
    <router-link v-if="user &&(user.role === 'student' || user.role === 'teacher' || user.role === 'admin')" to="/student-tests" class="profile__link">Решенные тесты</router-link>
    <router-link v-if="user &&(user.role === 'teacher' || user.role === 'admin')" to="/create-test" class="profile__link">Создать тест</router-link>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f4f4f4;
}

.profile__title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.profile__info {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
  margin-bottom: 1.5rem;
}

.profile__loading {
  font-size: 1.25rem;
  color: #888;
  margin-bottom: 1.5rem;
}

.profile__button {
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background: #d9534f;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.profile__button:hover {
  background: #c9302c;
}

.profile__link {
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;
}

.profile__link:hover {
  text-decoration: underline;
}
</style>
