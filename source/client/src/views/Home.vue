<template>
  <div class="d-flex" style="justify-content: space-evenly;">
    <div class="ml-5">
        <img width="700" src="https://i.pinimg.com/originals/3c/48/bf/3c48bfd76cffef0325f1659ab8123b27.jpg" alt="kucing">
    </div>
    <div class="" style="width: 40%; margin-top: 50px; margin-right: 200px;">
        <h1 class="text-center">Welcome to Animal Kingdom!</h1>
        <br>
        <div id="form">
          <form @submit.prevent="login" class="d-flex flex-column">
            <div>
              <h2 class="text-center mb-3" style="text-decoration: underline;">Login Page</h2>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                v-model="email"
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="youremail@example.com">
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                v-model="password"
                type="password"
                class="form-control" id="password" placeholder="*******">
              </div>
            </div>
              <button type="submit" class="btn btn-warning mt-3">Login</button>
          </form>
        </div>
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
      password: '',
    };
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('processLogin', user);
    },
  },
};
</script>
<style scoped>
  #form {
    background: palegreen;
    padding: 30px;
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>
