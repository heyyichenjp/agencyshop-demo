<template>
  <div class="container">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="carousel.picone" class="d-block w-100 h-40" alt="..." />
          <div class="carousel-caption d-none d-md-block titleout">
            <h5 class="title">{{ carousel.titleone }}</h5>
            <p>{{ carousel.dcone }}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="carousel.pictwo" class="d-block w-100 h-40" alt="..." />
          <div class="carousel-caption d-none d-md-block titleout">
            <h5 class="title">{{ carousel.titletwo }}</h5>
            <p>{{ carousel.dctwo }}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="carousel.picthree" class="d-block w-100 h-40" alt="..." />
          <div class="carousel-caption d-none d-md-block titleout">
            <h5 class="title">{{ carousel.titlethree }}</h5>
            <p>{{ carousel.dcthree }}</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="my-4 container">
      <div class="row">
        <router-link to="/productdata"  class="btn btn-light btn-lg btn-lg col-sm-6" 
          >
          hot
            
          </router-link
        >
        <router-link to="/cafepage" class="btn btn-light btn-lg  col-sm-6"
          >
            Fruits
         </router-link
        >
        <router-link to="/cafepage"  class="btn btn-light btn-lg  col-sm-6">
            
          Coffee
         </router-link
        >

        <router-link to="/cafepage" class="btn btn-light btn-lg  col-sm-6">
          
            Coktail
          </router-link
        >
      </div>
    </div>
    <div class="container-fluid my-5 py-3" id="newin">
      <h2>新品上市</h2>
      <hr />
      <div class="sectiontext">
        <img
          :src="newin.pic"
          alt=""
          style="width: 200px; height: 200px"
          class="mr-4"
        />
        <div class="textarea">
          <p>{{ newin.description }}</p>
          <router-link
            to="/productdata"
            class="btn btn-light bg-light text-dark"
            role="button"
            >立刻去選購</router-link
          >
        </div>
      </div>
    </div>

    <div class="shop container-fluid bg-white my-5 py-3">
      <h2>ＨＯＭＥＣＡＦＥ</h2>
      <hr />
      <div style="display: flex; position: relative ; height:400px">
        <div class="colorarea"></div>
        <div class="shoptext">
          <img :src="main.pic" alt="" id="main" />
          <p>{{ main.description }}</p>
          <!-- <a class="btn btn-primary bg-dark" href="#" role="button">Learn more</a> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      carousel: {
        picone: 'https://images.unsplash.com/photo-1603737388474-647a24e5fade?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGNhZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        pictwo: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        picthree: 'https://images.unsplash.com/photo-1505489304219-85ce17010209?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlbGF4fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        titleone: 'HomeCafe',
        titletwo: '讓你如同置身家中的舒適感',
        titlethree: '全新外帶服務',
        dcthree: '為您量身打造的美好飲品體驗',
        dcone: '',
        dctwo: ''


      },
      newin: {
        pic: 'https://images.unsplash.com/photo-1599749210777-08450aae3ee7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        description: '新品-寧夏，在這個不能去游泳池及海邊度假的日子，讓檸夏🍋帶您清爽的全新感受，即使不能出門，在家也可以盡情感受海邊度假感！',
      },
      main: {
        pic: 'https://images.unsplash.com/photo-1560440021-33f9b867899d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=909&q=80',
        description: 'stay home to order home cafe, stay safe stay happy '
      }

    }
  }
}


</script>
<style >
.sectiontext {
  display: flex;
}

.colorarea {
  width: 200px;
  height: 200px;
  background-color: rgb(238, 225, 198);
  position: absolute;
  top: 10vh;
  left: 15vw;
  z-index: 0;
  border-radius: 10%;
}
.shoptext {
  position: relative;
}

#newin {
  background-color: rgb(212, 164, 59);
}
#main {
  width: 200px;
  height: auto;
  margin: 0 auto;
  position:absolute;
  right: 0;
  left: 0;


 
}

.title {
  color: rgb(143, 86, 86);
  font-weight: 700;
}
</style>
