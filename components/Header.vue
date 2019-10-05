<template>
  <header>
    <h1>Where in the Word?</h1>
    <a @click="$store.commit('toggleDarkMode')">
      <template v-if="(!$store.state.darkMode)">
        <ion-icon name="moon" />
        Dark Mode
      </template>
      <template v-else>
        <ion-icon name="sunny" />
        Light Mode
      </template>
    </a>
  </header>
</template>
