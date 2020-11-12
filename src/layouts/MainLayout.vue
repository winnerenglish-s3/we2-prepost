<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="type == 'pretest' ? 'bg-primary' : 'bg-positive'">
      <q-toolbar style="max-width:857px;width100%;margin:auto">
        <div class="text-white f16">แบบทดสอบวัดระดับ</div>
        <q-space></q-space>
        <div>
          <div class="q-pt-sm">
            <q-img @click="back()" :src="logoutPic" style="width:40px" />
          </div>
        </div>
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
              <q-img @click="back()" :src="logoutPic" style="width:40px" />
            </div>
          </div>
        </div>
      </div>
    </q-header>-->

    <q-page-container>
      <router-view v-if="$q.platform.is.desktop" class="container" />
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
      type: "pretest",
      open: false,
      logoutPic: require("../../public/images/logout-icon.png")
    };
  },
  methods: {
    back() {}
  }
};
</script>
