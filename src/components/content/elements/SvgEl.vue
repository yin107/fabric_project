<template>
  <div>
    <Divider plain orientation="left">卡通</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(460, 489)"
      @click="addItem"
    />
    <Divider plain orientation="left">卡通水果</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(386, 409)"
      @click="addItem"
    />
    <Divider plain orientation="left">体育</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(410, 459)"
      @click="addItem"
    />
    <Divider plain orientation="left">秋天</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(40, 49)"
      @click="addItem"
    />
    <Divider plain orientation="left">计算机</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(50, 75)"
      @click="addItem"
    />
    <Divider plain orientation="left">水果</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(76, 89)"
      @click="addItem"
    />
    <Divider plain orientation="left">服饰</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(90, 136)"
      @click="addItem"
    />
    <Divider plain orientation="left">旗子</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(137, 151)"
      @click="addItem"
    />
    <Divider plain orientation="left">树木</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(152, 181)"
      @click="addItem"
    />
    <Divider plain orientation="left">食物</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(182, 201)"
      @click="addItem"
    />
    <Divider plain orientation="left">手绘衣服</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(202, 222)"
      @click="addItem"
    />
    <Divider plain orientation="left">奖牌</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(223, 252)"
      @click="addItem"
    />
    <Divider plain orientation="left">商务</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(253, 261)"
      @click="addItem"
    />
    <Divider plain orientation="left">活动</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(262, 270)"
      @click="addItem"
    />
    <Divider plain orientation="left">复古</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(301, 350)"
      @click="addItem"
    />
    <Divider plain orientation="left">动物</Divider>
    <img
      :src="`./svg/${item}.svg`"
      alt=""
      :key="item"
      v-for="item in getIndex(490, 519)"
      @click="addItem"
    />
  </div>
</template>

<script>
import { mixins } from "@/mixin/index";
import { uuid } from "vue-uuid";

export default {
  name: "SvgEl",
  mixins: [mixins],
  data() {
    return {
      arr: [],
    };
  },
  methods: {
    getIndex(start, end) {
      const arr = Array(end - (start - 1)).fill(" ");
      return arr.map((item, i) => i + start);
    },
    addItem(e) {
      //e.target.src  属于svg元素的url
      const This = this;
      This.fabric.loadSVGFromURL(e.target.src, function (objects, options) {
        const item = This.fabric.util.groupSVGElements(objects, {
          ...options,
          name: "svg元素",
          id: uuid.v1(),
        });
        item.scale(0.5, 0.5); //进行缩放
        This.canvas.c.add(item).centerObject(item).renderAll();
      });
    },
  },
};
</script>

<style>
img {
  display: inline-block;
  width: 53px;
  margin-left: 2px;
  margin-bottom: 2px;
  background-color: #f5f5f5;
  padding: 6px;
  cursor: pointer;
}
</style>
