<template>
  <v-app>
    <AppHeader />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Badges />
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from './components/Navigation/AppHeader.vue'
import AppFooter from './components/Navigation/AppFooter'
import Badges from './components/HomePage/TrustBadges.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    Badges
  }
}
</script>

<style scoped>
</style>
