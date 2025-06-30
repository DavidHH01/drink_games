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
          MODO
          <span
            class="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse"
            >SISTEMA</span
          >
        </h1>
        <p
          class="text-xl md:text-2xl text-secondary mb-4 animate-fade-in-up animation-delay-300"
        >
          Juego multijugador online
        </p>
      </div>

      <!-- Card principal de configuración -->
      <div class="max-w-md mx-auto animate-fade-in-up animation-delay-700">
        <Card
          class="group hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200 overflow-hidden"
        >
          <!-- Header con gradiente azul como en index -->
          <div class="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>

          <CardBody :padding="CardSize.LARGE" class="p-8">
            <!-- Header de la card -->
            <div class="text-center mb-8">
              <div
                class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300"
              >
                <MdiIcon icon="mdiServerNetwork" class="w-8 h-8 text-white" />
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-2">
                Conectar al Sistema
              </h2>
              <p class="text-gray-600">Crea o únete a una sala de juego</p>
            </div>

            <div class="space-y-6">
              <!-- Input de nombre -->
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">
                  <MdiIcon icon="mdiAccount" class="w-4 h-4 inline mr-2" />
                  Nombre del jugador
                </label>
                <Input
                  v-model="name"
                  :variant="InputVariant.INFO"
                  :size="InputSize.LARGE"
                  :radius="InputRadius.LARGE"
                  placeholder="Tu nombre"
                  clearable
                  :maxlength="20"
                  :error="nameError"
                  class="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <!-- Selector de modo mejorado -->
              <div class="space-y-4">
                <h3
                  class="text-lg font-semibold text-gray-900 flex items-center gap-2"
                >
                  <MdiIcon icon="mdiGamepad" class="w-5 h-5 text-blue-500" />
                  Modo de juego
                </h3>

                <div class="grid grid-cols-2 gap-3">
                  <!-- Crear Sala - Verde (positivo/crear) -->
                  <button
                    @click="setMode('create')"
                    :class="[
                      'group p-4 rounded-xl border-2 transition-all duration-300 text-left relative overflow-hidden',
                      mode === 'create'
                        ? 'border-green-500 bg-gradient-to-br from-green-50 to-green-100 shadow-lg scale-105'
                        : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-md hover:scale-102',
                    ]"
                  >
                    <!-- Gradiente de fondo activo -->
                    <div
                      v-if="mode === 'create'"
                      class="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10"
                    ></div>

                    <div class="relative">
                      <div class="flex items-center gap-3 mb-3">
                        <div
                          :class="[
                            'w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300',
                            mode === 'create'
                              ? 'bg-gradient-to-br from-green-500 to-green-600 shadow-lg'
                              : 'bg-gray-100 group-hover:bg-green-100',
                          ]"
                        >
                          <MdiIcon
                            icon="mdiPlus"
                            :class="[
                              'w-5 h-5 transition-colors duration-300',
                              mode === 'create'
                                ? 'text-white'
                                : 'text-gray-600 group-hover:text-green-600',
                            ]"
                          />
                        </div>
                        <span
                          :class="[
                            'font-bold text-lg transition-colors duration-300',
                            mode === 'create'
                              ? 'text-green-700'
                              : 'text-gray-800 group-hover:text-green-600',
                          ]"
                        >
                          Crear Sala
                        </span>
                        <!-- Check icon when selected -->
                        <MdiIcon
                          v-if="mode === 'create'"
                          icon="mdiCheck"
                          class="w-5 h-5 text-green-600 ml-auto"
                        />
                      </div>
                      <p class="text-sm text-gray-600 leading-relaxed">
                        Crea una nueva sala y sé el anfitrión
                      </p>
                    </div>
                  </button>

                  <!-- Unirse a Sala - Azul (consistente con el tema) -->
                  <button
                    @click="setMode('join')"
                    :class="[
                      'group p-4 rounded-xl border-2 transition-all duration-300 text-left relative overflow-hidden',
                      mode === 'join'
                        ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg scale-105'
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:scale-102',
                    ]"
                  >
                    <!-- Gradiente de fondo activo -->
                    <div
                      v-if="mode === 'join'"
                      class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10"
                    ></div>

                    <div class="relative">
                      <div class="flex items-center gap-3 mb-3">
                        <div
                          :class="[
                            'w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300',
                            mode === 'join'
                              ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg'
                              : 'bg-gray-100 group-hover:bg-blue-100',
                          ]"
                        >
                          <MdiIcon
                            icon="mdiAccountMultiple"
                            :class="[
                              'w-5 h-5 transition-colors duration-300',
                              mode === 'join'
                                ? 'text-white'
                                : 'text-gray-600 group-hover:text-blue-600',
                            ]"
                          />
                        </div>
                        <span
                          :class="[
                            'font-bold text-lg transition-colors duration-300',
                            mode === 'join'
                              ? 'text-blue-700'
                              : 'text-gray-800 group-hover:text-blue-600',
                          ]"
                        >
                          Unirse
                        </span>
                        <!-- Check icon when selected -->
                        <MdiIcon
                          v-if="mode === 'join'"
                          icon="mdiCheck"
                          class="w-5 h-5 text-blue-600 ml-auto"
                        />
                      </div>
                      <p class="text-sm text-gray-600 leading-relaxed">
                        Únete a una sala existente
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              <!-- Input de código de sala (solo si es join) -->
              <Transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-4"
              >
                <div v-if="mode === 'join'" class="space-y-2">
                  <label class="block text-sm font-semibold text-gray-700">
                    <MdiIcon icon="mdiDoor" class="w-4 h-4 inline mr-2" />
                    Código de la sala
                  </label>
                  <Input
                    v-model="roomId"
                    :variant="InputVariant.INFO"
                    :size="InputSize.LARGE"
                    :radius="InputRadius.LARGE"
                    placeholder="Código de sala"
                    clearable
                    :maxlength="10"
                    :error="roomError"
                    class="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </Transition>

              <!-- Información contextual -->
              <div
                :class="[
                  'rounded-xl p-4 border transition-all duration-300',
                  mode === 'create'
                    ? 'bg-green-50 border-green-200'
                    : 'bg-blue-50 border-blue-200',
                ]"
              >
                <div class="flex items-center gap-3 mb-3">
                  <div
                    :class="[
                      'w-8 h-8 rounded-lg flex items-center justify-center',
                      mode === 'create' ? 'bg-green-100' : 'bg-blue-100',
                    ]"
                  >
                    <MdiIcon
                      icon="mdiInformation"
                      :class="[
                        'w-4 h-4',
                        mode === 'create' ? 'text-green-600' : 'text-blue-600',
                      ]"
                    />
                  </div>
                  <h4
                    :class="[
                      'font-semibold',
                      mode === 'create' ? 'text-green-700' : 'text-blue-700',
                    ]"
                  >
                    {{
                      mode === "create"
                        ? "Información para crear:"
                        : "Información para unirse:"
                    }}
                  </h4>
                </div>

                <ul
                  :class="[
                    'text-sm space-y-1 pl-2',
                    mode === 'create' ? 'text-green-800' : 'text-blue-800',
                  ]"
                >
                  <li v-if="mode === 'create'" class="flex items-start gap-2">
                    <div
                      class="w-1 h-1 bg-current rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span>Se generará un código automáticamente</span>
                  </li>
                  <li v-if="mode === 'create'" class="flex items-start gap-2">
                    <div
                      class="w-1 h-1 bg-current rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span>Serás el anfitrión de la sala</span>
                  </li>
                  <li v-if="mode === 'join'" class="flex items-start gap-2">
                    <div
                      class="w-1 h-1 bg-current rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span>Necesitas el código de la sala</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <div
                      class="w-1 h-1 bg-current rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span>Máximo 8 jugadores por sala</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <div
                      class="w-1 h-1 bg-current rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <span>Mínimo 2 jugadores para comenzar</span>
                  </li>
                </ul>
              </div>

              <!-- Botón de acción -->
              <Button
                :variant="mode === 'create' ? ButtonVariant.SUCCESS : ButtonVariant.INFO"
                :size="ButtonSize.LARGE"
                :icon="mode === 'create' ? 'mdiPlus' : 'mdiLogin'"
                :icon-position="ButtonIconPosition.LEFT"
                :disabled="!canEnterRoom"
                :loading="loading"
                :class="[
                  'w-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
                  mode === 'create'
                    ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 border-green-600'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-blue-600',
                ].join(' ')"
                @click="goToRoom"
              >
                {{
                  mode === "create" ? "🚀 Crear Sala" : "🎮 Entrar a la Sala"
                }}
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>

      <!-- Información del sistema -->
      <div class="mt-12 animate-fade-in-up animation-delay-1000">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div
            class="text-center p-6 bg-white/95 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white transition-all duration-300 shadow-lg"
          >
            <div
              class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4"
            >
              <MdiIcon icon="mdiServerNetwork" class="w-6 h-6 text-blue-600" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Multijugador</h4>
            <p class="text-sm text-gray-600">Juega online con amigos</p>
          </div>

          <div
            class="text-center p-6 bg-white/95 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white transition-all duration-300 shadow-lg"
          >
            <div
              class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4"
            >
              <MdiIcon icon="mdiSyncCircle" class="w-6 h-6 text-blue-600" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Tiempo Real</h4>
            <p class="text-sm text-gray-600">Sincronización instantánea</p>
          </div>

          <div
            class="text-center p-6 bg-white/95 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white transition-all duration-300 shadow-lg"
          >
            <div
              class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4"
            >
              <MdiIcon icon="mdiAccountGroup" class="w-6 h-6 text-blue-600" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Hasta 8 jugadores</h4>
            <p class="text-sm text-gray-600">Diversión para grupos grandes</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Socket } from "socket.io-client";

