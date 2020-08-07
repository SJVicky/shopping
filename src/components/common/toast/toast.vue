<template>
  <div class="toast">
      <span>{{message}}</span>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:false,
            message:''
        }
    },
    methods:{
        show(message,duration){
            this.isShow=true;
            this.message=message;
            setTimeout(()=>{
                this.isShow=false;
                this.message=''
            },duration);
        }
    }
}

</script>
<style lang='' scoped>
</style>