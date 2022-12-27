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
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="green"
                outlined
              >
                Kaufen
              </v-btn>

              <v-btn
                color="green lighten-4"
                text
                @click="addProduct(item)"
              >
                Zum Warenkorb
              </v-btn>
            </v-card-actions>
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
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

          <v-row><h1>Warenkorb:</h1></v-row>
            <v-row>
              <v-col
                v-for="item in cart"
                :key="item.ProduktID"
                xl="2"
                lg="6"
                md="6"
                sm="6"
                sx="12"
                fluid
              >
                <v-card
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
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    color="green"
                    outlined
                  >
                    Kaufen
                  </v-btn>

                  <v-btn
                    color="green lighten-4"
                    text
                    @click="addProduct(item)"
                  >
                    Zum Warenkorb
                  </v-btn>
                </v-card-actions>
              </v-card>
              </v-col>
          </v-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ProductList',
  data: () => {
    return {
      searchQuery: '',
      snackbar: false,
      text: '',
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
  },
  methods: {
    // Get All Products
    async getProducts () {
      try {
        const response = await axios.get('http://localhost:5000/products')
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
        const response = await axios.post('http://localhost:5000/addCart', product, { withCredentials: true })
        // Initial fill searchResults with input
        this.text = response.Produkttitel + 'zum Warenkorb hinzugefügt'
        try {
          const apiCart = await axios.get('http://localhost:5000/getCart', { withCredentials: true })
          // Initial fill searchResults with input
          this.cart = apiCart.data
        } catch (err) {
          console.log(err)
        }
      } catch (err) {
        console.log(err)
      }
    },
    // Get Item out of cart
    async getCart () {
      try {
        const response = await axios.get('http://localhost:5000/getCart', { withCredentials: true })
        // Initial fill searchResults with input
        this.cart = response.data
      } catch (err) {
        console.log(err)
      }
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
