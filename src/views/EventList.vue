<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link
        id="page-prev"
        v-if="page !== 1"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
      >
        &#60; Previous
      </router-link>
      <router-link
        id="page-next"
        v-if="hasNextPage"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
      >
        Next &#62;
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"
import NProgress from "nprogress"

import EventCard from "@/components/EventCard.vue"
import EventService from "@/services/EventService"
import Event from "@/models/Event"

@Options({
  components: {
    EventCard,
  },
  beforeRouteEnter(routeTo: any, routeFrom: any, next: any): void {
    NProgress.start()
    // we don't have access to `this` in this hook
    EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
      .then((res) => {
        next((component: any) => {
          component.events = res.data
          component.totalEvents = res.headers["x-total-count"]
        })
      })
      .catch((err) => {
        console.log(err)

        next({ name: "NetworkError" })
      })
      .finally(() => {
        NProgress.done()
      })
  },
  beforeRouteUpdate(routeTo: any): void {
    NProgress.start()
    EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
      .then((res) => {
        this.events = res.data
        this.totalEvents = res.headers["x-total-count"]
      })
      .catch(() => {
        return { name: "NetworkError" }
      })
      .finally(() => {
        NProgress.done()
      })
  },
})
export default class EventList extends Vue {
  @Prop({ type: Number, default: 1, required: false }) page!: number

  events: Array<Event> = []
  totalEvents = 0

  get hasNextPage(): boolean {
    const totalPage = Math.ceil(this.totalEvents / 2)

    return this.page < totalPage
  }
}
</script>

<style scoped lang="scss">
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;

  a {
    flex: 1;
    text-decoration: none;
    color: #2c3e50;
  }

  #page-prev {
    text-align: left;
  }

  #page-next {
    text-align: right;
  }
}
</style>
