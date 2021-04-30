<template>
  <p>Edit the event here</p>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"

import Event from "@/models/Event"

export default class EventEdit extends Vue {
  @Prop({ type: Object, default: () => ({}), required: true })
  readonly event!: Event
}
</script>
