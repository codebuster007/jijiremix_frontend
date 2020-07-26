<template>
<div class="col-md-6 col-lg-4 col-xl-3">
  <div class="card text-center card-product">
    <div class="card-product__img">
      <!-- <img class="card-img" :src="link" alt=""> -->
      <vue-load-image class="card-img">
        <img slot="image" :src="link"/>
        <img slot="preloader" src="../assets/img/loader_img.gif"/>
      <div slot="error">load error</div>
    </vue-load-image>
      <ul class="card-product__imgOverlay">
        <li><button><i class="ti-bag"></i></button></li>
        <!-- <li><button><i class="ti-shopping-cart"></i></button></li> -->
        <li><button><i class="ti-heart"></i></button></li>
      </ul>
    </div>
    <div class="card-body">
      <h4 class="card-product__title"><a href="single-product.html">{{product.name}}</a></h4>
      <p>{{ product.description }}</p>
      <p class="card-product__price">₦{{product.price}}</p><br/>
      <p class="nav-item"><router-link class="button button-header" to="/">Intrested!</router-link></p>
    </div>
  </div>
</div>
</template>
<script>
import VueLoadImage from 'vue-load-image'

export default {
  name: 'TrendingProducts',
  props: {
    product: Object

  },
  data () {
    return {
      preloader: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
    }
  },
  methods: {
    async getImage () {
    //   const response = await PostsService.downloadURL({
    //     imgURL: this.product.image
    //   })
    //   this.link = response.data
      this.link = this.product.image
    }
  },
  created () {
    this.getImage()
  },
  components: {
    'vue-load-image': VueLoadImage
  }
}
</script>
