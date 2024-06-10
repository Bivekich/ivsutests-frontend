<script setup lang="ts">
import { ref, onMounted } from 'vue'

const usersCount = ref(0)
const testsCount = ref(0)

const targetUsersCount = 1000
const targetTestsCount = 500

const incrementUsersCount = () => {
  const interval = setInterval(() => {
    usersCount.value++
    if (usersCount.value === targetUsersCount) clearInterval(interval)
  }, 10)
}

const incrementTestsCount = () => {
  const interval = setInterval(() => {
    testsCount.value++
    if (testsCount.value === targetTestsCount) clearInterval(interval)
  }, 10)
}

onMounted(() => {
  incrementUsersCount()
  incrementTestsCount()
})
</script>

<template>
  <section class="statistics">
    <div class="statistics__content">
      <div class="statistics__item">
        <h3>Пользователей</h3>
        <p>{{ usersCount }}</p>
      </div>
      <div class="statistics__item">
        <h3>Тестов</h3>
        <p>{{ testsCount }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.statistics {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  background-color: #f8f9fa;
  color: #333;
  text-align: center;
}

.statistics__content {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
}

.statistics__item {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin: 0 1rem;
  transition: transform 0.3s;
}

.statistics__item:hover {
  transform: scale(1.05);
}

.statistics__item h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.statistics__item p {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

@media (max-width: 768px) {
  .statistics__content {
    flex-direction: column;
    align-items: center;
  }

  .statistics__item {
    width: 100%;
    max-width: 300px;
    margin: 1rem 0;
  }
}

@media (max-width: 480px) {
  .statistics__item {
    padding: 1.5rem;
  }

  .statistics__item h3 {
    font-size: 1.25rem;
  }

  .statistics__item p {
    font-size: 1.5rem;
  }
}
</style>
