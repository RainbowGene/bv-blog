<template>
  <!-- 加载中动画组件 -->
  <div>
    <div id="preloader" v-if="loading">
      <div class="preloader">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },

  components: {},
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  computed: {},

  methods: {},
};
</script>
<style lang='scss' scoped>
</style>