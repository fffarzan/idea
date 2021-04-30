<template>
  <div>
    <input
      :checked="modelValue"
      type="checkbox"
      class="field"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label v-if="label">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"

export default class BaseCheckbox extends Vue {
  @Prop({ type: String, default: "", required: false }) readonly label!: string
  @Prop({ type: Boolean, default: false, required: false })
  modelValue!: boolean
}
</script>
