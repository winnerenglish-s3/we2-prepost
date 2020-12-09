<template>
  <q-page
    align="center"
    :class="$route.params.type == 'pretest' ? 'bg-pre' : 'bg-post'"
    class="q-pb-md"
  >
    <div style="padding-top:20px;" class="container-main-mobile">
      <div class="row items-center q-mb-md " style="margin:0px auto 15px auto;">
        <div
          class="col-1  q-mr-sm text-dropred f14"
          align="left"
          style="width:45px"
        >
          {{ curentChoice }}/{{ prepostData.length }}
        </div>
        <!-- หลอดเขียว -->
        <div class="col ">
          <div
            class="borderPercent relative-position"
            style="height:22px;padding:2px"
          >
            <div
              style="margin-left:1px"
              :style="'width:' + percent + '%'"
              class="percent full-height"
            ></div>
          </div>
        </div>

        <div class="col-1 " style="width:120px;">
          <!-- <q-img
            src="../../public/images/clock.png"
            style="width:110px;margin-top:-10px"
          ></q-img> -->
          <show-time></show-time>
        </div>
      </div>
      <div v-if="isloadData">
        <div class="bg-instruction row">
          <div class="text-black">
            <div align="left" class="q-pa-md">
              <span class="block ">
                <!-- {{ prepostData[curentChoice - 1].instructioneng }} -->
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Complete the sentences in Present
                Perfect Simple or Present Perfect Continuous using the words in
                the brackets.
              </span>
              <span class="block q-mt-sm">
                <!-- {{ prepostData[curentChoice - 1].instructionthai }} -->
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เติมประโยคให้สมบูรณ์ในรูป Present
                Perfect Simple หรือ Continuous โดยใช้คำในวงเล็บ
              </span>
            </div>
          </div>
        </div>

        <div
          style="width:300px;margin:20px auto"
          class="f16"
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
            >
              <span class="block q-ml-lg q-pa-xs" align="left">
                <div style="margin-top:12px">{{ item }}</div>
              </span>
            </q-img>
          </div>
        </div>
      </div>
    </div>
    <!-- ---------------------------dialog------------------------ -->
    <q-dialog v-model="dialogTimeOut" persistent>
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
import showTime from "../components/showTime";
import { db } from "src/router";
export default {
  components: {
    showTime
  },
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

        allData = allData.filter(x => {
          return x.level === "7";
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
  background-color: #f8a58d;
  border-radius: 10px;
}
.borderPercent {
  border: 2px solid #b1654b;
  background-color: #f8a58d;
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

.bg-instruction {
  position: relative;
  background-image: url("../../public/images/wall.png");
  max-width: 320px;
  width: 100%;
  max-height: 150px;
  min-height: fit-content;
  background-size: cover;
  margin: auto;
  border-radius: 7px;
  box-shadow: 0px 5px 0px #792527;
  // border: 2px solid #b1654b;
  border-top-color: #b1654b;
  border-bottom-color: #b1654b;
  border-width: 2px;
  border-style: solid;
  border-left-width: 4px;
  border-left-color: #b1654b;
  border-right-width: 4px;
  border-right-color: #b1654b;
}
</style>
