<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{ horzontal: !vertical }"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :name="name"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"

import BaseRadio from "@/components/BaseRadio.vue"

@Options({
  components: {
    BaseRadio,
  },
})
export default class BaseRadioGroup extends Vue {
  @Prop({ type: Array, default: () => [], required: true })
  readonly options: Array<any> = []
  @Prop({ type: String, default: "", required: true }) readonly name = ""
  @Prop({ type: [String, Number], required: true })
  modelValue: string | number = ""
  @Prop({ type: Boolean, default: false, required: false })
  readonly vertical!: boolean
}
</script>

<style scoped>
.horzontal {
  margin-right: 20px;
}
</style>
