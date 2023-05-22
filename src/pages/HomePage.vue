<template>
  <div>
    <modal-user :show="modalVisible"
      ><form-user
        @create="createUser"
        @update="updateUserFunction"
        :updateUser="updateUser"
        :addUser="addUser"
        :updateUserObj="updateUserObj"
    /></modal-user>
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
    <!-- <email-input />
    <phone-input />
    <time-input /> -->
    <table-box
      :users="users"
      @update="modalVisibleFunc"
      @deleteAll="deleteAllUsers"
      @updateCheckboxAll="updateCheckboxAll"
      @sortTable="sortTable"
    />
  </div>
</template>

<script>
import ListBox from "../components/ListBox.vue";
import TableBox from "../components/TableBox.vue";
import CustomButton from "../components/UI/CustomButton.vue";
import EmailInput from "../components/UI/EmailInput.vue";
import ModalUser from "../components/UI/ModalUser.vue";
import PhoneInput from "../components/UI/PhoneInput.vue";
import TimeInput from "../components/UI/TimeInput.vue";
import FormUser from "../components/UI/FormUser.vue";

export default {
  components: {
    CustomButton,
    ListBox,
    EmailInput,
    PhoneInput,
    TimeInput,
    TableBox,
    ModalUser,
    FormUser,
  },
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
      users: [
        {
          id: 1,
          name: "Никита",
          title: "Тестовый заголовок",
          email: "idone@mail.ru",
          role: "Администратор",
          date: 1684740160239,
          selected: false,
        },
        {
          id: 2,
          name: "Александра",
          title: "Тестовый заголовок",
          email: "idone@mail.ru",
          role: "Тестировщик",
          date: 1684740360239,
          selected: false,
        },
        {
          id: 3,
          name: "Евгений",
          title: "Тестовый заголовок",
          email: "idone@mail.ru",
          role: "Дизайнер",
          date: 1684740760239,
          selected: false,
        },
        {
          id: 4,
          name: "Ольга",
          title: "Тестовый заголовок",
          email: "idone@mail.ru",
          role: "Менеджер",
          date: 1684740360239,
          selected: false,
        },
      ],
      color_class: "#6900C6",
      modalVisible: false,
      updateUser: false,
      addUser: false,
      updateUserObj: [],
    };
  },
  methods: {
    createUser(user) {
      this.users.push(user);
      this.modalVisible = false;
    },
    updateUserFunction() {
      this.modalVisible = false;
    },
    modalVisibleFunc(show, add, update, user, checked) {
      this.updateUserObj = user;
      this.updateUser = update;
      this.addUser = add;
      this.modalVisible = show;
    },
    deleteAllUsers(one) {
      this.users = [];
    },
    updateCheckboxAll(props) {
      if (props) {
        this.users.map((user) => {
          user.selected = true;
        });
      } else {
        this.users.map((user) => {
          user.selected = false;
        });
      }
    },
    sortTable(props) {
      this.users = props;
    },
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
