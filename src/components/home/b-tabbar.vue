<template>
  <!-- 顶部栏+导航条组件 -->
  <div>
    <!-- header start -->
    <header class="header-area header-style-3">
      <div class="main-menu-area">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-xl-4 col-lg-4 col-md-5">
              <div class="header-social header-social-left">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-google-plus-g"></i></a>
              </div>
            </div>
            <div
              class="col-xl-4 col-lg-4 col-md-7 text-left text-xl-center text-lg-center"
            >
              <div class="logo">
                <a href="index.html">
                  <img src="@/assets/img/logo/logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 text-right">
              <div v-if="!mobile" class="hamburger-menu" @click="show = !show">
                <a href="#" class="aside-open">
                  <span class="aside-bar"></span>
                </a>
              </div>
            </div>
            <div class="col-xl-12">
              <div class="mobile-menu-area"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- pc端导航 -->
      <div v-if="!mobile" class="main-menu-bg main-menu-3">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-3 col-md-7 col-8 order-1">
              <div class="search-area-3">
                <form action="#" method="post">
                  <input type="text" placeholder="Search here..." />
                  <button type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div class="col-xl-7 order-xl-2 order-lg-3">
              <nav class="main-menu mobile-menu-active">
                <ul>
                  <li
                    class="px-3"
                    :class="item.child ? 'menu-item-has-children' : ''"
                    v-for="(item, i) in tabbar"
                    :key="i"
                  >
                    <a href="#">{{ item.name }}</a>
                    <ul :class="item.child ? 'submenu' : ''">
                      <li v-for="(item2, index2) in item.child" :key="index2">
                        <a href="#">{{ item2.name }}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              class="col-xl-2 col-md-5 col-4 order-xl-2 order-lg-2 order-2 text-right"
            >
              <div class="header-btn">
                <a href="#"
                  >Subscribe <i class="far fa-long-arrow-alt-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 移动端导航 -->
      <div v-else class="col-xl-12 mobile-tabbar">
        <div class="mobile-menu-area mean-container">
          <div class="mean-bar">
            <a
              @click="tabbarShow = !tabbarShow"
              href="#nav"
              class="meanmenu-reveal meanopen"
              style="
                right: 60px;
                top: -3vh;
                left: auto;
                text-align: center;
                text-indent: 0px;
                font-size: 18px;
              "
              >{{ tabbarShow ? "X" : "〓" }}</a
            >
            <nav class="mean-nav mb-2">
              <ul v-if="tabbarShow && mobile">
                <li v-for="(item, index) in tabbar" :key="index">
                  <a href="#">{{ item.name }}</a>
                  <ul>
                    <div v-if="item.change">
                      <li v-for="(item2, index2) in item.child" :key="index2">
                        <a :href="item2.href">{{ item2.name }}</a>
                      </li>
                    </div>
                    <a
                      v-if="item.child"
                      class="mean-expand mean-clicked"
                      :href="item.href"
                      style="font-size: 18px"
                      @click="item.change = !item.change"
                      >{{ item.change ? "-" : "+" }}</a
                    >
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- header end -->

    <!-- start side bar -->
    <aside class="sidebar-group" :class="show ? 'active' : ''">
      <div class="sidebar-overlay"></div>
      <div class="side-bar">
        <a href="#" class="close-side" @click="show = !show"
          ><i class="fa fa-times"></i
        ></a>
        <!-- start side widget -->
        <div class="sidebar-widget logo-side">
          <a href="#">
            <img src="@/assets/img/logo/logo-white.png" alt="logo" />
          </a>
        </div>
        <!-- end side widget -->

        <!-- start side widget -->
        <div class="sidebar-widget">
          <div class="info-wdget">
            <h4 class="widget-title">Office Address</h4>
            <p>23/A, Miranda City Likaoli Prikano, Dope</p>
          </div>
        </div>
        <!-- end side widget -->

        <!-- start side widget -->
        <div class="sidebar-widget">
          <div class="info-wdget">
            <h4 class="widget-title">Phone Number</h4>
            <p>+0989 7876 9865 9</p>
            <p>+(090) 8765 86543 85</p>
          </div>
        </div>
        <!-- end side widget -->

        <!-- start side widget -->
        <div class="sidebar-widget">
          <div class="info-wdget">
            <h4 class="widget-title">Email Address</h4>
            <p>
              <a
                href="/cdn-cgi/l/email-protection"
                class="__cf_email__"
                data-cfemail="1c75727a735c79647d716c7079327f7371"
                >[email&#160;protected]</a
              >
            </p>
            <p>
              <a
                href="/cdn-cgi/l/email-protection"
                class="__cf_email__"
                data-cfemail="80e5f8e1edf0ece5aeede1e9ecc0e8f5edaee3efed"
                >[email&#160;protected]</a
              >
            </p>
          </div>
        </div>
        <!-- end side widget -->

        <!-- start side widget -->
        <div class="sidebar-widget">
          <div class="instagram">
            <a href="#">
              <img src="@/assets/img/widget/instagram-1.jpg" alt="instagram" />
            </a>
            <a href="#">
              <img src="@/assets/img/widget/instagram-2.jpg" alt="instagram" />
            </a>
            <a href="#">
              <img src="@/assets/img/widget/instagram-3.jpg" alt="instagram" />
            </a>
            <a href="#">
              <img src="@/assets/img/widget/instagram-4.jpg" alt="instagram" />
            </a>
            <a href="#">
              <img src="@/assets/img/widget/instagram-5.jpg" alt="instagram" />
            </a>
            <a href="#">
              <img src="@/assets/img/widget/instagram-6.jpg" alt="instagram" />
            </a>
          </div>
        </div>
        <!-- end side widget -->

        <!-- start side widget -->
        <div class="sidebar-widget">
          <div class="social-widget">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <!-- end side widget -->
      </div>
    </aside>
    <!-- end side bar -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      mobile: true,
      tabbarShow: false,
      tabbar: [
        {
          name: "home",
          href: "#",
          child: [
            { name: "home1", href: "#" },
            { name: "home2", href: "#" },
            { name: "home3", href: "#" },
            { name: "home4", href: "#" },
          ],
          change: false,
        },
        { name: "qifei", href: "#" },
        {
          name: "blog",
          href: "#",
          child: [
            { name: "blog1", href: "#" },
            { name: "blog2", href: "#" },
            { name: "blog3", href: "#" },
          ],
          change: false,
        },
        { name: "about me", href: "#" },
        { name: "contact", href: "#" },
      ],
    };
  },

  components: {},

  computed: {},
  mounted() {
    this.formWidth();
    // 开启监听宽度变化
    window.onresize = () => {
      if (!this.timer) {
        // 使用节流机制，降低函数被触发的频率
        this.timer = true;
        let that = this; // 匿名函数的执行环境具有全局性，为防止this丢失这里用that变量保存一下
        setTimeout(function () {
          that.formWidth();
          that.timer = false;
        }, 400);
      }
    };
  },

  methods: {
    formWidth() {
      let w = window.innerWidth;
      if (w <= 980) this.mobile = true;
      else this.mobile = false;
    },
  },
};
</script>
<style lang='scss' scoped>
.mobile-tabbar{
  position: absolute;
}
</style>