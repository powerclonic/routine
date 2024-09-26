<template>
  <v-container class="pa-4">
    <p class="text-h5">
      {{ $t('titles.generalProgress') }}
    </p>
    <p class="text-subtitle-2 text-secondary">{{ $t('subtitles.generalProgress') }}</p>

    <p class="text-subtitle-2 mt-2">{{ $t('labels.progress.week') }} - {{ `${weekProgress}%` }} </p>
    <v-progress-linear color="primary" :height="6" :model-value="weekProgress" rounded="large" />
    <p class="text-subtitle-2 mt-2">{{ $t('labels.progress.month') }} - {{ `${monthProgress}%` }} </p>
    <v-progress-linear color="primary" :height="6" :model-value="monthProgress" rounded="large" />
    <p class="text-subtitle-2 mt-2">{{ $t('labels.progress.year') }} - {{ `${yearProgress}%` }} </p>
    <v-progress-linear color="primary" :height="6" :model-value="yearProgress" rounded="large" />
  </v-container>
</template>

<script setup lang="ts">
  import { getDate, getDay, getDayOfYear, getDaysInMonth, getDaysInYear } from 'date-fns'

  const currentDate = new Date()

  const weekProgress = Math.ceil((getDay(currentDate) + 1) * 100 / 7)
  const monthProgress = Math.ceil(getDate(currentDate) * 100 / getDaysInMonth(currentDate))
  const yearProgress = Math.ceil(getDayOfYear(currentDate) * 100 / getDaysInYear(currentDate))

</script>
