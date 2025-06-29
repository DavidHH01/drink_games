<template>
  <Section
    :variant="SectionVariant.PRIMARY"
    :size="SectionSize.EXTRA_LARGE"
    :alignment="SectionAlignment.CENTER"
    :full-height="true"
    class="relative overflow-hidden"
  >
    <AnimatedBackground />

    <div class="absolute top-0 left-0 m-2 animate-fade-in-up">
      <Button
        :variant="ButtonVariant.DANGER"
        :size="ButtonSize.MEDIUM"
        icon="mdiArrowLeft"
        :icon-position="ButtonIconPosition.LEFT"
        @click="exitRoom"
      >
        Volver
      </Button>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <div class="mb-10">
        <h1 class="text-5xl font-bold text-primary mb-2 animate-fade-in-up">
          SALA <span class="text-danger animate-pulse">{{ roomId }}</span>
        </h1>
        <p
          class="text-xl text-secondary animate-fade-in-up animation-delay-300"
        >
          Jugador: <strong>{{ name }}</strong>
          <span v-if="isHost" class="ml-2 text-yellow-500">(Anfitrión)</span>
        </p>
      </div>

      <!-- Card de jugadores centrada -->
      <div class="flex justify-center mb-8">
        <Card
          :variant="CardVariant.ELEVATED"
          :hover-effect="CardHoverEffect.LIFT"
          :shadow="CardShadow.LARGE"
          :radius="CardRadius.EXTRA_LARGE"
          class="bg-white animate-fade-in-up animation-delay-500 w-full max-w-2xl"
        >
          <CardHeader :align="CardHeaderAlign.CENTER">
            <template #title>
              <div class="flex items-center justify-center gap-3 mb-2">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <MdiIcon icon="mdiAccountMultiple" class="w-6 h-6 text-white" />
                </div>
                <span class="text-2xl font-bold text-white"
                  >Jugadores en la sala</span
                >
              </div>
            </template>
          </CardHeader>
          <CardBody :padding="CardSize.LARGE">
            <ul class="space-y-3">
              <li
                v-for="player in players"
                :key="player.name"
                class="flex items-center justify-center gap-3 text-lg"
              >
                <span>👤 {{ player.name }}</span>
                <span
                  v-if="player.socketId === host"
                  class="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full"
                  >Anfitrión</span
                >
                <span
                  v-if="player.socketId === masterId"
                  class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full"
                  >Maestro</span
                >
                <span
                  v-if="player.socketId === socket.id"
                  class="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full"
                  >Tú</span
                >
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>

      <!-- Estado del juego -->
      <div
        v-if="gameStarted"
        class="mb-6 animate-fade-in-up animation-delay-700 flex justify-center"
      >
        <Card
          :variant="CardVariant.ELEVATED"
          :shadow="CardShadow.LARGE"
          :radius="CardRadius.LARGE"
          class="bg-green-50 border border-green-200 w-full max-w-2xl"
        >
          <CardBody :padding="CardSize.LARGE">
            <div class="flex flex-col items-center">
              <MdiIcon
                icon="mdiCheckCircle"
                class="w-10 h-10 text-green-600 mb-2"
              />
              <span class="text-green-700 font-semibold text-lg"
                >¡El juego ha comenzado!</span
              >
              <span
                v-if="masterId === socket.id"
                class="block mt-2 text-green-800 font-medium"
              >
                Eres el <span class="font-bold">Maestro</span> de la ronda.
              </span>
              <span
                v-if="masterId === socket.id && gameRules.length"
                class="block mt-2 text-white font-semibold"
              >
                ✅ Regla elegida:
                <span class="italic">"{{ selectedRules[0] }}"</span>
              </span>
              <span v-else-if="masterId" class="block mt-2 text-green-800">
                El Maestro es: <span class="font-bold">{{ masterName }}</span>
              </span>
            </div>
          </CardBody>
        </Card>
      </div>

      <!-- Selección de reglas con Cards -->
      <div
        v-if="showRuleSelection"
        class="mb-6 animate-fade-in-up animation-delay-900 flex justify-center"
      >
        <Card
          :variant="CardVariant.ELEVATED"
          :shadow="CardShadow.LARGE"
          :radius="CardRadius.EXTRA_LARGE"
          class="bg-white w-full max-w-4xl"
        >
          <CardHeader :align="CardHeaderAlign.CENTER">
            <template #title>
              <div class="flex items-center justify-center gap-3 mb-2">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <MdiIcon icon="mdiBookOpen" class="w-6 h-6 text-white" />
                </div>
                <span class="text-2xl font-bold text-white"
                  >Elige una regla</span
                >
              </div>
            </template>
            <template #subtitle>
              <span class="text-gray-600">Selecciona una regla para esta ronda</span>
            </template>
          </CardHeader>
          <CardBody :padding="CardSize.LARGE">
            <div class="grid grid-cols-1  gap-6 mb-6">
              <div
                v-for="(rule, index) in availableRules.slice(0, 2)"
                :key="rule"
                @click="selectRule(rule)"
                :class="[
                  'p-6 rounded-xl border-2 cursor-pointer transition-all duration-300',
                  selectedRules.includes(rule)
                    ? 'border-purple-500 bg-purple-50 shadow-lg transform scale-105'
                    : 'border-gray-200 bg-gray-50 hover:border-purple-300 hover:bg-purple-25 hover:shadow-md'
                ]"
              >
                <div class="flex items-start gap-4">
                  <div
                    :class="[
                      'w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg',
                      index === 0 ? 'bg-gradient-to-br from-red-500 to-red-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'
                    ]"
                  >
                    {{ index + 1 }}
                  </div>
                  <div class="flex-1 text-left">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">
                      Opción {{ index + 1 }}
                    </h4>
                    <p class="text-gray-600 leading-relaxed">
                      {{ rule }}
                    </p>
                  </div>
                  <div
                    v-if="selectedRules.includes(rule)"
                    class="flex-shrink-0"
                  >
                    <MdiIcon
                      icon="mdiCheckCircle"
                      class="w-6 h-6 text-purple-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
          <CardActions :align="CardActionsAlign.CENTER" class="pb-6">
            <Button
              :disabled="selectedRules.length !== 1"
              @click="chooseRules"
              :variant="ButtonVariant.SUCCESS"
              :size="ButtonSize.LARGE"
              icon="mdiCheck"
              :icon-position="ButtonIconPosition.LEFT"
              class="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 border-purple-600 hover:border-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Confirmar Regla
            </Button>
          </CardActions>
        </Card>
      </div>

      <!-- Controles del maestro -->
      <div
        v-if="masterId === socket.id && gameRules.length"
        class="mb-6 flex justify-center"
      >
        <Card
          :variant="CardVariant.ELEVATED"
          :shadow="CardShadow.LARGE"
          :radius="CardRadius.EXTRA_LARGE"
          class="bg-white w-full max-w-3xl"
        >
          <CardHeader :align="CardHeaderAlign.CENTER">
            <template #title>
              <div class="flex items-center justify-center gap-3 mb-2">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <MdiIcon icon="mdiGavel" class="w-6 h-6 text-white" />
                </div>
                <span class="text-2xl font-bold text-white"
                  >Controles del Maestro</span
                >
              </div>
            </template>
          </CardHeader>
          <CardBody :padding="CardSize.LARGE">
            <div class="space-y-6">
              <div class="text-center">
                <h3 class="text-lg font-bold mb-4 text-white">
                  Haz que alguien beba:
                </h3>
                <div class="flex flex-wrap gap-3 justify-center">
                  <Button
                    v-for="player in players"
                    :key="player.socketId"
                    :disabled="player.socketId === socket.id"
                    @click="sendDrinkSignal(player.socketId)"
                    :variant="ButtonVariant.WARNING"
                    :size="ButtonSize.MEDIUM"
                    icon="mdiCup"
                    :icon-position="ButtonIconPosition.LEFT"
                    class="shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    {{ player.name }}
                  </Button>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-6">
                <Button
                  @click="endRound"
                  :variant="ButtonVariant.SUCCESS"
                  :size="ButtonSize.LARGE"
                  icon="mdiCheckBold"
                  :icon-position="ButtonIconPosition.LEFT"
                  class="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 border-green-600 hover:border-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  🧠 Alguien adivinó la regla
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <!-- Botón de inicio para host -->
      <div v-else class="mb-6 animate-fade-in-up animation-delay-700 flex justify-center">
        <div class="w-full max-w-md">
          <Button
            v-if="isHost && players.length >= 2"
            :variant="ButtonVariant.SUCCESS"
            :size="ButtonSize.EXTRA_LARGE"
            icon="mdiPlay"
            :icon-position="ButtonIconPosition.LEFT"
            class="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 border-green-600 hover:border-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            @click="startGame"
          >
            🚀 Comenzar Partida
          </Button>
          <p v-if="isHost && players.length < 2" class="text-yellow-600 mt-2">
            ⚠️ Se necesitan al menos 2 jugadores para comenzar.
          </p>
          <p v-if="!isHost" class="text-gray-500 mt-2">
            Esperando a que el anfitrión inicie la partida...
          </p>
        </div>
      </div>

      <!-- Botón de salir -->
      <div class="flex justify-center">
        <Button
          :variant="ButtonVariant.DANGER"
          :size="ButtonSize.LARGE"
          icon="mdiExitToApp"
          :icon-position="ButtonIconPosition.LEFT"
          @click="exitRoom"
          class="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Salir de la Sala
        </Button>
      </div>

      <p v-if="errorMessage" class="mt-4 text-red-600">{{ errorMessage }}</p>
    </div>

    <!-- Overlay animado para "Debes beber" -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 scale-75 -translate-y-10"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-125 translate-y-10"
    >
      <div
        v-if="shouldDrink"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-gradient-to-br from-red-500 to-red-600 text-white p-8 rounded-2xl shadow-2xl text-center max-w-md mx-4 animate-pulse-strong">
          <div class="text-6xl mb-4 animate-bounce">🍻</div>
          <h2 class="text-3xl font-bold mb-2">¡DEBES BEBER!</h2>
          <p class="text-xl opacity-90 mb-4">Has roto la regla</p>
          <div class="w-full bg-red-400 rounded-full h-2 overflow-hidden">
            <div class="h-full bg-white rounded-full animate-shrink-bar" style="animation-duration: 4s;"></div>
          </div>
          <p class="text-sm mt-2 opacity-75">Este mensaje desaparecerá automáticamente</p>
        </div>
      </div>
    </Transition>
  </Section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { Socket } from "socket.io-client";

