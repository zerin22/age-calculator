<template>
  <div>
    <user-profile :name="user.name" :profile-image="user.profileImage" :description="user.description"></user-profile>
    <user-form v-model="user" @age-updated="updateAge"></user-form>
    <age-calculator :age="user.age" @birth-year-updated="updateBirthYear"></age-calculator>
    <voting-eligibility :age="user.age"></voting-eligibility>
  </div>
</template>

<script>
import UserProfile from './UserProfile.vue';
import UserForm from './UserForm.vue';
import AgeCalculator from './AgeCalculator.vue';
import VotingEligibility from './VotingEligibility.vue';

export default {
  components: {
    UserProfile,
    UserForm,
    AgeCalculator,
    VotingEligibility
  },
  data() {
    return {
      user: {
        name: '',
        profileImage: '',
        description: '',
        age: 0
      }
    };
  },
  methods: {
    updateAge(newAge) {
      this.user.age = newAge;
    },
    updateBirthYear(newBirthYear) {
      this.user.birthYear = newBirthYear;
    }
  }
}
</script>

<style>
/* Component styles */
</style>
