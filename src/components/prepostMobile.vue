<template>
  <q-page align="center" class="bg-pre">
    <div class="" style="padding-top:20px">
      <div class="row justify-center items-center q-mb-md">
        <div class="q-mr-sm text-dropred f14 " style="width:40px">
          {{ curentChoice }}/{{ totalChoice }}
        </div>
        <!-- หลอดเขียว -->
        <div
          class="brx borderPercent colorPercent relative-position"
          style="width:165px;height:22px;padding:2px"
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
      <div v-if="isBox1 == true" class="relative-position">
        <q-img src="../../public/images/title-m.png" style="width:320px">
          <span align="left" class="q-mt-sm q-pt-md q-ml-lg block ">
            Choose the past simple of the following verb.
          </span>
          <span align="left" class="q-mt-sm q-ml-lg block"
            >เลือกริยาช่องที่ 2 ของคำกริยาต่อไปนี้</span
          >
        </q-img>
        <div
          class="q-mt-md q-mx-lg text-white"
          style="font-size:18px;width:320px"
          align="left"
        >
          The White House is the home of the American ____________ .
        </div>
        <div class="q-mt-lg">
          <div>
            <q-img
              @click="nextChoice()"
              src="../../public/images/placement-ch-m.png"
              style="width:270px"
              ><span align="left" class="block  q-ml-lg q-mt-md">
                The girl sings the song beautifully.
              </span></q-img
            >
          </div>
          <div class="q-my-md">
            <q-img
              @click="nextChoice()"
              src="../../public/images/placement-ch-m.png"
              style="width:270px"
              ><span align="left" class="block  q-ml-lg q-mt-md"
                >poetry</span
              ></q-img
            >
          </div>
          <div class="q-mb-md">
            <q-img
              @click="nextChoice()"
              src="../../public/images/placement-ch-m.png"
              style="width:270px"
              ><span align="left" class="block  q-ml-lg q-mt-md"
                >postry</span
              ></q-img
            >
          </div>
          <div>
            <q-img
              @click="nextChoice()"
              src="../../public/images/placement-ch-m.png"
              style="width:270px"
              ><span align="left" class="block  q-ml-lg q-mt-md"
                >postry</span
              ></q-img
            >
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div v-if="isBox2 == true" class="relative-position">
        <q-img src="../../public/images/title-m.png" style="width:320px">
          <span align="left" class="q-mt-sm q-pt-md q-ml-lg block">
            Choose the past simple of the following verb.
          </span>
          <span align="left" class="q-mt-sm q-ml-lg block"
            >เลือกริยาช่องที่ 3
          </span>
        </q-img>
        <div
          class="q-mt-md q-mx-lg text-white"
          style="font-size:18px;width:320px"
          align="left"
        >
          The House is American ____________ .
        </div>
        <div class="q-mt-lg">
          <div>
            <q-img
              @click="nextChoice()"
              src="../../public/images/placement-ch-m.png"
              style="width:270px"
              ><span align="left" class="block  q-ml-lg q-mt-md">
                The girl.
              </span></q-img
            >
          </div>
          <div class="q-my-md">
            <q-img
              @click="nextChoice()"
              src="../../public/images/placement-ch-m.png"
              style="width:270px"
              ><span align="left" class="block  q-ml-lg q-mt-md"
                >big c</span
              ></q-img
            >
          </div>
          <div class="q-mb-md">
            <q-img
              @click="nextChoice()"
              src="../../public/images/placement-ch-m.png"
              style="width:270px"
              ><span align="left" class="block  q-ml-lg q-mt-md"
                >market</span
              ></q-img
            >
          </div>
          <div>
            <q-img
              @click="nextChoice()"
              src="../../public/images/placement-ch-m.png"
              style="width:270px"
              ><span align="left" class="block  q-ml-lg q-mt-md"
                >school</span
              ></q-img
            >
          </div>
        </div>
      </div>
    </div>
    <!-- ---------------------------dialog------------------------ -->
    <q-dialog v-model="dialogTimeOut">
      <q-card flat class="bg-transparent container-login">
        <q-card-section class="bg-transparent text-dark no-padding">
          <q-img src="../../public/images/timeOut.png">
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
      totalChoice: 2,
      allPercent: 155,
      percent: 0,
      perOfChoice: "",
      clock: 0,
      dialogTimeOut: false,
      isBox1: true,
      isBox2: false
    };
  },
  methods: {
    processPercent() {
      this.perOfChoice = this.allPercent / this.totalChoice;
      this.percent = this.perOfChoice;
    },
    nextChoice() {
      if (this.percent < 155) {
        this.percent = this.percent + this.perOfChoice;
        this.curentChoice++;
        if (this.isBox1 == true) {
          this.isBox1 = false;
          setTimeout(() => {
            this.isBox2 = true;
          }, 150);
        }
      } else {
        this.dialogTimeOut = true;
      }
    },
    confirm() {
      this.$router.push("/finish");
    }
  },
  created() {
    this.processPercent();
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
