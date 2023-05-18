<template>
  <div>
    <div
      :class="[
        emailCheck ? 'emailInput-container' : 'emailInput-container-error',
      ]"
    >
      <input
        v:bind:value="email"
        @input="email = $event.target.value"
        class="emailInput"
        placeholder="you@example.com"
        type="text"
      />
      <span class="emailInput-error-span" v-show="!emailCheck">Ошибка</span>
    </div>
    <button @click="checkEmail()" class="email-button">Проверить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailCheck: true,
    };
  },
  methods: {
    checkEmail() {
      this.email.indexOf("@") === -1
        ? (this.emailCheck = false)
        : (this.emailCheck = true);
      console.log(this.emailCheck);
    },
  },
};
</script>

<style scoped>
.emailInput {
  outline: none;
  width: calc(100% - 4px);
  border: none;
  padding: 10px 0;
}
.emailInput-container,
.emailInput-container-error {
  padding: 0;
  border-radius: 5px;
  width: 300px;
  padding: 0 5px;
  display: flex;
  align-items: center;
}
.emailInput-container {
  border: 2px solid #6b7280;
}
.emailInput-container-error {
  border: 2px solid red;
}
.email-input:focus {
  border-color: blueviolet;
}
.emailInput-error-span {
  color: red;
}
</style>
