<template>
  <form @submit.prevent="submitForm">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="user.name">
    <!-- Other form fields for profile image, birthdate, email, etc. -->
    <button type="submit">Save</button>
  </form>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: { ...this.value }
    };
  },
  methods: {
    submitForm() {
      this.$emit('input', this.user);
      // Additional logic to save the user information
    }
  }
}
</script>

<style>
/* Component styles */
</style>
