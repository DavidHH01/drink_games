<template>
  <Teleport to="body">
    <Transition
      :name="animationClass"
      appear
    >
      <div
        v-if="modelValue"
        :class="modalClasses.backdrop"
        @click="handleBackdropClick"
      >
        <!-- Container -->
        <div :class="modalClasses.container">
          <!-- Modal -->
          <div
            :class="[modalClasses.modal, customClass]"
            :id="id"
            @click.stop
          >
            <!-- Gaming effect overlay -->
            <div
              v-if="variant === ModalVariant.GAMING"
              class="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
            />

            <!-- Neon glow effect -->
            <div
              v-if="variant === ModalVariant.NEON"
              class="absolute inset-0 bg-accent/5 opacity-50 rounded-xl pointer-events-none"
            />

            <!-- Header -->
            <ModalHeader
              v-if="showHeader || title || subtitle || icon || $slots.header"
              :title="title"
              :subtitle="subtitle"
              :icon="icon"
              :closable="closable"
              :class="headerClass"
              @close="handleClose"
            >
              <template v-if="$slots.header" #default>
                <slot name="header" />
              </template>
              <template v-if="$slots.headerActions" #actions>
                <slot name="headerActions" />
              </template>
            </ModalHeader>

            <!-- Body -->
            <ModalBody
              :scrollable="scrollable"
              :padding="size"
              :class="bodyClass"
            >
              <slot />
            </ModalBody>

            <!-- Footer -->
            <ModalFooter
              v-if="showFooter || $slots.footer"
              :class="footerClass"
            >
              <slot name="footer" />
            </ModalFooter>

            <!-- Close button (floating) -->
            <button
              v-if="closable && !showHeader"
              @click="handleClose"
              class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors duration-200 z-10"
            >
              <MdiIcon icon="mdiClose" class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useModal } from '~/composables/useModal'

interface Props {
  modelValue?: boolean
  size?: ModalSize
  variant?: ModalVariant
  position?: ModalPosition
  animation?: ModalAnimation
  backdrop?: ModalBackdrop
  title?: string
  subtitle?: string
  icon?: string
  closable?: boolean
  persistent?: boolean
  scrollable?: boolean
  showHeader?: boolean
  showFooter?: boolean
  headerClass?: string
  bodyClass?: string
  footerClass?: string
  class?: string
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  size: ModalSize.MEDIUM,
  variant: ModalVariant.DEFAULT,
  position: ModalPosition.CENTER,
  animation: ModalAnimation.FADE,
  backdrop: ModalBackdrop.BLUR,
  closable: true,
  persistent: false,
  scrollable: false,
  showHeader: true,
  showFooter: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const { modalClasses } = useModal(props)

const customClass = computed(() => props.class || '')

const animationClass = computed(() => {
  switch (props.animation) {
    case ModalAnimation.SLIDE_UP:
      return 'modal-slide-up'
    case ModalAnimation.SLIDE_DOWN:
      return 'modal-slide-down'
    case ModalAnimation.SLIDE_LEFT:
      return 'modal-slide-left'
    case ModalAnimation.SLIDE_RIGHT:
      return 'modal-slide-right'
    case ModalAnimation.SCALE:
      return 'modal-scale'
    case ModalAnimation.BOUNCE:
      return 'modal-bounce'
    case ModalAnimation.FLIP:
      return 'modal-flip'
    default:
      return 'modal-fade'
  }
})

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleBackdropClick = () => {
  if (!props.persistent) {
    handleClose()
  }
}
</script>

<style scoped>
/* Animaciones de entrada/salida */

/* Fade */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Slide Up */
.modal-slide-up-enter-active,
.modal-slide-up-leave-active {
  transition: all 0.3s ease;
}

.modal-slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.modal-slide-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* Slide Down */
.modal-slide-down-enter-active,
.modal-slide-down-leave-active {
  transition: all 0.3s ease;
}

.modal-slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.modal-slide-down-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Scale */
.modal-scale-enter-active,
.modal-scale-leave-active {
  transition: all 0.3s ease;
}

.modal-scale-enter-from,
.modal-scale-leave-to {
  transform: scale(0.7);
  opacity: 0;
}

/* Bounce */
.modal-bounce-enter-active {
  animation: modal-bounce-in 0.5s ease;
}

.modal-bounce-leave-active {
  animation: modal-bounce-out 0.3s ease;
}

@keyframes modal-bounce-in {
  0% {
    transform: scale(0.7);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes modal-bounce-out {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.7);
    opacity: 0;
  }
}

/* Flip */
.modal-flip-enter-active,
.modal-flip-leave-active {
  transition: all 0.4s ease;
}

.modal-flip-enter-from {
  transform: rotateY(-90deg);
  opacity: 0;
}

.modal-flip-leave-to {
  transform: rotateY(90deg);
  opacity: 0;
}
</style>