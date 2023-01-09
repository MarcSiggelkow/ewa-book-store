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
            :to="name.to"
            >
            {{ name.title }}
          </v-btn>
          </template
      ><v-spacer />
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn to="/ewa/g09/beleg/checkout" class="text-none" stacked>
        <v-badge :content="cart.length" color="green">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
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
      cart: [],
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-folder-home-outline',
          title: 'Home',
          to: '/ewa/g09/beleg/'
        },
        {
          icon: 'mdi-account',
          title: 'Über Uns',
          to: '/ewa/g09/beleg/about'
        },
        {
          icon: 'mdi-cash-usd',
          title: 'Shop',
          to: '/ewa/g09/beleg/shop'
        },
        {
          icon: 'mdi-tools',
          title: 'Services',
          to: '/ewa/g09/beleg/services'
        },
        {
          icon: 'mdi-blogger',
          title: 'Blog',
          to: '/ewa/g09/beleg/blog'
        },
        {
          icon: 'mdi-contacts',
          title: 'Contact',
          to: '/ewa/g09/beleg/contact'
        }
      ]
    }
  },
  mounted: function () {
    this.getCart()
  },
  methods: {
    // Get Item out of cart
    getCart () {
      this.cart = JSON.parse(localStorage.getItem('cart')) || []
    },
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
