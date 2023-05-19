<template>
  <div>
    <div class="table-container">
      <div class="table-textUp-block">
        <div class="table-textUp-childblock">
          <span class="table-textUp">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века.
          </span>
        </div>

        <div
          class="table-button-addUser"
          @click="modalVisibleFunc(true, false)"
        >
          Добавить пользователя
        </div>
      </div>
      <div class="table-name-block">
        <div class="table-name-checkbox-block">
          <div
            :class="[!checked ? 'checkbox-dis' : 'checkbox-act']"
            @click="updateCheckboxAll()"
          ></div>
          <span v-show="checked" class="table-name" @click="deleteAllUsers"
            >Удалить</span
          >
          <span v-show="!checked" class="table-name">Имя</span>
        </div>
        <span v-show="!checked" class="table-name">Заголовок</span>
        <span v-show="!checked" class="table-name">Почта</span>
        <span v-show="!checked" class="table-name">Роль</span>
        <span v-show="!checked" class="table-name">Дата создания</span>
        <span v-show="!checked" class="table-name">Действие</span>
      </div>
      <div class="table-name-block" v-for="user in users">
        <div class="table-name-checkbox-block">
          <div
            :class="[!user.selected ? 'checkbox-dis' : 'checkbox-act']"
            @click="checkboxOne()"
          ></div>
          <span class="table-name-down">{{ user.name }}</span>
        </div>
        <span class="table-name-down">{{ user.title }}</span>
        <span class="table-name-down">{{ user.email }}</span>
        <span class="table-name-down">{{ user.role }}</span>
        <span class="table-name-down-date">{{ user.date }}</span>
        <span
          class="table-name-edit"
          @click="modalVisibleFunc(false, true, user)"
          >Редактировать</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    modalVisibleFunc(add, update, user) {
      this.$emit("update", true, add, update, user);
    },
    checkboxOne() {
      this.checked = true;
    },
    updateCheckboxAll() {
      this.checked = !this.checked;
      if (this.checked) {
        this.$emit("updateCheckboxAll", true);
      } else {
        this.$emit("updateCheckboxAll", false);
      }
    },
    deleteAllUsers() {
      this.$emit("deleteAll");
      this.checked = false;
    },
  },
};
</script>

<style scoped>
.table-container {
  min-width: 1000px;
  padding: 30px;
  border: 1px solid rgb(193, 199, 200);
  border-radius: 5px;
}
.table-textUp {
  font-size: 1rem;
  color: #1d1d1d;
  text-align: left;
}
.table-name-block {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgb(193, 199, 200);
}
.table-name {
  font-weight: 700;
  width: 100%;
  text-align: left;
}
.table-textUp-block {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
}
.table-textUp-childblock {
  max-width: 600px;
}
.table-name-down {
  width: 100%;
  text-align: left;
}
.table-name-down-date {
  width: 100%;
  text-align: left;
  font-size: 0.75rem;
}
.table-name-edit {
  font-weight: 900;
  cursor: pointer;
  color: teal;
  width: 100%;
  text-align: left;
}
.table-name-checkbox-block {
  display: flex;
  align-items: center;
  width: 100%;
}
.checkbox {
  margin-right: 10px;
}
.table-button-addUser {
  border: 1px solid rgb(193, 199, 200);
  background-color: teal;
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.25rem;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
}
.checkbox-dis {
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border: 1px solid grey;
  cursor: pointer;
}
.checkbox-act {
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border: 1px solid grey;
  cursor: pointer;
  background-color: teal;
}
</style>
