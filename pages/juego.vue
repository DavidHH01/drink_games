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

    <div class="absolute top-0 left-0 m-2">
      <Button
        :variant="ButtonVariant.DANGER"
        :size="ButtonSize.MEDIUM"
        icon="mdiArrowLeft"
        :icon-position="ButtonIconPosition.LEFT"
        class="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30"
        @click="showExitModal = true"
      >
        {{ gameEnded ? "Salir" : "Salir" }}
      </Button>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto">
      <!-- Header con información de sesión -->
      <!-- Título -->
      <h1 class="text-4xl md:text-6xl font-bold mb-6 text-primary">
        MODO <span class="text-danger animate-pulse">PIRÁMIDE</span>
      </h1>

      <!-- Banner de juego terminado -->
      <div v-if="gameEnded" class="mb-6 mt-6">
        <div
          class="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg mb-4 inline-block"
        >
          <div class="flex items-center gap-2">
            <MdiIcon :icon="'mdiTrophy'" class="w-6 h-6" />
            <span class="font-bold text-lg">¡PARTIDA FINALIZADA!</span>
          </div>
        </div>
      </div>

      <!-- Vista del juego activo -->
      <div v-if="!gameEnded">
        <!-- Card principal del juego -->
        <Card
          v-if="currentPlayer"
          :variant="CardVariant.ELEVATED"
          :shadow="CardShadow.EXTRA_LARGE"
          :radius="CardRadius.EXTRA_LARGE"
          class="bg-white max-w-2xl mx-auto overflow-hidden"
        >
          <!-- Header de la card con jugador actual -->
          <CardHeader
            :align="CardHeaderAlign.CENTER"
            class="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
          >
            <template #title>
              <div class="flex flex-col items-center gap-4 py-4">
                <!-- Avatar del jugador -->
                <div class="relative">
                  <div
                    class="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border-4 border-white/30"
                  >
                    <span class="text-2xl font-bold text-white">
                      {{ currentPlayer.name.substring(0, 2).toUpperCase() }}
                    </span>
                  </div>
                  <!-- Indicador de nivel -->
                  <div
                    class="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                  >
                    <span class="text-sm font-bold text-white">{{
                      currentPlayer.level
                    }}</span>
                  </div>
                </div>

                <!-- Nombre del jugador -->
                <div class="text-center">
                  <h2 class="text-3xl font-bold text-white">
                    {{ currentPlayer.name }}
                  </h2>
                  <p class="text-blue-100 text-lg">
                    Nivel {{ currentPlayer.level }} de 10
                  </p>
                </div>

                <!-- Barra de progreso del nivel -->
                <div class="w-full max-w-md">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-sm font-medium text-blue-100"
                      >Progreso en la Pirámide
                    </span>
                    <span class="text-sm font-medium text-white">
                      {{ currentPlayer.level }}/10</span
                    >
                  </div>
                  <div class="w-full bg-white/20 rounded-full h-3">
                    <div
                      class="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
                      :style="{ width: `${(currentPlayer.level / 10) * 100}%` }"
                    ></div>
                  </div>
                </div>
              </div>
            </template>
          </CardHeader>

          <!-- Body con el reto -->
          <CardBody :padding="CardSize.LARGE" class="text-center bg-white">
            <!-- Reto actual con diseño mejorado -->
            <div
              v-if="currentChallenge"
              class="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 mb-8 text-white shadow-2xl overflow-hidden"
            >
              <!-- Efecto de fondo -->
              <div class="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

              <div class="relative z-10">
                <div class="flex items-center justify-center gap-3 mb-6">
                  <div
                    class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <MdiIcon
                      :icon="currentChallenge.icon"
                      class="w-7 h-7 text-white"
                    />
                  </div>
                  <h3 class="text-2xl font-bold text-white">
                    {{ currentChallenge.type }}
                  </h3>
                </div>

                <p class="text-xl text-white leading-relaxed mb-6 font-medium">
                  {{ currentChallenge.text }}
                </p>

                <!-- Dificultad del reto -->
                <div class="flex items-center justify-center gap-3">
                  <span class="text-sm text-white/80 font-medium"
                    >Dificultad:</span
                  >
                  <div class="flex gap-1">
                    <div
                      v-for="i in 5"
                      :key="i"
                      class="w-3 h-3 rounded-full transition-all duration-300"
                      :class="
                        i <= currentChallenge.difficulty
                          ? 'bg-yellow-400 shadow-lg scale-110'
                          : 'bg-white/30'
                      "
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Decoración -->
              <div
                class="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full"
              ></div>
              <div
                class="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full"
              ></div>
            </div>

            <!-- Estadísticas del jugador -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div
                class="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200"
              >
                <div class="text-3xl font-bold text-green-600 mb-1">
                  {{ currentPlayer.level }}
                </div>
                <div class="text-sm text-green-700 font-medium">
                  Nivel Actual
                </div>
              </div>
              <div
                class="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200"
              >
                <div class="text-3xl font-bold text-red-600 mb-1">
                  {{ currentPlayer.drinks }}
                </div>
                <div class="text-sm text-red-700 font-medium">Bebidas</div>
              </div>
            </div>
          </CardBody>

          <!-- Footer con botones de acción -->
          <CardActions
            :align="CardActionsAlign.CENTER"
            class="p-6 bg-white border-t border-gray-100"
          >
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <!-- Botón: Lo logró -->
              <Button
                :variant="ButtonVariant.SUCCESS"
                :size="ButtonSize.LARGE"
                icon="mdiCheck"
                :icon-position="ButtonIconPosition.LEFT"
                :disabled="actionInProgress"
                @click="handleSuccess"
              >
                Lo logró
              </Button>

              <!-- Botón: Falló -->
              <Button
                :variant="ButtonVariant.DANGER"
                :size="ButtonSize.LARGE"
                icon="mdiClose"
                :icon-position="ButtonIconPosition.LEFT"
                :disabled="actionInProgress"
                @click="handleFailure"
                >Falló
              </Button>

              <!-- Botón: Pasar turno -->
              <Button
                :variant="ButtonVariant.INFO"
                :size="ButtonSize.LARGE"
                icon="mdiSkipNext"
                :icon-position="ButtonIconPosition.LEFT"
                :disabled="actionInProgress"
                @click="nextPlayer"
              >
                Pasar
              </Button>
            </div>
          </CardActions>
        </Card>
      </div>

      <!-- Vista de estadísticas finales -->
      <div v-else class="space-y-8">
        <!-- Tarjeta del ganador -->
        <Card
          v-if="winner"
          :variant="CardVariant.ELEVATED"
          :shadow="CardShadow.EXTRA_LARGE"
          :radius="CardRadius.EXTRA_LARGE"
          class="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white max-w-2xl mx-auto overflow-hidden"
        >
          <CardBody :padding="CardSize.MEDIUM" class="text-center">
            <div class="mb-6">
              <div class="text-8xl mb-4">👑</div>
              <h2 class="text-4xl font-bold mb-2">¡CAMPEÓN!</h2>
              <h3 class="text-3xl font-semibold mb-4">{{ winner.name }}</h3>
              <p class="text-xl opacity-90">Ha conquistado la pirámide</p>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div class="text-3xl font-bold">{{ winner.level }}</div>
                <div class="text-sm opacity-80">Nivel Final</div>
              </div>
              <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div class="text-3xl font-bold">{{ winner.drinks }}</div>
                <div class="text-sm opacity-80">Bebidas</div>
              </div>
            </div>
          </CardBody>
        </Card>

        <!-- Leaderboard -->
        <Card
          :variant="CardVariant.ELEVATED"
          :shadow="CardShadow.LARGE"
          :radius="CardRadius.EXTRA_LARGE"
          class="bg-white max-w-4xl mx-auto"
        >
          <CardHeader>
            <template #title>
              <div class="flex items-center gap-3">
                <MdiIcon icon="mdiMedal" class="w-6 h-6 text-yellow-600" />
                <span class="text-2xl font-bold text-white"
                  >Leaderboard Final</span
                >
              </div>
            </template>
          </CardHeader>

          <CardBody :padding="CardSize.LARGE">
            <div class="space-y-3">
              <div
                v-for="(playerStat, index) in leaderboard"
                :key="playerStat.player.id"
                class="flex items-center justify-between p-4 rounded-xl transition-all duration-300"
                :class="{
                  'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 shadow-lg':
                    index === 0,
                  'bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-300':
                    index === 1,
                  'bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-300':
                    index === 2,
                  'bg-gray-50 border border-gray-200': index > 2,
                }"
              >
                <div class="flex items-center gap-4">
                  <!-- Posición -->
                  <div
                    class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                    :class="{
                      'bg-gradient-to-br from-yellow-400 to-orange-500 text-white':
                        index === 0,
                      'bg-gradient-to-br from-gray-400 to-gray-500 text-white':
                        index === 1,
                      'bg-gradient-to-br from-amber-400 to-yellow-500 text-white':
                        index === 2,
                      'bg-gray-300 text-gray-700': index > 2,
                    }"
                  >
                    <MdiIcon
                      v-if="index === 0"
                      icon="mdiCrown"
                      class="w-6 h-6"
                    />
                    <MdiIcon
                      v-else-if="index === 1"
                      icon="mdiMedal"
                      class="w-6 h-6"
                    />
                    <MdiIcon
                      v-else-if="index === 2"
                      icon="mdiStar"
                      class="w-6 h-6"
                    />
                    <span v-else>{{ playerStat.position }}</span>
                  </div>

                  <!-- Info del jugador -->
                  <div>
                    <div class="font-bold text-lg text-gray-800">
                      {{ playerStat.player.name }}
                    </div>
                    <div class="text-sm text-gray-600">
                      {{ playerStat.successRate }}% éxito •
                      {{ playerStat.totalChallenges }} retos
                    </div>
                  </div>
                </div>

                <!-- Estadísticas -->
                <div class="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div class="text-2xl font-bold text-blue-600">
                      {{ playerStat.player.level }}
                    </div>
                    <div class="text-xs text-gray-500">Nivel</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-green-600">
                      {{ playerStat.player.maxLevel }}
                    </div>
                    <div class="text-xs text-gray-500">Máximo</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-red-600">
                      {{ playerStat.player.drinks }}
                    </div>
                    <div class="text-xs text-gray-500">Bebidas</div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <!-- Estadísticas generales -->
        <Card
          :variant="CardVariant.ELEVATED"
          :shadow="CardShadow.LARGE"
          :radius="CardRadius.LARGE"
          class="bg-white max-w-2xl mx-auto"
        >
          <CardHeader>
            <template #title>
              <div class="flex items-center gap-3">
                <MdiIcon icon="mdiAccountGroup" class="w-6 h-6 text-blue-600" />
                <span class="text-xl font-bold text-white"
                  >Estadísticas de la Partida</span
                >
              </div>
            </template>
          </CardHeader>

          <CardBody :padding="CardSize.MEDIUM">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="text-center p-3 bg-blue-50 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">
                  {{ gameStats.totalPlayers }}
                </div>
                <div class="text-sm text-blue-700">Jugadores</div>
              </div>
              <div class="text-center p-3 bg-green-50 rounded-lg">
                <div class="text-2xl font-bold text-green-600">
                  {{ gameStats.totalChallenges }}
                </div>
                <div class="text-sm text-green-700">Retos Total</div>
              </div>
              <div class="text-center p-3 bg-yellow-50 rounded-lg">
                <div class="text-2xl font-bold text-yellow-600">
                  {{ gameStats.averageLevel }}
                </div>
                <div class="text-sm text-yellow-700">Nivel Promedio</div>
              </div>
              <div class="text-center p-3 bg-red-50 rounded-lg">
                <div class="text-2xl font-bold text-red-600">
                  {{ gameStats.totalDrinks }}
                </div>
                <div class="text-sm text-red-700">Bebidas Total</div>
              </div>
            </div>
          </CardBody>
        </Card>

        <!-- Botones de acción final -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto"
        >
          <Button
            :variant="ButtonVariant.SUCCESS"
            :size="ButtonSize.EXTRA_LARGE"
            icon="mdiRestart"
            :icon-position="ButtonIconPosition.LEFT"
            @click="restartGame"
          >
            Jugar de Nuevo
          </Button>

          <Button
            :variant="ButtonVariant.DANGER"
            :size="ButtonSize.EXTRA_LARGE"
            icon="mdiHome"
            :icon-position="ButtonIconPosition.LEFT"
            @click="endGame"
          >
            Volver al Menú
          </Button>
        </div>
      </div>
    </div>

    <!-- Modal de confirmación para salir -->
    <Modal
      v-model="showExitModal"
      :variant="ModalVariant.WARNING"
      :size="ModalSize.MEDIUM"
      title="Salir de la Partida"
      :subtitle="
        gameEnded
          ? '¿Quieres volver al menú principal?'
          : '¿Estás seguro de que quieres abandonar la partida actual?'
      "
      icon="mdiExitToApp"
    >
      <div class="text-center space-y-4">
        <p v-if="!gameEnded" class="text-gray-600">
          Al salir, se guardará el progreso actual de todos los jugadores y
          podrás continuar más tarde.
        </p>
        <p v-else class="text-gray-600">
          La partida ha finalizado. Puedes volver al menú principal o reiniciar
          una nueva partida.
        </p>
      </div>

      <template #footer>
        <Button :variant="ButtonVariant.SUCCESS" @click="showExitModal = false">
          {{ gameEnded ? "Quedarse" : "Continuar Jugando" }}
        </Button>
        <Button :variant="ButtonVariant.DANGER" @click="exitGame">
          {{ gameEnded ? "Ir al Menú" : "Salir de la Partida" }}
        </Button>
      </template>
    </Modal>
  </Section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import {
  mdiAccountMultiple,
  mdiClock,
  mdiClose,
  mdiCheck,
  mdiSkipNext,
  mdiAccountGroup,
  mdiExitToApp,
  mdiTrophy,
  mdiLoading,
  mdiArrowLeft,
  mdiMedal,
  mdiCrown,
  mdiStar,
  mdiHome,
  mdiRestart,
} from "@mdi/js";
import { piramideChallenges, type Challenge } from "~/data/piramideChallenges";

