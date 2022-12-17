<template>
  <v-footer
    color="blue darken-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-card-text class="text-center">
        Alle Produkte und Personen, die mit Bücher König in Verbindung gebracht werden, sind fiktiv. Jede Ähnlichkeit mit realen
        Marken, Produkten oder Personen ist rein zufällig. Die Informationen über das Produkt sind
        sind ebenfalls fiktiv und sollten nicht als repräsentativ für die tatsächlich auf dem Markt befindlichen Produkte
        in einer ähnlichen Produktkategorie gehalten werden.

      <v-divider></v-divider>
      </v-card-text>
      <v-col
        class="blue darken-1 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Made with &#10084; by Alex, Alina &#38; Marc</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>
