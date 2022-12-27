<template>
      <v-navigation-drawer
        fixed
        temporary
      >
        <!--  -->
      </v-navigation-drawer>

      <v-main class="grey lighten-2">
        <v-container>
          <v-row>
            <template v-for="n in cart" :key="n.ProduktID">
              <v-col
                class="mt-2"
                cols="12"
              >
                <strong>Category {{ n }}</strong>
              </v-col>

              <v-col
                v-for="j in 6"
                :key="`${n}${j}`"
                cols="6"
                md="2"
              >
                <v-sheet height="150"></v-sheet>
              </v-col>
            </template>
          </v-row>
        </v-container>
      </v-main>
  </template>

<script>
import axios from 'axios'
export default {
  name: 'CheckoutList',
  data: () => {
    return {
      cart: []
    }
  },
  mounted: function () {
    this.getCart()
  },
  methods: {
    async getCart () {
      try {
        const response = await axios.get('http://localhost:5000/getCart', { withCredentials: true })
        this.cart = response.data
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
