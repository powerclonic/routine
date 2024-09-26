<template>
  <v-app-bar :elevation="1">
    <template #prepend>
      <v-btn icon="mdi-arrow-left" @click="$router.back()" />
    </template>
    <template #title>
      Configurações
    </template>
  </v-app-bar>
  <v-container>
    <p class="text-subtitle-2 text-secondary mb-2">Alterar e-mail</p>
    <v-text-field clearable label="Endereço de e-mail" variant="outlined" />
    <div class="d-flex justify-end ga-2">
      <v-btn variant="outlined">Cancelar</v-btn>
      <v-btn variant="flat">Alterar</v-btn>
    </div>
  </v-container>
  <v-container>
    <p class="text-subtitle-2 text-secondary mb-2">Alterar senha</p>
    <v-text-field label="Senha atual" variant="outlined" />
    <v-text-field label="Nova senha" variant="outlined" />
    <v-text-field label="Confirmar" variant="outlined" />
    <div class="d-flex justify-end ga-2">
      <v-btn variant="outlined">Cancelar</v-btn>
      <v-btn variant="flat">Alterar</v-btn>
    </div>
  </v-container>
  <v-container>
    <p class="text-subtitle-2 text-secondary mb-2">Aplicativo</p>
    <v-switch color="primary" label="Modo escuro" :model-value="$vuetify.theme.current.dark" @click="toggleDarkMode" />
  </v-container>
</template>

<route lang="yaml">
name: "Settings"
meta:
    layout: user
</route>

<script setup lang="ts">
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  const toggleDarkMode = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'routineLightTheme' : 'routineDarkTheme'
  }

</script>
