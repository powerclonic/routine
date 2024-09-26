<template>
  <v-container class="pa-4">
    <p class="text-h5">
      {{ $t('titles.todayActivities') }}
    </p>
    <p class="text-subtitle-2 text-secondary">{{ $t('subtitles.todayActivities') }}</p>
    <v-slide-group class="mt-2">
      <v-slide-group-item v-for="(activity, key) in activities" :key>
        <div class="mb-1 me-2">
          <v-card :color="!key ? 'secondary' : 'surface'" elevation="2">
            <template #title><p class="text-body-1 font-weight-semi-bold">{{ activity.title }}</p></template>
            <template #subtitle>{{ activity.time }}</template>
          </v-card>
        </div>
      </v-slide-group-item>
    </v-slide-group>
  </v-container>
</template>

<script setup lang="ts">
  const activities = [
    {
      title: 'Acordar',
      time: '07:00',
    },
    {
      title: 'Café da manhã',
      time: '07:10',
    },
    {
      title: 'Banho/se arrumar',
      time: '07:30',
    },
  ]
</script>
