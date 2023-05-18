<template>
  <div>
    <input type="text" v-mask="'##:##-##:##'" placeholder="13:00-15:00" />
  </div>
</template>

<script>
import { createApp } from "vue";
import VueMask from "v-mask";

const app = createApp({});
app.use(VueMask);
app.mount("#app");
</script>
