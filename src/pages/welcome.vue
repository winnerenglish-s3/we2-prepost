<template>
  <q-page :class="$route.params.type == 'pretest' ? 'bg-pre' : 'bg-post'">
    <div
      :class="$q.platform.is.desktop ? 'absolute-center f20' : ''"
      :style="$q.platform.is.desktop ? '' : 'padding-top:125px'"
    >
      <div align="center">
        <div v-if="$route.params.type == 'pretest'">
          <q-img style="width:320px" src="../../public/images/title-pre.png" />
        </div>
        <div class="q-px-md" v-else>
          <q-img style="width:320px" src="../../public/images/posttest-sign.png" />
        </div>
        <div
          style="padding-top:45px;padding-bottom:45px"
          class="q-py-lg"
          :class="$route.params.type == 'pretest' ? 'text-white' : 'text-black'"
        >
          <div>คุณมีเวลา 40 นาทีในการทำ</div>
          <div>ถ้าพร้อมแล้วกด “เริ่ม” เพื่อทำกันได้เลย</div>
        </div>
        <!-- ปุ่มเริ่ม -->
        <div style="width:200px">
          <div @click="goto()" class="btn-start"></div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      type: "",
    };
  },
  methods: {
    goto() {
      this.$router.push("/mainPrePost/" + this.type);
    },
  },
  created() {
    // tt = testtype
    this.type = this.$route.params.type;
    this.$q.sessionStorage.set("tt", this.type);
  },
};
</script>

<style lang="scss" scoped>
.btn-start:hover {
  background-image: url("../../public/images/start-btn-h.png");
  transform: scale(0.99);
  background-size: cover;
  cursor: pointer;
}
//ปุ่ม start
.btn-start {
  background-image: url("../../public/images/start-btn.png");
  width: 100%;
  height: 35px;
  background-size: cover;
}
</style>
