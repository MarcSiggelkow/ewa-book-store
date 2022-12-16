<template>
    <ContactForm />
</template>

<script>
import ContactForm from '../components/ContactPage/ContactForm.vue'
import axios from 'axios'
export default {
  components: {
    ContactForm
  },
  mounted () {
    // ToDo
    // wie man Ereignisse empfängt und sendet
    // Echo.channel('public')
    //     .listen('TestEvent', (e) => {
    //       alert(e.message)
    //     });
    //  console.log(process.env.VUE_APP_HOST_BACKEND)
    // axios.get(`${process.env.VUE_APP_HOST_BACKEND}/`).then(res => {
    //
    // }).catch(error => {
    //   console.log("Ein Fehler ist aufgetreten!")
    // })
  }
}
</script>
