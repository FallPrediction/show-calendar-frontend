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
          <q-btn flat label="登入" />
          <q-btn flat label="登出" />
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
        </div>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="首頁" />
        <q-route-tab to="/actors" label="演員" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-white" id="footer">
      <q-toolbar>
        <span>
          © 2025 Souflair. All rights reserved.
        </span>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
