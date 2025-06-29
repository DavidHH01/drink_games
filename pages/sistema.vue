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
          MODO <span class="text-danger animate-pulse">SISTEMA</span>
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
                  <MdiIcon icon="mdiServerNetwork" class="w-6 h-6 text-white" />
                </div>
                <span class="text-2xl font-bold text-white">Conectar</span>
              </div>
            </template>
            <template #subtitle>
              <span class="text-gray-200"
                >Crea o únete a una sala de juego</span
              >
            </template>
          </CardHeader>

          <CardBody :padding="CardSize.LARGE">
            <div class="space-y-6">
              <!-- Inputs de configuración -->
              <div class="space-y-4">
                <Input
                  v-model="name"
                  :variant="InputVariant.ACCENT"
                  :size="InputSize.LARGE"
                  :radius="InputRadius.LARGE"
                  placeholder="Tu nombre"
                  label="Nombre del jugador"
                  icon="mdiAccount"
                  icon-position="left"
                  clearable
                  :maxlength="20"
                  :error="nameError"
                />

                <Input
                  v-if="mode === 'join'"
                  v-model="roomId"
                  :variant="InputVariant.ACCENT"
                  :size="InputSize.LARGE"
                  :radius="InputRadius.LARGE"
                  placeholder="Código de sala"
                  label="Código de la sala"
                  icon="mdiDoor"
                  icon-position="left"
                  clearable
                  :maxlength="10"
                  :error="roomError"
                />
              </div>

              <!-- Selector de modo -->
              <div class="space-y-3">
                <h4
                  class="text-lg font-semibold text-white flex items-center gap-2"
                >
                  <MdiIcon icon="mdiGamepad" class="w-5 h-5 text-info" />
                  Modo de juego
                </h4>

                <div class="grid grid-cols-2 gap-3">
                  <button
                    @click="setMode('create')"
                    :class="[
                      'p-4 rounded-lg border-2 transition-all duration-200 text-left',
                      mode === 'create'
                        ? 'border-red-500 bg-red-50 shadow-md'
                        : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100',
                    ]"
                  >
                    <div class="flex items-center gap-3 mb-2">
                      <MdiIcon
                        icon="mdiPlus"
                        :class="[
                          'w-5 h-5',
                          mode === 'create' ? 'text-red-600' : 'text-gray-600',
                        ]"
                      />
                      <span
                        :class="[
                          'font-medium',
                          mode === 'create' ? 'text-red-800' : 'text-gray-800',
                        ]"
                      >
                        Crear Sala
                      </span>
                    </div>
                    <p class="text-sm text-gray-600">
                      Crea una nueva sala para tus amigos
                    </p>
                  </button>

                  <button
                    @click="setMode('join')"
                    :class="[
                      'p-4 rounded-lg border-2 transition-all duration-200 text-left',
                      mode === 'join'
                        ? 'border-red-500 bg-red-50 shadow-md'
                        : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100',
                    ]"
                  >
                    <div class="flex items-center gap-3 mb-2">
                      <MdiIcon
                        icon="mdiAccountMultiple"
                        :class="[
                          'w-5 h-5',
                          mode === 'join' ? 'text-red-600' : 'text-gray-600',
                        ]"
                      />
                      <span
                        :class="[
                          'font-medium',
                          mode === 'join' ? 'text-red-800' : 'text-gray-800',
                        ]"
                      >
                        Unirse
                      </span>
                    </div>
                    <p class="text-sm text-gray-600">
                      Únete a una sala existente
                    </p>
                  </button>
                </div>
              </div>

              <!-- Información adicional según el modo -->
              <div class="bg-blue-50 rounded-lg p-4">
                <!-- Header con icono a la izquierda y texto centrado -->
                <div class="relative flex justify-center items-center mb-3">
                  <!-- Icono a la izquierda -->
                  <div class="absolute left-0">
                    <MdiIcon
                      icon="mdiInformation"
                      class="w-5 h-5 text-blue-600"
                    />
                  </div>

                  <!-- Título centrado -->
                  <p class="text-blue-600 font-medium text-center">
                    {{ mode === "create" ? "Crear sala:" : "Unirse a sala:" }}
                  </p>
                </div>

                <!-- Lista con puntos y texto alineado horizontal -->
                <ul class="text-sm text-blue-800 text-left pl-5 space-y-1">
                  <li v-if="mode === 'create'" class="list-disc">
                    Se generará un código automáticamente si no pones uno
                  </li>
                  <li v-if="mode === 'create'" class="list-disc">
                    Serás el anfitrión de la sala
                  </li>
                  <li v-if="mode === 'join'" class="list-disc">
                    Necesitas el código de la sala
                  </li>
                  <li class="list-disc">Máximo 8 jugadores por sala</li>
                  <li class="list-disc">Mínimo 2 jugadores para comenzar</li>
                </ul>
              </div>
            </div>
          </CardBody>

          <CardActions :align="CardActionsAlign.CENTER" class="pb-6">
            <Button
              :variant="ButtonVariant.INFO"
              :size="ButtonSize.EXTRA_LARGE"
              :icon="mode === 'create' ? 'mdiPlus' : 'mdiLogin'"
              :icon-position="ButtonIconPosition.LEFT"
              :disabled="!canEnterRoom"
              :loading="loading"
              class="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 border-green-600 hover:border-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              @click="goToRoom"
            >
              {{ mode === "create" ? "Crear Sala" : "Entrar a la Sala" }}
            </Button>
          </CardActions>
        </Card>
      </div>

      <!-- Información del sistema -->
      <div class="mt-12 animate-fade-in-up animation-delay-1000">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3"
            >
              <MdiIcon icon="mdiServerNetwork" class="w-6 h-6 text-red-600" />
            </div>
            <h4 class="font-semibold text-white mb-1">Multijugador</h4>
            <p class="text-sm text-gray-300">Juega online con amigos</p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3"
            >
              <MdiIcon icon="mdiSyncCircle" class="w-6 h-6 text-red-600" />
            </div>
            <h4 class="font-semibold text-white mb-1">Tiempo Real</h4>
            <p class="text-sm text-gray-300">Sincronización instantánea</p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3"
            >
              <MdiIcon icon="mdiAccountGroup" class="w-6 h-6 text-red-600" />
            </div>
            <h4 class="font-semibold text-white mb-1">Hasta 8 jugadores</h4>
            <p class="text-sm text-gray-300">Diversión para grupos grandes</p>
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
