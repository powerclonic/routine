<template>
  <div class="d-flex flex-column ga-2 w-100">
    <v-btn :to="{ name: 'SignIn' }" variant="flat">Entrar</v-btn>
    <v-btn :to="{ name: 'SignUp' }" variant="outlined">Cadastrar</v-btn>
  </div>
</template>
