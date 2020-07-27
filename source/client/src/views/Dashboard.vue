<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-info">
            <a class="navbar-brand" href="#">Animal Kingdom</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">Link</a>
                </li>
              </ul>
            <button class="btn btn-dark my-2 my-sm-0" type="button">Logout</button>
            </div>
        </nav>

        <div class="container" style="margin: 50px auto">
            <h1 class="text-center">Animals</h1>
            <div class="row my-5">
                <div class="col-sm-3 mt-4">
                    <div class="card" style="width: 16rem;">
                        <img src="" class="card-img-top" alt="ini image.">
                        <div class="card-body d-flex flex-column">
                            <div>
                                <h5 class="card-title text-center">Tikus</h5>
                                <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <a role="button" class="btn btn-warning mt-4">Add to Favorites</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container" style="margin: 50px auto">
            <h1 class="text-center">My Favorites</h1>
            <div class="row my-5">
                <div class="col-sm-3 mt-4">
                    <div class="card" style="width: 16rem;">
                        <img src="" class="card-img-top" alt="ini image.">
                        <div class="card-body d-flex flex-column">
                            <div>
                                <h5 class="card-title text-center">Tikus</h5>
                                <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <a role="button" class="btn btn-danger text-light mt-4">Remove from Favorites</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style>

</style>