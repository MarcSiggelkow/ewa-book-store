<template>
    <Carousel />
    <Latest />
</template>

<script>
import Carousel from '../components/HomePage/HeroCarousel.vue'
import Latest from '../components/HomePage/LatesProducts.vue'
export default {
  components: {
    Carousel,
    Latest
  }
}
</script>
