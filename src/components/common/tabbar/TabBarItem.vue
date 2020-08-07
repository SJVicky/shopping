<template>
  <div class="flex-1 column flex-center tab-bar-item" @click="itemClick">
    <div>
        <slot name="item-icon"></slot>
    </div>
    <div :style="isActiveStyle">
        <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!== -1
        },
        isActiveStyle(){
            return this.isActive? {color:this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path);
        }
    }
};
</script>
<style lang='css' scoped>
.tab-bar-item {
  height: 49px;
}
</style>