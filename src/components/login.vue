<template>
<div class="container-sm my-5 p-4 " style="border:1px solid #aaa;border-radius:15%">
	<h2 class="text-center">會員登入</h2>
	<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="usermsg" placeholder="輸入...">
    <small id="emailHelp" class="form-text text-muted">Put in your username</small>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Remember me </label>
  </div>
  <button type="submit" class="btn btn-outline-info "  @click="updateusername">登入
  </button>
</form>

</div>
	
</template>

<script>
export default{
	data(){
		return{
			usermsg:''


		}
	},
	methods:{
		updateusername(){
			let self = this;
			self.$emit('pushusername',self.usermsg)
		}
	}
}
</script>
