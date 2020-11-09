<template>
  <q-page>
    <div
      :class="$q.platform.is.desktop ? 'flex flex-center':''"
      :style="$q.platform.is.desktop ? 'padding-top:100px':'padding-top:25px' "
    >
      <div align="center">
        <div>
          <q-img style="width:320px" src="../../public/images/titlebar.png" />
        </div>
        <div
          :style="$q.platform.is.desktop ? 'padding-top:30px;padding-bottom:47px':'padding-top:67px;padding-bottom:47px' "
          class="q-py-lg"
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
  methods: {
    goto() {
      this.$router.push("/placement");
    },
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
