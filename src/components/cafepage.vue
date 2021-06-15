<template>
  <div>
    <helloworld :getdata="getdata" :title='title' />
  </div>
</template>

<script>
//透過props傳遞資料的方式，可以做一個固定模版（Helloworld.vue)，import模板進來，傳入不同商品資料，顯示在不同頁面(/productdata）
import helloworld from '@/components/HelloWorld'

export default {
  name: 'cafe',
  components: {
    helloworld
  },
  data(){
	  return {
       title:[
         {
         page:'咖啡因系列',
         

       }],
       
		   getdata: [
        {
          id: 21,
          name: '鮮奶阿拉比卡',
          description:'本店特調！嚴選鮮奶與阿拉比卡咖啡豆調配的風味',
          imgurl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
          price: 90,
          like:false
        },
        {
          id: 22,
          name: '黑糖拿鐵',
          description:'日本沖繩黑糖，與咖啡、牛奶合成的溫潤風味',
          imgurl: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
          price: 130,
          like:false
        },
        {
          id: 23,
          name: '淵ㄧ',
          description:'給想嚐鮮的你，奶酒加上咖啡的獨特風味',
          imgurl: 'https://images.unsplash.com/photo-1561478908-d067fe75a553?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxjb2ZmZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
          price: 120,
          like:false
        },
        {
          id: 24,
          name: '鮮奶茶',
          description:'冰涼又清爽的茶香與奶茶的完美融合，想要一口接一口',
          imgurl: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxjb2ZmZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
          price:120,
          like:false
        },
        //  {
        //   id: 5,
        //   name: '檸檬紅茶',
        //   description:'給不喝咖啡的你，沒有人會不喜歡的檸檬紅茶',
        //   imgurl: 'https://images.unsplash.com/photo-1599390720183-fdacb8216b90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGljZWQlMjB0ZWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        //   price: 80,
        //   like:true
        // },
      ]
	  }
  } 

}

</script>