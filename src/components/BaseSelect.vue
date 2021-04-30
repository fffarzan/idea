<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select
      :value="modelValue"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', $event.target.value)
        },
      }"
      class="field"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"

export default class BaseSelect extends Vue {
  @Prop({ type: String, default: "", required: false }) readonly label!: string
  @Prop({ type: [String, Number], default: "", required: false })
  modelValue!: string | number
  @Prop({ type: Array, default: () => [], required: true })
  readonly options!: Array<any>
}
</script>
