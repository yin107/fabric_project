<template>
  <div>
	<ButtonGroup size="small">
<Button @click="delet" v-show="selectids.length>0||selecMode==='one'">
	<svg t="1668930719814" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2507" width="15" height="15"><path d="M768 384c-19.2 0-32 12.8-32 32l0 377.6c0 25.6-19.2 38.4-38.4 38.4L326.4 832c-25.6 0-38.4-19.2-38.4-38.4L288 416C288 396.8 275.2 384 256 384S224 396.8 224 416l0 377.6c0 57.6 44.8 102.4 102.4 102.4l364.8 0c57.6 0 102.4-44.8 102.4-102.4L793.6 416C800 396.8 787.2 384 768 384z" p-id="2508" fill="#515151"></path><path d="M460.8 736l0-320C460.8 396.8 448 384 435.2 384S396.8 396.8 396.8 416l0 320c0 19.2 12.8 32 32 32S460.8 755.2 460.8 736z" p-id="2509" fill="#515151"></path><path d="M627.2 736l0-320C627.2 396.8 608 384 588.8 384S563.2 396.8 563.2 416l0 320C563.2 755.2 576 768 588.8 768S627.2 755.2 627.2 736z" p-id="2510" fill="#515151"></path><path d="M832 256l-160 0L672 211.2C672 166.4 633.6 128 588.8 128L435.2 128C390.4 128 352 166.4 352 211.2L352 256 192 256C172.8 256 160 268.8 160 288S172.8 320 192 320l640 0c19.2 0 32-12.8 32-32S851.2 256 832 256zM416 211.2C416 198.4 422.4 192 435.2 192l153.6 0c12.8 0 19.2 6.4 19.2 19.2L608 256l-192 0L416 211.2z" p-id="2511" fill="#515151"></path></svg>
</Button>
<Button style="margin-left:15px" @click="clone()" v-show="selecMode==='one'">
	<svg t="1668930768741" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3478" width="15" height="15"><path d="M832 64H295.992889a8.021333 8.021333 0 0 0-7.992889 7.992889V128c0 4.408889 3.612444 7.992889 7.992889 7.992889h496.014222V824.035556c0 4.380444 3.584 7.992889 7.992889 7.992888h56.007111a8.021333 8.021333 0 0 0 7.992889-7.992888V96c0-17.692444-14.307556-32-32-32z m-128 128h-512c-17.692444 0-32 14.307556-32 32v530.688c0 8.533333 3.413333 16.611556 9.386667 22.613333l173.312 173.283556c2.190222 2.218667 4.693333 4.010667 7.395555 5.518222v1.905778h4.209778c3.498667 1.28 7.196444 1.991111 11.008 1.991111H704c17.692444 0 32-14.307556 32-32V224c0-17.692444-14.307556-32-32-32zM382.008889 896h-0.199111l-149.816889-149.788444v-0.199112h150.016V896z" p-id="3479" fill="#515151"></path></svg>
</Button>
</ButtonGroup>
  </div>
</template>

<script>
import { mixins } from "@/mixin/index";
import {uuid} from 'vue-uuid'
export default {
name:'DeletClone',
mixins: [mixins],

methods:{
	delet(){
		let object=this.canvas.c.getActiveObjects()
		object&& object.map(item=>{this.canvas.c.remove(item)})//实现单个或者多个选中元素的删除
		this.canvas.c.discardActiveObject()
	this.canvas.c.renderAll()
	},
	clone(){
		//对于单个选中对象的克隆
		let object=this.canvas.c.getActiveObject()
		object.clone(cloned=>{
			this.canvas.c.discardActiveObject()
			const grid=10
			cloned.set({
				left:cloned.left+grid,
				top:cloned.top+grid,
				id:uuid.v1()
			})
			this.canvas.c.add(cloned)
			this.canvas.c.setActiveObject(cloned)
			this.canvas.c.requestRenderAll()
		})
	}
}
}
</script>

<style>

</style>