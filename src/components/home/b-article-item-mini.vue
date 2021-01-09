<template>
  <!-- 迷你版文章展示项 -->
  <div class="col-xl-6 col-lg-6 col-md-6">
    <div
      class="blog-post-wrap-3 mb-60"
      @mouseover="mouseover"
      @mouseleave="mouseleave"
    >
      <div class="blog-thumb">
        <a href="#">
          <img
            src="@/assets/img/blog/blog-thumb-9.jpg"
            alt="featured"
            :class="isTrans ? 'imgtransform' : ''"
          />
        </a>
        <div class="blog-cat">
          <a href="#">lifestyle</a>
        </div>
      </div>
      <div class="blog-details">
        <div class="blog-title">
          <h3>
            <a href="#">Emirates To Add One More Flight Dhaka-Dubai</a>
          </h3>
        </div>
        <div class="blog-meta">
          <ul>
            <li><i class="far fa-calendar-alt"></i> 20 March 2020</li>
          </ul>
        </div>
        <div class="blog-share">
          <span class="share-icon"><i class="far fa-share-alt"></i></span>
          <div class="blog-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTrans: false,
    };
  },

  components: {},

  computed: {},

  methods: {
    mouseover() {
      // console.log("鼠标移入");
      this.isTrans = true;
    },
    mouseleave() {
      // console.log("鼠标移出");
      this.isTrans = false;
    },
  },
};
</script>
<style lang='scss' scoped>
// 为什么这么做会导致整个页面相同元素都会出现 hover 效果呢
// .blog-post-wrap-3:hover .blog-thumb img {
//   transform: scale(1.05);
// }

.imgtransform {
  transform: scale(1.05);
}
</style>