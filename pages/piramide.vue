<template>
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

    <div class="absolute top-0 left-0 m-2 animate-fade-in-up">
      <Button
        :variant="ButtonVariant.DANGER"
        :size="ButtonSize.MEDIUM"
        icon="mdiArrowLeft"
        :icon-position="ButtonIconPosition.LEFT"
        @click="() => $router.push('/')"
      >
        Volver
      </Button>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <!-- Título -->
      <div class="mb-16">
        <h1
          class="text-6xl md:text-8xl lg:text-9xl font-bold text-primary mb-6 animate-fade-in-up"
        >
          MODO <span class="text-danger animate-pulse">PIRÁMIDE</span>
        </h1>
        <p
          class="text-xl md:text-2xl text-secondary mb-4 animate-fade-in-up animation-delay-300"
        >
          Retos y preguntas para ascender
        </p>
      </div>

      <!-- Configuración de jugadores -->
      <div class="max-w-md mx-auto animate-fade-in-up animation-delay-700">
        <Card
          :variant="CardVariant.ELEVATED"
          :hover-effect="CardHoverEffect.LIFT"
          :shadow="CardShadow.LARGE"
          :radius="CardRadius.EXTRA_LARGE"
          class="bg-white"
        >
          <CardHeader :align="CardHeaderAlign.CENTER">
            <template #title>
              <div class="flex items-center justify-center gap-3 mb-2">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <MdiIcon icon="mdiAccountGroup" class="w-6 h-6 text-white" />
                </div>
                <span class="text-2xl font-bold text-white">Jugadores</span>
              </div>
            </template>
            <template #subtitle>
              <span class="text-gray-200">Agrega entre 2 y 8 jugadores</span>
            </template>
          </CardHeader>

          <CardBody :padding="CardSize.LARGE">
            <div class="space-y-6">
              <!-- Input para nuevo jugador -->
              <div class="space-y-4">
                <Input
                  v-model="newPlayerName"
                  :variant="InputVariant.ACCENT"
                  :size="InputSize.LARGE"
                  :radius="InputRadius.LARGE"
                  placeholder="Nombre del jugador"
                  label="Añadir jugador"
                  icon="mdiAccount"
                  icon-position="left"
                  clearable
                  :maxlength="20"
                  :error="playerError"
                  @keydown="handleKeydown"
                />

                <Button
                  :variant="ButtonVariant.PRIMARY"
                  :size="ButtonSize.LARGE"
                  icon="mdiPlus"
                  :icon-position="ButtonIconPosition.LEFT"
                  :disabled="!canAddPlayer"
                  class="w-full bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700"
                  @click="addPlayer"
                >
                  Añadir Jugador
                </Button>
              </div>

              <!-- Lista de jugadores -->
              <div v-if="players.length > 0" class="space-y-3">
                <h4
                  class="text-lg font-semibold text-white flex items-center gap-2"
                >
                  <MdiIcon
                    icon="mdiAccountMultiple"
                    class="w-5 h-5 text-info"
                  />
                  Jugadores ({{ players.length }}/8)
                </h4>

                <div class="space-y-2 max-h-48 overflow-y-auto">
                  <div
                    v-for="(player, index) in players"
                    :key="player.id"
                    class="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div class="flex items-center gap-3">
                      <div
                        class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold"
                      >
                        {{ index + 1 }}
                      </div>
                      <span class="font-medium text-gray-800">{{
                        player.name
                      }}</span>
                    </div>

                    <button
                      @click="removePlayer(player.id)"
                      class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-100 text-red-600 hover:text-red-700 transition-colors duration-200"
                    >
                      <MdiIcon icon="mdiDelete" class="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <!-- Mensaje cuando no hay jugadores -->
              <div v-else class="text-center py-8">
                <MdiIcon
                  icon="mdiAccountOff"
                  class="w-16 h-16 text-gray-300 mx-auto mb-3"
                />
                <p class="text-gray-500">No hay jugadores añadidos</p>
                <p class="text-sm text-gray-400">
                  Añade al menos 2 jugadores para comenzar
                </p>
              </div>
            </div>
          </CardBody>

          <CardActions
            v-if="players.length >= 2"
            :align="CardActionsAlign.CENTER"
            class="pb-6"
          >
            <Button
              :variant="ButtonVariant.INFO"
              :size="ButtonSize.EXTRA_LARGE"
              icon="mdiPlay"
              :icon-position="ButtonIconPosition.LEFT"
              class="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 border-green-600 hover:border-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              @click="startGame"
            >
              Comenzar Pirámide
            </Button>
          </CardActions>
        </Card>
      </div>

      <!-- Información del juego -->
      <div class="mt-12 animate-fade-in-up animation-delay-1000">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3"
            >
              <MdiIcon icon="mdiTrendingUp" class="w-6 h-6 text-red-600" />
            </div>
            <h4 class="font-semibold text-white mb-1">Progresión</h4>
            <p class="text-sm text-gray-300">Asciende nivel por nivel</p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3"
            >
              <MdiIcon icon="mdiTarget" class="w-6 h-6 text-red-600" />
            </div>
            <h4 class="font-semibold text-white mb-1">Retos</h4>
            <p class="text-sm text-gray-300">Cumple o paga las consecuencias</p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3"
            >
              <MdiIcon icon="mdiCrown" class="w-6 h-6 text-red-600" />
            </div>
            <h4 class="font-semibold text-white mb-1">Victoria</h4>
            <p class="text-sm text-gray-300">Llega a la cima de la pirámide</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
// Importar composables de Vue
import { ref, computed } from "vue";

