<template>
  <div>
    <Divider orientation="left">历史</Divider>
    <ButtonGroup size="default">
      <Button @click="undo"><Icon type="md-undo" />{{ list.length }}</Button>
      <Button @click="redo"
        ><Icon type="md-redo" />{{ redolist.length }}</Button
      >
    </ButtonGroup>
  </div>
</template>

<script>
import { mixins } from "@/mixin/index";
const maxStep = 10;//内部设置，保存的最大步数
export default {
  name: "HistorySet",
  mixins: [mixins],
  data() {
    return {
      list: [],
     redolist: [],
    };
  },
  created() {
    //有操作更新时，记录进度   重新选择元素、元素被修改
    this.canvas.c.on({
      "object:modified": this.save,
      "selection:updated": this.save,
    });
  },
  methods: {
    //保存记录
    save() {
      const data = this.canvas.c.toJSON(["id"]);
      if (this.list.length > maxStep) {
        this.list.shift();
      }
      this.list.push(data);
    },
    //撤销
    undo() {
      if (this.list.length) {
        let item = this.list.pop();
        this.renderCanvas(item);
		this.redolist.push(item)
      }
    },
	//重做
    redo() {
		if(this.redolist.length){
			const item=this.redolist.pop()
			this.list.push(item)
			this.renderCanvas(item)
		}
	},
	//根据数据进行渲染
    renderCanvas(data) {
      this.canvas.c.clear();
      this.canvas.c.loadFromJSON(
        data,
        this.canvas.c.renderAll.bind(this.canvas.c)
      );
      this.canvas.c.requestRenderAll();
    },
  },
};
</script>

<style></style>
