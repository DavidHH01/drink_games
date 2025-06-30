<template>
  <Section
    :variant="SectionVariant.PRIMARY"
    :size="SectionSize.LARGE"
    :full-height="true"
    class="relative overflow-hidden"
  >
    <AnimatedBackground />

    <div class="absolute top-0 left-0 m-2">
      <Button
        :variant="ButtonVariant.DANGER"
        :size="ButtonSize.MEDIUM"
        icon="mdiArrowLeft"
        :icon-position="ButtonIconPosition.LEFT"
        @click="() => $router.push('/')"
        class="text-white hover:text-accent border-white/20 hover:border-accent"
      >
        {{ $t("navigation.backToGames") }}
      </Button>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-primary mb-4 animate-fade-in-up">
          {{ $t("rules.title") }}
        </h1>
        <p
          class="text-xl text-secondary animate-fade-in-up animation-delay-300"
        >
          {{ $t("rules.subtitle") }}
        </p>
      </div>

      <div
        class="grid grid-cols-1 gap-8 animate-fade-in-up animation-delay-700"
      >
        <!-- Pyramid Game Rules -->
        <Card
          :size="CardSize.FULL"
          :variant="CardVariant.ELEVATED"
          :shadow="CardShadow.LARGE"
          :radius="CardRadius.EXTRA_LARGE"
          class="bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <CardHeader class="border-b border-white/20">
            <template #title>
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <MdiIcon icon="mdiTriangle" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-white">
                    {{ $t("games.pyramid.title") }}
                  </h2>
                  <p class="text-red-400 font-medium">
                    {{ $t("games.pyramid.subtitle") }}
                  </p>
                </div>
              </div>
            </template>
          </CardHeader>

          <CardBody :padding="CardSize.LARGE">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Como jugar -->
              <div class="space-y-4">
                <div class="flex items-center gap-2 mb-4">
                  <MdiIcon icon="mdiPlayCircle" class="w-5 h-5 text-red-400" />
                  <h3 class="text-lg font-semibold text-white">How to Play:</h3>
                </div>
                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <div
                      class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <span class="text-white text-sm font-bold">1</span>
                    </div>
                    <span class="text-gray-200"
                      >Each player starts at level 1 of the pyramid</span
                    >
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <span class="text-white text-sm font-bold">2</span>
                    </div>
                    <span class="text-gray-200"
                      >Players take turns receiving challenges</span
                    >
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <span class="text-white text-sm font-bold">3</span>
                    </div>
                    <span class="text-gray-200"
                      >Choose to accept or decline each challenge</span
                    >
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <span class="text-white text-sm font-bold">4</span>
                    </div>
                    <span class="text-gray-200"
                      >Complete the challenge to move up one level</span
                    >
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <span class="text-white text-sm font-bold">5</span>
                    </div>
                    <span class="text-gray-200"
                      >Fail or refuse to drink and stay or go down a level.
                    </span>
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-6 h-6 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <MdiIcon icon="mdiTrophy" class="w-3 h-3 text-white" />
                    </div>
                    <span class="text-yellow-200 font-medium"
                      >First to reach the top wins!</span
                    >
                  </div>
                </div>
              </div>

              <!-- Tipos de desafíos -->
              <div class="space-y-4">
                <div class="flex items-center gap-2 mb-4">
                  <MdiIcon
                    icon="mdiLightbulb"
                    class="w-5 h-5 text-yellow-400"
                  />
                  <h3 class="text-lg font-semibold text-white">
                    Challenge Types:
                  </h3>
                </div>
                <div class="grid grid-cols-1 gap-3">
                  <div
                    class="bg-red-500/20 border border-red-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon icon="mdiComment" class="w-5 h-5 text-red-400" />
                    <span class="text-gray-200">Truth questions</span>
                  </div>
                  <div
                    class="bg-orange-500/20 border border-orange-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon
                      icon="mdiRunFast"
                      class="w-5 h-5 text-orange-400"
                    />
                    <span class="text-gray-200">Physical challenges</span>
                  </div>
                  <div
                    class="bg-purple-500/20 border border-purple-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon icon="mdiBrain" class="w-5 h-5 text-purple-400" />
                    <span class="text-gray-200">Memory games</span>
                  </div>
                  <div
                    class="bg-green-500/20 border border-green-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon icon="mdiPalette" class="w-5 h-5 text-green-400" />
                    <span class="text-gray-200">Creative tasks</span>
                  </div>
                  <div
                    class="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon
                      icon="mdiAccountGroup"
                      class="w-5 h-5 text-blue-400"
                    />
                    <span class="text-gray-200">Social interactions</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats del juego -->
            <div class="mt-8 pt-6 border-t border-white/20">
              <div class="flex justify-between items-center">
                <div class="text-center">
                  <div class="text-2xl font-bold text-red-400">👥</div>
                  <div class="text-sm text-gray-300">2-8 players</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-red-400">⏱️</div>
                  <div class="text-sm text-gray-300">15-30 min</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-red-400">🎯</div>
                  <div class="text-sm text-gray-300">Fun challenges</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-red-400">📈</div>
                  <div class="text-sm text-gray-300">Progressive</div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <!-- System Game Rules -->
        <Card
          :size="CardSize.FULL"
          :variant="CardVariant.ELEVATED"
          :shadow="CardShadow.LARGE"
          :radius="CardRadius.EXTRA_LARGE"
          class="bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <CardHeader class="border-b border-white/20">
            <template #title>
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <MdiIcon icon="mdiSchool" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-white">
                    {{ $t("games.system.title") }}
                  </h2>
                  <p class="text-blue-400 font-medium">
                    {{ $t("games.system.subtitle") }}
                  </p>
                </div>
              </div>
            </template>
          </CardHeader>

          <CardBody :padding="CardSize.LARGE">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Como jugar -->
              <div class="space-y-4">
                <div class="flex items-center gap-2 mb-4">
                  <MdiIcon icon="mdiPlayCircle" class="w-5 h-5 text-blue-400" />
                  <h3 class="text-lg font-semibold text-white">How to Play:</h3>
                </div>
                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <div
                      class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <span class="text-white text-sm font-bold">1</span>
                    </div>
                    <span class="text-gray-200"
                      >One player becomes the "Master"</span
                    >
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <span class="text-white text-sm font-bold">2</span>
                    </div>
                    <span class="text-gray-200"
                      >Master secretly chooses a rule</span
                    >
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <span class="text-white text-sm font-bold">3</span>
                    </div>
                    <span class="text-gray-200"
                      >Other players take turns making actions</span
                    >
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <span class="text-white text-sm font-bold">4</span>
                    </div>
                    <span class="text-gray-200"
                      >Master responds "correct" or "incorrect"</span
                    >
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <span class="text-white text-sm font-bold">5</span>
                    </div>
                    <span class="text-gray-200"
                      >Incorrect actions result in drinking</span
                    >
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <MdiIcon icon="mdiTrophy" class="w-3 h-3 text-white" />
                    </div>
                    <span class="text-green-200 font-medium"
                      >Game ends when someone guesses the rule</span
                    >
                  </div>
                </div>
              </div>

              <!-- Ejemplos de reglas -->
              <div class="space-y-4">
                <div class="flex items-center gap-2 mb-4">
                  <MdiIcon
                    icon="mdiLightbulbOn"
                    class="w-5 h-5 text-yellow-400"
                  />
                  <h3 class="text-lg font-semibold text-white">
                    Example Rules:
                  </h3>
                </div>
                <div class="grid grid-cols-1 gap-3">
                  <div
                    class="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon
                      icon="mdiAccountCancel"
                      class="w-5 h-5 text-blue-400"
                    />
                    <span class="text-gray-200">No saying proper names</span>
                  </div>
                  <div
                    class="bg-indigo-500/20 border border-indigo-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon
                      icon="mdiHandPointingUp"
                      class="w-5 h-5 text-indigo-400"
                    />
                    <span class="text-gray-200"
                      >Touch the table before speaking</span
                    >
                  </div>
                  <div
                    class="bg-purple-500/20 border border-purple-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon icon="mdiCancel" class="w-5 h-5 text-purple-400" />
                    <span class="text-gray-200">Don't use the word "I"</span>
                  </div>
                  <div
                    class="bg-pink-500/20 border border-pink-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon
                      icon="mdiAccountSwitch"
                      class="w-5 h-5 text-pink-400"
                    />
                    <span class="text-gray-200">Speak in third person</span>
                  </div>
                  <div
                    class="bg-cyan-500/20 border border-cyan-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon
                      icon="mdiFormatQuoteClose"
                      class="w-5 h-5 text-cyan-400"
                    />
                    <span class="text-gray-200"
                      >End sentences with "and that's final"</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats del juego -->
            <div class="mt-8 pt-6 border-t border-white/20">
              <div class="flex justify-between items-center">
                <div class="text-center">
                  <div class="text-2xl font-bold text-blue-400">👥</div>
                  <div class="text-sm text-gray-300">3-10 players</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-blue-400">⏱️</div>
                  <div class="text-sm text-gray-300">10-20 min</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-blue-400">🧠</div>
                  <div class="text-sm text-gray-300">Logic & deduction</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-blue-400">🎭</div>
                  <div class="text-sm text-gray-300">Mystery</div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <!-- Safety Guidelines -->
        <Card
          :size="CardSize.FULL"
          :variant="CardVariant.ELEVATED"
          :shadow="CardShadow.LARGE"
          :radius="CardRadius.EXTRA_LARGE"
          class="bg-white/10 backdrop-blur-sm border border-white/20 mt-8"
        >
          <CardHeader class="border-b border-white/20">
            <template #title>
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <MdiIcon icon="mdiShieldCheck" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-white">
                    {{ $t("rules.responsibleGaming") }}
                  </h2>
                  <p class="text-yellow-400 font-medium">Safety & Guidelines</p>
                </div>
              </div>
            </template>
          </CardHeader>

          <CardBody :padding="CardSize.LARGE">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Safety First -->
              <div class="space-y-4">
                <div class="flex items-center gap-2 mb-4">
                  <MdiIcon icon="mdiSecurity" class="w-5 h-5 text-red-400" />
                  <h3 class="text-lg font-semibold text-white">
                    Safety First:
                  </h3>
                </div>
                <div class="space-y-3">
                  <div
                    class="bg-red-500/20 border border-red-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon icon="mdiCarKey" class="w-5 h-5 text-red-400" />
                    <span class="text-gray-200"
                      >Always have a designated driver</span
                    >
                  </div>
                  <div
                    class="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon icon="mdiWater" class="w-5 h-5 text-blue-400" />
                    <span class="text-gray-200"
                      >Drink water between rounds</span
                    >
                  </div>
                  <div
                    class="bg-green-500/20 border border-green-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon icon="mdiFood" class="w-5 h-5 text-green-400" />
                    <span class="text-gray-200"
                      >Eat food before and during games</span
                    >
                  </div>
                  <div
                    class="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon
                      icon="mdiSpeedometer"
                      class="w-5 h-5 text-yellow-400"
                    />
                    <span class="text-gray-200">Know your limits</span>
                  </div>
                  <div
                    class="bg-purple-500/20 border border-purple-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon icon="mdiHeart" class="w-5 h-5 text-purple-400" />
                    <span class="text-gray-200"
                      >Never pressure others to drink</span
                    >
                  </div>
                </div>
              </div>

              <!-- Alternative Play -->
              <div class="space-y-4">
                <div class="flex items-center gap-2 mb-4">
                  <MdiIcon
                    icon="mdiSwapHorizontal"
                    class="w-5 h-5 text-green-400"
                  />
                  <h3 class="text-lg font-semibold text-white">
                    Alternative Play:
                  </h3>
                </div>
                <div class="space-y-3">
                  <div
                    class="bg-green-500/20 border border-green-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon icon="mdiCup" class="w-5 h-5 text-green-400" />
                    <span class="text-gray-200">Use non-alcoholic drinks</span>
                  </div>
                  <div
                    class="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon
                      icon="mdiGamepadVariant"
                      class="w-5 h-5 text-blue-400"
                    />
                    <span class="text-gray-200"
                      >Substitute with fun challenges</span
                    >
                  </div>
                  <div
                    class="bg-purple-500/20 border border-purple-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon
                      icon="mdiEmoticonSilly"
                      class="w-5 h-5 text-purple-400"
                    />
                    <span class="text-gray-200"
                      >Create silly punishments instead</span
                    >
                  </div>
                  <div
                    class="bg-pink-500/20 border border-pink-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon
                      icon="mdiAccountGroup"
                      class="w-5 h-5 text-pink-400"
                    />
                    <span class="text-gray-200"
                      >Focus on the social aspect</span
                    >
                  </div>
                  <div
                    class="bg-cyan-500/20 border border-cyan-400/30 rounded-lg p-3 flex items-center gap-3"
                  >
                    <MdiIcon icon="mdiCog" class="w-5 h-5 text-cyan-400" />
                    <span class="text-gray-200"
                      >Adapt rules for your group</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Mensaje importante -->
            <div
              class="mt-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-6"
            >
              <div class="flex items-start gap-4">
                <MdiIcon
                  icon="mdiAlert"
                  class="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5"
                />
                <div>
                  <h4 class="text-lg font-semibold text-yellow-300 mb-2">
                    Remember
                  </h4>
                  <p class="text-gray-200">
                    {{ $t("rules.responsibleText") }} The goal is to have fun,
                    laugh, and create great memories with friends!
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <!-- Quick Actions -->
      <div class="mt-12 text-center animate-fade-in-up animation-delay-1000">
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            :variant="ButtonVariant.PRIMARY"
            :size="ButtonSize.LARGE"
            icon="mdiPlay"
            :icon-position="ButtonIconPosition.LEFT"
            @click="() => $router.push('/piramide')"
            class="bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700"
          >
            {{ $t("games.pyramid.playButton") }}
          </Button>
          <Button
            :variant="ButtonVariant.PRIMARY"
            :size="ButtonSize.LARGE"
            icon="mdiPlay"
            :icon-position="ButtonIconPosition.LEFT"
            @click="() => $router.push('/sistema')"
            class="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700"
          >
            {{ $t("games.system.playButton") }}
          </Button>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: t("meta.rulesTitle"),
  meta: [
    {
      name: "description",
      content: t("meta.rulesDescription"),
    },
    {
      name: "keywords",
      content:
        "drinking game rules, pyramid game rules, system game rules, party game instructions, how to play drinking games",
    },
  ],
});
</script>

<style scoped>
/* Asegurar que el fondo glassmorphism funcione correctamente */
.bg-white\/10 {
  background-color: rgba(255, 255, 255, 0.1);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

.border-white\/20 {
  border-color: rgba(255, 255, 255, 0.2);
}

/* Mejorar la legibilidad en modo oscuro */
.text-gray-200 {
  color: #e5e7eb;
}

.text-gray-300 {
  color: #d1d5db;
}

/* Efectos hover para los elementos interactivos */
.hover\:bg-red-700:hover {
  background-color: #b91c1c !important;
}

.hover\:bg-blue-700:hover {
  background-color: #1d4ed8 !important;
}

.hover\:border-red-700:hover {
  border-color: #b91c1c !important;
}

.hover\:border-blue-700:hover {
  border-color: #1d4ed8 !important;
}

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
</style>
