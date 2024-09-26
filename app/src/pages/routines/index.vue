<template>
  <v-app-bar :elevation="1">
    <v-toolbar-title class="ma-0">
      <h1 class="text-h4 font-weight-black text-primary text-center">
        Routine
      </h1>
    </v-toolbar-title>
  </v-app-bar>
  <routine-list />

</template>

  <route lang="yaml">
  name: "Routines"
  meta:
      layout: user
  </route>
