<!-- <template>
  <div>
    <input v-model="value" v-on:input="onInput" v-on:keydown="onKeyDown" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },

  computed: {
    formattedValue() {
      let value = this.value;
      if (value.length === 2 || value.length === 5 || value.length === 8) {
        value += ":";
      }
      return value;
    },
  },
  methods: {
    onInput: function (event) {
      let value = event.target.value;
      if (/^\d{0,2}:?$/.test(value)) {
        this.value = value;
      } else if (/^\d{2}:\d{0,2}-?$/.test(value)) {
        this.value = value;
      } else if (/^\d{2}:\d{2}-\d{0,2}:?$/.test(value)) {
        this.value = value;
      } else if (/^\d{2}:\d{2}-\d{2}:?$/.test(value)) {
        this.value = value;
      } else if (/^\d{2}:\d{2}-\d{2}:\d{0,2}$/.test(value)) {
        this.value = value;
      } else {
        event.preventDefault();
      }
    },
    onKeyDown: function (event) {
      if (event.keyCode === 8 && this.value === ":") {
        event.preventDefault();
        this.clear();
      }
    },
    clear: function () {
      this.value = "";
    },
  },
};
</script> -->

<template></template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
