<script setup lang="ts"></script>

<template>
  <section class="auth-prompt">
    <div class="auth-prompt__content">
      <h2>Все наши сервисы предоставляются бесплатно!</h2>
      <p>Они будут доступны Вам после авторизации.</p>
      <div class="auth-prompt__buttons">
        <button class="auth-prompt__button">Зарегистрироваться</button>
        <button class="auth-prompt__button">Войти</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.auth-prompt {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  background-color: #f8f9fa;
  color: #333;
  text-align: center;
}

.auth-prompt__content {
  max-width: 800px;
}

.auth-prompt h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.auth-prompt p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.auth-prompt__buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.auth-prompt__button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.auth-prompt__button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>
