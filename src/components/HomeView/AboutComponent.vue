<script setup lang="ts">
import { ref } from 'vue'

const aboutUsText =
  ref(`Мы — команда профессионалов, занимающихся разработкой и внедрением инновационных решений в области тестирования и оценки знаний.
Наша миссия — предоставление качественных и эффективных инструментов для образовательных учреждений и организаций.`)

const aboutUsTitle = ref('О нас')
</script>

<template>
  <section class="about-us" id="about-us">
    <div class="about-us__content">
      <img src="/about-us.jpg" alt="О нас" class="about-us__image" />
      <div class="about-us__text">
        <h2>{{ aboutUsTitle }}</h2>
        <p>{{ aboutUsText }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
}

.about-us__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  width: 100%;
}

.about-us__image {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.about-us__text h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.about-us__text p {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .about-us__text h2 {
    font-size: 1.75rem;
  }

  .about-us__text p {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .about-us__text h2 {
    font-size: 1.5rem;
  }

  .about-us__text p {
    font-size: 0.75rem;
  }
}
</style>
