<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Debora Barbosa Silva Camargo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded @click="toggleTheme">Toggle theme</v-btn>
    </v-app-bar>
    <hello-world/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.themes.dark.anchor = '#41B883'
      // this.$vuetify.theme.themes.dark = !this.$vuetify.theme.themes.dark
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
};
</script>
