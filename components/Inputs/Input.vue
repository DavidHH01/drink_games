<template>
  <div :class="inputClasses.container">
    <!-- Label -->
    <label
      v-if="label"
      :for="inputId"
      :class="inputClasses.label"
    >
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>

    <!-- Input wrapper -->
    <div :class="inputClasses.inputWrapper">
      <!-- Left icon -->
      <MdiIcon
        v-if="icon && iconPosition === 'left'"
        :icon="icon"
        :class="inputClasses.icon"
      />

      <!-- Input -->
      <input
        :id="inputId"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :maxlength="maxlength"
        :minlength="minlength"
        :max="max"
        :min="min"
        :step="step"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :class="[inputClasses.input, customClass]"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
      />

      <!-- Right icon -->
      <MdiIcon
        v-if="icon && iconPosition === 'right'"
        :icon="icon"
        :class="inputClasses.icon"
      />

      <!-- Clear button -->
      <button
        v-if="clearable && modelValue && !disabled && !readonly"
        type="button"
        class="absolute right-3 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
        @click="handleClear"
      >
        <MdiIcon icon="mdiClose" class="w-4 h-4" />
      </button>
    </div>

    <!-- Hint -->
    <p
      v-if="hint && !error"
      :class="inputClasses.hint"
    >
      {{ hint }}
    </p>

    <!-- Error -->
    <p
      v-if="error"
      :class="inputClasses.error"
    >
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useInput } from '~/composables/useInput'

interface Props {
  modelValue?: string | number
  type?: InputType
  variant?: InputVariant
  size?: InputSize
  radius?: InputRadius
  placeholder?: string
  label?: string
  hint?: string
  error?: string
  icon?: string
  iconPosition?: 'left' | 'right'
  clearable?: boolean
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  maxlength?: number
  minlength?: number
  max?: number
  min?: number
  step?: number
  autocomplete?: string
  autofocus?: boolean
  class?: string
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: InputType.TEXT,
  variant: InputVariant.DEFAULT,
  size: InputSize.MEDIUM,
  radius: InputRadius.MEDIUM,
  iconPosition: 'left',
  clearable: false,
  disabled: false,
  readonly: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  keydown: [event: KeyboardEvent]
  clear: []
}>()

const { inputClasses } = useInput(props)

const customClass = computed(() => props.class || '')

const inputId = computed(() => props.id || `input-${Math.random().toString(36).substring(2, 9)}`)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === InputType.NUMBER ? Number(target.value) : target.value
  emit('update:modelValue', value)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event)
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('clear')
}
</script>