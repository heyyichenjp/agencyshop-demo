<template>
  <div class="Helloworld" >
    <div class="top">
       <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="bannerimg" class="d-block w-100 " id="bannerimg" alt="..." />
          <div class="carousel-caption d-md-block">
         
        <h2 >SHOP AREA</h2>
        
      </div>
        </div>
      </div>
    </div>
    <ul class="nav nav-tabs my-5" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <router-link to="/productdata" class="nav-link " id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Fruits</router-link>
    <!-- <a >Fluit</a> -->
  </li>
  <li class="nav-item" role="presentation">

    <router-link to="/cafepage" class="nav-link " id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">Coffee</router-link>
  
  </li>
  <li class="nav-item" role="presentation">

    <router-link to="/winepage" class="nav-link " id="contact-tab" data-toggle="tab" role="tab" aria-controls="contact" aria-selected="false">Cocktail</router-link>
   
  </li>
 

  
</ul>

    <div  v-for="item in title" :key="item.page" >
      <div class="search">
            <form class="form-inline my-2 my-lg-0 mr-0" >
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">搜尋商品</button>
    </form>
      </div>
      
         <h2 class="text-center">{{item.page}}</h2>
     </div> 

    </div>
    

   
   
   <div class="container-md">
  <div class="row my-4">
      <div
        class="card  my-4 mx-auto "
        style="width: 18rem"
        v-for="item in getdata"
        :key="item.id"
      >
      <img :src="item.imgurl" class="card-img-top " alt="..." />

        <div class="flex my-3 ">
          
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text " style="width:270px">{{item.description}}</p>
          <p class="card-text">$ {{ item.price }}</p>
          <button type="button" class="btn btn-light pdbtn" :id="item.id" @click="getheart(item)">
            <i class="bi  bi-suit-heart"  v-if="item.like != true"></i>
            <i class="bi  bi-suit-heart-fill" v-if="item.like"></i>
          </button>
          
        </div>
      </div>
    </div>
    
   
  </div>
</div>

    

</template>

<script>
export default {

  props: {
    title: {
      type: Array,
    },
    getdata: {
      type: Array,
      required: true
    },

  },

  name: 'helloworld',
  data() {
    return {
      msg: '',
      heart: true,
      bannerimg: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
      cartproducts:''
      

    }
  },
  methods: {
    getheart(item) {
      console.log(item);
      let self = this;
      if(item.like = true){
            alert ('💗'+item.name);
            self.cartproducts = item.name;
            //alert(self.cartproducts);
            self.$emit('pushtocart',self.cartproducts)
      }
      

      //return this.$emit('pushtocart',item.name)

      
    },
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
}

h1,
h2 {
  font-weight: normal;
  color:#aaa;
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
  color: rgb(214, 223, 140);
}

.flex {
  position: relative;
  padding: 3px;
  
}

.pdbtn {
  position: absolute;
  right: 2px;
  bottom: 2px;
}

.card-img-top {
  height: 300px;
}

#bannerimg{
  height: 50vh;
}

.search{
  
  width: 400px;
  position: relative;
  right: 0;
  margin: 20px ;
}
</style>
