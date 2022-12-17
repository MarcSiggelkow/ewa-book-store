<template>
    <v-main>
      <Shop :products="filteredProducts" @addCart="addCart"/>
    </v-main>
</template>

<script>
import axios from 'axios'
import Shop from '../components/ProductPage/ProductList.vue'
export default {
  name: 'ShopPage',
  data: () => {
    return {
      pageLoaded: false,
      products: null,
      searchQuery: '',
      cart: []
    }
  },
  components: {
    Shop
  },
  computed: {
    subtotalCart: function () {
      let sum = 0
      // eslint-disable-next-line array-callback-return
      this.cart.map(p => {
        sum += parseInt(p.price) * p.quantity
      })
      return sum
    },
    filteredProducts: function () {
      return this.products
        ? this.products.filter(p =>
          p.name.toLowerCase().match(this.searchQuery.toLowerCase())
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
