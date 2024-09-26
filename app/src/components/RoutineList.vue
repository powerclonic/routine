<template>
  <v-container>
    <p class="text-h5">
      {{ $t('titles.quickAccess') }}
    </p>
    <day-card weekday="friday" />
    <v-divider class="my-4" />
    <p class="text-h5">
      {{ $t('titles.allDays') }}
    </p>
    <day-card :activities="2" weekday="sunday" />
    <day-card :activities="2" weekday="monday" />
    <day-card :activities="2" weekday="tuesday" />
    <day-card :activities="2" weekday="wednesday" />
    <day-card :activities="2" weekday="thursday" />
    <day-card :activities="2" weekday="friday" />
    <day-card :activities="2" weekday="saturday" />

  </v-container>
</template>
