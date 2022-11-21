<template>
  <div>
	<Divider plain orientation="left">标题模板</Divider>
	<Tooltip :content="item.label" placement="top" v-for="(item,index) in list" :key="index">
<img class="templ-img" :src="item.imgsrc" alt="" @click="getTemplData(item.tempUrl)">     
   </Tooltip>
  </div>
</template>

<script>
import { mixins } from "@/mixin/index";
import {downFontByJSON} from '@/utils/utils'
// 1、将img渲染到页面中
// 2、给img添加点击事件，将json格式添加到canvas中
export default {
name:'ImortTempl',
mixins: [mixins],
data(){
	return {
		publicPath:process.env.BASE_URL,
		list:[
			{
				label:"笔记模板",
				tempUrl:'./template/073606d4-22de-491b-8b51-b90d72101d89.json',
				imgsrc:'./template/073606d4-22de-491b-8b51-b90d72101d89.png',//会自动查找public文件夹
			},
			{
				label:'醒目封面',
				tempUrl:'./template/dcebee41-59b5-408b-a65a-c51bc390be3d.json',
				imgsrc:'./template/dcebee41-59b5-408b-a65a-c51bc390be3d.png'
			},
			{
				label:'教师节',
				tempUrl:'./template/3a7471f2-b8cf-4939-ad1a-a7d586768640.json',
				imgsrc:'./template/3a7471f2-b8cf-4939-ad1a-a7d586768640.png'
			},
			{
				label:'升职锦囊',
				tempUrl:'./template/ef5eb884-28e0-4d79-9e98-a73d759541f8.json',
				imgsrc:'./template/ef5eb884-28e0-4d79-9e98-a73d759541f8.png'
			}
		],
		jsonFile:null
	}
},
// mounted(){
// 	console.log(this.publicPath);// /ImportTempl
// }
methods:{
	getTemplData(file){
		this.$Spin.show({
			render:(h)=>{
				return h('div','加载中...')
			}
		})
	this.$http.get(file).then(res=>{
		//res.data还是一个对象，需要将其装换为JSON格式
		this.jsonFile=JSON.stringify(res.data)
		this.$Spin.show({
			render:(h)=>{
				return h('div','加载字体中...')
			}
		})
		//添加到canvas中
		// this.canvas.c.loadFromJSON(this.jsonFile,this.canvas.c.renderAll.bind(this.canvas.c))
		//最好将里面所涉及到的字体加载一下
		downFontByJSON(this.jsonFile).then(()=>{
			this.canvas.c.loadFromJSON(this.jsonFile,this.canvas.c.renderAll.bind(this.canvas.c)
			//,function(o,object){
// //拿到了这个json文件中的每个元素 object
// console.log(object);
// 			}
)
			this.$Spin.hide()
		})
	}).catch(err=>{
		setTimeout(()=>{
			this.$Spin.show({
			render:(h)=>{
				return h('div',err)
			}
		})
		},3000)
	})

	}
}
}
</script>

<style scoped>
.templ-img{
	width:77px;
	cursor: pointer;
	margin-right: 5px;
}
</style>