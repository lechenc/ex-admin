<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar />
      </div>
      <Tags></Tags>
      <template>
        <app-main />
      </template>
    </div>
    <!--用于查看单图-->
    <viewer :options="options" data-title="显示单个照片上传" :images="images" class="viewer-wrap-single" ref="viewer">
      <template slot-scope="scope">
        <img v-for="src in scope.images" ref="imgViewer" class="viewer-single" :src="src" :key="src" />
      </template>
    </viewer>

    <div class="my-video" v-show="isShowVideo">
      <div class="check" @click="isShowVideo = !!!isShowVideo">X</div>
      <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
    </div>
    <!-- 
  @play="onPlayerPlay($event)" 
  @pause="onPlayerPause($event)" 
  @statechanged="playerStateChanged($event)"
  @loadeddata="onPlayerLoadeddata($event)"
  @timeupdate="onPlayerTimeupdate($event)"  -->
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components';
import ResizeMixin from './mixin/ResizeHandler';
import Tags from '@/components/Tags';
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Tags,
    videoPlayer,
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile',
      };
    },
    vViewerShow: {
      get() {
        return this.$store.state.app.showSingleViewer;
      },
      set(val) {
        this.$store.dispatch('app/showSingleViewerImages', val);
        if (!val) {
          this.$store.dispatch('app/setViewerImages', []);
        }
      },
    },
    images() {
      return this.$store.state.app.images;
    },
    isCollapse() {
      return this.$store.state.app.isCollapse;
    },
    player() {
      return this.$refs.videoPlayer.player;
    },
    getVideoUrl(){
      return this.$store.state.app.video;
    }
  },
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        // aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        // sources: [{
        //   type: "",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
        //   src: "" //url地址
        // }],
        // poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, //全屏按钮
        },
      },
      videoUrl: '',
      isShowVideo: false,

      options: {
        inline: false,
        button: true,
        navbar: false,
        title: () => {
          return this.$store.state.app.singleViewerTitle;
        },
      },
    };
  },
  watch: {
    isShowVideo(val){
      if(!val){
        this.$store.dispatch('app/setViewerVideo', '');
      }
    },
    getVideoUrl(val) {
      if (val) {
        this.isShowVideo = true
        this.$nextTick(()=>{
          this.$refs.videoPlayer.player.src(val);
        })
      }else {
        this.isShowVideo = false
      }
    },
    poster(n, o) {
      if (n) {
        this.$refs.videoPlayer.player.poster(n);
      }
    },
    isCollapse(val) {
      this.menuWidth = !this.isCollapse ? '240px' : '70px';
    },
    vViewerShow(val) {
      const vm = this;
      if (!vm.vViewerShow) return;
      this.$nextTick(() => {
        const dom = vm.$el.querySelector('.viewer-single');
        this.$nextTick(() => {
          dom.click();
          vm.vViewerShow = false;
        });
      });
    },
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false });
    },
  },
};
</script>

<style lang="scss">
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';
@import '~@/styles/media/index.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
.viewer-container {
  z-index: 2500 !important;
  .viewer-title {
    display: none;
  }
  .viewer-prev {
    display: none;
  }
  .viewer-next {
    display: none;
  }
}
.my-video {
  // display:flex;
  position: absolute;
  // left: calc(35vw - 100px);
  left:50%;
  margin-left:-160px;
  top: calc(40vh - 200px);
  width: 320px;
  border: 2px solid #000;
  border-radius: 4px;
  z-index: 1 !important;
  // margin: calc(50vh - 150px) auto 0;
  .vjs-control-bar{
    width:100%;
    overflow-x:scroll;
    overflow-y: hidden;
  }
  .check {
    position: absolute;
    right: 8px;
    top: 5px;
    width: 25px;
    height: 25px;
    z-index: 2;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
