<template>
  <div id="app">
    <div class="header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">HomeCafe</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active bg-light">
              <router-link to="/" class="nav-link">home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/productdata" class="nav-link"
                >products</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">登入</router-link>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <p class="my-2"><i class="bi bi-controller"></i>Welcome! {{ username }}</p>
              
            </li>
            <!-- <li class="nav-item">
              <p>{{cartproduct}}</p>
              
            </li> -->
          </ul>
        </div>
      </nav>
    </div>

    <!-- <theheader @pushusername='getusername' /> -->

    <!-- <div class="form-check form-check-inline" >
      <select name="" id="" v-model="status" @change='changestatus' >
        <option value="one">1</option>
        <option value="two">2</option>
      </select>
      <p class="ml-5">Welcome!{{username}}</p>
    </div> -->

    <router-view :status="mystatus" @pushusername="getusername" @pushtocart='gettocart' />

    <thefooter />
  </div>
</template>

<script>

import theheader from '@/components/theheader'
import Thefooter from '@/components/thefooter'

//import header from '@/components/header';
// import HelloWorld from './components/HelloWorld.vue'

export default {

  name: 'App',

  components: {
    theheader,
    Thefooter

  },
  data() {
    return {
      status: 'one',
      mystatus: 'one',
      username: '',
      cartproduct:''

    }
  },
  methods: {
    changestatus() {
      this.mystatus = this.status

    },
    getusername(name) {
      console.log(name);
      this.username = name

    },
    gettocart(product){
      console.log(product)
       this.cartproduct = product
    }

  }

}
</script>

<style >
@import "bootstrap/dist/css/bootstrap.min.css";
@import "bootstrap-icons/font/bootstrap-icons";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
