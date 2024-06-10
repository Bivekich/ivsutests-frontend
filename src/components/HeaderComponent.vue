<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <RouterLink to="/">
      <div class="header__logo">
        <img src="/logo.jpg" alt="Логотип" class="header__logo-img" />
        <h1 class="header__logo-text">IVSU Tests</h1>
      </div>
    </RouterLink>
    <div class="header__search">
      <form>
        <input type="text" placeholder="Введите id теста..." />
        <button type="submit">Найти</button>
      </form>
    </div>
    <div class="header__auth">
      <RouterLink to="/login">
        <button>Войти</button>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header__logo {
  display: flex;
  align-items: center;
}

.header__logo-img {
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
  border-radius: 50%;
}

.header__logo-text {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.header__search form {
  display: flex;
  align-items: center;
  position: relative;
}

.header__search input {
  padding: 0.5rem 4rem 0.5rem 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  transition: border-color 0.3s;
  margin-right: -1px;
}

.header__search input:focus {
  border-color: #007bff;
  outline: none;
}

.header__search button {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.header__search button:hover {
  background-color: #0056b3;
}

.header__auth button {
  padding: 0.5rem 1rem;
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

.header__auth button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>
