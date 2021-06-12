<template>
      <div>
          <tab-bar id="tab-bar">
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img slot="item-icon_active" src="~assets/img/tabbar/home_active.svg" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
                <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
                <img slot="item-icon_active" src="~assets/img/tabbar/category_active.svg" alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcate" activeColor="blue">
                <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
                <img slot="item-icon_active" src="~assets/img/tabbar/shopcart_active.svg" alt="" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
                  <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
                  <img slot="item-icon_active" src="~assets/img/tabbar/profile_active.svg" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>

    </tab-bar>
      </div>
    
</template>

<script>

import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
// import TabBar from '../../common/tabbar/TabBar.vue'
// import TabBarItem from '../../common/tabbar/TabBarItem.vue'

export default {
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* box-shadow: 0 -1px 1px rbga(100,100,100,.1); */
}
</style>