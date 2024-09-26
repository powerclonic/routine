<template>
  <v-form class="w-100">
    <h2 class="text-body-1 text-secondary text-center mb-4">Olá! Para começar, faça seu cadastro.</h2>
    <v-text-field autocomplete="full-name" label="Nome Completo" type="text" />
    <v-text-field autocomplete="email" label="E-mail" type="email" />
    <v-text-field
      autocomplete="password"
      label="Senha"
      type="password"
    />
    <v-text-field
      autocomplete="retype-password"
      label="Confirmar senha"
      type="password"
    />
  </v-form>
  <div class="d-flex flex-column ga-2 w-100">
    <v-btn variant="flat">Cadastrar</v-btn>
    <v-btn :to="{ name: 'SignIn'}" variant="outlined">Já tenho cadastro</v-btn>
  </div>
</template>
