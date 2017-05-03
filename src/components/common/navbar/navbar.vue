<template>
  <div class="navbar-wrapper">
    <ul class="navbars">
      <li class="navbar-item">
        <div class="navbar"
             :class="{active: selectNav === 0}"
             @click="tabNav(0)">
          <i class="nav-home"></i>
          <span class="nav-name">首页</span>
        </div>
      </li>
      <li class="navbar-item">
        <div class="navbar"
             :class="{active: selectNav === 1}"
             @click="tabNav(1)">
          <i class="nav-order"></i>
          <span class="nav-name">订单</span>
        </div>
      </li>
      <li class="navbar-item">
        <div class="navbar"
             :class="{active: selectNav === 2}"
             @click="tabNav(2)">
          <i class="nav-news"></i>
          <span class="nav-name">消息</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selectNav: 0
    };
  },
  created() {
    this.listenChange();
  },
  methods: {
    /**
     * navbar 点击切换
     * @param type 0:首页 1:订单 2:消息
     */
    tabNav(type) {
      switch (type) {
        case 0:
          this.selectNav = 0;
          this.$router.push({ name: 'home' });
          break;
        case 1:
          this.selectNav = 1;
          this.$router.push({ name: 'order' });
          break;
        case 2:
          this.selectNav = 2;
          this.$router.push({ name: 'news' });
          break;
        default:
          break;
      }
    },
    /**
     * 监听路由页面变化
     */
    listenChange() {
      this.$root.eventHub.$on('navTab', (navId) => {
        this.tabNav(navId);
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"
  .navbar-wrapper
    position: fixed
    width: 100%
    bottom: 0
    left: 0
    z-index: 100
    background: white
    .navbars
      display: flex
      height: 100%
      .navbar-item
        flex: 1
        text-align: center
        .navbar
          display: inline-block
          width: 0.4rem
          &.active
            color: #1296db
            .nav-home
              bg-image('./icon_home_active')
            .nav-order
              bg-image('./icon_order_active')
            .nav-news
              bg-image('./icon_news_active')
          .nav-name
            display: block
            width: 0.4rem
            font-size: 0.09rem
            padding-bottom: 0.08rem
          .nav-home
            display: block
            width: 0.19rem
            height: 0.19rem
            margin: 0.07rem 0.105rem
            background-size: 0.19rem 0.19rem
            bg-image('./icon_home')
          .nav-order
            display: block
            width: 0.19rem
            height: 0.19rem
            margin: 0.07rem 0.105rem
            background-size: 0.19rem 0.19rem
            bg-image('./icon_order')
          .nav-news
            display: block
            width: 0.19rem
            height: 0.19rem
            margin: 0.07rem 0.105rem
            background-size: 0.19rem 0.19rem
            bg-image('./icon_news')
</style>
