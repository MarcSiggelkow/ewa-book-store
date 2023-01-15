<template>
  <v-container>
      <v-row>

          <v-card
              class="d-flex align-center justify-center pa-4 mx-auto"
              max-width="550"
              min-height="76"
              outlined
              >
              <div>
                 <h2>Neu eingetroffen</h2>
              </div>
          </v-card>
      </v-row>
      <v-row align="center"
        justify="center">
            <v-col
              v-for="item in latest"
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
                  @click="snackbar = true"
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
  </template>

<script>
import axios from 'axios'

export default {
  name: 'RecentProducts',
  data: () => {
    return {
      latest: []
    }
  },
  mounted: function () {
    this.getProducts()
  },
  methods: {
    // Get All Products
    async getProducts () {
      try {
        const response = await axios.get('http://ivm108.informatik.htw-dresden.de/ewa/g09/beleg/get.php')
        this.latest = response.data
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
