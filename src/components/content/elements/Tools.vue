<template>
  <div>
    <Divider plain orientation="left">常用元素</Divider>
    <div class="tool-box">
      <span @click="addText">
        <svg
          t="1667998479494"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="14195"
          width="13"
          height="13"
        >
          <path
            d="M992 0H0v256h128V128h320v768H256v128h512v-128H576V128h320v128h128V0z"
            fill="#1E2330"
            p-id="14196"
          ></path>
        </svg>
      </span>
      <span @click="addTextBox">
        <svg
          t="1667998903826"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="27585"
          width="13"
          height="13"
        >
          <path
            d="M839.723531 760.776993 578.851059 196.514699l-38.650275-68.598354-86.932931 0-33.81106 68.598354-237.683331 564.263317 0.967024 1.933025c-0.967024 1.932002-0.967024 3.864004-0.967024 5.796006 0 11.594059 9.662057 21.258163 21.255093 21.258163l1.932002 0 0 0 79.230506 0 86.954421-204.832132 257.94684 0 97.585549 204.832132 91.785449 0 0 0 1.933025 0c11.593036 0 21.258163-9.664104 21.258163-21.258163C840.689532 765.608022 839.723531 763.674996 839.723531 760.776993L839.723531 760.776993 839.723531 760.776993 839.723531 760.776993 839.723531 760.776993zM392.405693 501.833453l90.797959-214.494189 102.410438 214.494189L392.405693 501.833453 392.405693 501.833453zM178.876482 824.545342l664.711054 0 0 71.497381L178.876482 896.042723 178.876482 824.545342 178.876482 824.545342zM178.876482 824.545342"
            p-id="27586"
          ></path>
        </svg>
      </span>
      <span @click="addRect">
        <svg
          t="1667999031026"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="30403"
          width="13"
          height="13"
        >
          <path
            d="M962 962H62V62h900v900zM162 862h700V162H162v700z"
            p-id="30404"
          ></path>
        </svg>
      </span>
      <span @click="addCircle">
        <svg
          t="1667998960519"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="29010"
          width="13"
          height="13"
        >
          <path
            d="M512 950.857143c241.371429 0 438.857143-197.485714 438.857143-438.857143s-197.485714-438.857143-438.857143-438.857143-438.857143 197.485714-438.857143 438.857143 197.485714 438.857143 438.857143 438.857143z m0 73.142857c-285.257143 0-512-226.742857-512-512s226.742857-512 512-512 512 226.742857 512 512-226.742857 512-512 512z"
            fill="#333333"
            p-id="29011"
          ></path>
        </svg>
      </span>
      <span @click="addTriangle">
        <svg
          t="1667998987459"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="29918"
          width="13"
          height="13"
        >
          <path
            d="M928.64 896a2.144 2.144 0 0 1-0.64 0H96a32.032 32.032 0 0 1-27.552-48.288l416-704c11.488-19.456 43.552-19.456 55.104 0l413.152 699.2A31.936 31.936 0 0 1 928.64 896z m-776.576-64h719.84L512 222.912 152.064 832z"
            p-id="29919"
          ></path>
        </svg>
      </span>
    </div>
	<Divider plain orientation="left">快捷导航</Divider>
	<div class="a_to">
    <a href="https://color.uisdc.com/pick.html" target="_blank">配色</a>
    <Divider type="vertical" />
    <a href="https://www.svgrepo.com/" target="_blank">素材</a>
	<Divider type="vertical" />
    <a href="https://unsplash.com/" target="_blank">图片</a>
	<Divider type="vertical" />
    <a href="https://www.pexels.com/zh-cn/search/%E8%83%8C%E6%99%AF/" target="_blank">背景</a>
	</div>
	
  </div>
</template>

<script>
import { uuid } from "vue-uuid"; //用来添加唯一标识
export default {
  name: "ToolsAdd",
  inject: ["canvas", "fabric"], //注入
  methods: {
    addText() {
      //添加文字
      const text = new this.fabric.IText("万事大吉", {
        left: 0, //文字的距离画布左边距离
        top: 100, //文字的顶边距离
        fontFamily: "arial", //字体
        fontSize: 40, //大小
        id: uuid.v1(), //生成唯一标识
      });
      this.canvas.c.add(text);
      this.canvas.c.setActiveObject(text); //设置画布上的某个对象为活动对象。
    },
    addTextBox() {
      const textbox = new this.fabric.Textbox("诸事顺遂", {
        fontSize: 40,
        left: 100,
        top: 100,
        fontFamily: "arial",
        splitByGrapheme: true,
        width: 300,
        id: uuid.v1(),
      });
      this.canvas.c.add(textbox);
      this.canvas.c.setActiveObject(textbox);
    },
    addRect() {
      const rect = new this.fabric.Rect({
        left: 100,
        top: 100,
        fill: "red",
        width: 100,
        height: 100,
        id: uuid.v1(),
        name: "矩形",
      });
      this.canvas.c.add(rect);
      this.canvas.c.setActiveObject(rect);
    },
    addCircle() {
		const circle= new this.fabric.Circle({
        left: 100,
        top: 100,
        fill: "red",
      radius:50,
        id: uuid.v1(),
        name: "圆形",
      });
      this.canvas.c.add(circle);
      this.canvas.c.setActiveObject(circle);
    },
    addTriangle() {
		const triangle= new this.fabric.Triangle({
        left: 100,
        top: 100,
        fill: "red",
		width: 100,
        height: 100,
        id: uuid.v1(),
        name: "三角形",
      });
      this.canvas.c.add(triangle);
      this.canvas.c.setActiveObject(triangle);
    },
  },
};
</script>

<style scope>
.tool-box {
  display: flex;
  justify-content: space-around;
}
.tool-box span {
  flex: 1;
  text-align: center;
  background-color: #f6f6f6;
  padding: 5px 0;
  margin-left: 2px;
}
.a_to{
	display: flex;
	flex-direction: row;
	justify-content: center}
.a_to a{
	display: inline-block;
}
</style>