// Meta de la página
useHead({
  title: "Partida de Pirámide - Modo Caos",
  meta: [
    { name: "description", content: "Partida en curso del modo Pirámide" },
  ],
});

// Interfaces
interface Player {
  id: string;
  name: string;
  level: number;
  drinks: number;
  maxLevel: number;
  createdAt: string;
  lastActive: string;
}

interface GameSession {
  id: string;
  players: Player[];
  gameMode: "piramide";
  createdAt: string;
  lastPlayed: string;
  isActive: boolean;
  currentPlayerIndex?: number;
  winner?: Player;
  gameEnded?: boolean;
}

interface PlayerStats {
  player: Player;
  position: number;
  totalChallenges: number;
  successRate: number;
}

// Estado del juego
const route = useRoute();
const router = useRouter();

const players = ref<Player[]>([]);
const currentPlayerIndex = ref(0);
const gameStartTime = ref(new Date().toISOString());
const actionInProgress = ref(false);
const showExitModal = ref(false);
const showVictoryModal = ref(false);
const gameEnded = ref(false);
const winner = ref<Player | null>(null);

// Computed
const currentPlayer = computed(() => {
  if (players.value.length === 0 || gameEnded.value) return null;
  const player = players.value[currentPlayerIndex.value];
  return player || players.value[0];
});

