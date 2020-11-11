<template>
  <div
    :class="$q.platform.is.desktop ? 'absolute-center' : ''"
    :style="$q.platform.is.desktop ? '' : 'padding-top:112px'"
    align="center"
  >
    <div>
      <q-dialog v-model="show" persistent>
        <div class="relative-position" align="center">
          <q-img
            style="width:320px"
            src="../../public/images/warning.png"
          ></q-img>
          <div style="width:270px" class="absolute-center">
            <div style="padding-top:110px">
              <div class="f24">อย่าลืม! สอบก่อนเรียน</div>
              <div class="q-py-md" style="padding-bottom:60px">
                <div>คุณสามารถเข้าสอบก่อนเรียน</div>
                <div>ได้ตั้งแต่วันนี้จนถึงวันที่ 16 พ.ค. 2563</div>
              </div>
            </div>
            <div class="row q-pa-md">
              <div class="col-6">
                <div @click="closeBtn()" class="btn-close"></div>
              </div>
              <div class="col-6">
                <div @click="goto()" class="btn-exam col-6"></div>
              </div>
            </div>
          </div>
        </div>
      </q-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      isPwd: true,
      data: { user: "", password: "" }
    };
  },
  methods: {
    goto() {
      this.$router.push("/welcome");
    },
    closeBtn() {
      this.show = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.userPwd {
  background: white;
  border-radius: 10px;
  border: 1px solid #512a08;
}

.fontColor {
  color: #512a08;
}

.forgotPassword {
  font-size: 12px;
  color: #512a08;
}
.btn-close:hover {
  background-image: url("../../public/images/close-btn-mh.png");
  transform: scale(0.99);
  background-size: cover;
  cursor: pointer;
}
//ปุ่ม login
.btn-close {
  background-image: url("../../public/images/close-btn-m.png");
  width: 100%;
  height: 35px;
  background-size: cover;
}

.btn-exam:hover {
  background-image: url("../../public/images/exam-btn-h.png");
  transform: scale(0.99);
  background-size: cover;
  cursor: pointer;
}
//ปุ่ม login
.btn-exam {
  background-image: url("../../public/images/exam-btn.png");
  width: 100%;
  height: 35px;
  background-size: cover;
}
</style>