const { $socket } = useNuxtApp();
const socket = $socket as Socket;

const route = useRoute();
const router = useRouter();

const name = decodeURIComponent(String(route.query.name || ""));
const roomId = String(route.params.roomId || "");
const players = ref<{ name: string; socketId: string }[]>([]);
const host = ref<string>("");
const masterId = ref<string | null>(null);
const gameStarted = ref(false);
const errorMessage = ref<string | null>(null);
const selectedRules = ref<string[]>([]);
const gameRules = ref<string[]>([]);
const shouldDrink = ref(false);

// Solo mostrar 2 reglas aleatorias para elegir
const availableRules = ref<string[]>([]);

const allRules = [
  "No decir nombres propios",
  "Hablar en tercera persona",
  "Tocar la mesa antes de hablar",
  "Decir 'salud' después de cada frase",
  "No usar la palabra 'yo'",
  "Señalar con el codo en lugar de con el dedo",
  "No cruzar los brazos",
  "Hablar con acento extranjero",
  "Hablar rimando",
  "No mostrar los dientes al reír",
  "Decir una onomatopeya antes de hablar",
  "Decir el nombre de un animal después de cada frase",
  "No usar más de tres palabras por turno",
  "Hablar como si estuvieras enojado",
  "Terminar cada frase con 'y punto'",
  "No usar verbos",
  "Mantener contacto visual con alguien distinto al que hablas",
  "Empezar cada frase con 'atención'",
  "No decir sí ni no",
  "Usar una palabra inventada en cada frase",
  "Aplaudir antes de hablar",
  "Cambiar el nombre de todos los jugadores",
  "Imitar la voz de otro jugador al hablar",
  "No repetir palabras ya dichas por otros",
  "Solo hablar haciendo preguntas",
  "Taparse un ojo mientras se habla",
  "Hablar como robot",
  "No usar artículos (el, la, los, las, un, una...)",
];