const { $socket } = useNuxtApp();
const socket = $socket as Socket;

// Meta de la página
useHead({
  title: "Sistema - Modo Caos",
  meta: [
    {
      name: "description",
      content: "Sistema multijugador de Pirámide del Caos",
    },
  ],
});

// Estado reactivo
const router = useRouter();
const roomId = ref("");
const name = ref("");
const mode = ref<"create" | "join">("create");
const loading = ref(false);
const nameError = ref("");
const roomError = ref("");

// Computed
const canEnterRoom = computed(() => {
  const nameValid = name.value.trim().length >= 2 && !nameError.value;
  const roomValid =
    mode.value === "create" ||
    (roomId.value.trim().length >= 3 && !roomError.value);
  return nameValid && roomValid;
});

// Métodos
const setMode = (newMode: "create" | "join") => {
  mode.value = newMode;
  clearErrors();
  // Limpiar roomId si cambia a crear sala
  if (newMode === "create") {
    roomId.value = "";
  }
};

const clearErrors = () => {
  nameError.value = "";
  roomError.value = "";
};

const validateInputs = () => {
  clearErrors();

  if (name.value.trim().length < 2) {
    nameError.value = "El nombre debe tener al menos 2 caracteres";
    return false;
  }

  if (name.value.trim().length > 20) {
    nameError.value = "El nombre no puede tener más de 20 caracteres";
    return false;
  }

  // Validar nombre que no contenga caracteres especiales
  const validName = /^[a-zA-Z0-9\sÀ-ÿ]+$/.test(name.value.trim());
  if (!validName) {
    nameError.value =
      "El nombre solo puede contener letras, números y espacios";
    return false;
  }

  if (mode.value === "join") {
    if (roomId.value.trim().length < 3) {
      roomError.value = "El código de sala debe tener al menos 3 caracteres";
      return false;
    }

    if (roomId.value.trim().length > 10) {
      roomError.value = "El código de sala no puede tener más de 10 caracteres";
      return false;
    }

    // Validar que solo contenga letras y números
    const validRoom = /^[a-zA-Z0-9]+$/.test(roomId.value.trim());
    if (!validRoom) {
      roomError.value = "El código solo puede contener letras y números";
      return false;
    }
  }

  return true;
};

