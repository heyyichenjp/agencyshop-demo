webpackJsonp([1],{"02GI":function(t,a){},"5nyp":function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light "},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("店名")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item active bg-light"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("home")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/productdata"}},[t._v("product")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("登入")])],1),t._v(" "),e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n          會員專區\n        ")]),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("喜愛項目")]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("router-link",{staticClass:"dropdown-item",attrs:{to:"/propsexp"}},[t._v("note ")])],1)])]),t._v(" "),e("div",[e("p",[t._v("welcome! "+t._s(t.username))])]),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("form",{staticClass:"form-inline my-2 my-lg-0"},[a("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),this._v(" "),a("button",{staticClass:"btn btn-outline-dark my-2 my-sm-0",attrs:{type:"submit"}},[this._v("搜尋商品")])])}]};var r=e("VU/8")({props:["username"],name:"header",data:function(){return{usermsg:"jenny"}},methods:{}},i,!1,function(t){e("VKdh")},null,null).exports,n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid  bg-dark text-white p-4 ",attrs:{id:"thefooter"}},[e("ul",[e("li",[t._v("會員專區")]),t._v(" "),e("li",[t._v("商品相關問題")]),t._v(" "),e("li",[t._v("聯絡我們")]),t._v(" "),e("li",[t._v("利用條款")])]),t._v(" "),e("ul",[e("li",[t._v("企業理念")]),t._v(" "),e("li",[t._v("公司環境")]),t._v(" "),e("li",[t._v("地址")]),t._v(" "),e("li",[t._v("徵才")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"right "},[e("p",[t._v("Copyright © HomeCafe. All rights reserved."),e("br"),t._v("為個人作品，無商業用途")]),t._v(" "),e("div",{},[e("i",{staticClass:"bi bi-facebook h2 mr-1"}),t._v(" "),e("i",{staticClass:"bi bi-twitter h2 mr-1"}),t._v(" "),e("i",{staticClass:"bi bi-instagram h2 mr-1"}),t._v(" "),e("i",{staticClass:"bi bi-youtube h2 mr-1"})])])])}]};var l=e("VU/8")({},n,!1,function(t){e("jgxF")},"data-v-e29b539c",null).exports,o={name:"App",components:{theheader:r,Thefooter:l},data:function(){return{status:"one",mystatus:"one",username:"",cartproduct:""}},methods:{changestatus:function(){this.mystatus=this.status},getusername:function(t){console.log(t),this.username=t},gettocart:function(t){console.log(t),this.cartproduct=t}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"header"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("HomeCafe")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item active bg-light"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("home")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/productdata"}},[t._v("products")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("登入")])],1)]),t._v(" "),e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("p",{staticClass:"my-2"},[e("i",{staticClass:"bi bi-controller"}),t._v("Welcome! "+t._s(t.username))])])])])])]),t._v(" "),e("router-view",{attrs:{status:t.mystatus},on:{pushusername:t.getusername,pushtocart:t.gettocart}}),t._v(" "),e("thefooter")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}]};var u=e("VU/8")(o,c,!1,function(t){e("sl1d")},null,null).exports,p=e("/ocq"),d={props:{title:{type:Array},getdata:{type:Array,required:!0}},name:"helloworld",data:function(){return{msg:"",heart:!0,bannerimg:"https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",cartproducts:"",alertimg:"",dissmiss:4}},methods:{getheart:function(t){t.like=!0,alert("已收藏")}}},m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Helloworld"},[e("div",{staticClass:"top"},[e("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleSlidesOnly","data-ride":"carousel"}},[e("div",{staticClass:"carousel-inner"},[e("div",{staticClass:"carousel-item active"},[e("img",{staticClass:"d-block w-100",attrs:{src:t.bannerimg,id:"bannerimg",alt:"..."}}),t._v(" "),t._m(0)])])]),t._v(" "),e("ul",{staticClass:"nav nav-tabs my-5",attrs:{id:"myTab",role:"tablist"}},[e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/productdata",id:"home-tab","data-toggle":"tab",role:"tab","aria-controls":"home","aria-selected":"true"}},[t._v("Fruits")])],1),t._v(" "),e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/cafepage",id:"profile-tab","data-toggle":"tab",role:"tab","aria-controls":"profile","aria-selected":"false"}},[t._v("Coffee")])],1),t._v(" "),e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/winepage",id:"contact-tab","data-toggle":"tab",role:"tab","aria-controls":"contact","aria-selected":"false"}},[t._v("Cocktail")])],1)]),t._v(" "),t._l(t.title,function(a){return e("div",{key:a.page},[t._m(1,!0),t._v(" "),e("h2",{staticClass:"text-center"},[t._v(t._s(a.page))])])})],2),t._v(" "),e("div",{staticClass:"container-md"},[e("div",{staticClass:"row my-4"},t._l(t.getdata,function(a){return e("div",{key:a.id,staticClass:"card my-4 mx-auto",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top",attrs:{src:a.imgurl,alt:"..."}}),t._v(" "),e("div",{staticClass:"flex my-3"},[e("h5",{staticClass:"card-title"},[t._v(t._s(a.name))]),t._v(" "),e("div",{staticClass:"card-text"},[e("p",[t._v(t._s(a.description))]),t._v(" "),e("p",[t._v("$ "+t._s(a.price))])]),t._v(" "),e("button",{staticClass:"btn btn-light pdbtn",attrs:{type:"button",id:a.id},on:{click:function(e){return t.getheart(a)}}},[1!=a.like?e("i",{staticClass:"bi bi-suit-heart"}):t._e(),t._v(" "),a.like?e("i",{staticClass:"bi bi-suit-heart-fill"}):t._e()])])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"carousel-caption d-md-block"},[a("h2",[this._v("SHOP AREA")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"search"},[a("form",{staticClass:"form-inline my-2 my-lg-0 mr-0"},[a("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),this._v(" "),a("button",{staticClass:"btn btn-outline-dark my-2 my-sm-0",attrs:{type:"submit"}},[this._v("\n            搜尋商品\n          ")])])])}]};var v=e("VU/8")(d,m,!1,function(t){e("02GI")},"data-v-0d4c0fbb",null).exports,h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleCaptions","data-ride":"carousel"}},[t._m(0),t._v(" "),e("div",{staticClass:"carousel-inner"},[e("div",{staticClass:"carousel-item active"},[e("img",{staticClass:"d-block w-100 h-40",attrs:{src:t.carousel.picone,alt:"..."}}),t._v(" "),e("div",{staticClass:"carousel-caption d-none d-md-block titleout"},[e("h5",{staticClass:"title"},[t._v(t._s(t.carousel.titleone))]),t._v(" "),e("p",[t._v(t._s(t.carousel.dcone))])])]),t._v(" "),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100 h-40",attrs:{src:t.carousel.pictwo,alt:"..."}}),t._v(" "),e("div",{staticClass:"carousel-caption d-none d-md-block titleout"},[e("h5",{staticClass:"title"},[t._v(t._s(t.carousel.titletwo))]),t._v(" "),e("p",[t._v(t._s(t.carousel.dctwo))])])]),t._v(" "),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100 h-40",attrs:{src:t.carousel.picthree,alt:"..."}}),t._v(" "),e("div",{staticClass:"carousel-caption d-none d-md-block titleout"},[e("h5",{staticClass:"title"},[t._v(t._s(t.carousel.titlethree))]),t._v(" "),e("p",[t._v(t._s(t.carousel.dcthree))])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"my-4 container"},[e("div",{staticClass:"row"},[e("router-link",{staticClass:"btn btn-light btn-lg btn-lg col-sm-6",attrs:{to:"/productdata"}},[e("i",{staticClass:"bi bi-cart4 text-info h4"}),t._v(" ShopNow\n          \n        ")]),t._v(" "),e("router-link",{staticClass:"btn btn-light btn-lg  col-sm-6",attrs:{to:"/productdata"}},[e("i",{staticClass:"bi bi-cup-straw text-info h4"}),t._v(" Fruits\n       ")]),t._v(" "),e("router-link",{staticClass:"btn btn-light btn-lg  col-sm-6",attrs:{to:"/cafepage"}},[e("i",{staticClass:"bi bi-cup-straw text-info h4"}),t._v(" Coffee\n       ")]),t._v(" "),e("router-link",{staticClass:"btn btn-light btn-lg  col-sm-6",attrs:{to:"/winepage"}},[e("i",{staticClass:"bi bi-cup-straw text-info h4"}),t._v(" Coktail\n        ")])],1)]),t._v(" "),e("div",{staticClass:"container-fluid my-5 py-3",attrs:{id:"newin"}},[e("h2",[t._v("新品上市")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"sectiontext"},[e("img",{staticClass:"mr-4",staticStyle:{width:"200px",height:"200px"},attrs:{src:t.newin.pic,alt:""}}),t._v(" "),e("div",{staticClass:"textarea"},[e("p",[t._v(t._s(t.newin.description))]),t._v(" "),e("router-link",{staticClass:"btn btn-light bg-light text-dark",attrs:{to:"/productdata",role:"button"}},[t._v("立刻去選購")])],1)])]),t._v(" "),e("div",{staticClass:"shop container-fluid bg-white my-5 py-3"},[e("h2",[t._v("ＨＯＭＥＣＡＦＥ")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticStyle:{display:"flex",position:"relative",height:"400px"}},[e("p",[t._v(t._s(t.main.description))]),t._v(" "),e("div",{staticClass:"colorarea"}),t._v(" "),e("div",{staticClass:"shoptext"},[e("img",{staticClass:"img-fluid",staticStyle:{width:"200px",height:"250px",margin:"20px"},attrs:{src:t.main.pic,alt:"",id:"main"}})])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"carousel-indicators"},[a("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"0"}}),this._v(" "),a("li",{attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}}),this._v(" "),a("li",{attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"2"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleCaptions",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),this._v(" "),a("span",{staticClass:"sr-only"},[this._v("Previous")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleCaptions",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),this._v(" "),a("span",{staticClass:"sr-only"},[this._v("Next")])])}]};var f=e("VU/8")({data:function(){return{carousel:{picone:"https://images.unsplash.com/photo-1603737388474-647a24e5fade?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGNhZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",pictwo:"https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",picthree:"https://images.unsplash.com/photo-1505489304219-85ce17010209?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlbGF4fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",titleone:"HomeCafe",titletwo:"讓你如同置身家中的舒適感",titlethree:"全新外帶服務",dcthree:"為您量身打造的美好飲品體驗",dcone:"",dctwo:""},newin:{pic:"https://images.unsplash.com/photo-1599749210777-08450aae3ee7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",description:"新品-寧夏，在這個不能去游泳池及海邊度假的日子，讓檸夏🍋帶您清爽的全新感受，即使不能出門，在家也可以盡情感受海邊度假感！"},main:{pic:"https://images.unsplash.com/photo-1560440021-33f9b867899d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=909&q=80",description:"Order HomeCafe, Stay safe Stay home "}}}},h,!1,function(t){e("OESR")},null,null).exports,_={props:["status"],data:function(){return{username:"Jennie"}},methods:{upusername:function(){alert("歡迎回來！"+this.username),this.$emit("pushusername",this.username)}}},b={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"pt"},[e("h2",[t._v("由父層傳到子層，用props來接收資料")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"status"},[e("p",[t._v("狀態："+t._s(t.status))])])]),t._v(" "),e("div",{staticClass:"pt"},[e("h2",[t._v("＄emit")]),t._v(" "),t._m(1),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text"},domProps:{value:t.username},on:{input:function(a){a.target.composing||(t.username=a.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-warning ",on:{click:t.upusername}},[t._v("SENT\n         \n      ")])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("\n      筆記：props放在子層，接受資料的一方，帶入的"),a("br"),this._v("props:['status'],\n      是指向（傳送資料的）父層前面的 v-bind:status='mystatus'(放在import\n      進來的components)；"),a("br"),this._v("\n      透過父層觸發事件@change='changestatus'；"),a("br"),this._v('子層接收到的是html裡value值(option value="one")\n    ')])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("\n      觸發事件，傳送資料的方法。觸發事件的一方：self.$emit('pushusername',self.username)，\n      'pushusername'為事件，self.username為要傳送的資料。"),a("br"),this._v('\n      在接受方：@pushusername="getusername"，getusername為接受的方法，\n      methods:{getusername(name){}}，裡面的 name，為自設變數表傳進來的值\n      ，this.username = name\n    ')])}]};var x=e("VU/8")(_,b,!1,function(t){e("5nyp")},null,null).exports,g={name:"productdata",components:{helloworld:v},data:function(){return{title:[{page:"果汁系列",imgurl:"https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"}],getdata:[{id:1,name:"草莓燕麥",description:"酸甜的草莓滋味，搭配著燕麥的口感，創造出讓人一口接一口的初戀滋味。",imgurl:"https://images.unsplash.com/photo-1553177595-4de2bb0842b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGp1aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",price:130,like:!1},{id:2,name:"柳橙汁夜",description:"柳橙與檸檬一同搭配，是夏日最好的搭擋。",imgurl:"https://images.unsplash.com/photo-1522427088495-81d38b91befb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8anVpY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",price:130,like:!1},{id:3,name:"莓果果汁",description:"基底的蔓越莓，與最後妝點的羅勒，讓人彷彿置身南歐的海邊豔陽下。",imgurl:"https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",price:100,like:!1},{id:4,name:"芒果冰沙",description:"芒果不論是直接吃還是打成果汁、冰沙，在夏季都是不可錯過。",imgurl:"https://images.unsplash.com/photo-1546173159-315724a31696?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGp1aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",price:120,like:!1},{id:5,name:"草莓檸檬汁",description:"在家的儀式感，草莓的甜味搭配檸檬的酸味，從視覺到味覺都讓人清爽可愛！",imgurl:"https://images.unsplash.com/photo-1497534446932-c925b458314e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGp1aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",price:80,like:!1},{id:6,name:"檸夏",description:"給不喝咖啡的你，沒有人會不喜歡的檸檬紅茶",imgurl:"https://images.unsplash.com/photo-1599749210777-08450aae3ee7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",price:80,like:!1}]}}},C={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("helloworld",{attrs:{getdata:this.getdata,title:this.title}})],1)},staticRenderFns:[]},w=e("VU/8")(g,C,!1,null,null,null).exports,M={data:function(){return{usermsg:""}},methods:{updateusername:function(){alert("歡迎回來！ "+this.usermsg);this.$emit("pushusername",this.usermsg)}}},y={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-sm my-5 p-4 ",staticStyle:{border:"1px solid #aaa","border-radius":"15%"}},[e("h2",{staticClass:"text-center"},[t._v("會員登入")]),t._v(" "),e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Username")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.usermsg,expression:"usermsg"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"輸入..."},domProps:{value:t.usermsg},on:{input:function(a){a.target.composing||(t.usermsg=a.target.value)}}}),t._v(" "),e("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("Put in your username")])]),t._v(" "),t._m(0),t._v(" "),e("button",{staticClass:"btn btn-outline-info ",attrs:{type:"submit"},on:{click:t.updateusername}},[t._v("登入\n  ")])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-group form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"}}),this._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[this._v("Remember me ")])])}]},k=e("VU/8")(M,y,!1,null,null,null).exports,H={name:"cafe",components:{helloworld:v},data:function(){return{title:[{page:"咖啡因系列"}],getdata:[{id:21,name:"鮮奶阿拉比卡",description:"本店特調！嚴選鮮奶與阿拉比卡咖啡豆調配的風味",imgurl:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",price:90,like:!1},{id:22,name:"黑糖拿鐵",description:"日本沖繩黑糖，與咖啡、牛奶合成的溫潤風味",imgurl:"https://images.unsplash.com/photo-1497636577773-f1231844b336?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",price:130,like:!1},{id:23,name:"淵ㄧ",description:"給想嚐鮮的你，奶酒加上咖啡的獨特風味",imgurl:"https://images.unsplash.com/photo-1561478908-d067fe75a553?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxjb2ZmZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",price:120,like:!1},{id:24,name:"鮮奶茶",description:"冰涼又清爽的茶香與奶茶的完美融合，想要一口接一口",imgurl:"https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxjb2ZmZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",price:120,like:!1}]}}},D={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("helloworld",{attrs:{getdata:this.getdata,title:this.title}})],1)},staticRenderFns:[]},Z=e("VU/8")(H,D,!1,null,null,null).exports,W={name:"wine",components:{helloworld:v},data:function(){return{title:[{page:"調酒系列"}],getdata:[{id:31,name:"Mojito ",description:"特別受到女生歡迎，檸檬及各種香草，喝起來清爽",imgurl:"https://images.unsplash.com/photo-1599021456807-25db0f974333?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGFsY29ob2x8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",price:240,like:!1},{id:32,name:"Orange coktail",description:"帶點柑橘類水果的酸味，有南國風情的調酒",imgurl:"https://images.unsplash.com/photo-1563223771-2f0a37bc3129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",price:230,like:!1},{id:33,name:"Pineapple coktail",description:"鳳梨及熱帶水果，搭配琴酒等等調配，喝起來也是女生會喜歡的甜甜的口味",imgurl:"https://images.unsplash.com/photo-1598994392980-53a7fb033bcc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29ja3RhaWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",price:320,like:!1},{id:34,name:"特調",description:"本店特調！有桑椹及羅勒等，後味偏苦，每口的風味都有驚喜",imgurl:"https://images.unsplash.com/photo-1536935338788-846bb9981813?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29ja3RhaWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",price:220,like:!1},{id:35,name:"Negroni",description:"為世界最喜愛之調酒第二名，經典配方是以琴酒、金巴利和甜苦艾酒調製，充滿著苦甜風味。",imgurl:"https://images.unsplash.com/photo-1542849187-5ec6ea5e6a27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5lZ3Jvbml8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",price:280,like:!1}]}}},B={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("helloworld",{attrs:{getdata:this.getdata,title:this.title}})],1)},staticRenderFns:[]},F=e("VU/8")(W,B,!1,null,null,null).exports,A={components:{helloworld:v},data:function(){return{cartproduct:[{id:31,name:"Mojito ",description:"特別受到女生歡迎，檸檬及各種香草，喝起來清爽",imgurl:"https://images.unsplash.com/photo-1599021456807-25db0f974333?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGFsY29ob2x8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",price:240,like:!1}]}},methods:{getin:function(t){console.log(t),this.cartproduct.id=t.id,this.cartproduct.name=t.name,this.cartproduct.imgurl=t.imgurl,this.cartproduct.price=t.price}}},j={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("helloworld",{on:{pushtocart:function(a){return t.getin(t.item)}}}),t._v(" "),t._l(t.getdata,function(a){return e("div",{key:a.id},[t._v("\n    "+t._s(a.id)+"\n  ")])})],2)},staticRenderFns:[]},E=e("VU/8")(A,j,!1,null,null,null).exports;e("K3J8");s.a.use(p.a);var Y=new p.a({routes:[{path:"/",name:"",component:f},{path:"/theheader",name:"theheader",component:r},{path:"/hello",name:"HelloWorld",component:v},{path:"/propsexp",name:"propsexp",component:x},{path:"/productdata",name:"productdata",component:w},{path:"/cafepage",name:"cafe",component:Z},{path:"/winepage",name:"wine",component:F},{path:"/login",name:"login",component:k},{path:"/thefooter",name:"thefooter",component:l},{path:"/cartproduct",name:"",component:E}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:Y,components:{App:u},template:"<App/>"})},OESR:function(t,a){},VKdh:function(t,a){},jgxF:function(t,a){},sl1d:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.1d139b082e3a02221a3b.js.map