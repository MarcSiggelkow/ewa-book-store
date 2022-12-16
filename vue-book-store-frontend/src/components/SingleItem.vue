<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="LinkGrafikdatei" :alt="Produkttitel" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{ Produkttitel }}</h4>
        <div class="card-text">{{ PreisNetto }}</div>
        <div class="row justify-content-end">
          <button class="btn btn-primary">Zum Warenkorb hinzufügen</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleItem'
}
</script>
