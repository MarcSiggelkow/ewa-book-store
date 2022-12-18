<template>
  <v-footer
    color="blue lighten-1"
    padless
  >
    <v-row
      justify="center"
      class="my-4 text-center"
      no-gutters
    >
    <v-col cols="12">
          <v-tab
          color="white"
            href="#"
            v-for="link in links"
            :key="link"
            dark
            >{{ link }}
          </v-tab>
      </v-col>
      <v-col cols="12"></v-col>
        <v-card-text class="text-center">
          Alle Produkte und Personen, die mit Bücher König in Verbindung gebracht werden, sind fiktiv. Jede Ähnlichkeit mit realen
          Marken, Produkten oder Personen ist rein zufällig. Die Informationen über das Produkt sind
          sind ebenfalls fiktiv und sollten nicht als repräsentativ für die tatsächlich auf dem Markt befindlichen Produkte
          in einer ähnlichen Produktkategorie gehalten werden.
        </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
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
    ],
    links: [
      'Home',
      'Über Uns',
      'Team',
      'Impressum',
      'Datenschutz',
      'Kontakt'
    ]
  })
}
</script>
