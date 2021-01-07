<template>
  <Header></Header>
  <Error v-show="!status"></Error>
  <Body :servers="servers"></Body>
  <UpdateTime :updated="updated"></UpdateTime>
  <Card :servers="servers"></Card>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header';
import Error from "@/components/Error";
import Body from '@/components/Body';
import UpdateTime from "@/components/UpdateTime";
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import axios from "axios"

export default {
  name: 'App',
  data() {
    return {
      servers: null,
      updated: 0,
      status: false
    }
  },
  components: {
    Header,
    Error,
    Body,
    Card,
    Footer,
    UpdateTime
  },
  mounted() {
    setInterval(() => {
      axios.get('json/stats.json')
          .then(res => {
            this.servers = res.data.servers;
            this.updated = res.data.updated;
            this.status = true;
          })
          .catch((err) => {
            console.log(err);
            this.status = false;
          });
    }, 2000);
  }
};
</script>

<style>
body {
  background: url("./assets/img/bg_parts.png") repeat-y left top, url('./assets/img/bg.png') repeat left top;
}

/*Global*/
div.bar {
  min-width: 0 !important;
}

p {
  margin: 0 auto !important;
}

/*Responsive*/
@media (max-width: 1200px) {
  body {
    font-size: 12px;
  }

  html {
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
  html {
    font-size: 10px;
  }
  #servers .progress {
    width: 45px !important;
  }

  #cards .card div.card-header span {
    font-size: 1.7rem !important;
  }

  #cards .card div.card-content p {
    font-size: 1.4rem !important;
    margin-bottom: 0.6rem !important;
  }

  #header {
    height: 20rem !important;
    background: url("assets/img/cover_mobile.png") no-repeat center center !important;
  }

  #header::after {
    content: 'Pixiv: 86597206';
    color: #CDCDCD;
    position: absolute;
    bottom: 0;
    right: 15px;
    z-index: 2;
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
