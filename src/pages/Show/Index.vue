<style lang="sass" scoped>
.overlapping
  border: 2px solid white
  position: absolute
</style>
<template>
  <q-page class="q-page q-pa-lg">
    <div class="row justify-center">
      <div class="col-11 q-pa-xl q-pb-xl bg-brand">
        <div class="row">
          <div class="q-pa-md q-gutter-md">
            <q-badge rounded color="primary" label="演唱會" />
            <q-badge rounded color="primary" label="售票" />
          </div>
        </div>
        <div class="row">
          <div class="text-h1">
            演唱會
          </div>
        </div>
        <div class="row q-gutter-md">
          <div class="col-8">
            <q-img src="https://cdn.quasar.dev/img/mountains.jpg" fit="contain" />
          </div>
          <div class="col-3">
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">XXX 人想去</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-pa-md q-gutter-sm" style="height: 80px">
                  <q-avatar v-for="n in 5" :key="n" size="40px" class="overlapping" :style="`left: ${n * 25}px`">
                    <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`">
                  </q-avatar>
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat color="primary">我想去</q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
        <div class="row q-pt-md q-gutter-sm">
          <q-btn to="https://quasar.dev/vue-components/button" label="活動連結" outline />
          <q-btn to="https://quasar.dev/vue-components/button" label="售票連結" outline />
          <q-btn label="加入月曆" outline />
        </div>
        <div class="row">
          <q-timeline color="secondary">
            <q-timeline-entry heading>
              過往活動
            </q-timeline-entry>

            <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
              <div class="row">
                <div class="col-3">
                  <q-img src="https://cdn.quasar.dev/img/mountains.jpg" fit="contain" />
                </div>
                <div class="q-pl-sm col-9">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </div>
              </div>
            </q-timeline-entry>
            <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
              <div class="row">
                <div class="col-3">
                  <q-img src="https://cdn.quasar.dev/img/mountains.jpg" fit="contain" />
                </div>
                <div class="q-pl-sm col-9">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </div>
              </div>
            </q-timeline-entry>
          </q-timeline>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShowIndex",
  setup() {
    return {
    };
  },
});
</script>