const currentChallenge = computed(() => {
  if (!currentPlayer.value || gameEnded.value) return null;
  const playerLevel = currentPlayer.value.level;
  const levelChallenges = piramideChallenges.filter(
    (c) => c.level === playerLevel
  );
  if (levelChallenges.length === 0) return piramideChallenges[0];
  return levelChallenges[Math.floor(Math.random() * levelChallenges.length)];
});

// Estadísticas y leaderboard
const leaderboard = computed(() => {
  const sortedPlayers = [...players.value].sort((a, b) => {
    // Primero por nivel actual (descendente)
    if (a.level !== b.level) return b.level - a.level;
    // Luego por máximo nivel alcanzado (descendente)
    if (a.maxLevel !== b.maxLevel) return b.maxLevel - a.maxLevel;
    // Finalmente por menos bebidas (ascendente)
    return a.drinks - b.drinks;
  });

  return sortedPlayers.map((player, index) => ({
    player,
    position: index + 1,
    totalChallenges: player.level + player.drinks - 1, // Aproximación de retos totales
    successRate:
      player.level > 1
        ? Math.round(
            ((player.level - 1) / (player.level + player.drinks - 1)) * 100
          )
        : 0,
  }));
});

const gameStats = computed(() => {
  const totalPlayers = players.value.length;
  const totalChallenges = players.value.reduce(
    (sum, p) => sum + p.level + p.drinks - 1,
    0
  );
  const averageLevel =
    players.value.reduce((sum, p) => sum + p.level, 0) / totalPlayers;
  const totalDrinks = players.value.reduce((sum, p) => sum + p.drinks, 0);

  return {
    totalPlayers,
    totalChallenges,
    averageLevel: Math.round(averageLevel * 10) / 10,
    totalDrinks,
    gameDuration: formatGameTime(gameStartTime.value),
  };
});

