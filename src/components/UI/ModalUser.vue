<template>
  <div class="modalUser" v-if="show === true" @click="hideModal">
    <div class="modalUser_container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.modalUser {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.modalUser_container {
  margin: auto;
  background-color: #ffffff;
  border-radius: 5px;
}
</style>
