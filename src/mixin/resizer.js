
export default {
  computed: {
    isDeskTop() {
      return this.$store.state.app.device !== 'mobile';
    }
  },
}
