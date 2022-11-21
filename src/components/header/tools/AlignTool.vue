<template>
  <div>
    <ButtonGroup size="small">
      <!--没有多个元素选中的时候，这个按钮组合都是不可选中的状态  -->
      <!-- 水平左对齐 -->
      <Button :disabled="!(selecMode==='multiple')" @click="left" name="left"
        ><svg
          t="1668669630477"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="11801"
          width="15"
          height="15"
        >
          <path d="M64 64h64v896H64z" fill="#515151" p-id="11802"></path>
          <path d="M192 192h515v256H192z" fill="#515151" p-id="11803"></path>
          <path d="M192 576h768v256H192z" fill="#515151" p-id="11804"></path>
        </svg>
      </Button>
      <!-- 水平居中 -->
      <Button :disabled="!(selecMode==='multiple')" @click="xcenter"
        ><svg
          t="1668669751668"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="12018"
          width="15"
          height="15"
        >
          <path d="M480 64h64v896h-64z" fill="#515151" p-id="12019"></path>
          <path d="M256 192h512v256H256z" fill="#515151" p-id="12020"></path>
          <path d="M128 576h768v256H128z" fill="#515151" p-id="12021"></path>
        </svg>
      </Button>
      <!-- 水平右对齐 -->
      <Button :disabled="!(selecMode==='multiple')" @click="right">
        <svg
          t="1668669777934"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="12235"
          width="15"
          height="15"
        >
          <path d="M896 64h64v896h-64z" fill="#515151" p-id="12236"></path>
          <path d="M320 192h512v256H320z" fill="#515151" p-id="12237"></path>
          <path d="M64 576h768v256H64z" fill="#515151" p-id="12238"></path>
        </svg>
      </Button>
      <!-- 垂直顶部对齐 -->
      <Button :disabled="!(selecMode==='multiple')" @click="top">
        <svg
          t="1668669817676"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="12452"
          width="15"
          height="15"
        >
          <path d="M64 64h896v64H64z" fill="#515151" p-id="12453"></path>
          <path d="M192 960V192h256v768z" fill="#515151" p-id="12454"></path>
          <path d="M576 704V192h256v512z" fill="#515151" p-id="12455"></path>
        </svg>
      </Button>
      <!-- 垂直居中对齐 -->
      <Button :disabled="!(selecMode==='multiple')" @click="ycenter">
        <svg
          t="1668669850095"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="12669"
          width="15"
          height="15"
        >
          <path d="M64 480h896v64H64z" fill="#515151" p-id="12670"></path>
          <path d="M832 256v512H576V256z" fill="#515151" p-id="12671"></path>
          <path d="M448 128v768H192V128z" fill="#515151" p-id="12672"></path>
        </svg>
      </Button>
      <!-- 垂直底部对齐 -->
      <Button :disabled="!(selecMode==='multiple')" @click="bottom"
        ><svg
          t="1668669577383"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="11422"
          width="15"
          height="15"
        >
          <path d="M64 896h896v64H64z" fill="#515151" p-id="11423"></path>
          <path d="M192 832V64h256v768z" fill="#515151" p-id="11424"></path>
          <path d="M576 832V320h256v512z" fill="#515151" p-id="11425"></path>
        </svg>
      </Button>
      <!-- 平均左右对齐 -->
      <Button :disabled="!(selecMode==='multiple')" @click="xequation">
        <svg
          t="1650442800956"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1910"
          width="14"
          height="14"
        >
          <path
            d="M96 0a32 32 0 0 1 32 32v960a32 32 0 0 1-64 0V32A32 32 0 0 1 96 0z m832 0a32 32 0 0 1 32 32v960a32 32 0 0 1-64 0V32a32 32 0 0 1 32-32zM384 800v-576a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32h-192a32 32 0 0 1-32-32z"
            fill="#515151"
            p-id="1911"
          ></path>
        </svg>
      </Button>
      <!-- 平均上下对齐 -->
      <Button :disabled="!(selecMode==='multiple')" @click="yequation">
        <svg
          t="1650442784286"
          class="icon"
          viewBox="0 0 1170 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1712"
          width="14"
          height="14"
        >
          <path
            d="M1170.285714 36.571429a36.571429 36.571429 0 0 1-36.571428 36.571428H36.571429a36.571429 36.571429 0 0 1 0-73.142857h1097.142857a36.571429 36.571429 0 0 1 36.571428 36.571429z m0 950.857142a36.571429 36.571429 0 0 1-36.571428 36.571429H36.571429a36.571429 36.571429 0 0 1 0-73.142857h1097.142857a36.571429 36.571429 0 0 1 36.571428 36.571428zM256 365.714286h658.285714a36.571429 36.571429 0 0 1 36.571429 36.571428v219.428572a36.571429 36.571429 0 0 1-36.571429 36.571428h-658.285714a36.571429 36.571429 0 0 1-36.571429-36.571428v-219.428572a36.571429 36.571429 0 0 1 36.571429-36.571428z"
            fill="#515151"
            p-id="1713"
          ></path>
        </svg>
      </Button>
    </ButtonGroup>
  </div>
</template>

<script>
import { mixins } from "@/mixin/index";

