<template>
  <p>Register for the event here</p>
  <button @click="onRegister()">Register Event</button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"
import { Inject, Prop } from "vue-property-decorator"

import Event from "@/models/Event"

export default class EventRegister extends Vue {
  @Prop({ type: Object, default: () => ({}), required: true })
  readonly event!: Event
  @Inject() readonly GStore!: { flashMessage: string }

  onRegister(): void {
    this.GStore.flashMessage = `You are successfully registered for ${this.event.title}`

    setTimeout(() => {
      this.GStore.flashMessage = ""
    }, 3000)

    this.$router.push({
      name: "EventDetails",
    })
  }
}
</script>
