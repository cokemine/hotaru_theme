<template>
  <div class="ui vertical masthead center aligned segment" id="header">
    <div id="header-content">
      <h1 class="ui inverted header">
        Server Status
      </h1>
      <p>Servers' Probes Set up with ServerStatus</p>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Header"
})
</script>
<style scoped>
#header {
  height: 25rem;
  /*Replace your header image at this place!*/
  background: url("../assets/img/cover.png") no-repeat center center;
}

#header::before {
  content: '';
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: rgba(66, 64, 64, .15);
}

#header::after {
  content: 'Pixiv: 69713505';
  color: #CDCDCD;
  text-shadow: 1px 1px 1px #666;
  position: absolute;
  bottom: 0;
  right: 15px;
  z-index: 2;
}

/*#header::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
}*/
#header-content {
  /*display: inline-block;*/
  text-shadow: 2px 2px 2px #666;
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#header h1 {
  font-size: 3.57rem;
  white-space: nowrap;
}

#header p {
  font-size: 1.5rem;
  color: aliceblue;
  /*white-space: nowrap;*/
}
</style>