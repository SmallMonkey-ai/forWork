<template>
  <div class="body"></div>
</template>
<script>
import { api_test } from "../api/index";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    async getData() {
      let params = {
        userId: "624d2edc8b54ee3fd028ece3",
      };
      let res = await api_test(params);
      console.log(res);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>