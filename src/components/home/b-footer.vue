<template>
  <!-- footer 页脚组件 -->
  <div>
    <!-- footer start  -->
    <div class="instagram-area-2 position-relative mb--80">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-12">
            <ul class="instagram-wrapper instagram-col-6">
              <li v-for="(item, index) in imgList" :key="index">
                <a href="#">
                  <img :src="item.url" alt="instagram-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer-area-3">
      <div class="primary-area-3 pt-160">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div class="footer-widget">
                <a href="#"
                  ><img src="@/assets/img/logo/logo-white.png" alt="logo-white"
                /></a>
              </div>
              <div class="footer-widget">
                <div class="widget-social-profile">
                  <a href="#" class="facebook"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a href="#" class="insta"><i class="fab fa-instagram"></i></a>
                  <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="youtube"><i class="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div class="footer-widget">
                <h4 class="widget-title">Most Readable</h4>
                <ul class="recent-posts">
                  <li>
                    <div class="recent-thumb">
                      <a href="#">
                        <img
                          src="@/assets/img/widget/recent-post-1.jpg"
                          alt="recent-post-1"
                        />
                      </a>
                    </div>
                    <div class="recent-details">
                      <h4>
                        <a href="#"
                          >Solar Probe Embarks Unp Dented Mission Map</a
                        >
                      </h4>
                      <span> 20 March 2020 </span>
                    </div>
                  </li>
                  <li>
                    <div class="recent-thumb">
                      <a href="post-image.html">
                        <img
                          src="@/assets/img/widget/recent-post-2.jpg"
                          alt="recent-post-2"
                        />
                      </a>
                    </div>
                    <div class="recent-details">
                      <h4>
                        <a href="post-image.html"
                          >BAT Bangladesh Want To Partnership With Get</a
                        >
                      </h4>
                      <span> 20 March 2020 </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div class="footer-widget">
                <h4 class="widget-title">Popular Tags</h4>
                <div class="tagcolud">
                  <a href="#" v-for="(item, i) in tagList" :key="i">{{
                    item
                  }}</a>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div class="footer-widget">
                <h4 class="widget-title">Popular Tags</h4>
                <div class="content-widget">
                  <ul>
                    <li v-for="(item, i) in infoList" :key="i">
                      <i :class="'fal ' + item.icon"></i>
                      <a href="#">{{ item.text }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-40">
            <div class="col-xl-12">
              <div class="footer-separator"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="secondary-footer-2">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 text-center">
              <p class="copyright-3">
                Copyright © 2020
                <a href="#">Biver</a>. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        { url: require("../../assets/img/widget/instagram-1.jpg") },
        { url: require("../../assets/img/widget/instagram-2.jpg") },
        { url: require("../../assets/img/widget/instagram-3.jpg") },
        { url: require("../../assets/img/widget/instagram-4.jpg") },
        { url: require("../../assets/img/widget/instagram-5.jpg") },
        { url: require("../../assets/img/widget/instagram-6.jpg") },
      ],
      tagList: [
        "Travel",
        "Fashion",
        "Lifestyle",
        "Personal",
        "Blogs",
        "News",
        "Minimal",
        "Sports",
        "Popular",
        "PSD",
        "HTML",
      ],
      infoList: [
        { icon: "fa-phone", text: "13026636499" },
        { icon: "fa-envelope-open", text: "1767386755@qq.com" },
        { icon: "fa-map-marker-alt", text: "广东省 深圳市" },
        { icon: "fa-paper-plane", text: "www.zh526.com" },
      ],
    };
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>