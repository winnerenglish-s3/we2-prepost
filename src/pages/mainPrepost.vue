<template>
  <q-page :class="isLoadData ? 'flex flex-center' : ''">
    <div v-if="isLoadData" align="center">
      <q-spinner-facebook thickness="1" color="primary" size="6em" />
    </div>
    <div v-else>
      <prepost-pc v-if="$q.platform.is.desktop"></prepost-pc>
      <prepost-mobile v-if="$q.platform.is.mobile"></prepost-mobile>
    </div>
  </q-page>
</template>

<script>
import prepostPc from "../components/prepostPc.vue";
import prepostMobile from "../components/prepostMobile.vue";
export default {
  components: {
    prepostPc,
    prepostMobile
  },
  data() {
    return {
      isLoadData: true
    };
  },
  methods: {
    name() {}
  },
  mounted() {}
};
</script>

<style lang="scss" scoped></style>
