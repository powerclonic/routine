<template>
  <v-container class="pa-4">
    <p class="text-h5">
      {{ $t('titles.dailyNotes') }}
    </p>
    <p class="text-subtitle-2 text-secondary">{{ $t('subtitles.dailyNotes') }}</p>
    <v-textarea
      class="mt-2 elevation-0"
      no-resize
      rows="6"
      variant="solo-filled"
    />
  </v-container>
</template>
