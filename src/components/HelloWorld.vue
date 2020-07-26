<template>
<div>
  <!-- <h1>{{ msg }}</h1> -->
  <main class="site-main">
  <!--================ Hero banner start =================-->
  <section class="hero-banner">
    <div class="container">
      <div class="row no-gutters align-items-center pt-60px">
        <div class="col-5 d-none d-sm-block">
          <div class="hero-banner__img">
            <img class="img-fluid" src="../assets/img/home/hero-banner.png" alt="">
          </div>
        </div>
        <div class="col-sm-7 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0">
          <div class="hero-banner__content">
            <h4>Shopping is fun!</h4>
            <h4>Only when you show your interest!</h4>
            <h1>Browse Our Premium Product</h1>
            <p>With us, your interest is always fulfilled. It's simple and easy. Select the product you love and show your interest.</p>
            <a class="button button-hero" href="#">Browse Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================ Hero banner start =================-->

  <!-- ================ trending product section start ================= -->
  <section class="section-margin calc-60px">
    <div class="container">
      <div class="section-intro pb-60px">
        <p>Popular Item in the market</p>
        <h2>Trending <span class="section-intro__style">Product</span></h2>
      </div>
      <div class="row">
        <TrendingProducts
          v-for="item in products"
          :key="item.item_id"
          :product="item"
        />
      </div>
    </div>
  </section>
  <!-- ================ trending product section end ================= -->
  <Footer/>
  </main>
</div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import TrendingProducts from '@/components/TrendingProduct.vue'
import { apiService, handleResponse } from '@/common/api.service.js'

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  components: {
    Footer,
    TrendingProducts
  },

  data () {
    return {
      products: [],
      loadingProducts: false
    }
  },
  methods: {
    getProducts () {
      const endpoint = 'store/'
      this.loadingProducts = true
      apiService().get(endpoint)
        .then(handleResponse)
        .catch(error => {
          console.log(error)
        }).then(data => {
          // console.log(data)
          this.products.push(...data)
          this.loadingProducts = false
        })
    }
  },

  created () {
    this.getProducts()
    // console.log(this.products)
    document.title = 'Jiji Aroma'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
-->
