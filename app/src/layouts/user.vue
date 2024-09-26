<template>
  <v-app>
    <v-main>
      <router-view />
      <v-bottom-navigation class="position-fixed" color="primary" grow>
        <v-btn :to="{ name: 'Home'}" value="Home">
          <v-icon icon="mdi-inbox-outline" />
          <span>Início</span>
        </v-btn>
        <v-btn :to="{ name: 'Routines'}" value="Routines">
          <v-icon icon="mdi-view-list-outline" />
          <span>Rotinas</span>
        </v-btn>
        <v-btn :to="{ name: 'Profile'}" value="Profile">
          <v-icon icon="mdi-account-outline" />
          <span>Perfil</span>
        </v-btn>
      </v-bottom-navigation>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//

</script>
