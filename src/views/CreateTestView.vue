<script setup lang="ts">
import {ref} from 'vue'
import {useUserStore} from '@/stores/user'

const userStore = useUserStore()
const title = ref('')
const questions = ref ([{text: '', answers: [{text: ''}], correctAnswer: 0}])
const message = ref('')

const addQuestion = () => {
  questions.value.push({text: '', answers: [{text: ''}], correctAnswer: 0})
}

const addAnswer = (questionIndex: number) => {
  questions.value[questionIndex].answers.push({text: ''})
}

const createTest = async () => {
  try {
    await userStore.createTest(title.value, questions.value)
    message.value = 'Тест успешно создан'
    title.value = ''
    questions.value = [{text: '', answers: [{text: ''}], correctAnswer: 0}]
  } catch (error) {
    message.value = 'Ошибка при создании теста'
    console.error(error)
  }
}
</script>

<template>
  <div class="create-test">
    <h2 class="create-test__title">Создать тест</h2>
    <form @submit.prevent="createTest" class="create-test__form">
      <input v-model="title" type="text" placeholder="Название теста" required class="create-test__input">
      <div v-for="(question, index) in questions" :key="index" class="create-test__question">
        <input v-model="question.text" type="text" placeholder="Вопрос" required class="create-test__input">
        <div v-for="(answer, answerIndex) in question.answers" :key="answerIndex" class="create-test__answer">
          <input v-model="answer.text" type="text" placeholder="Вариант ответа" required class="create-test__input">
          <label>
            <input type="radio" :name="'correct' + index" :value="answerIndex" v-model="question.correctAnswer">
            Правильный ответ
          </label>
        </div>
        <button type="button" @click="addAnswer(index)" class="create-test__button">Добавить вариант ответа</button>
      </div>
      <button type="button" @click="addQuestion" class="create-test__button">Добавить вопрос</button>
      <button type="submit" class="create-test__button">Создать тест</button>
    </form>
    <p v-if="message" class="create-test__message">{{message}}</p>
  </div>
</template>

<style scoped>
.create-test {
  padding: 2rem;
  background-color: #f4f4f4;
}

.create-test__title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.create-test__form {
  display: flex;
  flex-direction: column;
}

.create-test__input {
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.create-test__button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin: 1rem;
}

.create-test__button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.create-test__question, .create-test__answer {
  margin-bottom: 1rem;
}

.create-test__message {
  font-size: 1.25rem;
  color: green;
}
</style>
