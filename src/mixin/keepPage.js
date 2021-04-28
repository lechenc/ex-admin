export default {
  methods: {
    //点击tags列表里切换页面,此时保证页面保持原样（让activated不响应），但是从左侧或者页面跳转详情的则要根据传参去activatd钩子重加载
    isInTags() {
      if(this.$route.path == this.$store.state.app.tagsActivePath){
        this.$store.commit("app/setTagsActivePath", "");
        return true;
      }
      return false;
    },
    // 传入router.path,强制删除,保证重新加载(多用于列表进入详情页,详情页提交后返回列表页,此时调用,保证详情页数据状态更新)
    reloadTagsPage(val) {
      let index = -1;
      let tagsList = this.$store.state.app.tagsList;
      tagsList.forEach((v, inx) => {
        if (v.path == val) {
          index = inx;
        }
      });
      if (index >= 0) {
        tagsList.splice(index, 1);
      }
    }
  }
}
