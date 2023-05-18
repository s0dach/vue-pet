<template>
  <div>
    <h1>Это начальная страница</h1>
    <!-- <h1>likes: {{ $store.state.likes }}</h1>
    <div class="homeLikesBlock">
      <custom-button @click="$store.commit('incrementLikes')"
        >Лайк</custom-button
      >
      <custom-button @click="$store.commit('decrementLikes')"
        >Дизлайк</custom-button
      >
    </div>
    <router-link to="/main"
      ><custom-button>Переход на вторую страницу</custom-button></router-link
    > -->
    <!-- <list-box :items="items" :color_class="color_class" @update="updateItem" /> -->
    <email-input />
    <phone-input />
    <time-input />
  </div>
</template>

<script>
import ListBox from "../components/ListBox.vue";
import CustomButton from "../components/UI/CustomButton.vue";
import EmailInput from "../components/UI/EmailInput.vue";
import PhoneInput from "../components/UI/PhoneInput.vue";
import TimeInput from "../components/UI/TimeInput.vue";

export default {
  components: { CustomButton, ListBox, EmailInput, PhoneInput, TimeInput },
  data() {
    return {
      items: [
        { id: 1, name: "Вариант 1", selected: true },
        { id: 2, name: "Вариант 2", selected: true },
        { id: 3, name: "Вариант 3", selected: false },
        { id: 4, name: "Вариант 4", selected: false },
        { id: 5, name: "Вариант 5", selected: false },
        { id: 6, name: "Вариант 6", selected: false },
        { id: 7, name: "Вариант 7", selected: false },
      ],
      color_class: "#6900C6",
    };
  },
};
</script>

<style scoped>
.homeLikesBlock {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
</style>
