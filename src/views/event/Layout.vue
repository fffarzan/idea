<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav id="nav">
      <router-link :to="{ name: 'EventDetails' }"> Details </router-link>
      |
      <router-link :to="{ name: 'EventRegister' }"> Register </router-link>
      |
      <router-link :to="{ name: 'EventEdit' }"> Edit </router-link>
    </nav>
    <router-view :event="event" />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"

import EventService from "@/services/EventService"
// import Event from "@/models/Event"

export default class EventLayout extends Vue {
  @Prop({ type: Number, required: true }) readonly id!: number
  event = null

  created(): void {
    EventService.getEvent(this.id)
      .then((res) => {
        this.event = res.data
      })
      .catch((err) => {
        if (err.response || err.response.status === 404) {
          this.$router.push({
            name: "404Resource",
            params: { resource: "event" },
          })
        } else {
          this.$router.push({ name: "NetworkError" })
        }
      })
  }
}
</script>
