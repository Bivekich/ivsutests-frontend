<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const email = ref('')
const password = ref('')
const message = ref('')

const userStore = useUserStore()
const router = useRouter()

const register = async () => {
  try {
    await userStore.register(email.value, password.value)
    await router.push('/login')
  } catch (error: any) {
    message.value = error.message
  }
}
</script>

<template>
  <div class="register">
    <form class="register__form" @submit.prevent="register">
      <h2 class="register__title">Регистрация</h2>
      <input
        v-model="email"
        class="register__input"
        type="email"
        placeholder="Введите почту"
        required
      />
      <input
        v-model="password"
        class="register__input"
        type="password"
        placeholder="Введите пароль"
        required
      />
      <button class="register__button" type="submit">Зарегистрироваться</button>
      <p v-if="message" class="register__message">{{ message }}</p>
    </form>
  </div>
</template>

<style scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.register__title {
  margin-bottom: 1.5rem;
  text-align: center;
}

.register__form {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
}

.register__input {
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.register__button {
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}

.register__button:hover {
  background-color: #0056b3;
}

.register__message {
  margin-top: 1rem;
  text-align: center;
  color: #d9534f;
}
</style>
