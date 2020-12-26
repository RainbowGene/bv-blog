<template>
  <!-- 组件测试 -->
  <div>
    <b-tabbar></b-tabbar>
    <v-loading></v-loading>
    <main>
      <b-swiper></b-swiper>
      <!-- body left:article right:info -->
      <div class="blog-area mt-5">
        <div class="container">
          <div class="row">
            <div class="col-xl-8 col-lg-8">
              <div class="blog-posts-wrapper">
                <div class="blog-post-wrap-3 blog-post-large mb-60">
                  <!-- new photo -->
                  <div class="blog-thumb">
                    <img
                      src="@/assets/img/blog/featured-4.jpg"
                      alt="featured"
                    />
                  </div>
                  <!-- article -->
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 sidebar-wrapper">
              <div class="widget-2 mb-60">
                <div class="about-widget-2">
                  <div class="about-widget-author">
                    <img
                      src="@/assets/img/widget/about-img-2.png"
                      alt="about-widget"
                    />
                    <div class="about-widget-head">
                      <h5>Hello, I’m</h5>
                      <h4><a href="#">Randall B. Coello</a></h4>
                    </div>
                  </div>
                  <div class="about-widget-details">
                    <p>
                      Sedut perspiciats unde omni iste errsit voluptatem
                      accusantiu emque laudantium totam rem aperiam eips quaeab
                      illo inventor veritae
                    </p>
                    <div class="about-widget-social">
                      <a href="#" class="facebook"
                        ><i class="fab fa-facebook-f"></i
                      ></a>
                      <a href="#" class="insta"
                        ><i class="fab fa-instagram"></i
                      ></a>
                      <a href="#" class="pinterest"
                        ><i class="fab fa-pinterest-p"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <b-footer></b-footer>
  </div>
</template>

<script>
import BFooter from "@/components/home/b-footer.vue";
import VLoading from "@/components/common/v-loading.vue";
import BTabbar from "@/components/home/b-tabbar.vue";
import BSwiper from "@/components/home/b-swiper.vue";
export default {
  components: {
    VLoading,
    BTabbar,
    BFooter,
    BSwiper,
  },
  data() {
    return {};
  },

  computed: {},

  methods: {},
};
</script>
<style lang='scss' scoped>
</style>