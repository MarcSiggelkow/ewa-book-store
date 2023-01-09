<template>
  <v-container>
    <v-row>
      <v-text-field
            outlined
            label="Suche"
            v-model="searchQuery"
            placeholder="Suche nach Produkt"
            prepend-inner-icon="mdi-magnify"
            @input="search"
          ></v-text-field>
    </v-row>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Genre</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-combobox
            v-model="chips"
            :items="items"
            chips
            clearable
            label="Filter nach deinem Lieblings Genre"
            multiple
            prepend-icon="mdi-filter-variant"
            variant="solo"
          >
            <template v-slot:selection="{ attrs, item, select, selected }">
              <v-chip
                v-bind="attrs"
                :model-value="selected"
                closable
                @click="select"
                @click:close="remove(item)"
              >
                <strong>{{ item }}</strong>&nbsp;
                <span>(interest)</span>
              </v-chip>
            </template>
          </v-combobox>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
        <v-row>
          <v-col
            v-for="item in searchResults"
            :key="item.ProduktID"
            xl="2"
            lg="6"
            md="6"
            sm="6"
            sx="12"
            fluid
          >
            <v-card
            v-if="item.Lagerbestand > 1" :disabled="false"
            elevation="7"
            outlined>
              <v-img
              class="white--text align-end"
              height="200px"
              :src="item.LinkGrafikdatei"
              >
            </v-img>

            <v-card-title v-text="item.Produkttitel"></v-card-title>

            <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                {{Math.floor(Math.random() * (5 - 3 + 1) + 3)}} ({{Math.floor(Math.random() * (1000 - 200 + 1) + 200)}})
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              {{item.PreisNetto}} € • Genre: {{item.Genre}}
            </div>
            <div><b><u>Leseprobe:</u></b></div>
            <div>{{(item.Kurzinhalt).substring(0,100)}}...</div>
            <div>
              <v-btn
              color="green"
              class="white--text mt-5"
              text
              @click="addProductLocal(item)"
              >
                Zum Warenkorb hinzufügen
              </v-btn>
            </div>
            </v-card-text>
          </v-card>
          <!-- Else tree if we ran out of Stock -> disable card-->
          <v-card
            v-else :disabled="true"
            elevation="7"
            outlined>
              <v-img
              class="white--text align-end"
              height="200px"
              :src="item.LinkGrafikdatei"
              >
            </v-img>

            <v-card-title v-text="item.Produkttitel"></v-card-title>

            <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                4.5 (413)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              {{item.PreisNetto}} € • Genre: {{item.Genre}}
            </div>
            <div><b><u>Leseprobe:</u></b></div>
            <div>{{(item.Kurzinhalt).substring(0,100)}}...</div>
            </v-card-text>

            <v-card-actions>
              <div>Kein Bestand!</div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <v-btn
          color="green"
          variant="text"
          to="/ewa/g09/beleg/checkout"
          @click="snackbar = false"
        >
          Zum Warenkorb
        </v-btn>

      <template v-slot:actions>
        <v-btn
          color="green"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ProductList',
  data: () => {
    return {
      searchQuery: '',
      snackbar: false,
      snackbarText: '',
      timeout: 2000,
      counter: 0,
      products: [],
      searchResults: [],
      selected: [],
      chips: [],
      items: ['Krimi', 'Kalender', 'Psychothriller', 'Lehrbuch'],
      cart: []
    }
  },
  mounted: function () {
    this.getProducts()
    this.getCart()
  },
  methods: {
    // Get All Products
    async getProducts () {
      try {
        const response = await axios.get('https://ivm108.informatik.htw-dresden.de/ewa/g09/beleg:5000/products')
        this.products = response.data
        // Initial fill searchResults with input
        this.searchResults = this.products
      } catch (err) {
        console.log(err)
      }
    },
    // API Endpoint Operations
    // Add item to Cart
    async addProduct (product) {
      try {
        const response = await axios.post('https://ivm108.informatik.htw-dresden.de/ewa/g09/beleg:5000/addCart', product, { withCredentials: true })
        // Initial fill searchResults with input
        this.text = product.Produkttitel + ' zum Warenkorb hinzugefügt'
        this.cart = response.data
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
      this.text = (item.Produkttitel).substring(0, 25) + 'Zum Warenkorb hinzugefügt!'
      this.snackbar = true
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
    // Get Item out of cart
    getCart () {
      this.cart = JSON.parse(localStorage.getItem('cart')) || []
    },
    search () {
      this.searchResults = this.products.filter(product => {
        return product.Produkttitel.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    },
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    }
  }
}
</script>
