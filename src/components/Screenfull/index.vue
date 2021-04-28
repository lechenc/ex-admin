
<template>
  <div id="screenfull">
    <svg-icon
      :name="isFullscreen? 'exit-fullscreen': 'fullscreen'"
      @click="click"
    />
  </div>
</template>

<script>
// import screenfull from 'screenfull'
// const sf = screenfull

// export default {
//   name: 'Screenfull',
//   data(){
//     return{
//       isFullscreen:false,
//     }
//   },
//   mounted() {
//     if (sf.isEnabled) {
//       sf.on('change', this.change)
//     }
//   },
//   beforeDestory() {
//     if (sf.isEnabled) {
//       sf.off('change', this.change)
//     }
//   },
//   methods:{
//     change() {
//       if (sf.isEnabled) {
//         this.isFullscreen = sf.isFullscreen
//       }
//     },
//     click() {
//       if (!sf.isEnabled) {
//         this.$message({
//           message: 'you browser can not work',
//           type: 'warning'
//         })
//         return false
//       }
//       sf.toggle()
//     }    
//   }
// }
</script>
