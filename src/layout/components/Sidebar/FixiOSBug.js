/*
 * @Author: your name
 * @Date: 2020-05-14 18:48:00
 * @LastEditTime: 2020-07-20 13:30:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\layout\components\Sidebar\FixiOSBug.js
 */ 
export default {
  computed: {
    device() {
      return this.$store.state.app.device;
    },
  },
  mounted() {
    // In order to fix the click on menu on the ios device will trigger the mouseleave bug
    // https://github.com/PanJiaChen/vue-element-admin/issues/1135
    this.fixBugIniOS();
  },
  methods: {
    fixBugIniOS() {
      const $subMenu = this.$refs.subMenu;
      if ($subMenu) {
        const handleMouseleave = $subMenu.handleMouseleave;
        $subMenu.handleMouseleave = e => {
          if (this.device === 'mobile') {
            return;
          }
          handleMouseleave(e);
        };
      }
    },
  },
};
