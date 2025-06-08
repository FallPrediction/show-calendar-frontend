<template>
  <q-page class="q-page q-pa-lg">
    <div class="row justify-center">
      <div class="col-11 q-pa-xl q-pb-xl bg-brand">
        <div class="row">
        </div>
        <div class="row">
          <div class="text-h2">
            {{ show?.Name }}
          </div>
        </div>
        <div class="row q-gutter-md">
          <div class="col-8" style="max-height: 500px;">
            <q-img :src="events[0]?.OgImage" fit="contain" style="max-height: 100%;" />
          </div>
          <!-- <div class="col-3">
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
          </div> -->
        </div>
        <div class="row q-pt-md q-gutter-sm">
          <q-btn :href="events[0]?.OgUrl" label="活動連結" outline />
          <q-btn :href="show?.TicketUrl" label="售票連結" outline />
          <!-- <q-btn label="加入月曆" outline /> -->
        </div>
        <div class="row">
          <q-timeline color="secondary">
            <q-timeline-entry heading>
              過往活動
            </q-timeline-entry>
            <template v-for="event in events" :key="event.Id">
              <q-timeline-entry :title="event.Name" :subtitle="event.StartDate.slice(0, 10)">
                <div class="row">
                  <div class="col-3">
                    <q-img :src="event.OgImage" fit="contain" style="max-height: 150px;" />
                  </div>
                  <div class="q-pl-sm col-9">
                    <!-- <div class="q-pa-sm q-gutter-sm">
                      <q-badge rounded color="primary" label="演唱會" />
                      <q-badge rounded color="primary" label="售票" />
                    </div> -->
                    <div>{{ event.OgDescription }}</div>
                  </div>
                </div>
              </q-timeline-entry>
            </template>
          </q-timeline>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { api } from 'boot/axios';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'ShowPage',
  setup() {
    const route = useRoute();
    let show = ref();
    async function getShow() {
      try {
        const response = await api.get(`/api/shows/${route.params.id}`);
        show.value = response.data.data;
      } catch (error) {
        console.log(error);
      }
    }
    getShow();

    let events = ref([]);
    async function getEvents() {
      try {
        const response = await api.get(`/api/shows/${route.params.id}/events`);
        events.value = response.data.data;
      } catch (error) {
        console.log(error);
      }
    }
    getEvents();
    return {
      show,
      events,
    };
  },
});
</script>

<style lang="sass" scoped>
.overlapping
  border: 2px solid white
  position: absolute
</style>
