<template>
<section class="blog-banner-area" id="category">
    <div class="container h-100">
        <div class="blog-banner">
            <div class="text-center">
                <h1>{{msg}}</h1>
                <nav aria-label="breadcrumb" class="banner-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Login/Register</li>
        </ol>
        </nav>
            </div>
        </div>
</div>
</section>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    msg: String
  }
}
</script>