const isHost = computed(() => socket.id === host.value);
const masterName = computed(() => {
  const master = players.value.find((p) => p.socketId === masterId.value);
  return master ? master.name : "";
});
const showRuleSelection = computed(() => {
  return masterId.value === socket.id && !gameRules.value.length;
});

// Función para seleccionar una regla
const selectRule = (rule: string) => {
  selectedRules.value = [rule]; // Solo una regla a la vez
};

// Función para obtener 2 reglas aleatorias
const getRandomRules = () => {
  const shuffled = [...allRules].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
};

onMounted(() => {
  if (!socket) {
    errorMessage.value = "Socket no disponible";
    return;
  }

  if (!socket.connected) socket.connect();
  socket.emit("join_room", { roomId, playerName: name });

  // Generar reglas aleatorias para la selección
  availableRules.value = getRandomRules();

  socket.on("room_created", ({ roomId: newRoomId, player }) => {
    if (!players.value.find((p) => p.socketId === player.socketId)) {
      players.value = [player];
      host.value = player.socketId;
    }
  });

  socket.on("player_list_updated", (data) => {
    players.value = data.players;
    host.value = data.hostId;
  });

  socket.on("game_started", (data) => {
    gameStarted.value = true;
    masterId.value = data.masterId;
    // Generar nuevas reglas para el nuevo maestro
    availableRules.value = getRandomRules();
  });

  socket.on("new_master_assigned", (data) => {
    masterId.value = data.masterId;
    selectedRules.value = [];
    gameRules.value = [];
    // Generar nuevas reglas para el nuevo maestro
    availableRules.value = getRandomRules();
  });

  socket.on("rule_selected", (data) => {
    gameRules.value = [data.rule];
  });

  socket.on("you_drink", () => {
    shouldDrink.value = true;
    setTimeout(() => (shouldDrink.value = false), 4000);
  });

  socket.on("round_reset", () => {
    gameStarted.value = false;
    masterId.value = null;
    selectedRules.value = [];
    gameRules.value = [];
    availableRules.value = getRandomRules();
  });

  socket.on("room_full", () => {
    errorMessage.value = "⚠️ La sala está llena.";
    router.push("/sistema");
  });

  socket.on("connect_error", (err) => {
    errorMessage.value = "Error de conexión: " + err.message;
  });

  socket.on("error", (msg) => {
    errorMessage.value = msg;
    router.push("/sistema");
  });
});

