<template>
  <q-page :class="$route.params.type == 'pretest' ? 'bg-pre' : 'bg-post'">
    <div
      :class="$q.platform.is.desktop ? 'absolute-center' : ''"
      :style="$q.platform.is.desktop ? '' : 'padding-top:120px'"
    >
      <div align="center">
        <div>
          <div class="relative-position">
            <q-img v-if="type" style="width:250px" src="../../public/images/levelcard.png" />
            <q-img v-if="!type" style="width:250px" src="../../public/images/best.png" />
            <div
              v-if="type"
              class="absolute-center textShadow text-white"
              style="font-size:32px;padding-bottom:25px"
            >7</div>
          </div>
          <div
            style="padding-top:45px;padding-bottom:45px"
            :class="typeClass == 'pretest' ? 'text-white' : 'text-black'"
          >
            <div
              class="q-pb-md"
              style="font-weight: bold;"
              :class="$q.platform.is.desktop ? 'f20' : 'f16'"
            >จบแบบทดสอบวัดระดับ</div>
            <div class="f16" v-if="$q.platform.is.desktop">
              <div v-if="type" class="q-pb-sm">กรุณากลับเข้าสู่ระบบที่ Winner English</div>
              <div
                v-if="!type"
                class="q-pb-sm"
              >คุณสามารถตรวจสอบระดับการเรียนที่เหมาะสมได้ที่ Winner English</div>
            </div>
            <div class="f14" v-else>
              <div v-if="type">
                <div>กรุณารอคุณครูผู้สอนตั้งค่าระดับการเรียน</div>
                <div>และกลับเข้าสู่ระบบที่ Winner English</div>
              </div>
              <div v-if="!type">
                <div>คุณสามารถตรวจสอบคะแนน</div>
                <div>และระดับการเรียนที่เหมาะสมได้ที่ Winner English</div>
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
      type: true,
    };
  },
  methods: {
    goto() {
      window.close();
    },
  },
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
