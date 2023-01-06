import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import colors from 'vuetify/es5/util/colors'

Vue.useAttrs(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  theme: {
    themes: {
      light: {
        primary: colors.blue.base,
        secondary: colors.amber.base,
        accent: colors.grey.base,
        error: colors.yellow.base,
        warning: colors.red.base,
        info: colors.cyan.base,
        success: colors.green.base
      },
      dark: {
        primary: colors.blue.lighten3
      }
    }
  }
})
