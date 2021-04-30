<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <router-link :to="{ name: 'EventList' }">Back to home page</router-link>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"

export default class NotFound extends Vue {
  @Prop({ type: String, default: "page", required: true })
  readonly resource = "page"
}
</script>
