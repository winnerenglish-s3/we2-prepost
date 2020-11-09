<template>
  <q-page>
    <placement-pc v-if="$q.platform.is.desktop"></placement-pc>
    <placement-mobile v-if="$q.platform.is.mobile"></placement-mobile>
  </q-page>
</template>

<script>
import placementPc from "../components/placementPc.vue";
import placementMobile from "../components/placementMobile.vue";
export default {
  components: {
    placementPc,
    placementMobile
  }
};
</script>

<style lang="scss" scoped></style>
