<template>
	<div class="header">
    <!-- <h1>{{ msg }}</h1> -->
	<!-- <img src="../assets/logo.png"> -->
    <nav class="navbar navbar-expand-lg navbar-light " >
  <a class="navbar-brand" href="#">店名</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active bg-light">
        <router-link to="/" class="nav-link">home</router-link> 
      </li>
      <li class="nav-item">
        <router-link to="/productdata" class="nav-link">product</router-link>
      </li>
       <li class="nav-item">
        <router-link to="/login" class="nav-link">登入</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          會員專區
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">喜愛項目</a>
          <div class="dropdown-divider"></div>
           <router-link to="/propsexp" class="dropdown-item">note </router-link>
          
        </div>
      </li>
    
    </ul>
     <div  >
      <p>welcome! {{username}}</p>
    </div>
     
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">搜尋商品</button>
    </form>
   

  </div>
</nav>
   
    
 
    </div>

</template>
<script>

export default {
  props:['username'],
  name: 'header',
  data: function () {
    return {
      usermsg: 'jenny'
    }
  },
  methods:{

    
   

  },
}
</script>

<style>
.header{
  position: relative;
  top: 0;
  z-index: 1;

}
</style>