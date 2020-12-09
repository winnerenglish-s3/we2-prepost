<template>
  <q-page
    class="q-py-md"
    :class="$route.params.type == 'pretest' ? 'bg-pre' : 'bg-post'"
  >
    <div
      :class="$q.platform.is.desktop ? 'absolute-center' : ''"
      :style="$q.platform.is.desktop ? '' : 'padding-top:120px'"
    >
      <div align="center">
        <div>
          <div class="relative-position">
            <q-img
              v-if="type"
              style="width:250px"
              src="../../public/images/levelcard.png"
            >
              <div
                v-if="type"
                class="absolute-center bg-transparent textShadow text-white"
                style="font-size:32px;top:40%;"
              >
                41
              </div>
            </q-img>
            <!-- <q-img
              v-if="!type"
              style="width:250px"
              src="../../public/images/best.png"
            /> -->
          </div>
          <div
            class="q-mt-md "
            :class="typeClass == 'pretest' ? 'text-white' : 'text-black'"
          >
            <div class="q-mb-lg f-medium f16">
              <span v-if="typeClass == 'pretest'">จบแบบทดสอบก่อนเรียน</span>
              <span v-else>จบแบบทดสอบหลังเรียน</span>
            </div>
            <div class="f14 q-mb-lg q-pt-sm">
              <div>
                กรุณากลับเข้าสู่ระบบที่ Winner English
              </div>
            </div>
          </div>
        </div>
        <!-- ปุ่มปิด -->
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
      typeClass: this.$q.sessionStorage.getItem("tt"),
      type: true
    };
  },
  methods: {
    goto() {
      window.close();
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-start:hover {
  background-image: url("../../public/images/close-btn-h.png");
  transform: scale(0.99);
  background-size: cover;
  cursor: pointer;
}
//ปุ่ม start
.btn-start {
  background-image: url("../../public/images/close-btn.png");
  width: 100%;
  height: 35px;
  background-size: cover;
}
.textShadow {
  text-shadow: 2px 2px #b1654b;
}
</style>
