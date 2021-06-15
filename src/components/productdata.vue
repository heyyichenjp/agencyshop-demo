<template>
  <div>
    <helloworld :getdata="getdata" :title='title' />
  </div>
</template>

<script>
//透過props傳遞資料的方式，可以做一個固定模版（Helloworld.vue)，import模板進來，傳入不同商品資料，顯示在不同頁面(/productdata）
import helloworld from '@/components/HelloWorld'

export default {
  name: 'productdata',
  components: {
    helloworld
  },
  data(){
	  return {
       title:[
         {
         page:'果汁系列',
         imgurl:"https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"

       }],
       
		   getdata: [
        {
          id: 1,
          name: '草莓燕麥',
          description:'酸甜的草莓滋味，搭配著燕麥的口感，創造出讓人一口接一口的初戀滋味。',
          imgurl: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGp1aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
          price: 130,
          like:false
        },
        {
          id: 2,
          name: '柳橙汁夜',
          description:'柳橙與檸檬一同搭配，是夏日最好的搭擋。',
          imgurl: 'https://images.unsplash.com/photo-1522427088495-81d38b91befb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8anVpY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
          price: 130,
          like:false
        },
        {
          id: 3,
          name: '莓果果汁',
          description:'基底的蔓越莓，與最後妝點的羅勒，讓人彷彿置身南歐的海邊豔陽下。',
          imgurl: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
          price: 100,
          like:false
        },
        {
          id: 4,
          name: '芒果冰沙',
          description:'芒果不論是直接吃還是打成果汁、冰沙，在夏季都是不可錯過。',
          imgurl: 'https://images.unsplash.com/photo-1546173159-315724a31696?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGp1aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
          price:120,
          like:false
        },
         {
          id: 5,
          name: '草莓檸檬汁',
          description:'在家的儀式感，草莓的甜味搭配檸檬的酸味，從視覺到味覺都讓人清爽可愛！',
          imgurl: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGp1aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
          price: 80,
          like:false
        },
         {
          id: 6,
          name: '檸夏',
          description:'給不喝咖啡的你，沒有人會不喜歡的檸檬紅茶',
          imgurl: 'https://images.unsplash.com/photo-1599749210777-08450aae3ee7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
          price: 80,
          like:false
        },

        
      ]
	  }
  } 

}

</script>