<template>
  <div>

    <div class="pt">
      <h2>由父層傳到子層，用props來接收資料</h2>
      <p>
        筆記：props放在子層，接受資料的一方，帶入的<br />props:['status'],
        是指向（傳送資料的）父層前面的 v-bind:status='mystatus'(放在import
        進來的components)；<br />
        透過父層觸發事件@change='changestatus'；<br />子層接收到的是html裡value值(option value="one")
      </p>
      <div class="status">
        <p>狀態：{{ status }}</p>
      </div>
    </div>

    <div class="pt">
      <h2>＄emit</h2>

      <p>
        觸發事件，傳送資料的方法。觸發事件的一方：self.$emit('pushusername',self.username)，
        'pushusername'為事件，self.username為要傳送的資料。<br>
        在接受方：@pushusername="getusername"，getusername為接受的方法，
        methods:{getusername(name){}}，裡面的 name，為自設變數表傳進來的值
        ，this.username = name
      </p>
      <div>
        <input type="text" class="" v-model="username" />
        <button class="btn btn-warning " @click="upusername"    >SENT
           
        </button>
      </div>
    </div>

  </div>
</template>
<script>

export default {
  

  props: ['status'],
  data() {
    return {
      username: 'Jennie',
    }
  },
  methods: {
    upusername() {
      let self = this;
      alert('歡迎回來！'+ self.username);
      self.$emit('pushusername', self.username)
    }
  }
}
</script>
<style >
.status {
  color: #aa0;
}
p {
  width: 500px;
  text-align: center;
  margin: 10px auto;
}
</style>