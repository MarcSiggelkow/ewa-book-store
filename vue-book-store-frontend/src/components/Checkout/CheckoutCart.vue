<template>
  <v-row v-if="cart == []">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <v-card title="Dein Warenkorb ist Leer!" text="Schau doch mal in unserem Shop vorbei, dort findest du sicherlich das passende Buch für dich!">
        <v-card-actions>
          <v-btn color="green" to="/ewa/g09/beleg/shop">Zum Shop</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-row>
  <v-row v-else no-gutters>
    <v-col cols="8">
      <v-sheet class="pa-2 ma-2">
        <v-container>
          <v-col>
            <v-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-center">PRODUKT</th>
                  <th class="text-center">PREIS</th>
                  <th class="text-center">MWST</th>
                  <th class="text-center">MENGE</th>
                  <th class="text-center">NETTO</th>
                  <th class="text-center">TOTAL</th>
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                </tr>
                </thead>
                <tbody>
                <tr
                v-for="item in cart"
                :key="item.ProduktID">
                  <td>
                    <v-list-item
                      :prepend-avatar="item.LinkGrafikdatei"
                      :title="item.Produkttitel.substring(0, 25)"
                      :subtitle="item.Autorname"
                    >
                  </v-list-item>
                </td>
                  <td>{{item.PreisNetto}}€</td>
                  <td>{{item.Mwstsatz}}%</td>
                  <td>{{item.quantity}}</td>
                  <td>{{(item.PreisNetto * item.quantity).toFixed(2)}}</td>
                  <td>{{((item.PreisNetto * item.quantity) * ((item.Mwstsatz/100) + 1)).toFixed(2)}}€</td>
                  <td><v-btn
                    color="green"
                    outlined
                    @click="addProductLocal(item)"
                  >
                    +
                  </v-btn></td>
                  <td><v-btn
                    color="green"
                    text
                    @click="removeItem(item)"
                  >
                    -
                  </v-btn></td>
                  <td><v-btn
                    color="red"
                    text
                    @click="removeAllItem(item)"
                  >
                    x
                  </v-btn></td>
                </tr>
                </tbody>
              </template>
            </v-table>
          </v-col>
        </v-container>
      </v-sheet>
    </v-col>
    <v-col cols="4">
      <v-sheet class="pa-2 ma-2">
        <v-col style="background-color: lightgray">
          <p class="headline">Bestell Zusammenfassung</p>
          <v-table>
            <template v-slot:default>
              <tbody>
              <tr>
                <td>Bestellung Zwischensumme</td>
                <td class="text-right" style="width: 50px;">{{countTotal()}}€</td>
              </tr>
              <tr>
                <td>Versandkosten</td>
                <td class="text-right" style="width: 50px;">3.99€</td>
              </tr>
              <tr>
                <td>Steuer</td>
                <td class="text-right" style="width: 50px;">{{countTax()}}€</td>
              </tr>
              <tr>
                <td>Total</td>
                <td class="text-right" style="width: 50px;"><b>{{countTotal()}}€</b></td>
              </tr>
              </tbody>
            </template>
          </v-table>
            <v-btn
            @click="createPayment()"
            color="green"
            class="white--text mt-5"
            outlined>JETZT BESTELLEN
          </v-btn>
        </v-col>
      </v-sheet>
    </v-col>
  </v-row>
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
    // Add item to Cart
    async createPayment () {
      const data = localStorage.getItem('cart')

      // set headers
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      try {
        await axios.post('http://ivm108.informatik.htw-dresden.de/ewa/g09/beleg/payment.php', data, config)
      } catch (err) {
        console.log(err)
      }
    },
    addProductLocal (item) {
      this.getCart()
      const existingItem = this.cart.find(i => i.Produktcode === item.Produktcode)
      if (existingItem) {
        // Increment quantity of existing item
        existingItem.quantity++
      } else {
        // Add new item to cart with quantity 1
        item.quantity = 1
        this.cart.push(item)
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    removeItem (item) {
    // Retrieve current cart from local storage
      this.getCart()
      // Find existing item in cart
      const existingItem = this.cart.find(i => i.Produktcode === item.Produktcode)
      if (existingItem) {
      // Decrement quantity of existing item
        existingItem.quantity--
        if (existingItem.quantity === 0) {
        // Remove item from cart if quantity is 0
          this.cart = this.cart.filter(i => i.Produktcode !== item.Produktcode)
        }
      }
      // Set updated cart in local storage
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    removeAllItem (item) {
    // Retrieve current cart from local storage
      this.getCart()
      // Find existing item in cart
      this.cart = this.cart.filter(i => i.Produktcode !== item.Produktcode)
      // Set updated cart in local storage
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    // Get Item out of cart
    getCart () {
      this.cart = JSON.parse(localStorage.getItem('cart')) || []
    },
    countTotal () {
    // Retrieve current cart from local storage
      // Initialize total to 0
      let total = 0
      // Loop through each item in cart
      for (const item of this.cart) {
      // Add Preisnetto of current item to total
        total += item.PreisNetto * item.quantity
      }
      // Return total
      return total.toFixed(2)
    },
    countTax () {
    // Retrieve current cart from local storage
      // Initialize total to 0
      let tax = 0
      // Loop through each item in cart
      for (const item of this.cart) {
      // Add Preisnetto of current item to total
        tax += ((item.PreisNetto * item.quantity) * (item.Mwstsatz / 100))
      }
      // Return total
      return tax.toFixed(2)
    }
  }
}
</script>
