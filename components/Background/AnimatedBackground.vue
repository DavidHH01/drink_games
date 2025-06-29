<template>
  <div class="absolute inset-0 pointer-events-none">
    <!-- Emojis flotantes -->
    <div 
      v-for="emoji in floatingEmojis" 
      :key="emoji.id"
      :class="['floating-emoji', emoji.class]"
    >
      {{ emoji.symbol }}
    </div>
    
    <!-- Formas geométricas -->
    <div 
      v-for="shape in geometricShapes" 
      :key="shape.id"
      :class="['floating-shape', shape.class]"
      :style="shape.style"
    ></div>
    
    <!-- Orbes con degradado -->
    <div 
      v-for="orb in gradientOrbs" 
      :key="orb.id"
      :class="['gradient-orb', orb.class]"
      :style="orb.style"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface FloatingEmoji {
  id: string
  symbol: string
  class: string
}

interface GeometricShape {
  id: string
  class: string
  style: Record<string, string>
}

interface GradientOrb {
  id: string
  class: string
  style: Record<string, string>
}

const floatingEmojis: FloatingEmoji[] = [
  { id: 'emoji-1', symbol: '🚀', class: 'emoji-1' },
  { id: 'emoji-2', symbol: '⚡', class: 'emoji-2' },
  { id: 'emoji-3', symbol: '🌟', class: 'emoji-3' },
  { id: 'emoji-4', symbol: '💥', class: 'emoji-4' },
  { id: 'emoji-5', symbol: '🔥', class: 'emoji-5' },
  { id: 'emoji-6', symbol: '✨', class: 'emoji-6' },
  { id: 'emoji-7', symbol: '🎯', class: 'emoji-7' },
  { id: 'emoji-8', symbol: '💫', class: 'emoji-8' }
]

const geometricShapes: GeometricShape[] = [
  {
    id: 'shape-1',
    class: 'shape-1',
    style: {
      background: 'linear-gradient(45deg, var(--color-accent), var(--color-accent-2))',
      borderRadius: '50%'
    }
  },
  {
    id: 'shape-2',
    class: 'shape-2',
    style: {
      background: 'var(--color-accent)',
      transform: 'rotate(45deg)'
    }
  },
  {
    id: 'shape-3',
    class: 'shape-3',
    style: {
      borderLeft: '25px solid transparent',
      borderRight: '25px solid transparent',
      borderBottom: '43px solid var(--color-accent-2)',
      opacity: '0.15'
    }
  },
  {
    id: 'shape-4',
    class: 'shape-4',
    style: {
      background: 'linear-gradient(135deg, var(--color-info), var(--color-success))',
      borderRadius: '10px'
    }
  }
]

const gradientOrbs: GradientOrb[] = [
  {
    id: 'orb-1',
    class: 'orb-1',
    style: {
      background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)'
    }
  },
  {
    id: 'orb-2',
    class: 'orb-2',
    style: {
      background: 'radial-gradient(circle, var(--color-accent-2) 0%, transparent 70%)'
    }
  },
  {
    id: 'orb-3',
    class: 'orb-3',
    style: {
      background: 'radial-gradient(circle, var(--color-info) 0%, transparent 70%)'
    }
  }
]
</script>

<style scoped>
/* Emojis flotantes */
.floating-emoji {
  position: absolute;
  font-size: 2rem;
  opacity: 0.7;
  pointer-events: none;
  z-index: 1;
}

.emoji-1 {
  top: 10%;
  left: 10%;
  animation: float-diagonal 8s ease-in-out infinite;
}

.emoji-2 {
  top: 20%;
  right: 15%;
  animation: float-vertical 6s ease-in-out infinite reverse;
}

.emoji-3 {
  top: 50%;
  left: 5%;
  animation: float-horizontal 10s ease-in-out infinite;
}

.emoji-4 {
  top: 70%;
  right: 10%;
  animation: float-diagonal 7s ease-in-out infinite reverse;
}

.emoji-5 {
  bottom: 20%;
  left: 20%;
  animation: float-vertical 9s ease-in-out infinite;
}

.emoji-6 {
  top: 30%;
  left: 80%;
  animation: float-horizontal 8s ease-in-out infinite reverse;
}

.emoji-7 {
  bottom: 30%;
  right: 25%;
  animation: float-diagonal 6s ease-in-out infinite;
}

.emoji-8 {
  top: 40%;
  right: 5%;
  animation: float-vertical 7s ease-in-out infinite reverse;
}

/* Formas geométricas flotantes */
.floating-shape {
  position: absolute;
  opacity: 0.1;
  pointer-events: none;
  z-index: 1;
}

.shape-1 {
  top: 15%;
  left: 70%;
  width: 60px;
  height: 60px;
  animation: float-rotate 12s linear infinite;
}

.shape-2 {
  top: 60%;
  left: 15%;
  width: 40px;
  height: 40px;
  animation: float-horizontal 10s ease-in-out infinite reverse;
}

.shape-3 {
  bottom: 25%;
  right: 15%;
  width: 0;
  height: 0;
  animation: float-vertical 8s ease-in-out infinite;
}

.shape-4 {
  top: 25%;
  left: 40%;
  width: 50px;
  height: 50px;
  animation: float-diagonal 9s ease-in-out infinite reverse;
}

/* Orbes con degradado */
.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
}

.orb-1 {
  top: 20%;
  left: 20%;
  width: 200px;
  height: 200px;
  animation: pulse-glow 4s ease-in-out infinite;
}

.orb-2 {
  bottom: 30%;
  right: 20%;
  width: 150px;
  height: 150px;
  animation: pulse-glow 6s ease-in-out infinite reverse;
}

.orb-3 {
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  animation: pulse-glow 5s ease-in-out infinite;
}

/* Animaciones */
@keyframes float-vertical {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes float-horizontal {
  0%, 100% { transform: translateX(0px); }
  50% { transform: translateX(20px); }
}

@keyframes float-diagonal {
  0%, 100% { transform: translate(0px, 0px); }
  25% { transform: translate(10px, -10px); }
  50% { transform: translate(-5px, -20px); }
  75% { transform: translate(-10px, -5px); }
}

@keyframes float-rotate {
  0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
}

@keyframes pulse-glow {
  0%, 100% { 
    opacity: 0.3; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.5; 
    transform: scale(1.1);
  }
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .floating-emoji {
    font-size: 1.5rem;
  }
  
  .floating-shape {
    opacity: 0.05;
  }
  
  .gradient-orb {
    opacity: 0.2;
  }
  
  .orb-1, .orb-2 {
    width: 120px;
    height: 120px;
  }
  
  .orb-3 {
    width: 80px;
    height: 80px;
  }
}

/* Soporte para reducción de movimiento */
@media (prefers-reduced-motion: reduce) {
  .floating-emoji,
  .floating-shape,
  .gradient-orb {
    animation: none;
  }
}
</style>