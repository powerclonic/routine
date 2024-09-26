<template>
  <v-container class="d-flex flex-column ga-2" min-height="100%">
    <article>
      <p class="text-h5">
        {{ $t('titles.allDaysActivities') }}
      </p>
      <p class="text-subtitle-2 text-secondary">{{ $t('subtitles.allDaysActivities') }}</p>
    </article>
    <activity-card v-for="(activity, key) in activities" :key :activity />
    <v-container v-if="activities.length === 0" class="d-flex flex-column align-center">
      <v-sheet class="pa-4 bg-outline-variant rounded-circle">
        <v-icon icon="mdi-broom" :size="72" />
      </v-sheet>
      <p class="text-caption mt-2">
        {{ $t('messages.activities.planned', { count: 0 }) }}
      </p>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
  const activities = [
    {
      title: 'Teste 1',
      subtitle: null,
      time: '07:00',
    },
    {
      title: 'Teste 2',
      subtitle: 'Subtitulo 1',
      time: '10:00',
    },
    {
      title: 'Teste 3',
      subtitle: null,
      time: '15:12',
    },
  ]
</script>
