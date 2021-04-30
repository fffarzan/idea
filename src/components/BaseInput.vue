<template>
  <label :for="setup.uuid">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    :id="setup.uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
    class="field"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <p
    v-if="error"
    :id="`${uuid}-error`"
    aria-live="assertive"
    class="errorMessage"
  >
    {{ error }}
  </p>
</template>

<script lang="ts">
import { Vue, setup } from "vue-class-component"
import { Prop } from "vue-property-decorator"

import UniqueID from "@/features/UniqueID"

export default class BaseInput extends Vue {
  @Prop({ type: String, default: "", required: false }) readonly label!: string
  @Prop({ type: [String, Number], default: "", required: false })
  modelValue!: string | number
  @Prop({ type: String, default: "", required: false }) readonly error!: string

  setup = setup(() => {
    const uuid = UniqueID().getID()

    return {
      uuid,
    }
  })
}
</script>
