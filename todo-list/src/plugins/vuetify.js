import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { preset } from 'vue-cli-plugin-vuetify-preset-rally/preset'

Vue.use(Vuetify);

const options = {
  breakpoint: { scrollbarWidth: 12 },
  dark: true,
  theme: {
    themes: {
      light: {
        primary: '#41B883'
      },
      dark: {
        primary: '#34495E',
        anchor: '#fff' // for links
      },
    },
  },
}

export default new Vuetify({
  preset,
  // ...options
  ...options

});
