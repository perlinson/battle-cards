<template>
  <div>
    <form @submit.prevent="register(registerData)">
      <div class="mb-3">
        <label for="name" class="form-label">Full Name</label>
        <input
          id="name"
          v-model="registerData.name"
          type="text"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          id="email"
          v-model="registerData.email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          id="password"
          v-model="registerData.password"
          type="password"
          class="form-control"
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">Register</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      registerData: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    ...mapActions({
      register: 'user/register',
    }),
  },
}
</script>
<style></style>
