<template>
  <div class="ui container" id="cards">
    <div class="ui doubling three column grid">
      <CardItem v-for="(server, index) in servers" :key="index" :server="server"></CardItem>
    </div>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";

export default {
  name: "Card",
  props: ["servers"],
  components: {
    CardItem
  }
}
</script>

<style scoped>
#cards {
  padding-top: 3.4rem;
  padding-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  #cards .column {
    width: 100% !important;
    margin: 0 auto !important;
  }
}
</style>