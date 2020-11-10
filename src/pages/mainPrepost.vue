<template>
  <q-page>
    <prepost-pc v-if="$q.platform.is.desktop"></prepost-pc>
    <prepost-mobile v-if="$q.platform.is.mobile"></prepost-mobile>
  </q-page>
</template>

<script>
import prepostPc from "../components/prepostPc.vue";
import prepostMobile from "../components/prepostMobile.vue";
export default {
  components: {
    prepostPc,
    prepostMobile
  }
};
</script>

<style lang="scss" scoped></style>
