<template>
  <q-page align="center" class="bg-pre">
    <div style="padding-top:20px;">
      <div class="row justify-center items-center q-mb-md">
        <div class="q-mr-sm text-dropred f14 " style="width:40px">
          {{ curentChoice }}/{{ prepostData.length }}
        </div>
        <!-- หลอดเขียว -->
        <div
          class="brx borderPercent colorPercent relative-position"
          style="width:165px;height:22px;padding:2px"
        >
          <div
            style="margin-left:1px"
            :style="'width:' + percent + '%'"
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
      <div v-if="isloadData" class="relative-position">
        <q-img src="../../public/images/title-m.png" style="width:320px;">
          <span align="left" class="q-mt-sm  q-ml-lg block">
            {{ prepostData[curentChoice - 1].instructioneng }}
          </span>
          <span align="left" class="q-mt-xs q-ml-lg block">{{
            prepostData[curentChoice - 1].instructionthai
          }}</span>
        </q-img>
        <div
          style="width:300px;margin:20px auto"
          class="f16 text-blue-grey-1"
          :class="type == 'pretest' ? 'text-white' : 'text-black'"
          align="left"
          v-html="prepostData[curentChoice - 1].question"
        ></div>
        <div class="q-mt-lg">
          <div
            class="q-my-md"
            v-for="(item, index) in prepostData[curentChoice - 1].choices"
            :key="index"
          >
            <q-img
              @click="nextChoice()"
              class="btn-Active"
              src="../../public/images/placement-ch-m.png"
              style="width:270px"
              ><span align="left" class="block  q-ml-lg q-pa-xs">
                {{ item }}
              </span></q-img
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
import { db } from "src/router";
export default {
  data() {
    return {
      type: this.$q.sessionStorage.getItem("tt"), //เก็บว่าเป็น pre หรือ post
      prepostData: "", //เก็บข้อมูลprepost จาก database
      curentChoice: 1, //ข้อปัจจุบัน
      percent: 0, //percent ในหลอด
      perOfChoice: "", //percent แต่ละข้อ
      clock: 0, // เวลา
      dialogTimeOut: false, //เปิดปิด dialog นาฬิกา
      isloadData: false //บอกว่าโหลดข้อมูลจาก Database เสร็จแล้ว
    };
  },
  methods: {
    //โหลดข้อมูล prepost จาก dataBase
    loadPrePostData() {
      let allData = [];
      let dbRef;
      if (this.$route.params.type == "pretest") {
        dbRef = db
          .collection("questionpool")
          .doc("server")
          .collection("practice")
          .where("preTest", "==", true);
      } else {
        dbRef = db
          .collection("questionpool")
          .doc("server")
          .collection("practice")
          .where("postTest", "==", true);
      }
      dbRef.get().then(data => {
        console.log(data.size);
        data.forEach(element => {
          allData.push({ ...element.data(), id: element.id });
        });

        this.prepostData = allData;
        this.isloadData = true;
        this.processPercent();
      });
    },
    //คำนวน percent
    processPercent() {
      this.perOfChoice = 100 / this.prepostData.length;
    },
    //กดทำข้อสอบข้อต่อไป
    nextChoice() {
      if (this.percent < 100) {
        this.percent = this.percent + this.perOfChoice;
        if (this.curentChoice != this.prepostData.length) {
          this.curentChoice++;
        } else {
          this.$router.push("/finish/" + this.type);
        }
      }
    },
    // กดยืนยัน ใน Dialog
    confirm() {
      this.$router.push("/finish/" + this.type);
    }
  },
  created() {
    this.loadPrePostData(); //เรียก function โหลดข้อมูล prepost
    // setTimeout(() => {
    //   this.dialogTimeOut = true;
    // }, 7000);
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
