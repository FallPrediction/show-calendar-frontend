<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-brand flex-center">
        <q-card bordered :style="$q.screen.lt.sm ? { 'width': '80%' } : { 'width': '40%' }">
          <img src="~assets/logo-transparent.png" />
          <q-card-section>
            <div class="text-h6">註冊</div>
            <div class="text-subtitle2">註冊帳號，每周收到新消息！</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-form class="q-gutter-md">
              <q-input v-model.trim="name" label="名字" lazy-rules />
              <q-input v-model.trim="email" label="信箱" type="email" lazy-rules />
              <q-input v-model.trim="password" label="密碼" lazy-rules :type="isPwd ? 'password' : 'text'">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                    @click="isPwd = !isPwd"></q-icon>
                </template>
              </q-input>
              <q-input v-model.trim="confirmPassword" label="確認密碼" lazy-rules
                :type="isConfirmPwd ? 'confirmPassword' : 'text'">
                <template v-slot:append>
                  <q-icon :name="isConfirmPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                    @click="isConfirmPwd = !isConfirmPwd"></q-icon>
                </template>
              </q-input>
              <div>
                <q-btn label="註冊" to="/" type="button" color="primary" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "RegisterPage",
  setup() {
    return {
      name: ref(''),
      email: ref(''),
      password: ref(''),
      confirmPassword: ref(''),
      isPwd: ref(true),
      isConfirmPwd: ref(true),
    }
  },
});
</script>