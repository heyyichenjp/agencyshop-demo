<template>
	<div class="container-fluid  bg-dark text-white p-4 " id="thefooter">
		<ul>
			<li>會員專區</li>
			<li>商品相關問題</li>
			<li>聯絡我們</li>
			<li>利用條款</li>
		</ul>
		<ul>
			<li>企業理念</li>
			<li>公司環境</li>
			<li>地址</li>
			<li>徵才</li>
		</ul>
		<hr >
		<div class="right ">
			 <p>Copyright &copy; HomeCafe. All rights reserved.<br>為個人作品，無商業用途</p>
			 <div class="">
				 <i class="bi bi-facebook h2 mr-1"></i>
			 <i class="bi bi-twitter h2 mr-1"></i>
			 <i class="bi bi-instagram h2 mr-1"></i>
			 <i class="bi bi-youtube h2 mr-1"></i>

			 </div>
			 
		</div>

	</div>
</template>
<script>
export default {
	
}
</script>




<style scoped>

/* .container{
	position: relative;
	bottom: 0;
	width: 100vw;
	padding: 20px;

	
}  */


hr{
	color: white;
}
ul{
	display: flex;
}
li{
	list-style: none;
	margin: 10px;
}
li::after{
	content: ' |';

}
.right{
	display: flex;
    justify-content: space-around; 
	border-top: 0.5px solid #fff;
	padding: 10px;
}



</style>