<template>
  <div class="layout">
    <Layout>
      <!-- 顶部导航栏 -->
      <Header>
        <!-- 导入 -->
        <import-JSON></import-JSON>
        &nbsp;
        <import-svg></import-svg>
        &nbsp;
        <Import-img></Import-img>
        <!-- 对齐方式 -->
        <Align-tool style="display: inline; margin-left: 15px"></Align-tool>
        <Flip-tool style="display: inline; margin-left: 15px"></Flip-tool>
        <Center-align style="display: inline; margin-left: 15px"></Center-align>
        <Group-tool style="display: inline; margin-left: 15px"></Group-tool>
        <Zoom-tool style="display: inline; margin-left: 15px"></Zoom-tool>
        <Lock-tool style="display: inline; margin-left: 15px"></Lock-tool>
        <!-- 删除和复制 -->
        <Delet-clone style="display: inline; margin-left: 15px"></Delet-clone>
        <!-- 清空和保存 -->
        <div style="float: right">
          <Delete-save></Delete-save>
        </div>
      </Header>
      <!-- 内容区 -->
      <Content class="content">
        <!-- 选择区 -->
        <div class="content-left">
          <!-- 菜单栏 -->
          <Menu
            active-name="1"
            @on-select="selectmenu"
            class="left-menu"
            accordion
          >
            <MenuItem name="1">
              <Icon type="ios-book-outline" />
              模板
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-color-wand" />
              元素
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-build" />
              背景
            </MenuItem>
          </Menu>
          <div class="left-chose">
            <!-- 生成模板 -->
            <div class="left-panel" v-show="MenuActive == 1">
              <Import-templ></Import-templ>
            </div>
            <div class="left-panel" v-show="MenuActive == 2">
              <Tools></Tools>
              <Svg-el></Svg-el>
            </div>
            <div class="left-panel" v-show="MenuActive == 3">
              <Bgc-top></Bgc-top>
            </div>
          </div>
        </div>
        <!-- 画布区 -->
        <div class="content-center">
          <div class="canvas-box">
            <canvas id="canvas"></canvas>
          </div>
        </div>
        <!-- 属性区 -->
        <div class="content-right" style="padding: 10px" v-if="show">
          <History-set></History-set>
          <Layer-set></Layer-set>
		<Attribute-set></Attribute-set>
        </div>
      </Content>
    </Layout>
  </div>
</template>

<script>
// 导入元素
import ImportJSON from "components/header/ImportJSON";
import ImportSvg from "components/header/ImportSvg";
import ImportImg from "components/header/ImportImg";
//顶部组件
import AlignTool from "components/header/tools/AlignTool";
import FlipTool from "components/header/tools/FlipTool";
import CenterAlign from "components/header/tools/CenterAlign";
import GroupTool from "components/header/tools/GroupTool";
import ZoomTool from "components/header/tools/ZoomTool";
import LockTool from "components/header/tools/LockTool";
import DeletClone from "components/header/tools/DeletClone";

import DeleteSave from "components/header/DeleteSave";
// 左侧组件
import ImportTempl from "components/content/template/ImportTempl";
import Tools from "components/content/elements/Tools";
import SvgEl from "components/content/elements/SvgEl";
import BgcTop from "components/content/bgc/BgcTop";
// 右侧组件
import HistorySet from "components/attribute/HistorySet";
import LayerSet from "components/attribute/LayerSet";
import AttributeSet from "components/attribute/AttributeSet";

//功能组件-插件
import hotkeys from "@/plugin/hotkeys";
import { fabric } from "fabric";
import initAligningGuidelines from "@/utils/utils.js";
import EventHandle from "@/utils/eventHandler.js";

