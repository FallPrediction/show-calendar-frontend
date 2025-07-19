<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-brand flex-center">
        <q-card bordered :style="$q.screen.lt.sm ? { 'width': '80%' } : { 'width': '40%' }">
          <img src="~assets/logo-transparent.png" />
          <q-card-section>
            <div class="text-h6">登入</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-form class="q-gutter-md">
              <q-input v-model.trim="email" label="信箱" type="email" lazy-rules />
              <q-input v-model.trim="password" label="密碼" lazy-rules :type="isPwd ? 'password' : 'text'">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                    @click="isPwd = !isPwd"></q-icon>
                </template>
              </q-input>
              <div>
                <q-btn label="登入" to="/" type="button" color="primary" />
                <q-btn label="我還沒有帳號" to="/register" type="button" color="primary" />
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
  name: "LoginPage",
  setup() {
    return {
      email: ref(''),
      password: ref(''),
      isPwd: ref(true),
    }
  },
});
</script>