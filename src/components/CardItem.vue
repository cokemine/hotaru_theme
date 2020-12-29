<template>
  <div class="column">
    <div class="ui fluid card">
      <div class="card-header">
        <img src="/img/clients/HK.png" alt="HK"><span> Server </span>
        <p>KVM</p>
      </div>
      <div class="ui tiny progress success">
        <div class="bar" style="width: 50%">
        </div>
      </div>
      <div class="card-content">
        <p>Network: </p>
        <p>负载状态: </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem"
}
</script>

<style scoped>
.card {
  padding: 24px;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, .2);
  border-radius: .375rem;
  -webkit-border-radius: .75rem;
}

.card div.card-header img {
  vertical-align: middle;
  border-radius: 5px;
}

.card div.card-header span {
  font-size: 1.3rem;
  font-weight: normal;
  vertical-align: middle;
}
.card div.card-header p {
  padding-top: 7px;
}

.card div.progress {
  margin: 1.7em 0 1.3em;
}

.card div.card-header p {
  font-size: 1rem;
  color: #919699;
}

.card div.card-content p {
  font-size: 1rem;
  margin-bottom: 0;
}
</style>