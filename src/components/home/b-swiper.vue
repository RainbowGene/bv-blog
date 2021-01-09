<template>
  <!-- 轮播图组件 -->
  <div style="width: 100%">
    <swiper
      :slides-per-view="3"
      :space-between="50"
      :options="swiperOption"
      class="slider-area main-home-slider"
    >
      <swiper-slide
        class="home-slider d-flex align-items-end"
        v-for="(item, i) in list"
        :key="i"
        :style="'backgroundImage:url(' + item.cover + ')'"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="home-slide-content text-center pb-100">
                <span
                  class="sub-title"
                  data-animation="fadeInDown"
                  data-delay="0.3s"
                >
                  <a href="#">标签</a>
                </span>
                <h2 class="title" data-animation="fadeInUp" data-delay="0.6s">
                  <a href="#">{{ item.title }}</a>
                </h2>
                <span
                  class="date"
                  data-animation="fadeInUp"
                  data-delay="1.3s"
                  >{{ item.created_at }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    list: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      swiperOption: {
        // 轮播插件配置项
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
        },
      },
      // list: [
      //   {
      //     title: "",
      //     content: "",
      //     cover:
      //       "http://egg-bv-blog.oss-cn-shenzhen.aliyuncs.com/blog-photo/dz489i8sdnk0000.jpg",
      //     created_at: "",
      //   },
      //   {
      //     title: "",
      //     content: "",
      //     cover:
      //       "http://egg-bv-blog.oss-cn-shenzhen.aliyuncs.com/blog-photo/dz489i8sdnk0000.jpg",
      //     created_at: "",
      //   },
      //   {
      //     title: "",
      //     content: "",
      //     cover:
      //       "http://egg-bv-blog.oss-cn-shenzhen.aliyuncs.com/blog-photo/dz489i8sdnk0000.jpg",
      //     created_at: "",
      //   },
      // ],
    };
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>