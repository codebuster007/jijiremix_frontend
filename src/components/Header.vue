<template>
<header class="header_area">
  <div class="main_menu">
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
    <router-link class="navbar-brand logo_h" to="/"><img src="../assets/img/logo.png" alt=""></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
        <ul class="nav navbar-nav menu_nav ml-auto mr-auto">
          <li class="nav-item active"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
          <li class="nav-item submenu dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
              aria-expanded="false">Shop</a>
            <ul class="dropdown-menu">
              <li class="nav-item"><a class="nav-link" href="category.html">Shop Category</a></li>
              <li class="nav-item"><a class="nav-link" href="single-product.html">Product Details</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        </ul>

        <ul class="nav-shop">
          <li class="nav-item"><button><i class="ti-search"></i></button></li>
          <li v-if="isLoggedIn" class="nav-item"><router-link class="nav-link" to="/">{{ name }}</router-link></li>
          <li v-if="!isLoggedIn" class="nav-item"><router-link class="button button-header" to="/login">Login</router-link></li>
          <li v-else class="nav-item"><a href="" @click="logout" class="nav-link button button-header" >Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  </header>
</template>

<script>
import { apiService, handleResponse } from '@/common/api.service.js'
/* eslint-disable */
export default {
  name: 'Header',
  props: {},
  data () {
    return {
      name: 'test',
      isLoggedIn: false
    }
  },
  methods: {
    checkLoggedIn () {
      let access = localStorage.getItem('access')
      if(access !== undefined && access !== null){
        let user = localStorage.getItem('user')
        if(user !== undefined && user !== null){
          this.name = user
          this.isLoggedIn = true
        }else{
          this.getUser(access)
        }
      }
    },
    getUser (access) {
      const endpoint = 'accounts/me/'
      apiService(access).get(endpoint)
      .then(handleResponse)
      .catch(error => {
        console.log(error)
      }).then(data => {
        console.log(data)
        if(data !== undefined && data !== null){
          localStorage.setItem('user', data.first_name + ' ' + data.last_name)
          let user = localStorage.getItem('user')
          if(user !== undefined && user !== null){
            this.name = user
            this.isLoggedIn = true
          }
        }
      })
    },
    logout () {
      localStorage.clear()
      this.$router.go()
    }
  },
  created () {
    this.checkLoggedIn()
  },
  beforeUpdate () {
    this.checkLoggedIn()
  },
}
</script>
