<template>
  <div>
    <!-- Sección principal con fondo primario -->
    <Section 
      :variant="SectionVariant.PRIMARY"
      :size="SectionSize.EXTRA_LARGE"
      :alignment="SectionAlignment.CENTER"
      :full-height="true"
      class="relative overflow-hidden"
    >
      <!-- Fondo animado -->
      <AnimatedBackground />

      <!-- Contenido principal -->
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <!-- Título principal -->
        <div class="mb-16">
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold text-primary mb-6 animate-fade-in-up">
            MODO <span class="text-accent animate-pulse">CAOS</span>
          </h1>
          <p class="text-xl md:text-2xl lg:text-3xl text-secondary mb-4 animate-fade-in-up animation-delay-300">
            Elige tu juego de fiesta
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-accent to-accent-2 mx-auto rounded-full animate-fade-in-up animation-delay-500"></div>
        </div>

        <!-- Modos de juego -->
        <div class="flex flex-col items-center gap-12 animate-fade-in-up animation-delay-700">
          <!-- Modo Pirámide -->
          <Card
            :variant="CardVariant.ELEVATED"
            :hover-effect="CardHoverEffect.LIFT"
            :shadow="CardShadow.LARGE"
            :radius="CardRadius.EXTRA_LARGE"
            clickable
            class="group cursor-pointer transform-gpu bg-white max-w-md w-full"
            @click="navigateToGame('piramide')"
          >
            <CardHeader :align="CardHeaderAlign.CENTER" class="pb-2">
              <template #title>
                <div class="flex flex-col items-center gap-4 mb-4">
                  <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MdiIcon icon="mdiTriangle" class="w-8 h-8 text-white" />
                  </div>
                  <span class="text-3xl font-bold text-gray-800">
                    PIRÁMIDE
                  </span>
                </div>
              </template>
              <template #subtitle>
                <span class="text-lg text-red-600 font-medium">Retos y Preguntas</span>
              </template>
            </CardHeader>

            <CardBody :padding="CardSize.LARGE" class="text-center">
              <div class="space-y-6">
                <p class="text-gray-600 text-lg leading-relaxed">
                  Asciende por la pirámide cumpliendo retos y respondiendo preguntas. 
                  Si te niegas o fallas... ¡a beber!
                </p>
                
                <!-- Cómo se juega -->
                <div class="space-y-3 text-left">
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="text-red-600 text-sm font-bold">1</span>
                    </div>
                    <span class="text-gray-700">Se te presenta un reto o pregunta</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="text-red-600 text-sm font-bold">2</span>
                    </div>
                    <span class="text-gray-700">Decides si aceptar o rechazar</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="text-red-600 text-sm font-bold">3</span>
                    </div>
                    <span class="text-gray-700">Cumples = asciendes | Fallas = bebes</span>
                  </div>
                </div>

                <!-- Indicadores -->
                <div class="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-red-600">👥</div>
                    <div class="text-sm text-gray-500">2-8 jugadores</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-red-600">⏱️</div>
                    <div class="text-sm text-gray-500">15-30 min</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-red-600">🎯</div>
                    <div class="text-sm text-gray-500">Retos divertidos</div>
                  </div>
                </div>
              </div>
            </CardBody>

            <CardActions :align="CardActionsAlign.CENTER" class="pb-6">
              <Button
                :variant="ButtonVariant.PRIMARY"
                :size="ButtonSize.LARGE"
                :effect="ButtonEffect.GLOW"
                icon="mdiPlay"
                :icon-position="ButtonIconPosition.LEFT"
                @click="navigateToGame('piramide')"
                class="w-full group-hover:scale-105 transition-transform duration-300 bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700"
              >
                Jugar Pirámide
              </Button>
            </CardActions>
          </Card>

          <!-- Modo Sistema -->
          <Card
            :variant="CardVariant.ELEVATED"
            :hover-effect="CardHoverEffect.LIFT"
            :shadow="CardShadow.LARGE"
            :radius="CardRadius.EXTRA_LARGE"
            clickable
            class="group cursor-pointer transform-gpu bg-white max-w-md w-full"
            @click="navigateToGame('sistema')"
          >
            <CardHeader :align="CardHeaderAlign.CENTER" class="pb-2">
              <template #title>
                <div class="flex flex-col items-center gap-4 mb-4">
                  <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MdiIcon icon="mdiSchool" class="w-8 h-8 text-white" />
                  </div>
                  <span class="text-3xl font-bold text-gray-800">
                    SISTEMA
                  </span>
                </div>
              </template>
              <template #subtitle>
                <span class="text-lg text-blue-600 font-medium">Adivina la Regla</span>
              </template>
            </CardHeader>

            <CardBody :padding="CardSize.LARGE" class="text-center">
              <div class="space-y-6">
                <p class="text-gray-600 text-lg leading-relaxed">
                  Una persona es el maestro e impone una regla secreta. 
                  Los demás deben adivinarla... o beber por cada error.
                </p>
                
                <!-- Cómo se juega -->
                <div class="space-y-3 text-left">
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="text-blue-600 text-sm font-bold">1</span>
                    </div>
                    <span class="text-gray-700">El maestro elige una regla secreta</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="text-blue-600 text-sm font-bold">2</span>
                    </div>
                    <span class="text-gray-700">Los jugadores hacen acciones por turnos</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="text-blue-600 text-sm font-bold">3</span>
                    </div>
                    <span class="text-gray-700">Rompes la regla = bebes y sigues intentando</span>
                  </div>
                </div>

                <!-- Indicadores -->
                <div class="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-blue-600">👥</div>
                    <div class="text-sm text-gray-500">3-10 jugadores</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-blue-600">⏱️</div>
                    <div class="text-sm text-gray-500">10-20 min</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-blue-600">🧠</div>
                    <div class="text-sm text-gray-500">Lógica y deducción</div>
                  </div>
                </div>
              </div>
            </CardBody>

            <CardActions :align="CardActionsAlign.CENTER" class="pb-6">
              <Button
                :variant="ButtonVariant.PRIMARY"
                :size="ButtonSize.LARGE"
                :effect="ButtonEffect.GLOW"
                icon="mdiPlay"
                :icon-position="ButtonIconPosition.LEFT"
                class="w-full group-hover:scale-105 transition-transform duration-300 bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700"
              >
                Jugar Sistema
              </Button>
            </CardActions>
          </Card>
        </div>

        <!-- Información adicional -->
        <div class="mt-16 animate-fade-in-up animation-delay-1000">
          <p class="text-muted text-lg mb-6">
            ¿Primera vez jugando? 
            <!-- Agregar botón para abrir modal de reglas -->
            <Button
              :variant="ButtonVariant.GHOST"
              :size="ButtonSize.MEDIUM"
              icon="mdiHelpCircle"
              class="ml-2 text-white hover:text-accent"
              @click="showRulesModal = true"
            >
              Ver reglas completas
            </Button>

            <!-- Modal de reglas -->
            <Modal
              v-model="showRulesModal"
              :variant="ModalVariant.GAMING"
              :size="ModalSize.LARGE"
              :animation="ModalAnimation.BOUNCE"
              :backdrop="ModalBackdrop.GAMING"
              title="Reglas de los Juegos"
              subtitle="Todo lo que necesitas saber para empezar"
              icon="mdiBookOpen"
            >
              <div class="space-y-6">
                <!-- Reglas Pirámide -->
                <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 class="text-lg font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <MdiIcon icon="mdiTriangle" class="w-5 h-5" />
                    Pirámide - Retos y Preguntas
                  </h4>
                  <ul class="text-red-700 space-y-2 text-sm">
                    <li>• Cada jugador recibe retos o preguntas progresivas</li>
                    <li>• Puedes aceptar el reto o rechazarlo</li>
                    <li>• Si cumples el reto, asciendes un nivel</li>
                    <li>• Si fallas o te niegas, bebes y permaneces en el nivel</li>
                    <li>• El objetivo es llegar a la cima de la pirámide</li>
                  </ul>
                </div>

                <!-- Reglas Sistema -->
                <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 class="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <MdiIcon icon="mdiSchool" class="w-5 h-5" />
                    Sistema - Adivina la Regla
                  </h4>
                  <ul class="text-blue-700 space-y-2 text-sm">
                    <li>• Un jugador es el "maestro" y elige una regla secreta</li>
                    <li>• Los demás jugadores realizan acciones por turnos</li>
                    <li>• El maestro dice "correcto" o "incorrecto" según la regla</li>
                    <li>• Si rompes la regla, bebes y continúas intentando</li>
                    <li>• Gana quien descubra la regla secreta</li>
                  </ul>
                </div>

                <!-- Consejos generales -->
                <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 class="text-lg font-semibold text-yellow-800 mb-3">⚠️ Juego Responsable</h4>
                  <p class="text-yellow-700 text-sm">
                    Recuerda siempre beber con moderación y respetar los límites de todos los jugadores. 
                    La diversión está en la participación, no en el exceso.
                  </p>
                </div>
              </div>

              <template #footer>
                <Button
                  :variant="ButtonVariant.DANGER"
                  @click="showRulesModal = false"
                >
                  Cerrar
                </Button>
                <Button
                  :variant="ButtonVariant.INFO"
                  @click="showRulesModal = false"
                >
                  ¡Entendido!
                </Button>
              </template>
            </Modal>
          </p>
          
          <!-- Stats rápidas -->
          <div class="flex justify-center gap-8 text-center">
            <div class="text-secondary">
              <div class="text-2xl font-bold text-accent">🎉</div>
              <div class="text-sm text-muted">Diversión garantizada</div>
            </div>
            <div class="text-secondary">
              <div class="text-2xl font-bold text-accent-2">🍻</div>
              <div class="text-sm text-muted">Juego responsable</div>
            </div>
            <div class="text-secondary">
              <div class="text-2xl font-bold text-success">👫</div>
              <div class="text-sm text-muted">Para grupos</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
