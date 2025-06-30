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
      >
        Back to Games
      </Button>
    </div>

    <div class="relative z-10 w-full">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-primary mb-4 animate-fade-in-up">About</h1>
        <p class="text-xl text-secondary mb-2 animate-fade-in-up animation-delay-300">
          Bringing people together through fun party games
        </p>
      </div>

      <div class="space-y-8 animate-fade-in-up animation-delay-700">
        <!-- Our Mission Card - Estilo consistente -->
        <Card :size="CardSize.FULL" class="bg-white">
          <!-- Header con gradiente -->
          <div class="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>

          <CardBody :padding="CardSize.LARGE" class="p-8">
            <!-- Icono y título -->
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <MdiIcon icon="mdiTarget" class="w-6 h-6 text-white" />
              </div>
              <h2
                class="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
              >
                Our Mission
              </h2>
            </div>

            <p class="text-gray-600 leading-relaxed mb-4">
              At Drink Games, we believe that the best parties happen when
              people connect, laugh, and create unforgettable memories together.
              Our carefully crafted games are designed to break the ice, spark
              conversations, and bring out the fun side of everyone.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Whether you're hosting a small gathering or a large party, our
              games adapt to your group size and energy level, ensuring everyone
              has a great time while playing responsibly.
            </p>
          </CardBody>
        </Card>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Why Choose Our Games Card -->
          <Card :size="CardSize.FULL" class="bg-white">
            <!-- Header con gradiente -->
            <div
              class="h-2 bg-gradient-to-r from-green-500 to-emerald-500"
            ></div>

            <CardBody :padding="CardSize.LARGE" class="p-6">
              <!-- Icono y título -->
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <MdiIcon icon="mdiCheckCircle" class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300"
                  >
                    Why Choose Our Games?
                  </h3>
                  <span
                    class="text-xs text-green-500 font-semibold uppercase tracking-wider"
                    >Benefits</span
                  >
                </div>
              </div>

              <ul class="space-y-3 text-gray-600">
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Easy to learn and play</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Suitable for different group sizes</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Promotes social interaction</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Encourages responsible gaming</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Free to play online</span>
                </li>
              </ul>
            </CardBody>
          </Card>

          <!-- Our Values Card -->
          <Card :size="CardSize.FULL" class="bg-white">
            <!-- Header con gradiente -->
            <div class="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

            <CardBody :padding="CardSize.LARGE" class="p-6">
              <!-- Icono y título -->
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <MdiIcon icon="mdiHeart" class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    Our Values
                  </h3>
                  <span
                    class="text-xs text-blue-500 font-semibold uppercase tracking-wider"
                    >Core Principles</span
                  >
                </div>
              </div>

              <ul class="space-y-3 text-gray-600">
                <li class="flex items-start gap-3">
                  <span class="text-blue-600 mt-1 text-xl">🎉</span>
                  <span
                    ><strong>Fun First:</strong> Every game should bring
                    joy</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-blue-600 mt-1 text-xl">🤝</span>
                  <span><strong>Inclusive:</strong> Games for everyone</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-blue-600 mt-1 text-xl">⚖️</span>
                  <span
                    ><strong>Responsible:</strong> Safety and moderation</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-blue-600 mt-1 text-xl">🔒</span>
                  <span><strong>Safe:</strong> Secure and private gaming</span>
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>

        <!-- <Card
          class="group hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200 overflow-hidden"
        >
          <!-
          <div class="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>

          <CardBody :padding="CardSize.LARGE" class="p-8">
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <MdiIcon icon="mdiEmail" class="w-6 h-6 text-white" />
              </div>
              <h2
                class="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300"
              >
                Contact Us
              </h2>
            </div>

            <p class="text-gray-600 leading-relaxed mb-6">
              Have questions, suggestions, or just want to share your gaming
              experiences? We'd love to hear from you!
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                class="p-4 bg-purple-50 rounded-xl border border-purple-100 hover:bg-purple-100/50 transition-colors duration-300"
              >
                <div class="flex items-center gap-3 mb-2">
                  <div
                    class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center"
                  >
                    <MdiIcon icon="mdiEmail" class="w-4 h-4 text-purple-600" />
                  </div>
                  <h4 class="font-semibold text-gray-800">Email</h4>
                </div>
                <p class="text-purple-600 font-medium">hello@drink-games.com</p>
              </div>
              <div
                class="p-4 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100/50 transition-colors duration-300"
              >
                <div class="flex items-center gap-3 mb-2">
                  <div
                    class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"
                  >
                    <MdiIcon icon="mdiRss" class="w-4 h-4 text-blue-600" />
                  </div>
                  <h4 class="font-semibold text-gray-800">Follow Us</h4>
                </div>
                <p class="text-blue-600 font-medium">
                  Stay updated with new games and features
                </p>
              </div>
            </div>
          </CardBody>
        </Card> -->
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
useHead({
  title: "About Us - Drink Games | Our Mission & Values",
  meta: [
    {
      name: "description",
      content:
        "Learn about Drink Games mission to bring people together through fun party games. Discover our values and commitment to responsible gaming.",
    },
    {
      name: "keywords",
      content:
        "about drink games, party game company, responsible gaming, social games, group activities",
    },
  ],
});
</script>

<style scoped>
/* Estilos para mejorar la legibilidad */
.text-gray-600 {
  line-height: 1.7;
}

.bg-white {
  background-color: white !important;
}

/* Espaciado consistente */
.space-y-8 > * + * {
  margin-top: 2rem;
}

/* Mejoras para las cards de información */
.bg-blue-50,
.bg-green-50,
.bg-red-50,
.bg-yellow-50,
.bg-orange-50,
.bg-indigo-50 {
  transition: all 0.2s ease;
}

/* Hover effects para elementos interactivos */
.cursor-pointer:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Checkbox styling */
input[type="checkbox"] {
  width: 1.25rem;
  height: 1.25rem;
  accent-color: #3b82f6;
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
