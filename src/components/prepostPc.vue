<template>
  <q-page align="center" class="bg-pre">
    <div style="padding-top:20px">
      <div class="row justify-center items-center q-mb-md">
        <div class="q-mr-sm text-dropred f14 " style="width:40px">
          {{ curentChoice }}/{{ totalChoice }}
        </div>
        <!-- หลอดเขียว -->
        <div
          class="borderPercent colorPercent relative-position"
          style="width:680px;height:22px;padding:2px"
        >
          <div
            style="margin-left:1px"
            :style="'width:' + percent + 'px'"
            class="percent full-height"
          ></div>
        </div>
        <div>
          <q-img
            src="../../public/images/clock.png"
            style="width:110px;margin-top:-10px"
          ></q-img>
        </div>
      </div>
      <div class="relative-position">
        <q-img src="../../public/images/title.png" style="width:830px">
          <span align="left" class="q-mt-sm q-pt-md q-ml-xl block">
            Choose the past simple of the following verb.
          </span>
          <span align="left" class="q-mt-sm q-ml-xl block"
            >เลือกริยาช่องที่ 2 ของคำกริยาต่อไปนี้</span
          >
        </q-img>
        <div
          style="margin-left:-480px"
          class="q-mt-md text-white"
          align="center"
        >
          The White House is the home of the American ____________ .
        </div>
        <div class="q-mt-md">
          <div>
            <q-img
              @click="nextChoice()"
              class="btn-Active"
              src="../../public/images/placement-ch.png"
              style="width:518px"
              ><span align="left" class="block  q-ml-lg q-mt-md">
                The girl sings the song beautifully.
              </span></q-img
            >
          </div>
          <div class="q-my-md">
            <q-img
              @click="nextChoice()"
              class="btn-Active"
              src="../../public/images/placement-ch.png"
              style="width:518px"
              ><span align="left" class="block  q-ml-lg q-mt-md"
                >poetry</span
              ></q-img
            >
          </div>
          <div class="q-mb-md">
            <q-img
              @click="nextChoice()"
              class="btn-Active"
              src="../../public/images/placement-ch.png"
              style="width:518px"
              ><span align="left" class="block  q-ml-lg q-mt-md"
                >postry</span
              ></q-img
            >
          </div>
          <div>
            <q-img
              @click="nextChoice()"
              class="btn-Active"
              src="../../public/images/placement-ch.png"
              style="width:518px"
              ><span align="left" class="block  q-ml-lg q-mt-md"
                >postry</span
              ></q-img
            >
          </div>
        </div>
      </div>
    </div>
    <!-- ---------------------------dialog------------------------ -->
    <q-dialog v-model="dialogTimeOut">
      <q-card flat class="bg-transparent" style="width:320px">
        <q-card-section class="bg-transparent text-dark no-padding">
          <q-img src="../../public/images/timeOut.png" style="width:320px">
            <div class="absolute-center bg-transparent full-width">
              <div
                style="font-size:24px"
                align="center"
                class="text-weight-bold text-dark relative-position q-px-md"
              >
                หมดเวลา !!!
              </div>
              <div
                align="center"
                class="text-dark f16 relative-position q-px-md q-mt-md"
              >
                ทำแบบทดสอบก่อนเรียน
              </div>
            </div>
            <div
              style="width:100%;bottom:30px; z-index:1000"
              class="bg-transparent absolute-bottom"
              align="center"
            >
              <!-- ปุ่มตกลง -->
              <div @click="confirm()" class="cursor-pointer btn-Alert z-top">
                <span class="text-dark absolute-center cursor-pointer"></span>
              </div>
            </div>
          </q-img>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      curentChoice: 1,
      totalChoice: 40,
      allPercent: 670,
      percent: 0,
      perOfChoice: "",
      clock: 0,
      dialogTimeOut: false
    };
  },
  methods: {
    processPercent() {
      this.perOfChoice = this.allPercent / this.totalChoice;
      this.percent = this.perOfChoice;
    },
    nextChoice() {
      if (this.percent < 670) {
        this.percent = this.percent + this.perOfChoice;
        this.curentChoice++;
      } else {
        this.$router.push("/finish");
      }
    },
    confirm() {
      this.$router.push("/finish");
    }
  },
  created() {
    this.processPercent();
    setTimeout(() => {
      this.dialogTimeOut = true;
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.colorPercent {
  background-color: #ffffff;
  border-radius: 10px;
}
.borderPercent {
  border: 2px solid #e57373;
  border-radius: 10px;
}
.text-dropred {
  color: #e57373;
}
.percent {
  background-color: #64a74a;
  border-radius: 10px;
}
.btn-Active {
  transform: scale(1);
  transition-duration: 0.3s;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  cursor: pointer;
}
.btn-Active:hover:active {
  transform: scale(0.95);
  transition-duration: 0.2s;
  -webkit-transform: scale(0.95);
  -moz-transform: scale(0.95);
}
.btn-Active:hover {
  transform: scale(1.1);
  transition-duration: 0.3s;
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
}
// ปุ่มตกลง
.btn-Alert {
  background-image: url("../../public/images/ok-btn.png");
  width: 190px;
  height: 35px;
  position: relative;
  background-size: cover;
}
//ปุ่มตกลง hover
.btn-Alert:hover {
  background-image: url("../../public/images/ok-btn-h.png");
  width: 200px;
  height: 35px;
  background-size: cover;
  cursor: pointer;
  transform: scale(0.99);
}
</style>
