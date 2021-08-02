<template>
  <div class="son">
    <span v-if="!disabled"> 获取验证码 </span>
    <span v-else> {{ s }}s </span>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      s: 60,
      id: null,
    };
  },
  methods: {
    time() {
      this.s--;
      this.id = setInterval(() => {
        this.s--;
      }, 1000);
    },
  },
  watch: {
    disabled(newVal) {
      if (newVal) {
        this.time();
      }
    },
    s(newVal) {
      if (newVal <= 0) {
        // this.disabled = false
        this.$emit('countdownBtn', false);
        this.s = 60;
        clearInterval(this.id);
      }
    },
  },
  beforeUnmount() {
    clearInterval(this.id);
  },
};
</script>
<style>
/* scoped表示样式私有 */
.son {
  color: #1c9cfe;
  margin-right: 10px;
  cursor: pointer;
}
</style>
