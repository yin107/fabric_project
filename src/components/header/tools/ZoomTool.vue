<template>
  <div>
    <ButtonGroup size="small">
      <Button @click="setzoom(1)">
        <svg
          t="1668757628721"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3173"
          width="15"
          height="15"
        >
          <path
            d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
            p-id="3174"
            fill="#515151"
          ></path>
          <path
            d="M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"
            p-id="3175"
            fill="#515151"
          ></path>
        </svg>
      </Button>
      <Button @click="setzoom(-1)">
        <svg
          t="1668757653979"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3377"
          width="15"
          height="15"
        >
          <path
            d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z"
            p-id="3378"
            fill="#515151"
          ></path>
          <path
            d="M597.333333 437.333333H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h256c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"
            p-id="3379"
            fill="#515151"
          ></path>
        </svg>
      </Button>
      <Button @click="reset">1:1</Button>
    </ButtonGroup>
  </div>
</template>

<script>
import { mixins } from "@/mixin/index";

export default {
  name: "ZoomTool",
  mixins: [mixins],
  data() {
    return {
      zoom: 0,
    };
  },
    mounted() {
    
    },
  methods: {
    // 设置画布缩放级别
    setzoom(val) {
      let zoomRatio = this.canvas.c.getZoom(); // 获取画布当前缩放级别
      zoomRatio += val;
      if (zoomRatio > 20) zoomRatio = 20; //限制最大缩放级别
      if (zoomRatio < 0.1) zoomRatio = 0.1; //限制最小缩放级别
      // 设置画布缩放级别
      this.canvas.c.zoomToPoint(
        new this.fabric.Point(
          //设置以对象中心为准，进行放大
          this.canvas.c.getWidth() / 2,
          this.canvas.c.getHeight() / 2
        ),
        zoomRatio
      );
      this.zoom = `${Math.round(zoomRatio * 100)}%`;
    },
	// 重置缩放等级
    reset() {
      this.canvas.c.zoomToPoint(
        new this.fabric.Point(
          this.canvas.c.getWidth() / 2,
          this.canvas.c.getHeight() / 2
        ),
        1
      );
      this.zoom = `${Math.round(100)}%`;
    },
  },
};
</script>

<style></style>
