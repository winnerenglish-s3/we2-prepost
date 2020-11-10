<template>
  <q-page>
    <pretest-pc v-if="$q.platform.is.desktop"></pretest-pc>
    <pretest-mobile v-if="$q.platform.is.mobile"></pretest-mobile>
  </q-page>
</template>

<script>
import pretestPc from "../components/pretestPc.vue";
import pretestMobile from "../components/pretestMobile.vue";
export default {
  components: {
    pretestPc,
    pretestMobile
  }
};
</script>

<style lang="scss" scoped></style>
