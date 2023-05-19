<template>
  <div class="userForm-container">
    <div class="modal-input-container">
      <form @submit.prevent>
        <div>
          <h2 v-if="addUser">Создание пользователя</h2>
          <h2 v-else>Редактирование пользователя</h2>
          <div v-if="addUser">
            <div>
              <input
                v-model="user.name"
                type="text"
                placeholder="Имя"
                class="input"
              />
            </div>
            <div>
              <input
                v-model="user.title"
                type="text"
                placeholder="Заголовок"
                class="input"
              />
            </div>
            <div>
              <input
                v-model="user.email"
                type="text"
                placeholder="Почта"
                class="input"
              />
            </div>
            <div>
              <input
                v-model="user.role"
                type="text"
                placeholder="Роль"
                class="input"
              />
            </div>
          </div>
          <div v-else>
            <div>
              <input
                v-model="updateUserObj.name"
                type="text"
                placeholder="Имя"
                class="input"
              />
            </div>
            <div>
              <input
                v-model="updateUserObj.title"
                type="text"
                placeholder="Заголовок"
                class="input"
              />
            </div>
            <div>
              <input
                v-model="updateUserObj.email"
                type="text"
                placeholder="Почта"
                class="input"
              />
            </div>
            <div>
              <input
                v-model="updateUserObj.role"
                type="text"
                placeholder="Роль"
                class="input"
              />
            </div>
          </div>
        </div>
        <button v-if="addUser" @click="createUser">Создать</button>
        <button v-else @click="updateUser">Редактировать</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addUser: {
      type: Boolean,
    },
    updateUser: {
      type: Boolean,
    },
    updateUserObj: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      user: { name: "", title: "", email: "", role: "" },
    };
  },
  methods: {
    createUser() {
      // Дата в нормальном виде
      const currentDate = new Date();
      const dateString = currentDate.toLocaleString();
      const user = {
        id: Date.now(),
        name: this.user.name,
        title: this.user.title,
        email: this.user.email,
        role: this.user.role,
        date: dateString,
        selected: false,
      };
      this.$emit("create", user);
    },
    updateUser() {
      const updateUser = {
        id: this.updateUserObj.id,
        name: this.user.name,
        title: this.user.title,
        email: this.user.email,
        role: this.user.role,
        selected: this.user.selected,
      };
      this.$emit("update", updateUser);
    },
  },
};
</script>

<style scoped>
.modal-input-container {
  padding: 40px;
}
.input {
  padding: 10px;
  margin-bottom: 10px;
  min-width: 300px;
}
</style>