const event = new EventHandle();
event.setMaxListeners(0)
let canvas = {};
export default {
  name: "HomeView",
  components: {
    ImportJSON,
    ImportSvg,
    ImportImg,
    Tools,
    DeleteSave,
    SvgEl,
    ImportTempl,
    BgcTop,
    AlignTool,
    FlipTool,
    CenterAlign,
    GroupTool,
    ZoomTool,
    LockTool,
    DeletClone,
    HistorySet,
    LayerSet,
	AttributeSet
  },
  provide: {
    //依赖注入
    canvas,
    fabric,
    event,
  },
  data() {
    return {
      MenuActive: 1,
      show: false,
    };
  },
  mounted() {
    this.canvas = canvas.c = new fabric.Canvas("canvas", {
      backgroundColor: "#FFFFFF",
      left: 10,
      width: 500,
      height: 600,
    });
    // 	this.canvas.on('selection:created',function(){
    // 	console.log(2);//只有在这里创建canvas的时候监听可以。在其他组件的mounted阶段去监听canvas会监听不到，显示this.canvas.c是undefined未定义的状态
    // })
    event.init(this.canvas);
    this.setControlsStyle(fabric);
    this.setDeletIcon();
    this.show = true;
    hotkeys(canvas.c); //热键
    initAligningGuidelines(canvas.c, fabric);
    // 监听鼠标滚轮缩放事件
    this.canvas.on("mouse:wheel", function (opt) {
      var delta = opt.e.deltaY; // 滚轮，向上滚一下是 -100，向下滚一下是 100
      var zoom = canvas.c.getZoom(); // 获取画布当前缩放值
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20; // 限制最大缩放级别
      if (zoom < 0.1) zoom = 0.1; // 限制最小缩放级别
      // 以鼠标所在位置为原点缩放
      canvas.c.zoomToPoint(
        {
          // 关键点
          x: opt.e.offsetX,
          y: opt.e.offsetY,
        },
        // 传入修改后的缩放级别
        zoom
      );
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });
  },
  methods: {
    // 选择显示的菜单区
    selectmenu(name) {
      this.MenuActive = name;
    },
    //设置控制线的样式-封装的方法
    setControlsStyle(fabric) {
      let fot = fabric.Object.prototype;
      fot.transparentCorners = false;
      fot.cornerSize = 10;
      fot.cornerStorkeColor = "#c2c2c2";
      fot.cornerColor = "blue";
      fot.cornerStyle = "circle";
      fot.borderColor = "#85ccf9";
    },
    //设置自定义删除控件
    setDeletIcon() {
      var img = document.createElement("img");
      var deletIcon =
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
      img.src = deletIcon;
      fabric.Object.prototype.controls.deletControl = new fabric.Control({
        x: 0.5,
        y: -1,
        offsetY: 16,
        cursorStyle: "pointer",
        cornerSize: 24,
        render: renderIcon(img, 0),
        mouseUpHandler: deletObject,
      });
      function renderIcon(img, initialAngle) {
        return function (ctx, left, top, styleOverride, fabricObject) {
          var size = this.cornerSize;
          ctx.save();
          ctx.translate(left, top);
          ctx.rotate(
            fabric.util.degreesToRadians(fabricObject.angle + initialAngle)
          );
          ctx.drawImage(img, -size / 2, -size / 2, size, size);
          ctx.restore();
        };
      }
      function deletObject(eventData, transform) {
        var target = transform.target;
        var canvas = target.canvas;
        canvas.remove(target);
        canvas.requestRenderAll();
      }
    },
  },
};
</script>

<style scoped>
.ivu-layout-content {
  border: 2px solid grey;
  width: 100%;
  height: 500px;
}
.content {
  display: flex;
  height: calc(100vh - 64px);
  background-color: grey;
}
.content-left {
  width: 485px;
  height: 100%;
  background-color: #fff;
  display: flex;
}
.content-center {
  width: 100%;
  position: relative;
  background-color: #f1f1f1;
}
.content-right {
  width: 380px;
  background-color: #fff;
  height: 100%;
  overflow: hidden;
  overflow-y:scroll;
}
.canvas-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#canvas {
  margin: 0 auto;
  border: 2px solid black;
}
.left-menu {
  width: 100px !important;
}
.left-chose {
  flex: 1;
  /* 实现滚动效果 */
  overflow-y: auto;
}
</style>
