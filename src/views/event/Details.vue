<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"

import Event from "@/models/Event"

export default class EventDetails extends Vue {
  @Prop({ type: Object, default: () => ({}), required: true })
  readonly event!: Event
}
</script>
