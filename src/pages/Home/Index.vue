<template>
  <q-page class="q-page q-pa-lg">
    <div class="row justify-center">
      <div class="col-11 q-pa-xl q-pb-xl bg-brand">
        <q-carousel v-model="slide" control-color="amber" navigation height="500px" autoplay="true">
          <q-carousel-slide v-for="(event, index) in homeEvents" :key="event.Id" :name="index + 1"
            class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <q-img class="rounded-borders col-8" fit="contain" :src="event.OgImage"
                style="max-height:100%;background-color: black;"></q-img>
              <div class="col-4 q-pa-md">
                <div class="text-h6">{{ event.Name }}</div>
                <q-btn :href="event.OgUrl" label="活動連結" outline />
                <q-btn :to="`/shows/${event.ShowId}`" label="過往活動" outline />
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
        <div class="row">
          <div class="col-12 q-pt-xl">
            <FullCalendar :options="calendarOptions" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { api } from 'boot/axios';

export default defineComponent({
  name: 'HomeIndex',
  components: {
    FullCalendar
  },
  setup() {
    let homeEvents = ref([]);
    async function getHomeEvents() {
      try {
        const response = await api.get('/api/events/home');
        homeEvents.value = response.data.data;
      } catch (error) {
        console.log(error);
      }
    }
    getHomeEvents();

    const calendarOptions = reactive({
      plugins: [dayGridPlugin, listPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listWeek'
      },
      initialView: 'dayGridMonth',
      events: [],
    });
    async function getLatestEvents() {
      try {
        let latestEvents = [];
        const response = await api.get('/api/events/latest');
        response.data.data.forEach(item => {
          latestEvents.push({
            id: item.Id,
            allDay: true,
            start: item.StartDate.slice(0, 10),
            title: item.Name,
            url: item.OgUrl,
          });
        });
        calendarOptions.events = latestEvents;
      } catch (error) {
        console.log(error);
      }
    }
    getLatestEvents();

    return {
      slide: ref(1),
      calendarOptions,
      homeEvents,
    };
  },
});
</script>
