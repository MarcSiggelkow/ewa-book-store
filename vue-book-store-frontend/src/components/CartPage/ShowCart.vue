<template>
  <h1 align="center">Warenkorb</h1>
  <v-row>
    <v-col>
      <table id="cart">
        <thead>
        <tr>
          <th class="text-left">BILD</th>
          <th class="text-left">PRODUKT</th>
          <th class="text-left">MENGE</th>
          <th class="text-left">TOTAL</th>
        </tr>
        </thead>
        <tbody>
        <tr
        v-for="item in cart"
        :key="item.id">
          <td><v-img :src="item.LinkGrafikdatei"></v-img></td>
          <td><v-list-item-title >{{item.Produkttitel}}</v-list-item-title></td>
          <td>{{item.menge}}</td>
          <td>{{item.PreisNetto}}€</td>
        </tr>
        </tbody>
      </table>
    </v-col>
    <v-col>
      <h2>Zusammenfassung</h2>
          <p class="overline">Zusätzliche Kosten und Versand werden anhand Ihrer eingegebenen Daten erfasst.
          </p>
          <div style="padding:10px 0 10px 0;">
            <tbody id="cart">
            <tr>
              <td>Zwischensumme</td>
              <td class="text-right" style="width: 50px;">$160.00</td>
            </tr>
            <tr>
              <td>Versand</td>
              <td class="text-right" style="width: 50px;">$10.00</td>
            </tr>
            <tr>
              <td>Steuern</td>
              <td class="text-right" style="width: 50px;">$5.00</td>
            </tr>
            <tr>
              <td>Gesamt</td>
              <td class="text-right" style="width: 50px;"><b>$175.00</b></td>
            </tr>
            </tbody>
          </div>
          <div>
            <v-btn link to="/checkout" color="green" outlined>Jetzt Zahlen</v-btn>
          </div>
    </v-col>
  </v-row>
</template>
<script>
import axios from 'axios'

export default {
  name: 'CartList',
  data: () => {
    return {
      cart: []
    }
  },
  mounted: function () {
    this.fetchCart()
  },
  methods: {
    async fetchCart () {
      try {
        const response = await axios.get('http://localhost:5000/cart')
        this.cart = response.data
      } catch (err) {
        console.log(err)
      }
    }
  }
}

</script>

<style>
#cart {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#cart td, #cart th {
  border: 1px solid #ddd;
  padding: 8px;
}

#cart tr:nth-child(even){background-color: #f2f2f2;}

#cart tr:hover {background-color: #ddd;}

#cart th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #108afd;
  color: white;
}
</style>
