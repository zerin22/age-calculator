<template>
  <div>
    <img :src="profileImage" alt="Profile Image">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    profileImage: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
/* Component styles */
</style>
