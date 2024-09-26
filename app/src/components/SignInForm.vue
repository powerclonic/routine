<template>
  <v-form class="w-100">
    <h2 class="text-body-1 text-secondary text-center mb-4">Olá novamente! É bom te ter de volta.</h2>
    <v-text-field autocomplete="current-email" label="E-mail" type="email" />
    <v-text-field
      autocomplete="current-password"
      label="Senha"
      type="password"
    />
  </v-form>
  <div class="d-flex flex-column ga-2 w-100">
    <v-btn variant="flat">Entrar</v-btn>
    <v-btn
      :to="{ name: 'SignUp' }"
      variant="outlined"
    >
      Não tenho cadastro
    </v-btn>
  </div>
</template>
