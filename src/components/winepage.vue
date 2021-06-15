<template>
  <div>
    <helloworld :getdata="getdata" :title='title' />
  </div>
</template>

<script>
//透過props傳遞資料的方式，可以做一個固定模版（Helloworld.vue)，import模板進來，傳入不同商品資料，顯示在不同頁面(/productdata）
import helloworld from '@/components/HelloWorld'

export default {
  name: 'wine',
  components: {
    helloworld
  },
  data(){
	  return {
       title:[
         {
         page:'調酒系列',
         

       }],
       
		   getdata: [
        {
          id: 31,
          name: 'Mojito ',
          description:'特別受到女生歡迎，檸檬及各種香草，喝起來清爽',
          imgurl: 'https://images.unsplash.com/photo-1599021456807-25db0f974333?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGFsY29ob2x8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
          price: 240,
          like:false
        },
        {
          id: 32,
          name: 'Orange coktail',
          description:'帶點柑橘類水果的酸味，有南國風情的調酒',
          imgurl: 'https://images.unsplash.com/photo-1563223771-2f0a37bc3129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
          price: 230,
          like:false
        },
        {
          id: 33,
          name: 'Pineapple coktail',
          description:'鳳梨及熱帶水果，搭配琴酒等等調配，喝起來也是女生會喜歡的甜甜的口味',
          imgurl: 'https://images.unsplash.com/photo-1598994392980-53a7fb033bcc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29ja3RhaWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
          price: 320,
          like:false
        },
        {
          id: 34,
          name: '特調',
          description:'本店特調！有桑椹及羅勒等，後味偏苦，每口的風味都有驚喜',
          imgurl: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29ja3RhaWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
          price:220,
          like:false
        },
         {
          id: 35,
          name: 'Negroni',
          description:'為世界最喜愛之調酒第二名，經典配方是以琴酒、金巴利和甜苦艾酒調製，充滿著苦甜風味。',
          imgurl: 'https://images.unsplash.com/photo-1542849187-5ec6ea5e6a27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5lZ3Jvbml8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
          price: 280,
          like:false
        },
      ]
	  }
  } 

}

</script>