<template>
  <v-app-bar :elevation="1" loading="true">
    <template #prepend>
      <v-btn icon="mdi-arrow-left" @click="$router.back()" />
    </template>
    <template #title>
      {{ $t('titles.newActivity') }}
    </template>
  </v-app-bar>
  <v-container class="d-flex flex-column justify-space-between h-100">
    <v-form>
      <p class="text-h5">
        {{ $t('titles.weekday') }}
      </p>
      <p class="text-subtitle-2 text-secondary">{{ $t('subtitles.weekday') }}</p>
      <v-chip-group column multiple>
        <v-chip color="primary" filter rounded="lg" variant="outlined">{{ $t('weekdays.sunday') }}</v-chip>
        <v-chip color="primary" filter rounded="lg" variant="outlined">{{ $t('weekdays.monday') }}</v-chip>
        <v-chip color="primary" filter rounded="lg" variant="outlined">{{ $t('weekdays.tuesday') }}</v-chip>
        <v-chip color="primary" filter rounded="lg" variant="outlined">{{ $t('weekdays.wednesday') }}</v-chip>
        <v-chip color="primary" filter rounded="lg" variant="outlined">{{ $t('weekdays.thursday') }}</v-chip>
        <v-chip color="primary" filter rounded="lg" variant="outlined">{{ $t('weekdays.friday') }}</v-chip>
        <v-chip color="primary" filter rounded="lg" variant="outlined">{{ $t('weekdays.saturday') }}</v-chip>
      </v-chip-group>
      <p class="text-h5 mt-2">
        {{ $t('titles.details') }}
      </p>
      <p class="text-subtitle-2 text-secondary mb-2">{{ $t('subtitles.details') }}</p>
      <v-text-field :hint="$t('labels.mandatory')" :label="$t('labels.title')" variant="outlined" />
      <v-text-field :hint="$t('labels.optional')" :label="$t('labels.description')" variant="outlined" />
      <v-text-field :hint="$t('labels.mandatory')" :label="$t('labels.time')" variant="outlined" />
      <v-switch color="primary" :hint="$t('messages.activities.replicated')" :label="$t('labels.weeklyActivity')" />
    </v-form>
    <v-sheet class="w-100 d-flex justify-end ga-2 ">
      <v-btn variant="outlined">Cancelar</v-btn>
      <v-btn variant="flat">Salvar</v-btn>
    </v-sheet>
  </v-container>
</template>

<route lang="yaml">
name: "New Activity"
meta:
    layout: user
</route>

<script setup lang="ts">
  const tab = ref('next')
</script>
