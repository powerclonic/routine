<template>
  <v-app-bar :elevation="1">
    <v-toolbar-title class="ma-0">
      <h1 class="text-h4 font-weight-black text-primary text-center">
        Routine
      </h1>
    </v-toolbar-title>
  </v-app-bar>
  <quick-access />
  <v-divider />
  <today-activities />
  <v-divider />
  <daily-notes />
  <v-divider />
  <general-progress />
</template>

<route lang="yaml">
name: "Home"
meta:
    layout: user
</route>