export default {
  name: "AlignTool",
  mixins: [mixins],

  data() {
    return {
       
    };
  },
  computed: {
	// 不能这样来判断是否有多个元素选中
    // isActive() {
	// 	console.log(this.canvas.c);//计算属性这个时候canvas还没有挂载
    //   const activeObject = this.canvas.c.getActiveObject();
    //   if (activeObject.type === "activeSelection") {
    //     return true;
    //   }
    //   return false;
    // },
  },
  methods: {
    //   水平左对齐
    left() {
      const activeObject = this.canvas.c.getActiveObject();
      // 1、含有活动元素
      //2、活动元素的类型为activeSelection，也就是个数要大于2
      if (activeObject && activeObject.type === "activeSelection") {
        const activeSelection = activeObject;
        activeSelection.forEachObject((item) => {
          item.set({
            left: 0 - activeObject.width * 0.5,
          });
          item.setCoords();
        });
        this.canvas.c.renderAll();
      }
    },
    //水平居中对齐
    xcenter() {
      const activeObject = this.canvas.c.getActiveObject();
      if (activeObject && activeObject.type === "activeSelection") {
        const activeSelection = activeObject;
        activeSelection.forEachObject((item) => {
          item.set({
            left: 0 - (item.width * item.scaleX) / 2,
          });
          item.setCoords();
        });
        this.canvas.c.renderAll();
      }
    },
    // 垂直居中对齐
    ycenter() {
      const activeObject = this.canvas.c.getActiveObject();
      if (activeObject && activeObject.type === "activeSelection") {
        const activeSelection = activeObject;
        activeSelection.forEachObject((item) => {
          item.set({
            top: 0 - (item.height * item.scaleY) / 2,
          });
          item.setCoords();
        });
        this.canvas.c.renderAll();
      }
    },
    // 水平右对齐
    right() {
      const activeObject = this.canvas.c.getActiveObject();
      if (activeObject && activeObject.type === "activeSelection") {
        const activeSelection = activeObject;
        activeSelection.forEachObject((item) => {
        item.set({
            left: activeObject.width * 0.5 - item.width * item.scaleX,
          });
          item.setCoords();
        });
        this.canvas.c.renderAll();
      }
    },
    // 顶部对齐
    top() {
      const activeObject = this.canvas.c.getActiveObject();
      if (activeObject && activeObject.type === "activeSelection") {
        const activeSelection = activeObject;
        activeSelection.forEachObject((item) => {
          item.set({
            top: -activeObject.height / 2,
          });
          item.setCoords();
        });
        this.canvas.c.renderAll();
      }
    },
    // 底部对齐
    bottom() {
      const activeObject = this.canvas.c.getActiveObject();
      if (activeObject && activeObject.type === "activeSelection") {
        const activeSelection = activeObject;
        activeSelection.forEachObject((item) => {
          item.set({
            top: activeObject.height * 0.5 - item.height * item.scaleY,
          });
          item.setCoords();
        });
        this.canvas.c.renderAll();
      }
    },
    //水平平均对齐
    xequation() {
      const activeObject = this.canvas.c.getActiveObject();
      if (activeObject && activeObject.type === "activeSelection") {
        const activeSelection = activeObject;
        //需要排序
        //sort方法排序改变的是原有的数组，不生成副本
        activeSelection._objects.sort((a, b) => {
          return a.left - b.left;
        });
        //平均间距计算
        const itemSpac = spacWidth();
        //组原点高度
        const yHeight = activeObject.width / 2;
        activeObject.forEachObject((item, i) => {
          //获取当前元素之前所有元素的高度
          const preHeight = getItenLeft(i);
          //顶部距离 间距*索引+之前元素高度-原点高度
          const top = itemSpac * i + preHeight - yHeight;
          item.set("left", top);
        });
        this.canvas.c.renderAll();
      }
      //获取平均间距
      function spacWidth() {
        let count = getAllItemHeight();
        const allSpac = activeObject.width - count;
        return allSpac / (activeObject._objects.length - 1);
      }
      //获取所有元素的高度
      function getAllItemHeight() {
        let count = 0;
        activeObject.forEachObject((item) => {
          count += getItemWidth(item);
        });
        return count;
      }
      //width属性不准确，需要坐标换算
      function getItemWidth(item) {
        return item.aCoords.tr.x - item.aCoords.tl.x;
      }
      //获取当前元素之前所有元素的高度
      function getItenLeft(i) {
        if (i === 0) return 0;
        let width = 0;
        for (let index = 0; index < i; index++) {
          width += getItemWidth(activeObject._objects[index]);
        }
        return width;
      }
    },
    //垂直平均对齐
    yequation() {
      const activeObject = this.canvas.c.getActiveObject();
      if (activeObject && activeObject.type === "activeSelection") {
        const activeSelection = activeObject;
        // 排序
        activeSelection._objects.sort((a, b) => {
          return a.top - b.top;
        });

        // 平均间距计算
        const itemSpac = spacHeight();
        // 组原点高度
        const yHeight = activeObject.height / 2;

        activeObject.forEachObject((item, i) => {
          // 获取当前元素之前所有元素的高度
          const preHeight = getItemTop(i);
          // 顶部距离 间距 * 索引 + 之前元素高度 - 原点高度
          const top = itemSpac * i + preHeight - yHeight;
          item.set("top", top);
        });
        this.canvas.c.renderAll();
      }

      // 获取平均间距
      function spacHeight() {
        let count = getAllItemHeight();
        const allSpac = activeObject.height - count;
        return allSpac / (activeObject._objects.length - 1);
      }

      // 获取所有元素高度
      function getAllItemHeight() {
        let count = 0;
        activeObject.forEachObject((item) => {
          count += getItemHeight(item);
        });
        return count;
      }

      // width属性不准确，需要坐标换算
      function getItemHeight(item) {
        return item.aCoords.bl.y - item.aCoords.tl.y;
      }
      // 获取当前元素之前所有元素的高度
      function getItemTop(i) {
        if (i === 0) return 0;
        let height = 0;
        for (let index = 0; index < i; index++) {
          height += getItemHeight(activeObject._objects[index]);
        }
        return height;
      }
    },
  },
};
</script>

<style>
/* 当不可以选中的时候，背景变灰 */
.ivu-btn[disabled] svg {
  opacity: 0.2;
}
</style>
