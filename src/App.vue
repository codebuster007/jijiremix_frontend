<template>
<div id="app">
  <Header/>
  <body>
    <router-view/>
  </body>
</div>
</template>
<script>
/* eslint-disable */
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style scoped>


</style>
