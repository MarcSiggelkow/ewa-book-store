<template>
  <v-app>
    <AppHeader @searchProducts="searchProducts" :cart="cart" :subtotalCart="subtotalCart" />/>
      <v-main>
        <router-view :products="filteredProducts" @addCart="addCart"></router-view>
      </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import axios from 'axios'
import AppHeader from './components/Navigation/AppHeader.vue'
import AppFooter from './components/Navigation/AppFooter'

export default {
  name: 'App',
  data: () => {
    return {
      pageLoaded: false,
      products: null,
      searchQuery: '',
      cart: []
    }
  },
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    subtotalCart: function () {
      let sum = 0
      // eslint-disable-next-line array-callback-return
      this.cart.map(p => {
        sum += parseInt(p.PreisNetto) * p.quantity
      })
      return sum
    },
    filteredProducts: function () {
      return this.products
        ? this.products.filter(p =>
          p.Produkttitel.toLowerCase().match(this.searchQuery.toLowerCase())
        )
        : this.products
    }
  },
  mounted: function () {
    this.cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []
    axios.get('https://hplussport.com/api/products/order/price').then(res => {
      this.products = res.data
    })
    setTimeout(() => (this.pageLoaded = true), 2000)
  },
  methods: {
    searchProducts: function (query) {
      this.searchQuery = query
    },
    addCart: function (products) {
      this.cart = products
      localStorage.setItem('cart', JSON.stringify(products))
    }
  }
}
</script>

<style scoped>
</style>
