<template>
  <div class="d-flex" style="justify-content: space-evenly;">
    <div class="ml-5">
        <img width="700" src="https://i.pinimg.com/originals/3c/48/bf/3c48bfd76cffef0325f1659ab8123b27.jpg" alt="kucing">
    </div>
    <div class="" style="width: 30%; margin-top: 100px; margin-right: 200px;">
        <h1>Welcome to Animal Kingdom!</h1>
        <br>
        <form>
            <h2>Login Page</h2>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
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
};
</script>
