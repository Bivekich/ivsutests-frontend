<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const email = ref('')
const password = ref('')
const message = ref('')

const userStore = useUserStore()
const router = useRouter()

const login = async () => {
  try {
    await userStore.login(email.value, password.value)
    await router.push('/profile')
  } catch (error: any) {
    message.value = error.message
  }
}
</script>

<template>
  <div class="login">
    <form class="login__form" @submit.prevent="login">
      <h2 class="login__title">Авторизация</h2>
      <input
        class="login__input"
        v-model="email"
        type="email"
        placeholder="Введите почту"
        required
      />
      <input
        class="login__input"
        v-model="password"
        type="password"
        placeholder="Введите пароль"
        required
      />
      <button class="login__button" type="submit">Войти</button>
      <p v-if="message" class="login__message">{{ message }}</p>
    </form>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.login__title {
  margin-bottom: 1.5rem;
  text-align: center;
}

.login__form {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
}

.login__input {
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.login__button {
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}

.login__button:hover {
  background-color: #0056b3;
}

.login__message {
  margin-top: 1rem;
  text-align: center;
  color: #d9534f;
}
</style>
