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
        <!-- Título principal SEO optimizado -->
        <div class="mb-16">
          <h1
            class="text-6xl md:text-8xl lg:text-9xl font-bold text-primary mb-6 animate-fade-in-up"
          >
            DRINK <span class="text-accent animate-pulse">GAMES</span>
          </h1>
          <p
            class="text-xl md:text-2xl lg:text-3xl text-secondary mb-4 animate-fade-in-up animation-delay-300"
          >
            Best Online Party Drinking Games
          </p>
          <p
            class="text-lg text-muted mb-6 animate-fade-in-up animation-delay-500"
          >
            Play pyramid challenges, system rules, and more exciting party games
            with friends
          </p>
          <div
            class="w-24 h-1 bg-gradient-to-r from-accent to-accent-2 mx-auto rounded-full animate-fade-in-up animation-delay-500"
          ></div>
        </div>

        <!-- Modos de juego -->
        <div
          class="flex flex-col items-center gap-12 animate-fade-in-up animation-delay-700"
        >
          <!-- Modo Pirámide -->
          <Card
            :variant="CardVariant.ELEVATED"
            :shadow="CardShadow.LARGE"
            :radius="CardRadius.EXTRA_LARGE"
            clickable
            class="group cursor-pointer transform-gpu bg-white border-2 border-red-200 hover:border-red-400 transition-all duration-300"
            @click="navigateToGame('piramide')"
          >
            <CardHeader :align="CardHeaderAlign.CENTER" class="pb-4 pt-8">
              <template #title>
                <div class="flex flex-col items-center gap-4 mb-4">
                  <!-- Icono con gradiente vibrante -->
                  <div class="relative">
                    <div
                      class="w-20 h-20 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300"
                    >
                      <MdiIcon
                        icon="mdiTriangle"
                        class="w-10 h-10 text-white drop-shadow-lg"
                      />
                    </div>
                    <!-- Anillo decorativo -->
                    <div
                      class="absolute -inset-2 border-2 border-red-300 rounded-2xl opacity-30"
                    ></div>
                  </div>

                  <!-- Título con mejor contraste -->
                  <div class="text-center">
                    <span class="text-3xl font-bold text-gray-900">
                      {{ $t("games.pyramid.title") }}
                    </span>
                    <div
                      class="h-1 w-16 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-2 rounded-full"
                    ></div>
                  </div>
                </div>
              </template>
              <template #subtitle>
                <span class="text-lg text-red-600 font-semibold tracking-wide">
                  {{ $t("games.pyramid.subtitle") }}
                </span>
              </template>
            </CardHeader>

            <CardBody :padding="CardSize.LARGE" class="text-center space-y-6">
              <!-- Descripción principal con texto oscuro -->
              <div class="bg-red-50 border border-red-200 rounded-xl p-4">
                <p class="text-gray-800 text-lg leading-relaxed font-medium">
                  {{ $t("games.pyramid.description") }}
                </p>
              </div>

              <!-- Cómo se juega con mejor contraste -->
              <div class="space-y-4 text-left">
                <div class="flex items-center gap-2 mb-4">
                  <MdiIcon icon="mdiPlayCircle" class="w-5 h-5 text-red-500" />
                  <h4 class="font-bold text-gray-900">How to Play:</h4>
                </div>
                <div class="space-y-3">
                  <div
                    class="flex items-start gap-4 bg-red-100 border border-red-200 p-4 rounded-lg"
                  >
                    <div
                      class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                    >
                      <span class="text-white text-sm font-bold">1</span>
                    </div>
                    <span class="text-gray-900 font-medium">{{
                      $t("games.pyramid.step1")
                    }}</span>
                  </div>

                  <div
                    class="flex items-start gap-4 bg-red-100 border border-red-200 p-4 rounded-lg"
                  >
                    <div
                      class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                    >
                      <span class="text-white text-sm font-bold">2</span>
                    </div>
                    <span class="text-gray-900 font-medium">{{
                      $t("games.pyramid.step2")
                    }}</span>
                  </div>

                  <div
                    class="flex items-start gap-4 bg-red-100 border border-red-200 p-4 rounded-lg"
                  >
                    <div
                      class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                    >
                      <span class="text-white text-sm font-bold">3</span>
                    </div>
                    <span class="text-gray-900 font-medium">{{
                      $t("games.pyramid.step3")
                    }}</span>
                  </div>
                </div>
              </div>

              <!-- Stats con mejor diseño -->
              <div
                class="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 p-6 rounded-xl"
              >
                <div class="flex justify-between items-center">
                  <div class="text-center">
                    <div class="text-3xl mb-2">👥</div>
                    <div class="text-sm text-gray-800 font-bold">
                      {{ $t("games.pyramid.playersCount") }}
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl mb-2">⏱️</div>
                    <div class="text-sm text-gray-800 font-bold">
                      {{ $t("games.pyramid.duration") }}
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl mb-2">🎯</div>
                    <div class="text-sm text-gray-800 font-bold">
                      {{ $t("games.pyramid.type") }}
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>

            <!-- Actions con botón vibrante -->
            <CardActions :align="CardActionsAlign.CENTER" class="pb-8">
              <Button
                :variant="ButtonVariant.PRIMARY"
                :size="ButtonSize.LARGE"
                icon="mdiPlay"
                :icon-position="ButtonIconPosition.LEFT"
                class="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 border-0 shadow-lg text-white text-lg font-bold py-4 transform hover:scale-105 transition-all duration-200"
              >
                {{ $t("games.pyramid.playButton") }}
              </Button>
            </CardActions>
          </Card>

          <!-- Modo Sistema -->
          <Card
            :variant="CardVariant.ELEVATED"
            :shadow="CardShadow.LARGE"
            :radius="CardRadius.EXTRA_LARGE"
            clickable
            class="group cursor-pointer transform-gpu bg-white border-2 border-blue-200 hover:border-blue-400 transition-all duration-300"
            @click="navigateToGame('sistema')"
          >
            <CardHeader :align="CardHeaderAlign.CENTER" class="pb-4 pt-8">
              <template #title>
                <div class="flex flex-col items-center gap-4 mb-4">
                  <!-- Icono con gradiente vibrante -->
                  <div class="relative">
                    <div
                      class="w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"
                    >
                      <MdiIcon
                        icon="mdiSchool"
                        class="w-10 h-10 text-white drop-shadow-lg"
                      />
                    </div>
                    <!-- Anillo decorativo -->
                    <div
                      class="absolute -inset-2 border-2 border-blue-300 rounded-2xl opacity-30"
                    ></div>
                  </div>

                  <!-- Título con mejor contraste -->
                  <div class="text-center">
                    <span class="text-3xl font-bold text-gray-900">
                      {{ $t("games.system.title") }}
                    </span>
                    <div
                      class="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-2 rounded-full"
                    ></div>
                  </div>
                </div>
              </template>
              <template #subtitle>
                <span class="text-lg text-blue-600 font-semibold tracking-wide">
                  {{ $t("games.system.subtitle") }}
                </span>
              </template>
            </CardHeader>

            <CardBody :padding="CardSize.LARGE" class="text-center space-y-6">
              <!-- Descripción principal con texto oscuro -->
              <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p class="text-gray-800 text-lg leading-relaxed font-medium">
                  {{ $t("games.system.description") }}
                </p>
              </div>

              <!-- Cómo se juega con mejor contraste -->
              <div class="space-y-4 text-left">
                <div class="flex items-center gap-2 mb-4">
                  <MdiIcon icon="mdiPlayCircle" class="w-5 h-5 text-blue-500" />
                  <h4 class="font-bold text-gray-900">How to Play:</h4>
                </div>
                <div class="space-y-3">
                  <div
                    class="flex items-start gap-4 bg-blue-100 border border-blue-200 p-4 rounded-lg"
                  >
                    <div
                      class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                    >
                      <span class="text-white text-sm font-bold">1</span>
                    </div>
                    <span class="text-gray-900 font-medium">{{
                      $t("games.system.step1")
                    }}</span>
                  </div>

                  <div
                    class="flex items-start gap-4 bg-blue-100 border border-blue-200 p-4 rounded-lg"
                  >
                    <div
                      class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                    >
                      <span class="text-white text-sm font-bold">2</span>
                    </div>
                    <span class="text-gray-900 font-medium">{{
                      $t("games.system.step2")
                    }}</span>
                  </div>

                  <div
                    class="flex items-start gap-4 bg-blue-100 border border-blue-200 p-4 rounded-lg"
                  >
                    <div
                      class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                    >
                      <span class="text-white text-sm font-bold">3</span>
                    </div>
                    <span class="text-gray-900 font-medium">{{
                      $t("games.system.step3")
                    }}</span>
                  </div>
                </div>
              </div>

              <!-- Stats con mejor diseño -->
              <div
                class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-6 rounded-xl"
              >
                <div class="flex justify-between items-center">
                  <div class="text-center">
                    <div class="text-3xl mb-2">👥</div>
                    <div class="text-sm text-gray-800 font-bold">
                      {{ $t("games.system.playersCount") }}
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl mb-2">⏱️</div>
                    <div class="text-sm text-gray-800 font-bold">
                      {{ $t("games.system.duration") }}
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl mb-2">🧠</div>
                    <div class="text-sm text-gray-800 font-bold">
                      {{ $t("games.system.type") }}
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>

            <!-- Actions con botón vibrante -->
            <CardActions :align="CardActionsAlign.CENTER" class="pb-8">
              <Button
                :variant="ButtonVariant.PRIMARY"
                :size="ButtonSize.LARGE"
                icon="mdiPlay"
                :icon-position="ButtonIconPosition.LEFT"
                class="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 border-0 shadow-lg text-white text-lg font-bold py-4 transform hover:scale-105 transition-all duration-200"
              >
                {{ $t("games.system.playButton") }}
              </Button>
            </CardActions>
          </Card>

          <!-- Card de Próximos Juegos -->
          <Card
            :variant="CardVariant.ELEVATED"
            :shadow="CardShadow.LARGE"
            :radius="CardRadius.EXTRA_LARGE"
            class="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 text-white relative overflow-hidden border-2 border-purple-400"
          >
            <!-- Elementos decorativos de fondo -->
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 blur-xl"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 blur-lg"
            ></div>
            <div
              class="absolute top-1/2 left-1/2 w-16 h-16 bg-white/5 rounded-full -translate-x-8 -translate-y-8 blur-md"
            ></div>

            <CardHeader
              :align="CardHeaderAlign.CENTER"
              class="pb-4 pt-8 relative z-10"
            >
              <template #title>
                <div class="flex flex-col items-center gap-4 mb-4">
                  <!-- Icono animado -->
                  <div class="relative">
                    <div
                      class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/30"
                    >
                      <MdiIcon
                        icon="mdiRocketLaunch"
                        class="w-10 h-10 text-white drop-shadow-lg"
                      />
                    </div>
                    <!-- Efectos decorativos -->
                    <div
                      class="absolute -inset-2 border-2 border-white/20 rounded-2xl"
                    ></div>
                    <div
                      class="absolute -inset-4 border border-white/10 rounded-3xl"
                    ></div>
                  </div>

                  <!-- Título con efecto */ -->
                  <div class="text-center">
                    <span class="text-3xl font-bold text-white drop-shadow-lg">
                      {{ $t("games.comingSoon.title") }}
                    </span>
                    <div
                      class="h-1 w-20 bg-gradient-to-r from-white/60 to-white/30 mx-auto mt-2 rounded-full"
                    ></div>
                  </div>
                </div>
              </template>
              <template #subtitle>
                <span
                  class="text-lg text-purple-100 font-semibold tracking-wide drop-shadow"
                >
                  {{ $t("games.comingSoon.subtitle") }}
                </span>
              </template>
            </CardHeader>

            <CardBody
              :padding="CardSize.LARGE"
              class="text-center relative z-10 space-y-6"
            >
              <!-- Descripción con mejor contraste -->
              <div
                class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
              >
                <p
                  class="text-white text-lg leading-relaxed font-medium drop-shadow"
                >
                  {{ $t("games.comingSoon.description") }}
                </p>
              </div>
            </CardBody>
          </Card>
        </div>

        <!-- Enlaces útiles para SEO -->
        <div class="mt-16 animate-fade-in-up animation-delay-1000">
          <p class="text-muted text-lg mb-6">
            {{ $t("home.firstTimePlaying") }}
            <Button
              :variant="ButtonVariant.GHOST"
              :size="ButtonSize.MEDIUM"
              icon="mdiHelpCircle"
              class="ml-2 text-white hover:text-accent"
              @click="navigateToGame('rules')"
            >
              {{ $t("home.seeCompleteRules") }}
            </Button>
          </p>

          <!-- Stats rápidas -->
          <div class="flex justify-center gap-8 text-center mb-8">
            <div class="text-secondary">
              <div class="text-2xl font-bold text-accent">🎉</div>
              <div class="text-sm text-muted">
                {{ $t("home.guaranteedFun") }}
              </div>
            </div>
            <div class="text-secondary">
              <div class="text-2xl font-bold text-accent-2">🍻</div>
              <div class="text-sm text-muted">
                {{ $t("home.responsibleGaming") }}
              </div>
            </div>
            <div class="text-secondary">
              <div class="text-2xl font-bold text-success">👫</div>
              <div class="text-sm text-muted">{{ $t("home.forGroups") }}</div>
            </div>
          </div>

          <!-- Enlaces internos para SEO -->
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink
              to="/rules"
              class="text-accent hover:text-accent-2 transition-colors"
            >
              {{ $t("navigation.rules") }}
            </NuxtLink>
            <span class="text-muted">•</span>
            <NuxtLink
              to="/about"
              class="text-accent hover:text-accent-2 transition-colors"
            >
              {{ $t("navigation.about") }}
            </NuxtLink>
            <span class="text-muted">•</span>
            <NuxtLink
              to="/privacy"
              class="text-accent hover:text-accent-2 transition-colors"
            >
              {{ $t("navigation.privacy") }}
            </NuxtLink>
            <span class="text-muted">•</span>
            <NuxtLink
              to="/terms"
              class="text-accent hover:text-accent-2 transition-colors"
            >
              {{ $t("navigation.terms") }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </Section>

    <!-- Sección de contenido de valor para AdSense -->
    <Section
      :variant="SectionVariant.SECONDARY"
      :size="SectionSize.LARGE"
      class="bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <div class="max-w-6xl mx-auto">
        <!-- Header mejorado -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-3 mb-6">
            <div
              class="w-1 h-8 bg-gradient-to-b from-accent to-accent-2 rounded-full"
            ></div>
            <span
              class="text-sm font-semibold text-accent uppercase tracking-wider"
              >Complete Guide</span
            >
            <div
              class="w-1 h-8 bg-gradient-to-b from-accent-2 to-accent rounded-full"
            ></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Ultimate Guide to Drinking Games
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about party drinking games
          </p>
          <!-- Línea decorativa -->
          <div
            class="w-24 h-1 bg-gradient-to-r from-accent via-accent-2 to-accent mx-auto mt-6 rounded-full"
          ></div>
        </div>

        <!-- AdSense Slot 1 - Mejorado pero simple -->
        <div class="mb-16">
          <div class="relative group">
            <!-- Background con gradiente sutil -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl"
            ></div>

            <!-- Contenido -->
            <div
              class="relative p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-200 transition-colors duration-300"
            >
              <div class="text-center">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <MdiIcon icon="mdiInformation" class="w-8 h-8 text-white" />
                </div>
                <p class="text-gray-600 text-sm">Advertisement Space 1</p>
                <!-- Aquí irá tu código de AdSense -->
              </div>
            </div>
          </div>
        </div>

        <!-- Artículos con diseño mejorado -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- Artículo 1 - Mejorado -->
          <Card
            class="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100 hover:border-red-200 overflow-hidden"
          >
            <!-- Header con gradiente -->
            <div class="h-2 bg-gradient-to-r from-red-500 to-red-600"></div>

            <CardBody class="p-6">
              <!-- Icono y título -->
              <div class="flex items-start gap-4 mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                >
                  <MdiIcon icon="mdiPartyPopper" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300"
                  >
                    How to Host the Perfect Party
                  </h3>
                  <span
                    class="text-xs text-red-500 font-semibold uppercase tracking-wider"
                    >Party Planning</span
                  >
                </div>
              </div>

              <p class="text-gray-600 mb-4 leading-relaxed">
                Learn the essential tips for organizing memorable party games
                that everyone will enjoy. From setting up the space to choosing
                the right games for your group size.
              </p>

              <!-- Lista con iconos -->
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                  <span>Choose games based on group size</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                  <span>Set clear rules and boundaries</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                  <span>Have non-alcoholic alternatives ready</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                  <span>Create a comfortable environment</span>
                </div>
              </div>
            </CardBody>
          </Card>

          <!-- Artículo 2 - Mejorado -->
          <Card
            class="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100 hover:border-blue-200 overflow-hidden"
          >
            <!-- Header con gradiente -->
            <div class="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>

            <CardBody class="p-6">
              <!-- Icono y título -->
              <div class="flex items-start gap-4 mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                >
                  <MdiIcon icon="mdiShieldCheck" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    Drinking Game Safety Tips
                  </h3>
                  <span
                    class="text-xs text-blue-500 font-semibold uppercase tracking-wider"
                    >Safety First</span
                  >
                </div>
              </div>

              <p class="text-gray-600 mb-4 leading-relaxed">
                Playing responsibly is key to having fun. Here are essential
                safety guidelines to ensure everyone has a great time while
                staying safe.
              </p>

              <!-- Lista con iconos -->
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>Always have a designated driver</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>Drink plenty of water between rounds</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>Know your limits and respect others'</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>Have food available during games</span>
                </div>
              </div>
            </CardBody>
          </Card>

          <!-- Artículo 3 - Mejorado -->
          <Card
            class="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100 hover:border-green-200 overflow-hidden"
          >
            <!-- Header con gradiente -->
            <div class="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>

            <CardBody class="p-6">
              <!-- Icono y título -->
              <div class="flex items-start gap-4 mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                >
                  <MdiIcon icon="mdiAccountGroup" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300"
                  >
                    Best Games for Different Group Sizes
                  </h3>
                  <span
                    class="text-xs text-green-500 font-semibold uppercase tracking-wider"
                    >Group Guide</span
                  >
                </div>
              </div>

              <p class="text-gray-600 mb-4 leading-relaxed">
                Not sure which game to choose? Here's our guide to selecting the
                perfect drinking game based on how many people are playing.
              </p>

              <!-- Lista con iconos -->
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>2-4 players: Intimate challenges</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>5-8 players: Classic party games</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>9+ players: Large group activities</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>Mixed groups: Inclusive games for all</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <!-- AdSense Slot 2 - Diseño mejorado -->
        <div class="mb-16">
          <div class="relative group">
            <!-- Background decorativo -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl"
            ></div>

            <!-- Contenido -->
            <div
              class="relative p-8 rounded-2xl border-2 border-emerald-100 hover:border-emerald-200 transition-colors duration-300"
            >
              <div class="text-center">
                <div
                  class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                >
                  <MdiIcon icon="mdiInformation" class="w-10 h-10 text-white" />
                </div>
                <p class="text-gray-600">Advertisement Space 2</p>
                <!-- Aquí irá tu código de AdSense -->
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Section con diseño mejorado -->
        <div class="mb-16">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 mb-4">
              <MdiIcon icon="mdiHelpCircle" class="w-6 h-6 text-accent" />
              <span
                class="text-sm font-semibold text-accent uppercase tracking-wider"
                >FAQ</span
              >
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to the most common questions about our drinking games
            </p>
          </div>

          <div class="space-y-6">
            <!-- FAQ 1 -->
            <div
              class="group bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300"
                >
                  <span class="text-blue-600 font-bold text-sm">Q</span>
                </div>
                <div>
                  <h3
                    class="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    What are the best drinking games for beginners?
                  </h3>
                  <p class="text-gray-600 leading-relaxed">
                    The Pyramid Game is perfect for beginners as it offers
                    simple challenges with clear progression. Start with easy
                    levels and gradually increase difficulty as players get
                    comfortable.
                  </p>
                </div>
              </div>
            </div>

            <!-- FAQ 2 -->
            <div
              class="group bg-white rounded-2xl border-2 border-gray-100 hover:border-green-200 p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors duration-300"
                >
                  <span class="text-green-600 font-bold text-sm">Q</span>
                </div>
                <div>
                  <h3
                    class="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300"
                  >
                    How many people can play these drinking games?
                  </h3>
                  <p class="text-gray-600 leading-relaxed">
                    Our Pyramid Game works best with 2-8 players, while the
                    System Game can accommodate 3-10 players. Both games are
                    designed to be flexible and fun regardless of group size.
                  </p>
                </div>
              </div>
            </div>

            <!-- FAQ 3 -->
            <div
              class="group bg-white rounded-2xl border-2 border-gray-100 hover:border-purple-200 p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors duration-300"
                >
                  <span class="text-purple-600 font-bold text-sm">Q</span>
                </div>
                <div>
                  <h3
                    class="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300"
                  >
                    Can I play these games without alcohol?
                  </h3>
                  <p class="text-gray-600 leading-relaxed">
                    Absolutely! These games can be adapted for non-alcoholic
                    play by substituting drinks with fun alternatives like doing
                    silly dances, answering personal questions, or completing
                    mini-challenges.
                  </p>
                </div>
              </div>
            </div>

            <!-- FAQ 4 -->
            <div
              class="group bg-white rounded-2xl border-2 border-gray-100 hover:border-orange-200 p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors duration-300"
                >
                  <span class="text-orange-600 font-bold text-sm">Q</span>
                </div>
                <div>
                  <h3
                    class="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300"
                  >
                    What makes a good drinking game?
                  </h3>
                  <p class="text-gray-600 leading-relaxed">
                    Great drinking games balance fun challenges with social
                    interaction. They should be easy to understand, inclusive
                    for all players, and promote laughter rather than excessive
                    drinking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- AdSense Slot 3 - Diseño final -->
        <div class="text-center">
          <div class="relative group">
            <!-- Background sutil -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl"
            ></div>

            <!-- Contenido -->
            <div
              class="relative p-8 rounded-2xl border-2 border-violet-100 hover:border-violet-200 transition-colors duration-300"
            >
              <div class="text-center">
                <div
                  class="w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
                >
                  <MdiIcon icon="mdiInformation" class="w-12 h-12 text-white" />
                </div>
                <p class="text-gray-600">Advertisement Space 3</p>
                <!-- Aquí irá tu código de AdSense -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
// Meta de la página optimizada para SEO
useHead({
  title: "Drink Games - Best Online Party Drinking Games | Play Free",
  meta: [
    {
      name: "description",
      content:
        "Play the best drinking games online! Pyramid challenges, System rules, and more party games. Perfect for groups of 2-10 players. Free to play, fun guaranteed!",
    },
    {
      name: "keywords",
      content:
        "drinking games, party games, pyramid game, system game, online games, group games, party activities, drinking challenges, free games",
    },
    {
      property: "og:title",
      content: "Drink Games - Best Online Party Drinking Games",
    },
    {
      property: "og:description",
      content:
        "Play the best drinking games online! Pyramid challenges, System rules, and more party games. Perfect for groups.",
    },
    { property: "og:type", content: "website" },
    {
      name: "twitter:title",
      content: "Drink Games - Best Online Party Drinking Games",
    },
    {
      name: "twitter:description",
      content:
        "Play the best drinking games online! Perfect for parties and groups.",
    },
  ],
});

// Navegación a los juegos
const navigateToGame = (mode: string) => {
  useRouter().push(`/${mode}`);
};
</script>

<style scoped>
/* Mismos estilos existentes */
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

.bg-white {
  background-color: white !important;
}

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

@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* Gradientes de texto */
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Efectos de hover mejorados */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

/* Sombras personalizadas */
.drop-shadow-lg {
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}
</style>