// Funciones
const loadGameSession = () => {
  const sessionId = route.query.sessionId as string;
  if (!sessionId) {
    router.push("/piramide");
    return;
  }

  const savedSession = localStorage.getItem("modo-caos-current-session");
  if (!savedSession) {
    router.push("/piramide");
    return;
  }

  try {
    const session: GameSession = JSON.parse(savedSession);
    if (
      session.id === sessionId &&
      session.players &&
      session.players.length > 0
    ) {
      players.value = session.players;
      currentPlayerIndex.value = session.currentPlayerIndex || 0;
      gameEnded.value = session.gameEnded || false;
      winner.value = session.winner || null;

      // Asegurar que el índice esté dentro del rango
      if (currentPlayerIndex.value >= session.players.length) {
        currentPlayerIndex.value = 0;
      }

      gameStartTime.value = session.createdAt;
    } else {
      router.push("/piramide");
    }
  } catch (error) {
    console.error("Error loading game session:", error);
    router.push("/piramide");
  }
};

const saveGameSession = () => {
  const sessionId = route.query.sessionId as string;
  if (!sessionId || players.value.length === 0) return;

  const session: GameSession = {
    id: sessionId,
    players: players.value,
    gameMode: "piramide",
    createdAt: gameStartTime.value,
    lastPlayed: new Date().toISOString(),
    isActive: !gameEnded.value,
    currentPlayerIndex: currentPlayerIndex.value,
    winner: winner.value || undefined,
    gameEnded: gameEnded.value,
  };

  localStorage.setItem("modo-caos-current-session", JSON.stringify(session));
};

