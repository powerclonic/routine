<template>
  <v-app-bar :elevation="1">
    <v-toolbar-title class="ma-0">
      <h1 class="text-h4 font-weight-black text-primary text-center">
        Routine
      </h1>
    </v-toolbar-title>
  </v-app-bar>
  <v-container class="h-100 d-flex flex-column justify-space-between">
    <profile-picture />
    <profile-actions />
  </v-container>
</template>

<route lang="yaml">
name: "Profile"
meta:
    layout: user
</route>
