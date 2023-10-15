<template>
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name">
    <label for="age">Age:</label>
    <input type="number" id="age" v-model="ageValue">
    <p>Birth Year: {{ birthYear }}</p>
    <p>{{ votingStatus }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const name = ref('');
const ageValue = ref(0);

const birthYear = computed(() => {
  const currentYear = new Date().getFullYear();
  return currentYear - ageValue.value;
});

const votingStatus = computed(() => {
  if (ageValue.value >= 18) {
    return 'Eligible for voting';
  } else {
    return 'Not eligible for voting';
  }
});
</script>

<style>
/* Component styles */
</style>
