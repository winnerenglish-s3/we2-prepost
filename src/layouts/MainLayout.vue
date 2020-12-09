<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-primary">
      <q-toolbar style="max-width:857px;width100%;margin:auto">
        <div class="text-white f16" v-if="type == 'pretest'">
          แบบทดสอบก่อนเรียน
        </div>
        <div class="text-white f16" v-else>แบบทดสอบหลังเรียน</div>
        <q-space></q-space>
        <div>
          <!-- <div class="q-pt-sm absolute-right" v-if="$q.platform.is.desktop">
            <q-img
              class="cursor-pointer"
              @click="logout()"
              :src="logoutPic"
              style="width:40px"
            />
          </div>
          <div v-else class="q-pt-sm q-pr-md absolute-right">
            <q-img @click="setting()" :src="settingPic" style="width:40px" />
          </div> -->
          <div>
            <q-dialog></q-dialog>
          </div>
        </div>
        <!-- ---------------------------dialog------------------------ -->
        <q-dialog v-model="isDialogSetting" persistent>
          <q-card flat class="bg-transparent container-login">
            <q-card-section class="bg-transparent text-dark no-padding">
              <q-img src="../../public/images/box-setting.png">
                <div
                  class="absolute-center bg-transparent full-width"
                  style="margin-top:-50px"
                >
                  <div align="center" class="q-mb-lg">
                    <q-img
                      src="../../public/images/setting-word.png"
                      style="width:52px"
                    ></q-img>
                  </div>
                  <div class="row items-center justify-between">
                    <div class="row">
                      <q-img
                        src="../../public/images/sound-setting.png"
                        style="width:35px"
                      ></q-img>
                      <div class="text-black f16 q-ml-sm">เสียงประกอบ</div>
                    </div>
                    <div @click="switching(1)">
                      <q-img :src="switchPic1" style="width:72px"></q-img>
                    </div>
                  </div>
                  <div class="row items-center justify-between q-mt-lg">
                    <div class="row">
                      <q-img
                        src="../../public/images/music-setting.png"
                        style="width:30px"
                      ></q-img>
                      <div class="text-black f16 q-ml-sm">เพลง</div>
                    </div>
                    <div @click="switching(2)">
                      <q-img :src="switchPic2" style="width:72px"></q-img>
                    </div>
                  </div>
                </div>
                <span class="row block" align="center" style="margin-top:230px">
                  <span>
                    <q-img
                      src="../../public/images/leave-btn.png"
                      style="width:125px"
                    ></q-img>
                  </span>
                  <span @click="closeDialogSetting()">
                    <q-img
                      src="../../public/images/black-btn.png"
                      style="width:125px"
                    ></q-img>
                  </span>
                </span>
              </q-img>
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-toolbar>
    </q-header>
    <!-- <q-header elevated class="bg-teal-5">
      <div class="container" align="center">
        <div style="height:60px;width:850px " class="row justify-between">
          <div class="self-center">แบบสอบถามความพึงพอใจ</div>
          <div class="row self-center">
            <div>
              <q-img
                @click="stopMusic()"
                :src="musicPic"
                style="width:40px"
                class="cursor-pointer"
              />
            </div>
            <div>
              <q-img
                @click="stopSound()"
                :src="soundPic"
                style="width:40px"
                class="cursor-pointer q-mx-sm"
              />
            </div>
            <div>
              <q-img @click="logout()" :src="logoutPic" style="width:40px" />
            </div>
          </div>
        </div>
      </div>
    </q-header>-->

    <q-page-container>
      <router-view
        v-if="$q.platform.is.desktop"
        class="container"
        :class="type == 'pretest' ? 'bg-pre' : 'bg-post'"
      />
      <router-view v-if="$q.platform.is.mobile" />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      type: this.$route.params.type,
      open: false,

      isDialogSetting: false,
      isCloseMusic: false,
      isCloseSound: false,
      logoutPic: require("../../public/images/logout-icon.png"),
      musicPic: require("../../public/images/music-icon.png"),
      soundPic: require("../../public/images/sound-icon.png"),
      settingPic: require("../../public/images/setting-icon.png"),
      switchPic1: require("../../public/images/swit-open.png"),
      switchPic2: require("../../public/images/swit-close.png")
    };
  },
  methods: {
    setting() {
      this.isDialogSetting = true;
    },
    logout() {},
    stopMusic() {
      if (this.isCloseMusic == false) {
        this.isCloseMusic = true;
        this.musicPic = require("../../public/images/musicoff.png");
      } else {
        this.isCloseMusic = false;
        this.musicPic = require("../../public/images/music-icon.png");
      }
    },
    stopSound() {
      if (this.isCloseSound == false) {
        this.isCloseSound = true;
        this.soundPic = require("../../public/images/soundoff.png");
      } else {
        this.isCloseSound = false;
        this.soundPic = require("../../public/images/sound-icon.png");
      }
    },
    switching(btn) {
      if (btn == 1) {
        if (this.isSwitMusic == false) {
          this.isSwitMusic = true;
          this.switchPic1 = require("../../public/images/swit-open.png");
        } else {
          this.isSwitMusic = false;
          this.switchPic1 = require("../../public/images/swit-close.png");
        }
      } else {
        if (this.isSwitMusic == false) {
          this.isSwitMusic = true;
          this.switchPic2 = require("../../public/images/swit-open.png");
        } else {
          this.isSwitMusic = false;
          this.switchPic2 = require("../../public/images/swit-close.png");
        }
      }
    },
    closeDialogSetting() {
      this.isDialogSetting = false;
    }
  },
  mounted() {
    this.$q.sessionStorage.set("tt", this.$route.params.type);
  }
};
</script>
