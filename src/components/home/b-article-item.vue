<template>
  <!--  -->
  <div>
    <!-- 展示图（横版大图） -->
    <div class="blog-thumb" @mouseover="mouseover" @mouseleave="mouseleave">
      <img
        src="@/assets/img/blog/featured-4.jpg"
        alt="featured"
        :class="isTrans ? 'imgtransform' : ''"
      />
    </div>
    <div class="blog-details">
      <div class="blog-cat">
        <a href="#">fashion</a>
      </div>
      <div class="blog-title">
        <h3>
          <a href="#"
            >First Iranian-American Astronaut Reaches For Stars Migrants And
            Personal Things Ways</a
          >
        </h3>
      </div>
      <div class="blog-content">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dictsunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspern atuodit
          aut fugitempora
        </p>
      </div>
      <div class="blog-meta">
        <ul>
          <li>
            <img src="@/assets/img/author/author-1.png" alt="author" />
            <a href="#">Kenneth J. Russo</a>
          </li>
          <li><i class="far fa-calendar-alt"></i> 20 March 2020</li>
        </ul>
      </div>
      <div class="blog-share">
        <span class="share-icon"><i class="far fa-share-alt"></i></span>
        <div class="blog-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-google-plus-g"></i></a>
        </div>
      </div>
    </div>

    <!-- 基本样式使用 -->
    <!-- <div class="blog-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12">
              <div class="blog-posts-wrapper">
                <div class="blog-post-wrap-3 blog-post-large mb-60">
                  <b-article-item></b-article-item>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTrans: false,
    };
  },
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
.imgtransform {
  transform: scale(1.05);
}
</style>