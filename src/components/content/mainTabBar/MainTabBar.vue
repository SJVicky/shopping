<template>
  <tab-bar class="row">
      <tab-bar-item path="/home" active-color="deepPink">
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path="/category" active-color="deepPink">
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item path="cart" active-color="deepPink">
        <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path="profile" active-color="deepPink">
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBarItem from "components/common/tabbar/TabBarItem";
import TabBar from "components/common/tabbar/TabBar";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style lang='css' scoped>
</style>