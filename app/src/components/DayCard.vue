<template>
  <v-sheet>
    <v-card class="my-2 border-md" elevation="4">
      <template #prepend>
        <v-container class="bg-secondary pa-2 rounded-circle d-flex align-center justify-center" height="48" width="48">
          <p class="text-surface">{{ nextWeekdayDate }}</p>
        </v-container>
      </template>
      <template #title>
        <p>{{ $t(`weekdays.${weekday}`) }}</p>
      </template>
      <template #subtitle>
        <p class="text-secondary">{{ activities != null ? $t('messages.activities.planned', { count: activities }) : $t(`compliments.${dayPeriod}`) }}</p>
      </template>
      <template #append>
        <v-icon color="primary" icon="mdi-view-day" />
      </template>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  // types.ts
  export type Weekday = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

  const props = defineProps({
    weekday: {
      type: String as PropType<Weekday>,
      required: true,
    },
    activities: {
      type: Number,
      default: null,
    },
  })

  const dayPeriod = computed(() => {
    const hour = new Date().getHours()
    if (hour < 12) {
      return 'morning'
    }
    if (hour < 18) {
      return 'afternoon'
    }
    return 'night'
  })

  const nextWeekdayDate = computed(() => {
    const daysOfWeek: Weekday[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const today = new Date()
    const todayIndex = today.getDay()
    const targetIndex = daysOfWeek.indexOf(props.weekday)

    if (targetIndex === -1) {
      throw new Error('Invalid weekday')
    }

    const daysUntilNext = (targetIndex - todayIndex + 7) % 7
    const nextDate = new Date(today)
    nextDate.setDate(today.getDate() + daysUntilNext)

    return nextDate.getDate()
  })
</script>
