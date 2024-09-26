<template>
  <v-sheet class="bg-surface border-thin rounded-lg d-flex">
    <v-container>
      <p class="text-h6 text-on-surface">{{ activity.title }}</p>
      <p class="text-subtitle-2 text-secondary">{{ activity.subtitle ?? $t('messages.activities.noDetails') }}</p>
    </v-container>
    <v-container
      class="bg-secondary w-25 d-flex align-center justify-center rounded-e-lg"
    >
      <p class="text-h6 font-weight-medium">{{ activity.time }}</p>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  defineProps({
    activity: {
      type: Object as PropType<any>,
      required: true,
    },
  })
</script>