// Meta de la página
useHead({
  title: 'Modo Caos - Juegos de Fiesta',
  meta: [
    { name: 'description', content: 'Pirámide de retos o Sistema de reglas: los mejores juegos para tu fiesta' }
  ]
})

// Navegación a los juegos
const navigateToGame = (mode: string) => {
  useRouter().push(`${mode}`);
}

// Estado del modal
const showRulesModal = ref(false)
</script>

<style scoped>
/* Clases de animación para el contenido principal */
.animate-fade-in-up {
  animation: animate-fade-in-up 0.8s ease-out forwards;
}

.animation-delay-300 {
  animation-delay: 0.3s;
  opacity: 0;
}

.animation-delay-500 {
  animation-delay: 0.5s;
  opacity: 0;
}

.animation-delay-700 {
  animation-delay: 0.7s;
  opacity: 0;
}

.animation-delay-1000 {
  animation-delay: 1s;
  opacity: 0;
}

@keyframes animate-fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Cards blancas con hover suave */
.bg-white {
  background-color: white !important;
}

/* Override para los botones rojos y azules */
.bg-red-600 {
  background-color: #dc2626 !important;
}

.hover\:bg-red-700:hover {
  background-color: #b91c1c !important;
}

.border-red-600 {
  border-color: #dc2626 !important;
}

.hover\:border-red-700:hover {
  border-color: #b91c1c !important;
}

.bg-blue-600 {
  background-color: #2563eb !important;
}

.hover\:bg-blue-700:hover {
  background-color: #1d4ed8 !important;
}

.border-blue-600 {
  border-color: #2563eb !important;
}

.hover\:border-blue-700:hover {
  border-color: #1d4ed8 !important;
}

/* Soporte para reducción de movimiento */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>