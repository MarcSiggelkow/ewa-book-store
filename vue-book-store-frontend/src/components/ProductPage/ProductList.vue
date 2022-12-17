<template>
  <div class="container mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="item in products" :key="item.ProduktID " cols="12" xs="6" sm="4" md="3" lg="2">
          <v-skeleton-loader v-if="loadingProducts" type="image"></v-skeleton-loader>
          <v-card v-else>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">
                  <h6>{{item.Produkttitel}}</h6>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-img :src="item.LinkGrafikdatei" class="white--text align-end" height="200px"></v-img>
            <v-card-actions>
              <v-chip class="mr-2" color="green darken-1" dark>
                {{parseInt(item.PreisNetto).toFixed(2)}}
                <v-icon right small>mdi-currency-eur</v-icon>
              </v-chip>
              <v-spacer></v-spacer>
              <v-btn icon v-on:click="addToCart(item)">
                <v-icon>mdi-cart-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-fab-transition>
        <v-btn
          fab
          color="blue darken-1"
          v-scroll="onScrollBtn"
          v-show="showBtnScrollUp"
          @click="goToTop"
          dark
          fixed
          right
          bottom
        >
          <v-icon>mdi-arrow-up-bold</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-snackbar v-model="snackbar.visible" bottom :timeout="snackbar.timeout">
        {{ snackbar.text }}
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ProductList',
  data: () => {
    return {
      products: [],
      loadingProducts: true,
      cart: [],
      showBtnScrollUp: false,
      snackbar: {
        visible: false,
        timeout: 700,
        text: ''
      }
    }
  },
  watch: {
    cart: function () {
      this.$emit('addCart', this.cart)
    }
  },
  mounted: function () {
    this.getProducts()
    this.cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []
    setTimeout(() => (this.loadingProducts = false), 2000)
  },
  methods: {
    // Get All Products
    async getProducts () {
      try {
        const response = await axios.get('http://localhost:5000/products')
        this.products = response.data
      } catch (err) {
        console.log(err)
      }
    },
    goToTop: function () {
      this.$vuetify.goTo(0)
    },
    onScrollBtn: function (event) {
      this.showBtnScrollUp =
        (window.pageYOffset || event.target.scrollTop || 0) > 40
    },
    productAddedMessage: function () {
      this.snackbar.visible = true
      this.snackbar.text = 'Produkt zum Warenkorb hinzugefügt'
    },
    addToCart: function (item) {
      const indexProduct = this.cart.findIndex(p => p.ProduktID === item.ProduktID)
      if (indexProduct > -1) {
        const tempProduct = this.cart[indexProduct]
        this.cart.splice(indexProduct, 1)
        tempProduct.quantity++
        this.cart.push(tempProduct)
      } else {
        item.quantity = 1
        this.cart.push(item)
      }
      this.productAddedMessage()
    }
  }
}
</script>

<style>
.v-skeleton-loader__image {
  height: 308px;
}
</style>
