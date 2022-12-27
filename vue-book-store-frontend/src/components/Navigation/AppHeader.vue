<template>
  <div>
    <v-app-bar fixed app hide-on-scroll height="64" elevate-on-scroll>
      <v-app-bar-nav-icon class="hidden-md-and-up"/>
      <v-spacer />

      <template v-for="name in items" :key="name.title" >
          <v-btn
            depressed
            tile
            plain
            class="py-8 hidden-sm-and-down"
            :href="name.to"
            >
            {{ name.title }}
          </v-btn>
          </template
      ><v-spacer />
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn to="/checkout" icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn icon @click="changeThemeColor">
        <v-icon>{{
          $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'
        }}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-folder-home-outline',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-account',
          title: 'Über Uns',
          to: '/about'
        },
        {
          icon: 'mdi-cash-usd',
          title: 'Shop',
          to: '/shop'
        },
        {
          icon: 'mdi-tools',
          title: 'Services',
          to: '/services',
          submenu: [
            {
              title: 'Services Page',
              to: '/services'
            },
            {
              title: 'Static Websites',
              to: '/#'
            },
            {
              title: 'Mobile Applications',
              to: '/#'
            },
            {
              title: 'Corporate websites',
              to: '/#'
            },
            {
              title: 'Editorial Sites',
              to: '/#'
            },
            {
              title: 'Ecommerce and Store',
              to: '/#'
            },
            {
              title: 'Block Chain Devemopment',
              to: '/#'
            }
          ]
        },
        {
          icon: 'mdi-blogger',
          title: 'Blog',
          to: '/blog'
        },
        {
          icon: 'mdi-contacts',
          title: 'Contact',
          to: '/contact'
        }
      ]
    }
  },
  methods: {
    changeThemeColor () {
      if (this.$vuetify.theme.dark === true) {
        this.$vuetify.theme.dark = false
      } else {
        this.$vuetify.theme.dark = true
      }
    }
  }
}
</script>

<style scoped>
.submenubtn {
  cursor: default;
}
</style>
