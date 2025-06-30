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
            <!-- Background pattern overlay -->
            <div
              v-if="backgroundPattern"
              class="absolute inset-0 opacity-5 pointer-events-none rounded-xl"
              :class="getPatternClass"
            />

            <!-- Gaming effect overlay -->
            <div
              v-if="variant === ModalVariant.GAMING"
              class="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10 opacity-50 pointer-events-none rounded-xl"
            />

            <!-- Neon glow effect -->
            <div
              v-if="variant === ModalVariant.NEON"
              class="absolute inset-0 bg-accent/5 opacity-50 rounded-xl pointer-events-none shadow-[0_0_30px_rgba(var(--accent),0.3)]"
            />

            <!-- Glassmorphism overlay -->
            <div
              v-if="glassmorphism"
              class="absolute inset-0 bg-white/10 backdrop-blur-md pointer-events-none rounded-xl"
            />

            <!-- Animated border for special effects -->
            <div
              v-if="animatedBorder"
              class="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-border animate-pulse"
            />

            <!-- Header -->
            <ModalHeader
              v-if="showHeader || title || subtitle || icon || $slots.header"
              :title="title"
              :subtitle="subtitle"
              :icon="icon"
              :closable="closable"
              :class="headerClass"
              :gradient-header="gradientHeader"
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
              :gradient-footer="gradientFooter"
            >
              <slot name="footer" />
            </ModalFooter>

            <!-- Close button (floating) -->
            <button
              v-if="closable && !showHeader"
              @click="handleClose"
              class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-500 hover:text-gray-700 transition-all duration-300 z-10 shadow-lg backdrop-blur-sm border border-white/50 hover:scale-110"
            >
              <MdiIcon icon="mdiClose" class="w-5 h-5" />
            </button>

            <!-- Corner decorations -->
            <div
              v-if="cornerDecorations"
              class="absolute top-3 right-3 w-2 h-2 bg-accent/40 rounded-full"
            />
            <div
              v-if="cornerDecorations"
              class="absolute bottom-3 left-3 w-1.5 h-1.5 bg-accent-2/40 rounded-full"
            />
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
  // New aesthetic props
  glassmorphism?: boolean
  animatedBorder?: boolean
  cornerDecorations?: boolean
  backgroundPattern?: 'dots' | 'grid' | 'waves' | 'circuit' | null
  gradientHeader?: boolean
  gradientFooter?: boolean
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
  showFooter: false,
  glassmorphism: false,
  animatedBorder: false,
  cornerDecorations: false,
  backgroundPattern: null,
  gradientHeader: false,
  gradientFooter: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const { modalClasses } = useModal(props)

const customClass = computed(() => props.class || '')

const getPatternClass = computed(() => {
  const patterns = {
    dots: 'bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] [background-size:20px_20px]',
    grid: 'bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:20px_20px]',
    waves: 'bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_0%,transparent_50%)]',
    circuit: 'bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_50%,transparent_50%),linear-gradient(rgba(0,0,0,0.1)_50%,transparent_50%)] [background-size:10px_10px]'
  }
  return patterns[props.backgroundPattern!] || ''
})

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
/* Animaciones de entrada/salida mejoradas */

/* Fade */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Slide Up */
.modal-slide-up-enter-active,
.modal-slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-slide-up-enter-from {
  transform: translateY(100%) scale(0.9);
  opacity: 0;
}

.modal-slide-up-leave-to {
  transform: translateY(-100%) scale(0.9);
  opacity: 0;
}

/* Slide Down */
.modal-slide-down-enter-active,
.modal-slide-down-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-slide-down-enter-from {
  transform: translateY(-100%) scale(0.9);
  opacity: 0;
}

.modal-slide-down-leave-to {
  transform: translateY(100%) scale(0.9);
  opacity: 0;
}

/* Scale */
.modal-scale-enter-active,
.modal-scale-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-scale-enter-from,
.modal-scale-leave-to {
  transform: scale(0.8) rotateX(10deg);
  opacity: 0;
}

/* Bounce mejorado */
.modal-bounce-enter-active {
  animation: modal-bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.modal-bounce-leave-active {
  animation: modal-bounce-out 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modal-bounce-in {
  0% {
    transform: scale(0.3) rotateY(20deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.05) rotateY(-5deg);
  }
  70% {
    transform: scale(0.95) rotateY(2deg);
  }
  100% {
    transform: scale(1) rotateY(0deg);
    opacity: 1;
  }
}

@keyframes modal-bounce-out {
  0% {
    transform: scale(1) rotateY(0deg);
    opacity: 1;
  }
  100% {
    transform: scale(0.3) rotateY(-20deg);
    opacity: 0;
  }
}

/* Flip mejorado */
.modal-flip-enter-active,
.modal-flip-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.modal-flip-enter-from {
  transform: rotateY(-90deg) scale(0.8);
  opacity: 0;
}

.modal-flip-leave-to {
  transform: rotateY(90deg) scale(0.8);
  opacity: 0;
}

/* Efectos glassmorphism */
.backdrop-blur-md {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Animación de pulso para bordes */
@keyframes border-pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.animate-pulse {
  animation: border-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Scrollbar personalizado */
:deep(.modal-body::-webkit-scrollbar) {
  width: 6px;
}

:deep(.modal-body::-webkit-scrollbar-track) {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

:deep(.modal-body::-webkit-scrollbar-thumb) {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}

:deep(.modal-body::-webkit-scrollbar-thumb:hover) {
  background: rgba(0, 0, 0, 0.5);
}
</style>