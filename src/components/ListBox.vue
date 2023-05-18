<template>
  <div class="listBox_container">
    <div class="listBox_upBlock">
      <span>{{ this.selectedItems }}</span>
      <div>svg</div>
    </div>
    <div class="listBox_downBlock">
      <div class="listBox_downBlock_option" @click="selectAll(items)">
        <div class="listBox_downBlock_option_svg"></div>
        <span class="listBox_downBlock_option_text">Выбрать все</span>
      </div>
      <div
        class="listBox_downBlock_option"
        v-for="item in items"
        @click="
          updateItem(item);
          fetchSelectedItems();
        "
      >
        <div class="listBox_downBlock_option_svg">
          {{ item.selected ? "OK" : "" }}
        </div>
        <span class="listBox_downBlock_option_text">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItems: "",
      selectAllBool: false,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    color_class: {
      type: String,
      required: true,
    },
  },
  computed: {},
  methods: {
    updateItem(item) {
      this.$emit("update", item.selected);
      item.selected = !item.selected;
    },
    fetchSelectedItems() {
      let arr = [];
      this.items.forEach((item) => {
        if (item.selected === true) {
          arr.push(item.name);
        }
      });
      if (arr.length <= 3) {
        this.selectedItems = arr.join(",");
      }
    },
    selectAll(items) {
      items.map((item) => {
        this.$emit("update", item.selected);
        item.selected = this.selectAllBool;
        if (this.selectAllBool) {
          this.selectedItems = "Вариант 1, Вариант 2, Вариант 3";
        }
      });
      this.fetchSelectedItems();
      this.selectAllBool = !this.selectAllBool;
    },
  },
  mounted() {
    this.fetchSelectedItems();
  },
};
</script>

<style scoped>
.listBox_upText {
  text-align: left;
  font-size: 1rem;
  color: #000000;
}
.listBox_upBlock {
  max-width: 300px;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.listBox_downBlock {
  max-width: 300px;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 5px;
  height: 200px;
  margin-top: 5px;
  overflow-y: auto;
}
.listBox_downBlock_option {
  display: flex;
  cursor: pointer;
  padding: 5px 0;
}
.listBox_downBlock_option:hover {
  background-color: #bd92e2;
}
.listBox_downBlock_option_svg {
  width: 50px;
}
.listBox_downBlock_option_text {
  width: 100%;
  text-align: left;
}
</style>
