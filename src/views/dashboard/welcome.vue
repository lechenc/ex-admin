<!--
 * @Author: your name
 * @Date: 2020-08-14 18:23:45
 * @LastEditTime: 2020-08-17 12:20:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\views\dashboard\welcome.vue
-->

<template>
  <div class="WelcomeMain-container">
    <h3>欢迎进入</h3>
  </div>
</template>

<script>

export default {
  name: "WelcomeMain",
  data() {
    return {

      }
  },
  methods: {

  },
  mounted() {
  },
};
</script>

<style lang="scss">
.WelcomeMain-container {
  padding: 10px 10px 10px 10px;
  h3 {
    font-size: 26px;
    padding: 0;
    margin: 40px 40px;
  }
  h3::before {
    content: "";
    border-left: 5px solid #03a7f0;
    margin-right: 10px;
  }

  h4 {
    font-size: 18px;
    padding: 0;
    margin: 0 0 20px 20px;
  }
  h4::before {
    content: "";
    border-left: 5px solid #03a7f0;
    margin-right: 10px;
  }

}

</style>
