<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const phrases = ref<string[]>([])
const advantages = ref<string[]>([])
const titleText = ref('')
let currentPhraseIndex = 0

async function fetchBannerData() {
  try {
    const response = await axios.get('http://localhost:3000/api/banner')
    const bannerData = response.data
    phrases.value = bannerData.titles
    advantages.value = bannerData.features
    typeWriter(phrases.value[currentPhraseIndex], 0)
  } catch (error) {
    console.error('Ошибка при выборке данных баннера:', error)
  }
}

function typeWriter(text: string, index: number) {
  if (index < text.length) {
    titleText.value += text.charAt(index)
    index++
    setTimeout(() => typeWriter(text, index), 150)
  } else {
    setTimeout(eraseText, 1000)
  }
}

function eraseText() {
  let text = titleText.value
  if (text.length > 0) {
    text = text.slice(0, -1)
    titleText.value = text
    setTimeout(() => eraseText(), 100)
  } else {
    setTimeout(nextPhrase, 500)
  }
}

function nextPhrase() {
  currentPhraseIndex++
  if (currentPhraseIndex < phrases.value.length) {
    titleText.value = ''
    typeWriter(phrases.value[currentPhraseIndex], 0)
  } else {
    currentPhraseIndex = 0
    titleText.value = ''
    typeWriter(phrases.value[currentPhraseIndex], 0)
  }
}

onMounted(() => {
  fetchBannerData()
})
</script>

<template>
  <section class="banner">
    <div class="banner__content">
      <h1 class="banner__title">
        {{ titleText }}
      </h1>
      <div class="banner__advantages">
        <div v-for="(advantage, index) in advantages" :key="index" class="advantage">
          {{advantage}}
        </div>
      </div>
      <a href="#about-us" class="banner__button">О нас</a>
    </div>
  </section>
</template>

<style scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-image: url('/banner.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
}

.banner__content {
  max-width: 800px;
}

.banner__title {
  min-height: 50px;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.banner__advantages {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
}

.banner__advantages .advantage {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 8px;
  flex: 1;
  margin: 0 0.5rem;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.banner__advantages .advantage:hover {
  background-color: rgba(0, 0, 0, 0.8);
  transform: scale(1.05);
}

.banner__button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #007bff;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.banner__button:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .banner__title {
    font-size: 2rem;
  }

  .banner__button {
    font-size: 0.875rem;
  }

  .banner__advantages .advantage {
    max-width: calc(50% - 1rem);
  }
}

@media (max-width: 480px) {
  .banner__title {
    font-size: 1.5rem;
  }

  .banner__button {
    font-size: 0.75rem;
  }

  .banner__advantages {
    flex-wrap: wrap;
    justify-content: center;
  }

  .banner__advantages .advantage {
    flex: 0 0 calc(50% - 1rem);
    margin: 0.5rem;
  }
}
</style>
