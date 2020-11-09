<template>
  <div
    :class="$q.platform.is.desktop ? 'absolute-center':''"
    :style="$q.platform.is.desktop ? '':'padding-top:112px' "
    align="center"
  >
    <div>
      <!-- <div class="q-pb-lg">
        <q-img style="width:320px" src="../../public/images/titlebar.png" />
      </div>-->
      <div class="relative-position">
        <!-- <q-img style="width:320px" src="../../public/images/box-login.png"></q-img> -->
        <div style="width:270px" class="absolute-center">
          <div class="q-pb-sm">
            <q-input
              autofocus
              label-color="brown-9"
              class="userPwd q-px-md"
              dense
              borderless
              v-model="data.user"
              label="รหัสผู้ใช้งาน"
            />
          </div>
          <div class="q-py-sm">
            <q-input
              label-color="brown-9"
              class="userPwd q-px-md"
              dense
              borderless
              @keypress="enter"
              v-model="data.password"
              label="รหัสผ่าน"
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:append>
                <q-icon
                  color="dark"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
          <!-- ปุ่มเข้าสู่ระบบ -->
          <div class="q-mt-md">
            <div @click="login()" class="btn-login"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { isPwd: true, data: { user: "", password: "" } };
  },
  methods: {
    login() {
      if (this.data.user == "admin" && this.data.password == "1234") {
        this.$router.push("/welcome");
      }
    },
    enter(event) {
      if (event.key === "Enter") {
        this.login();
      }
    },
  },
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
.btn-login:hover {
  background-image: url("../../public/images/hover.png");
  transform: scale(0.99);
  background-size: cover;
  cursor: pointer;
}
//ปุ่ม login
.btn-login {
  background-image: url("../../public/images/login-btn.png");
  width: 100%;
  height: 35px;
  background-size: cover;
}
</style>
