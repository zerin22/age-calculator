<template>
  <div>
    <p v-if="isLegalAge">Eligible for voting</p>
    <p v-else>Not eligible for voting</p>
  </div>
</template>

<script>
export default {
  props: {
    age: {
      type: Number,
      required: true
    }
  },
  computed: {
    isLegalAge() {
      return this.age >= 18;
    }
  }
}
</script>

<style>
/* Component styles */
</style>
