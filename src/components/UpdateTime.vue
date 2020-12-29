<template>
  <div class="ui container" id="updated" style="margin-left: 5px;">最后更新: {{ timeSince }}</div>
</template>

<script>
export default {
  props: ['updated'],
  name: "UpdateTime",
  computed: {
    timeSince() {
      const d = new Date(this.updated * 1000);
      if (!d)
        return "从未.";
      let seconds = Math.floor((new Date() - d) / 1000);
      let interval = Math.floor(seconds / 31536000);
      if (interval > 1)
        return interval + " 年前.";
      interval = Math.floor(seconds / 2592000);
      if (interval > 1)
        return interval + " 月前.";
      interval = Math.floor(seconds / 86400);
      if (interval > 1)
        return interval + " 日前.";
      interval = Math.floor(seconds / 3600);
      if (interval > 1)
        return interval + " 小时前.";
      interval = Math.floor(seconds / 60);
      if (interval > 1)
        return interval + " 分钟前.";
      /*if(Math.floor(seconds) >= 5)
          return Math.floor(seconds) + " seconds";*/
      else
        return "几秒前.";
    }
  }
}
</script>

<style scoped>
#updated {
  margin-bottom: -15px;
}
</style>