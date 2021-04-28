<template>
  <el-dialog
    :close-on-press-escape="false"
    v-bind="$attrs"
    v-on="$listeners"
    custom-class="google-bind-dialog"
    title="Google 验证"
    ref="googleVerifyDialog"
    :close-on-click-modal="false"
    @opened="initCode"
  >
    <div class="context-wrap">
      <Context @bindSuccess="bindSuccess" ref="context" :email="email" />
    </div>
  </el-dialog>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Context from "./context.vue";

@Component({ components: { Context } })
export default class GoogleVerifyDialog extends Vue {
  @Prop({ required: true, default: "", type: String }) public email?: string;

  public initCode(): void {
    (this as any).$refs.context.init();
  }
  public bindSuccess(res?:any) {
    setTimeout(() => {
      this.$emit('update:visible', false);
    }, 2000);
  } 
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.google-bind-dialog {
  max-width: 800px;
  min-width: 500px;
  width: calc(80vw - 100px);
  .context-wrap {
    width: 100%;
    height: calc(80vh - 150px);
    max-width: 900px;
    overflow: auto;
  }
}
</style>