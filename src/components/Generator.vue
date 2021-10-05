<template>
  <div>
    <div class="container">
      <div class="form">
        <h1 class="title">Encrypt Generator</h1>
        <p class="text">Using this online-tool you can fast and easy create a Text Encrypt</p>
        <input class="input" v-model="msg" type="text">
        <a class="button" href="#" @click="encryptMessage">Encrypt</a>
        <p class="text">&nbsp;</p>
        <p class="result">Result</p>
        <input class="result input" v-model="messageEncrypt">
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Generator',
  data() {
    return {
      msg: this.message,
      messageEncrypt: '',
    };
  },
  props: {
    message: {
      type: String,
      default: '',
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    encryptMessage() {
      if (this.msg.length > 0) {
        this.messageEncrypt = this.msg.split('').map(
          (msg) => String.fromCharCode(msg.charCodeAt(0) + 1),
        ).join('');
      }
    },
  },
});
</script>

<style scoped>

</style>
