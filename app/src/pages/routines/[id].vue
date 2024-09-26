<template>
  <v-app-bar :elevation="1" loading="true">
    <template #prepend>
      <v-btn icon="mdi-arrow-left" @click="$router.back()" />
    </template>
    <template #title>
      Dia da semana
    </template>
  </v-app-bar>
  <v-tabs v-model="tab" grow>
    <v-tab value="next">{{ $t('labels.next') }}</v-tab>
    <v-tab value="all">{{ $t('labels.all') }}</v-tab>
  </v-tabs>
  <v-tabs-window v-model="tab">
    <v-tabs-window-item value="next">
      <next-day-activities />
    </v-tabs-window-item>
    <v-tabs-window-item value="all">
      <all-days-activities />
    </v-tabs-window-item>
  </v-tabs-window>
  <v-fab
    app
    class="mb-13"
    extended
    location="bottom end"
    prepend-icon="mdi-plus"
    size="large"
    variant="tonal"
  >
    Nova
  </v-fab>
</template>

<route lang="yaml">
name: "Routine Details"
meta:
    layout: user
</route>

<script setup lang="ts">
  const tab = ref('next')
</script>
