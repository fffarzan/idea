<template>
  <input
    type="radio"
    v-bind="$attrs"
    :checked="modelValue === value"
    :value="value"
    @change="$emit('update:modelValue', value)"
  />
  <label v-if="label">{{ label }}</label>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"

export default class BaseRadio extends Vue {
  @Prop({ type: String, default: "", required: false }) readonly label!: string
  @Prop({ type: [String, Number], required: false })
  modelValue!: string | number
  @Prop({ type: [String, Number], required: true })
  value: string | number = ""
}
</script>