// Meta de la página
useHead({
  title: "Pirámide - Modo Caos",
  meta: [
    {
      name: "description",
      content: "Configura tu partida de Pirámide y comienza la diversión",
    },
  ],
});

// Estado del juego extendido
interface Player {
  id: string;
  name: string;
  level: number;
  drinks: number; // Cuántas veces bebió/bajó de nivel
  maxLevel: number; // Nivel máximo alcanzado
  createdAt: string; // Timestamp de creación
  lastActive: string; // Última vez que jugó
}

interface GameSession {
  id: string;
  players: Player[];
  gameMode: "piramide";
  createdAt: string;
  lastPlayed: string;
  isActive: boolean;
}

const newPlayerName = ref("");
const players = ref<Player[]>([]);
const playerError = ref("");
const currentSession = ref<GameSession | null>(null);

// Claves para localStorage
const STORAGE_KEYS = {
  CURRENT_SESSION: "modo-caos-current-session",
  PLAYER_HISTORY: "modo-caos-player-history",
  GAME_SESSIONS: "modo-caos-game-sessions",
};

// Computed
const canAddPlayer = computed(() => {
  return (
    newPlayerName.value.trim().length > 0 &&
    players.value.length < 8 &&
    !players.value.some(
      (p) => p.name.toLowerCase() === newPlayerName.value.trim().toLowerCase()
    )
  );
});

// Funciones de persistencia
const saveToLocalStorage = () => {
  if (currentSession.value) {
    currentSession.value.players = players.value;
    currentSession.value.lastPlayed = new Date().toISOString();
    localStorage.setItem(
      STORAGE_KEYS.CURRENT_SESSION,
      JSON.stringify(currentSession.value)
    );

    // También guardar en historial de sesiones
    const sessions: GameSession[] = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.GAME_SESSIONS) || "[]"
    );
    const existingIndex = sessions.findIndex(
      (s) => s.id === currentSession.value!.id
    );

    if (existingIndex >= 0) {
      sessions[existingIndex] = currentSession.value;
    } else {
      sessions.push(currentSession.value);
    }

    // Mantener solo las últimas 10 sesiones
    if (sessions.length > 10) {
      sessions.splice(0, sessions.length - 10);
    }

    localStorage.setItem(STORAGE_KEYS.GAME_SESSIONS, JSON.stringify(sessions));
  }
};

const loadFromLocalStorage = () => {
  const savedSession = localStorage.getItem(STORAGE_KEYS.CURRENT_SESSION);
  if (savedSession) {
    try {
      const session: GameSession = JSON.parse(savedSession);
      // Solo cargar si la sesión es de las últimas 24 horas
      const lastPlayed = new Date(session.lastPlayed);
      const now = new Date();
      const hoursDiff =
        (now.getTime() - lastPlayed.getTime()) / (1000 * 60 * 60);

      if (hoursDiff < 24 && session.gameMode === "piramide") {
        currentSession.value = session;
        players.value = session.players || [];
      } else {
        // Limpiar sesión antigua
        localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);
        createNewSession();
      }
    } catch (error) {
      console.error("Error loading session:", error);
      createNewSession();
    }
  } else {
    createNewSession();
  }
};

const createNewSession = () => {
  currentSession.value = {
    id: `session-${Date.now()}`,
    players: [],
    gameMode: "piramide",
    createdAt: new Date().toISOString(),
    lastPlayed: new Date().toISOString(),
    isActive: false,
  };
  players.value = [];
};

const createPlayer = (name: string): Player => {
  return {
    id: `player-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    name: name.trim(),
    level: 1,
    drinks: 0,
    maxLevel: 1,
    createdAt: new Date().toISOString(),
    lastActive: new Date().toISOString(),
  };
};

// Métodos actualizados
const addPlayer = () => {
  const name = newPlayerName.value.trim();

  if (!name) {
    playerError.value = "El nombre no puede estar vacío";
    return;
  }

  if (name.length < 2) {
    playerError.value = "El nombre debe tener al menos 2 caracteres";
    return;
  }

  if (players.value.length >= 8) {
    playerError.value = "Máximo 8 jugadores";
    return;
  }

  if (players.value.some((p) => p.name.toLowerCase() === name.toLowerCase())) {
    playerError.value = "Ya existe un jugador con ese nombre";
    return;
  }

  const newPlayer = createPlayer(name);
  players.value.push(newPlayer);

  newPlayerName.value = "";
  playerError.value = "";

  // Guardar automáticamente
  saveToLocalStorage();
};

const removePlayer = (playerId: string) => {
  players.value = players.value.filter((p) => p.id !== playerId);
  saveToLocalStorage();
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter" && canAddPlayer.value) {
    addPlayer();
  }
};

const startGame = () => {
  console.log("Función startGame ejecutándose...");

  if (players.value.length < 2) {
    playerError.value = "Se necesitan al menos 2 jugadores";
    console.log("Error: No hay suficientes jugadores");
    return;
  }

  if (currentSession.value) {
    currentSession.value.isActive = true;
    saveToLocalStorage();
    console.log("Sesión guardada:", currentSession.value);
  }

  console.log(
    "Navegando a /piramide/juego con sessionId:",
    currentSession.value?.id
  );

  // Usar useRouter() explícitamente
  const router = useRouter();
  router.push(`/juego?sessionId=${currentSession.value?.id}`);
};

const clearSession = () => {
  localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);
  createNewSession();
  playerError.value = "";
};

// Watchers para auto-guardar
watch(
  players,
  () => {
    saveToLocalStorage();
  },
  { deep: true }
);

// Lifecycle
onMounted(() => {
  loadFromLocalStorage();
});
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

/* Soporte para reducción de movimiento */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
