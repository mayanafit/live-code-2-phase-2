<template>
  <div class="d-flex" style="justify-content: space-evenly;">
    <div class="ml-5">
        <img width="700" src="https://i.pinimg.com/originals/3c/48/bf/3c48bfd76cffef0325f1659ab8123b27.jpg" alt="kucing">
    </div>
    <div class="" style="width: 30%; margin-top: 100px; margin-right: 200px;">
        <h1>Welcome to Animal Kingdom!</h1>
        <br>
        <form @submit.prevent="login">
            <h2>Login Page</h2>
            <div class="form-group">
              <label for="email">Email address</label>
              <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input v-model="password" type="password" class="form-control" id="password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch(`processLogin`, user)
    }
  }
};
</script>
