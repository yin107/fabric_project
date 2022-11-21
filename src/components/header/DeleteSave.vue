<template>
  <div>
    <Button size="large" type="default" @click="clear">清空</Button>
    <Dropdown style="margin-left: 10px" @on-click="saveWith" trigger="click">
      <!-- <Dropdown style="margin-left: 10px" @on-click="saveWith"> -->
      <Button type="primary" size="large">
        保存
        <Icon type="ios-arrow-down"></Icon>
      </Button>
      <DropdownMenu slot="list">
        <DropdownItem divided name="cilpboard">复制到剪切板</DropdownItem>
        <DropdownItem divided name="saveJson">保存为JSON文件</DropdownItem>
        <DropdownItem divided name="saveSvg">保存为SVG</DropdownItem>
        <DropdownItem divided name="saveImg">保存为图片</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import { mixins } from "@/mixin/index";
import { uuid } from "vue-uuid";

export default {
  name: "DelSaveBar",
  mixins: [mixins],
  methods: {
    clear() {
      this.canvas.c.clear(); //会把之前给画布加的背景颜色的样式也会清除
      this.canvas.c.setBackgroundColor(
        "#ffffff",
        this.canvas.c.renderAll.bind(this.canvas.c)
      );
    },
    saveWith(type) {
      //结合name属性，可以监听点击的是那个元素
      this[type]();
    },
    saveJson() {
      //	const dataUrl=JSON.stringify(this.canvas.c)//不要直接用this.canvas.c.toJSON()
      // const blob=new Blob([dataUrl],{type:'text/json+xml'})
      // const fileStr=URL.createObjectURL(blob)
      //下面这个方法，导出的文件内容更加整齐    null, '\t'添加个格式
      const dataUrl = this.canvas.c.toJSON(["id"]);
      const fileStr = `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(dataUrl, null, "\t")
      )}`;
      this.downFile(fileStr, "json");
    },
    saveSvg() {
      const dataUrl = this.canvas.c.toSVG();
      // const fileStr=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(dataUrl)}`
      const blob = new Blob([dataUrl], { type: "image/svg+xml" });
      const fileStr = URL.createObjectURL(blob);
      this.downFile(fileStr, "svg");
    },
    saveImg() {
      const dataURL = this.canvas.c.toDataURL({
        format: "png",
        quality: 1,
        multiplier: 2,
      });
      this.downFile(dataURL, "png");
    },
    downFile(fileStr, fileType) {
      const aEL = document.createElement("a");
      aEL.href = fileStr;
      aEL.download = uuid.v1() + "." + fileType;
      aEL.click();
      URL.revokeObjectURL(fileStr);
    },
    cilpboard() {
      //复制得到的是一个JSON字符串对象
      const dataUrl = this.canvas.c.toJSON(["id"]);
      // const fileStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(dataUrl, null, '\t'))}`//在这里并不需要变为URL的地址
      const Str = JSON.stringify(dataUrl, null, "\t"); //现在要把这个字符串放到剪贴板中
      this.$copyText(Str).then(
        () => {
          this.$Message.success("复制成功");
        },
        () => {
          this.$Message.error("复制失败");
        }
      );
    },
  },
};
</script>

<style></style>
