<template>
  <div class="nav-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>
<style lang='css' scoped>
.nav-bar {
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: -5px -5px 5px rgba(100, 100, 100, 0.1);
}

</style>