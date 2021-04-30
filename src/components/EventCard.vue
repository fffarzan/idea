<template>
  <router-link
    :to="{ name: 'EventDetails', params: { id: event.id } }"
    class="event-link"
  >
    <div class="event-card">
      <span>@ {{ event.data }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"

@Options({
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
})
export default class EventCard extends Vue {
  msg!: string
  name = "EventCard"
}
</script>

<style scoped lang="scss">
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba($color: #000000, $alpha: 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
