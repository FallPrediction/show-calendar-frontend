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
            <q-form class="q-gutter-md" @submit.prevent="onSubmit">
              <q-input v-model.trim="email" label="信箱" type="email" :rules="[val => !!val || '*必填']" />
              <q-input v-model.trim="password" label="密碼" :rules="[val => !!val || '*必填']"
                :type="isPwd ? 'password' : 'text'">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                    @click="isPwd = !isPwd"></q-icon>
                </template>
              </q-input>
              <div>
                <q-btn label="登入" type="submit" color="primary" />
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
import { defineComponent, ref } from 'vue';
import { Notify } from 'quasar';
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const router = useRouter();
    let email = ref('');
    let password = ref('');
    const csrf = Math.floor(Math.random() * 100000000);
    document.cookie = 'csrf-token=' + csrf;
    async function onSubmit() {
      try {
        const response = await api.post(
          '/api/login',
          {
            email: email.value,
            password: password.value,
          },
          {
            withCredentials: true,
            headers: {
              'csrf-token': csrf,
            }
          }
        );
        Notify.create(response.data.message);
        router.push({ path: '/' });
      } catch (error) {
        Notify.create(error.response.data.message);
      }
    }

    return {
      email,
      password,
      isPwd: ref(true),
      onSubmit,
    }
  },
});
</script>