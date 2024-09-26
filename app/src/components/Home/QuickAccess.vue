<template>
  <v-container class="pa-4">
    <p class="text-h5">
      {{ $t('titles.quickAccess') }}
    </p>
    <p class="text-subtitle-2 text-secondary">{{ $t('subtitles.quickAccess') }}</p>
    <day-card :activities="1" weekday="friday" />
    <p class="text-subtitle-2">{{ $t('labels.progress.day') }} - {{ `${dayProgress}%` }} </p>
    <v-progress-linear color="primary" :height="6" :model-value="dayProgress" rounded="large" />
  </v-container>
</template>

<script setup lang="ts">

  const dayProgress = computed(() => {
    return Math.ceil(new Date().getHours() * 100 / 24)
  })

</script>
