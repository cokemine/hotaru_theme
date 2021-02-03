<template>
  <Header></Header>
  <Error v-show="!servers"></Error>
  <Body :servers="servers"></Body>
  <UpdateTime :updated="updated"></UpdateTime>
  <Card :servers="servers"></Card>
  <Footer></Footer>
</template>

<script lang="ts">
import {defineComponent, ref, Ref, onMounted} from 'vue';
import axios from 'axios'
import Header from '@/components/Header.vue';
import Error from '@/components/Error.vue';
import Body from '@/components/Body.vue';
import UpdateTime from '@/components/UpdateTime.vue';
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Error,
    Body,
    Card,
    Footer,
    UpdateTime
  },
  setup() {
    const servers: Ref<Array<StatusItem | BoxItem> | undefined> = ref();
    const updated: Ref<number | undefined> = ref();
    onMounted(() => {
      setInterval(() => {
        axios.get('json/stats.json')
            .then(res => {
              servers.value = res.data.servers;
              updated.value = Number(res.data.updated);
            })
            .catch((err) => console.log(err));
      }, 2000);
    });
    return {
      servers,
      updated
    }
  }
})
</script>

<style>
body {
  /*Replace your background image at this place!*/
  background: url("./assets/img/bg_parts.png") repeat-y left top, url('./assets/img/bg.png') repeat left top;
}

/*Global*/
div.bar {
  min-width: 0 !important;
}

/*Responsive*/
@media (max-width: 1200px) {
  html, body {
    font-size: 12px;
  }
}

@media only screen and (max-width: 992px) {
  #type, tr td:nth-child(3) {
    display: none;
  }

  #location, tr td:nth-child(4) {
    display: none;
  }
}

@media (max-width: 768px) {
  html, body {
    font-size: 11px;
  }

  #servers div.progress {
    width: 40px !important;
  }

  #cards .card div.card-header span {
    font-size: 1.55rem !important;
  }

  #cards .card div.card-content p {
    font-size: 1.25rem !important;
    margin-bottom: 0.6rem !important;
  }

  #header {
    height: 20rem !important;
    /*Replace your header image (for mobile use)at this place!*/
    background: url("assets/img/cover_mobile.png") no-repeat center center !important;
  }
}

@media only screen and (max-width: 720px) {
  #uptime, tr td:nth-child(5) {
    display: none;
  }
}

@media only screen and (max-width: 660px) {
  #load, tr td:nth-child(6) {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  #traffic, tr td:nth-child(8) {
    display: none;
  }
}

@media only screen and (max-width: 533px) {
  #name, tr td:nth-child(2) {
    min-width: 20px;
    max-width: 60px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  #hdd, tr td:nth-child(11) {
    display: none;
  }

  #cpu, #ram {
    min-width: 20px;
    max-width: 40px;
  }
}
</style>
