<template>
  <div>
    <h1>Это вторая страница</h1>
    <div class="mainButtonBlock">
      <custom-button @click="loadingFunc">Подгрузить данные</custom-button>
      <div v-for="post in posts[0]">
        <h1>Название: {{ post.code }}</h1>
        <h1>Ставка: {{ post.rate }}</h1>
      </div>
    </div>

    <router-link to="/">
      <custom-button>Вернуться назад</custom-button>
    </router-link>
  </div>
</template>

<script>
import CustomButton from "../components/UI/CustomButton.vue";
import axios from "axios";

export default {
  components: { CustomButton },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    loadingFunc() {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => this.posts.push(response.data.bpi))
        .then(console.log(this.posts));
    },
  },
};
</script>

<style scoped>
.mainButtonBlock {
  padding: 10px 0;
}
</style>
