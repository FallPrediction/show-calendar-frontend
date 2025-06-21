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
            <q-form class="q-gutter-md" @submit.prevent="onSubmit">
              <q-input v-model.trim="name" label="名字" :rules="[val => !!val || '*必填']" />
              <q-input v-model.trim="email" label="信箱" type="email" :rules="[val => !!val || '*必填']" />
              <q-input v-model.trim="password" label="密碼" :rules="[val => !!val || '*必填']"
                :type="isPwd ? 'password' : 'text'">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                    @click="isPwd = !isPwd"></q-icon>
                </template>
              </q-input>
              <q-input v-model.trim="confirmPassword" label="確認密碼" :rules="[val => !!val || '*必填']"
                :type="isConfirmPwd ? 'password' : 'text'">
                <template v-slot:append>
                  <q-icon :name="isConfirmPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                    @click="isConfirmPwd = !isConfirmPwd"></q-icon>
                </template>
              </q-input>
              <div>
                <q-btn label="註冊" type="submit" color="primary" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { Notify } from 'quasar';
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'RegisterPage',
  setup() {
    const router = useRouter();
    let name = ref('');
    let email = ref('');
    let password = ref('');
    let confirmPassword = ref('');
    const csrf = Math.floor(Math.random() * 100000000);
    document.cookie = 'csrf-token=' + csrf;
    async function onSubmit() {
      try {
        const response = await api.post(
          '/api/register',
          {
            name: name.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
          },
          {
            withCredentials: true,
            headers: {
              'csrf-token': csrf,
            }
          }
        );
        Notify.create(response.data.message);
        router.push({ path: '/login' });
      } catch (error) {
        Notify.create(error.response.data.message);
      }
    }

    return {
      name,
      email,
      password,
      confirmPassword,
      isPwd: ref(true),
      isConfirmPwd: ref(true),
      onSubmit,
    }
  },
});
</script>