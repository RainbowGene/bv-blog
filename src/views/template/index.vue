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
            <!-- 左侧内容 占比 8 -->
            <div class="col-xl-8 col-lg-8">
              <div class="blog-posts-wrapper">
                <div class="blog-post-wrap-3 blog-post-large mb-60">
                  <!-- article（文章组件） -->
                  <b-article-item></b-article-item>
                  <!-- 邮件致电 -->
                  <!-- <b-send-email></b-send-email> -->
                  <!-- 文章项 -->
                  <div class="row mt-60">
                    <b-article-item-mini></b-article-item-mini>
                    <b-article-item-mini></b-article-item-mini>
                  </div>
                  <!-- 分页组件 -->
                  <b-paging></b-paging>
                </div>
              </div>
            </div>
            <!-- 右侧内容占比 4 -->
            <div class="col-xl-4 col-lg-4 sidebar-wrapper">
              <!-- 个人信息展示 -->
              <b-self-info></b-self-info>
              <!-- 推荐内容 -->
              <b-side-recommend></b-side-recommend>
              <!-- 广告栏 -->
              <b-right-banner></b-right-banner>
              <!-- 友链 -->
              <b-friend-href></b-friend-href>
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
import BArticleItem from "@/components/home/b-article-item.vue";
import BSendEmail from "@/components/home/b-send-email.vue";
import BSelfInfo from "@/components/home/b-self-info.vue";
import BSideRecommend from "@/components/home/b-side-recommend.vue";
import BArticleItemMini from "@/components/home/b-article-item-mini.vue";
import BPaging from "@/components/home/b-paging.vue";
import BRightBanner from "@/components/home/b-right-banner.vue";
import BFriendHref from "../../components/home/b-friend-href.vue";

export default {
  components: {
    VLoading,
    BTabbar,
    BFooter,
    BSwiper,
    BArticleItem,
    BSendEmail,
    BSelfInfo,
    BSideRecommend,
    BArticleItemMini,
    BPaging,
    BRightBanner,
    BFriendHref,
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