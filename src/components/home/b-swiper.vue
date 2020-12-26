<template>
  <!-- 轮播图组件 -->
  <div style="width:100%">
    <swiper
      :slides-per-view="3"
      :space-between="50"
      class="slider-area main-home-slider"
    >
      <swiper-slide
        class="home-slider d-flex align-items-end"
        :style="backgroundDiv[0]"
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
                  <a href="post-standard.html">travel</a>
                </span>
                <h2 class="title" data-animation="fadeInUp" data-delay="0.6s">
                  <a href="post-standard.html"
                    >Most Wonderfull Place In London Hills</a
                  >
                </h2>
                <span class="date" data-animation="fadeInUp" data-delay="1.3s"
                  >20 March 2020</span
                >
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
     <swiper-slide
        class="home-slider d-flex align-items-end"
        :style="backgroundDiv[1]"
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
                  <a href="post-standard.html">travel</a>
                </span>
                <h2 class="title" data-animation="fadeInUp" data-delay="0.6s">
                  <a href="post-standard.html"
                    >Most Wonderfull Place In London Hills</a
                  >
                </h2>
                <span class="date" data-animation="fadeInUp" data-delay="1.3s"
                  >20 March 2020</span
                >
              </div>
            </div>
          </div>
        </div>
      </swiper-slide><swiper-slide
        class="home-slider d-flex align-items-end"
        :style="backgroundDiv[2]"
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
                  <a href="post-standard.html">travel</a>
                </span>
                <h2 class="title" data-animation="fadeInUp" data-delay="0.6s">
                  <a href="post-standard.html"
                    >Most Wonderfull Place In London Hills</a
                  >
                </h2>
                <span class="date" data-animation="fadeInUp" data-delay="1.3s"
                  >20 March 2020</span
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
  data() {
    return {
      slideList: [{ imgSrc: "" }],
      backgroundDiv: [
        {
          backgroundImage:
            "url(" + require("../../assets/img/slider/slider-1.jpg") + ")",
        },
        {
          backgroundImage:
            "url(" + require("../../assets/img/slider/slider-2.jpg") + ")",
        },
        {
          backgroundImage:
            "url(" + require("../../assets/img/slider/slider-3.jpg") + ")",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang='scss' scoped>

</style>