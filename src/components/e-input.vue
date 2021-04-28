<template>
  <el-input
    v-on="$listeners"
    v-bind="$attrs"
    @keyup.native="e => e.target.value=e.target.value.toString().replace(/\s/g,'')"
  />
</template>
<script>
export default {
  name: 'e-input',
}
</script>
