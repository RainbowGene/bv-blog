<template>
  <!-- 分页组件 -->
  <div class="primary-pagination mb-40">
    <ul>
      <li>
        <a class="prev page-numbers" href="#">
          <i class="fas fa-chevron-left"></i>
        </a>
      </li>
      <li><span class="page-numbers current">1</span></li>
      <li><a class="page-numbers" href="#">2</a></li>
      <li><a class="page-numbers" href="#">3</a></li>
      <li><a class="page-numbers" href="#">...</a></li>
      <li><a class="page-numbers" href="#">20</a></li>
      <li>
        <a class="next page-numbers" href="#">
          <i class="far fa-angle-right"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang='scss' scoped>
</style>