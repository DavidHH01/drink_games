<template>
  <Modal
    :model-value="visible"
    @update:model-value="$emit('close')"
    :size="ModalSize.LARGE"
    class="z-50"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <div
          class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center"
        >
          <MdiIcon icon="mdiNotebook" class="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 class="text-xl font-bold text-gray-900">
            {{ $t("patchNotes.title") }}
          </h2>
          <p class="text-sm text-gray-600">{{ $t("patchNotes.subtitle") }}</p>
        </div>
      </div>
    </template>

    <template #default>
      <div class="space-y-8">
        <!-- Última actualización -->
        <div>
          <Card
            :size="CardSize.FULL"
            class="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"
          >
            <CardBody :padding="CardSize.LARGE" class="p-6">
              <!-- Header de la versión -->
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <MdiIcon
                      icon="mdiRocketLaunch"
                      class="w-5 h-5 text-white"
                    />
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-blue-900">
                      {{ $t("patchNotes.v1_0_0.version") }}
                    </h3>
                    <p class="text-sm text-blue-700">
                      {{ $t("patchNotes.v1_0_0.date") }}
                    </p>
                  </div>
                </div>
                <div
                  class="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full font-semibold"
                >
                  {{ $t("patchNotes.v1_0_0.type") }}
                </div>
              </div>

              <!-- Descripción -->
              <p class="text-blue-800 mb-6 leading-relaxed">
                {{ $t("patchNotes.v1_0_0.description") }}
              </p>

              <!-- Lista de cambios -->
              <div class="space-y-4">
                <!-- Nuevas características -->
                <div>
                  <h4
                    class="flex items-center gap-2 font-semibold text-green-700 mb-3"
                  >
                    <MdiIcon icon="mdiPlusCircle" class="w-4 h-4" />
                    {{ $t("patchNotes.sections.new") }}
                  </h4>
                  <ul class="space-y-2 pl-6">
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.new.0") }}</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.new.1") }}</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.new.2") }}</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.new.3") }}</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.new.4") }}</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.new.5") }}</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.new.6") }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Mejoras -->
                <div>
                  <h4
                    class="flex items-center gap-2 font-semibold text-blue-700 mb-3"
                  >
                    <MdiIcon icon="mdiTune" class="w-4 h-4" />
                    {{ $t("patchNotes.sections.improvements") }}
                  </h4>
                  <ul class="space-y-2 pl-6">
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.improvements.0") }}</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.improvements.1") }}</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.improvements.2") }}</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.improvements.3") }}</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.improvements.4") }}</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.improvements.5") }}</span>
                    </li>
                  </ul>
                </div>
                <!-- Correcciones -->
                <div>
                  <h4
                    class="flex items-center gap-2 font-semibold text-orange-700 mb-3"
                  >
                    <MdiIcon icon="mdiWrench" class="w-4 h-4" />
                    {{ $t("patchNotes.sections.fixes") }}
                  </h4>
                  <ul class="space-y-2 pl-6">
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.fixes.0") }}</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.fixes.1") }}</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.fixes.2") }}</span>
                    </li>
                    <li class="flex items-start gap-2 text-sm text-gray-700">
                      <div
                        class="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"
                      ></div>
                      <span>{{ $t("patchNotes.v1_0_0.fixes.3") }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <!-- Próximas actualizaciones -->
        <Card
          :size="CardSize.FULL"
          class="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200"
        >
          <CardBody :padding="CardSize.LARGE" class="p-6">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <MdiIcon icon="mdiClockOutline" class="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-purple-900">
                  {{ $t("patchNotes.upcoming.title") }}
                </h3>
                <p class="text-sm text-purple-700">
                  {{ $t("patchNotes.upcoming.subtitle") }}
                </p>
              </div>
            </div>

            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-sm text-purple-800">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>{{ $t("patchNotes.upcoming.features.0") }}</span>
              </li>
              <li class="flex items-center gap-3 text-sm text-purple-800">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>{{ $t("patchNotes.upcoming.features.1") }}</span>
              </li>
              <li class="flex items-center gap-3 text-sm text-purple-800">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>{{ $t("patchNotes.upcoming.features.2") }}</span>
              </li>
            </ul>

            <div class="mt-6 p-4 bg-purple-200/50 rounded-lg">
              <p class="text-xs text-purple-700 flex items-center gap-2">
                <MdiIcon icon="mdiInformation" class="w-4 h-4" />
                {{ $t("patchNotes.upcoming.note") }}
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </template>
  </Modal>
</template>

<script setup lang="ts">
interface Props {
  visible: boolean;
}

defineProps<Props>();
defineEmits<{
  close: [];
}>();

const formatDate = (date: Date) => {
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>
