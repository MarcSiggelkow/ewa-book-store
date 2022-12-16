<template>
    <div>
        <div class="row">
          <SingleItem
            v-for="item in items"
            :key="item.ProduktID "
            :invId="item.ProduktID "
            :name="item.Produkttitel"
            :image="item.LinkGrafikdatei"
            :price="item.item.PreisNetto * ( 1 + ( item.Mwstsatz / 100)).toFixed(2)" />
        </div>
    </div>
</template>
<script>
// import axios
import axios from 'axios'
import SingleItem from './SingleItem.vue'
export default {
  components: {
    SingleItem
  },
  name: 'ProductList',
  data () {
    return {
      items: []
    }
  },
  methods: {
    // Get All Products
    async getProducts () {
      try {
        const response = await axios.get('http://localhost:5000/products')
        this.items = response.data
      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style>
img {
    height: 40vh;
}
</style>