onBeforeUnmount(() => {
  socket.emit("leave_room", { roomId, playerName: name });
  socket.off();
});

const startGame = () => {
  socket.emit("start_game", { roomId });
};

const exitRoom = () => {
  socket.emit("leave_room", { roomId, playerName: name });
  router.push("/sistema");
};

const chooseRules = () => {
  if (selectedRules.value.length === 1) {
    socket.emit("select_rule", { roomId, rule: selectedRules.value[0] });
  }
};

const sendDrinkSignal = (targetId: string) => {
  socket.emit("penalize_player", { roomId, targetId });
};

const endRound = () => {
  socket.emit("rule_guessed", { roomId });
};
</script>

<style scoped>
/* Animaciones existentes */
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
.animation-delay-900 {
  animation-delay: 0.9s;
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

/* Animación más intensa para el overlay */
.animate-pulse-strong {
  animation: pulse-strong 1.5s ease-in-out infinite;
}

@keyframes pulse-strong {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Animación de la barra que se reduce */
.animate-shrink-bar {
  animation: shrink-bar linear;
  transform-origin: left;
}

@keyframes shrink-bar {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

/* Colores de hover para las cards de reglas */
.hover\:bg-purple-25:hover {
  background-color: #faf5ff;
}

/* Soporte para reducción de movimiento */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up,
  .animate-pulse-strong,
  .animate-shrink-bar {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>