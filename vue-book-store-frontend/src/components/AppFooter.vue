<template>
    <footer>
      <p>Copyright &copy; {{year}} Made with &#10084; by Alex, Alina &#38; Marc </p>
    </footer>
</template>

<script>
// Script to define the current year
import { computed } from 'vue'
export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
    return { year }
  }
}
</script>

<style lang="scss">

footer {
  padding-top: 10vh;

  p {
    font-weight: bold;
    color: #000000;
  }
}
</style>
