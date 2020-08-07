<template>
  <div class="nav-bar row flex-space">
      <div class="left">
          <slot name="nav-left"></slot>
      </div>
      <div class="center flex-1">
           <slot name="nav-center"></slot>
      </div>
      <div class="right">
           <slot name="nav-right"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:'NavBar'
}

</script>
<style lang='css' scoped>
.nav-bar{
    height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,0.4);
}
.left,.right{
    width:60px;
}
</style>