<template>
  <div class="c-editor-wrap" ></div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
require('codemirror/lib/codemirror.css'); // codemirror
require('tui-editor/dist/tui-editor.css'); // editor ui
require('tui-editor/dist/tui-editor-contents.css'); // editor content
require('highlight.js/styles/github.css'); // code block highlight
const Editor = require('tui-editor');

@Component
export default class CEditor extends Vue {
  @Prop({ default: '100%', type: String }) public width?:string|number;
  @Prop({ default: '100%', type: String }) public height?:string;
  @Prop({ default: true, type: Boolean }) public autoCreate?:boolean;
  public editor:any = null;
  @Prop() value?:string;
  get content():string {
    return (this as any).value;
  };
  set content(val:string) {
    this.$emit('input', val);
  }

  protected createdEditor():void {
    this.editor = new Editor({
      el: this.$el,
      height: this.height
    });
    this.$nextTick(() => {
      this.editor.setHtml(this.content)
    })
  };
  protected getContent() {
    return (this as any).$el.querySelector('.tui-editor-contents').innerHTML;
  }
  mounted() {
    if (this.autoCreate) this.createdEditor();
  }
}
</script>
<style lang="scss">
  .c-editor-wrap {
    width: 100%;
    height: 100%;
  }
</style>