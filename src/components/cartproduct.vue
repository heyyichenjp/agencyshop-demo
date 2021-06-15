<template>
  <div>
    <helloworld @pushtocart="getin(item)" />
    <div v-for="a in getdata" :key='a.id'>
      {{ a.id }}
    </div>
  </div>
</template>


<script>
import helloworld from '@/components/HelloWorld'


export default {
	
  components: { helloworld, },
  data() {
    return {
      cartproduct: [
        {
          id: 31,
          name: 'Mojito ',
          description: '特別受到女生歡迎，檸檬及各種香草，喝起來清爽',
          imgurl: 'https://images.unsplash.com/photo-1599021456807-25db0f974333?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGFsY29ob2x8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
          price: 240,
          like: false
        },
      ]
    }

  },
  methods: {
    getin(item) {
      console.log(item)
	  this.cartproduct.id = item.id
	  this.cartproduct.name = item.name
	  this.cartproduct.imgurl = item.imgurl
	  this.cartproduct.price = item.price

    }
  }


}
</script>

