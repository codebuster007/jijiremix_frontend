<template>
<div>
<!-- ================ start banner area ================= -->
<Banner msg="Login"/>
<!-- ================ end banner area ================= -->

<!--================Login Box Area =================-->
<section class="login_box_area section-margin">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="login_box_img">
                    <div class="hover">
                        <h4>New to our website?</h4>
                        <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                        <li class="button button-account"><router-link class="nav-link" to="/register">Create an Account</router-link></li>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="login_form_inner">
                    <h3>Log in to enter</h3>
                    <form class="row login_form" @submit.prevent="submit"  id="contactForm" >
                        <div class="col-md-12 form-group error-message">
                            <p style="color:red" v-show="!email.valid">Oh, please enter a valid email address.</p>
                        </div>
                        <div class="col-md-12 form-group error-message">
                            <p v-show="!form.valid" style="color:red">Oh, please ensure the details you entered is correct</p>
                        </div>
                        <div class="col-md-12 form-group">
                            <input type="email" class="form-control" id="email" name="email" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'"
                            required="" :class="{ email, error: !email.valid }" v-model="email.value">
                        </div>
                        <div class="col-md-12 form-group">
                            <input type="password" class="form-control" id="password" name="password" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"
                            v-model="password.value">
                        </div>
                        <div class="col-md-12 form-group">
                            <button type="submit" value="submit" class="button button-login w-100">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<!--================End Login Box Area =================-->
<Footer />
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'
import { apiService, handleResponse } from '@/common/api.service.js'

var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

/* eslint-disable */
export default {
  components: {
    Footer,
    Banner
  },

  data () {
    return {
      email: {
        value: '',
        valid: true
      },
      password: {
        value: ''
      },
      submitted: false,
      form: {
          valid: true
      }
    }
  },
  methods: {
    submit () {
      const endpoint = 'accounts/login/'
      apiService().post(endpoint, JSON.stringify({
          email: this.email.value,
          password: this.password.value
        }))
      .then(handleResponse)
      .catch(error => {
        this.form.valid = false
        console.log(error)
      }).then(data => {
        console.log(data)
        if(data !== undefined && data !== null){
          localStorage.setItem('access', data.access)
          localStorage.setItem('refresh', data.refresh)
        }
        // this.checkLoggedIn()
        this.submitted = true
        this.$router.push('/')
        this.$router.go()
      })
    },
    validate (type, value) {
      if (type === 'email') {
        this.email.valid = this.isEmail(value) ? true : false
      }
    },
    isEmail (value) {
      return emailRegExp.test(value)
    },
  },
  watch: {
    'email.value': function (value) {
      this.validate('email', value)
    }
  }
}
</script>