const handleSuccess = () => {
  if (actionInProgress.value || !currentPlayer.value || gameEnded.value) return;
  actionInProgress.value = true;

  // Subir nivel
  currentPlayer.value.level = Math.min(currentPlayer.value.level + 1, 10);
  currentPlayer.value.maxLevel = Math.max(
    currentPlayer.value.maxLevel,
    currentPlayer.value.level
  );
  currentPlayer.value.lastActive = new Date().toISOString();

  // Verificar victoria
  if (currentPlayer.value.level >= 10) {
    endGameWithWinner(currentPlayer.value);
    return;
  }

  saveGameSession();

  setTimeout(() => {
    nextPlayer();
  }, 1000);
};

const handleFailure = () => {
  if (actionInProgress.value || !currentPlayer.value || gameEnded.value) return;
  actionInProgress.value = true;

  // Bajar nivel y aumentar bebidas
  currentPlayer.value.level = Math.max(currentPlayer.value.level - 1, 1);
  currentPlayer.value.drinks += 1;
  currentPlayer.value.lastActive = new Date().toISOString();

  saveGameSession();

  setTimeout(() => {
    nextPlayer();
  }, 1000);
};

const nextPlayer = () => {
  if (players.value.length === 0 || gameEnded.value) return;
  currentPlayerIndex.value =
    (currentPlayerIndex.value + 1) % players.value.length;
  actionInProgress.value = false;
  saveGameSession();
};

const endGameWithWinner = (winnerPlayer: Player) => {
  gameEnded.value = true;
  winner.value = winnerPlayer;
  showVictoryModal.value = true;
  saveGameSession();
};

const formatGameTime = (startTime: string) => {
  const start = new Date(startTime);
  const now = new Date();
  const diffInMinutes = Math.floor(
    (now.getTime() - start.getTime()) / (1000 * 60)
  );

  if (diffInMinutes < 1) return "0 min";
  if (diffInMinutes < 60) return `${diffInMinutes} min`;
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = diffInMinutes % 60;
  return `${hours}h ${minutes}m`;
};

const exitGame = () => {
  const sessionId = route.query.sessionId as string;
  if (!sessionId) {
    router.push("/piramide");
    return;
  }

  const session: GameSession = {
    id: sessionId,
    players: players.value,
    gameMode: "piramide",
    createdAt: gameStartTime.value,
    lastPlayed: new Date().toISOString(),
    isActive: false,
    currentPlayerIndex: currentPlayerIndex.value,
    winner: winner.value || undefined,
    gameEnded: gameEnded.value,
  };

  localStorage.setItem("modo-caos-current-session", JSON.stringify(session));
  router.push("/piramide");
};

const endGame = () => {
  localStorage.removeItem("modo-caos-current-session");
  router.push("/piramide");
};

const restartGame = () => {
  // Reiniciar todos los jugadores
  players.value.forEach((player) => {
    player.level = 1;
    player.drinks = 0;
    player.maxLevel = 1;
    player.lastActive = new Date().toISOString();
  });

  currentPlayerIndex.value = 0;
  gameEnded.value = false;
  winner.value = null;
  showVictoryModal.value = false;
  gameStartTime.value = new Date().toISOString();

  saveGameSession();
};

// Auto-save cada 30 segundos
let saveInterval: NodeJS.Timeout;

onMounted(() => {
  console.log("Mounted juego.vue");
  loadGameSession();
  saveInterval = setInterval(saveGameSession, 30000);
});

onUnmounted(() => {
  if (saveInterval) {
    clearInterval(saveInterval);
  }
});

// Watch para detectar cambios en el array de jugadores
watch(
  players,
  () => {
    if (players.value.length === 0) {
      router.push("/piramide");
    }
  },
  { deep: true }
);
</script>

<style scoped>
/* Animaciones para las transiciones */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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

/* Efecto de pulso para el jugador actual */
@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
  }
}

.pulse-glow {
  animation: pulse-glow 2s infinite;
}
</style>