const generateRoomId = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const goToRoom = async () => {
  if (!validateInputs()) return;

  loading.value = true;

  try {
    if (mode.value === "create" && !roomId.value.trim()) {
      roomId.value = "WAIT"; // o vacío, porque se actualizará con la respuesta del servidor
    }
    if (mode.value === "create") {
      // Emitir la creación de sala al servidor
      socket.emit("create_room", { playerName: name.value.trim() });

      // Esperar la respuesta del servidor con el roomId y player
      await new Promise((resolve, reject) => {
        socket.once("room_created", ({ roomId: newRoomId, player }) => {
          roomId.value = newRoomId;
          // Aquí podrías guardar player info si quieres
          resolve(true);
        });
        // timeout por si no responde el servidor
        setTimeout(() => reject(new Error("Timeout creando sala")), 5000);
      });
    }

    // Simular delay de conexión
    await new Promise((resolve) => setTimeout(resolve, 500));

    await router.push({
      path: `/room/${roomId.value.trim().toUpperCase()}`,
      query: {
        name: encodeURIComponent(name.value.trim()),
        mode: mode.value,
      },
    });
  } catch (error) {
    console.error("Error al crear o navegar:", error);
    roomError.value = "Error al conectar con la sala";
  } finally {
    loading.value = false;
  }
};

// Watchers para validación en tiempo real
watch(name, () => {
  if (nameError.value) {
    clearErrors();
  }
});

watch(roomId, () => {
  if (roomError.value) {
    clearErrors();
  }
});
</script>

<style scoped>
.bg-white {
  background-color: white !important;
}
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
