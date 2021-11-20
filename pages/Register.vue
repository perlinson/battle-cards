<template>
  <div class="body">
    <h2 class="hh">Sign Up</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="20"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        input
        type="password"
        :items="items"
        :rules="[(v) => !!v || 'Password is required']"
        label="Password"
        required
      ></v-text-field>
      <p></p>
      <div class="tn">
        <v-btn
          :to="{ name: 'Home' }"
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Sign Up
        </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 20) || 'Name must be less than 20 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>
<style>
.tn {
  text-align: center;
}
.body {
  width: 35%;
  margin: 0 auto;
  padding: 60px 36px 80px 36px;
  background: white;
  border-radius: 10px;
  margin-top: 10px;
}
.hh {
  font-size: 36px;
  font-family: 'Cambria';
  padding-bottom: 12px;
  font-weight: 100;
  margin-bottom: 10px;
  padding-top: 12px;
}
</style>
>
