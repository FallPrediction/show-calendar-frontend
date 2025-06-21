<template>
  <q-layout view="lHr lpR fff" id="layout">
    <q-header class="text-white" height-hint="98" id="header">
      <q-toolbar>

        <q-toolbar-title>
          <q-avatar square>
            <img src="~assets/logo-transparent.png" />
          </q-avatar>
          Souflair
        </q-toolbar-title>
        <div class="row q-gutter-xs q-pt-sm q-pr-sm">
          <template v-if="logined">
            <q-btn @click="logout" flat label="登出" />
            <q-avatar>
              <img src="~assets/account_circle.svg">
            </q-avatar>
          </template>
          <q-btn v-else to="/login" flat label="登入" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-white" id="footer">
      <q-toolbar>
        <span>
          © 2025 Elizabeth Huang. All rights reserved.
        </span>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { Notify } from 'quasar';
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    const logined = ref(document.cookie.indexOf('login=') !== -1);
    async function logout() {
      try {
        const response = await api.post(
          '/api/logout',
          {},
          { withCredentials: true }
        );
        logined.value = false;
        Notify.create(response.data.message);
        router.push({ path: '/' });
      } catch (error) {
        Notify.create(error.response.data.message);
      }
    }

    return {
      leftDrawerOpen,
      logined,
      logout,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
