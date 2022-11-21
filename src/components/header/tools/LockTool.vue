<template>
  <div>
    <!-- 组件要加上 i- 否则组件不显示 -->
    <i-switch @on-change="changeclock" v-model='islock' v-show="selecMode==='one'">
      <Icon type="md-lock" slot="open"></Icon>
      <Icon type="md-unlock" slot="close"></Icon>
    </i-switch>
  </div>
</template>

<script>
import { mixins } from "@/mixin/index";


const lockAttrs = [
  "lockMovementX",
  "lockMovementY",
  "lockRotation",
  "lockScalingX",
  "lockScalingY",
];
export default {
  name: "LockTool",
  mixins: [mixins],
  data(){
	return {
		islock:false
	}
  },
  created() {
	const This=this
this.event.on('selectOne',function(item){
	//注意this的改变
	This.islock=!item[0].hasControls
})



//注册的事件
	this.event.on('changelock',function(items,e){
	items[0].hasControls=!e
	lockAttrs.forEach(key=>{
		items[0][key]=e
	})

})

  },
  methods: {
    changeclock(e) {
		const actives=this.canvas.c.getActiveObjects()
		if(actives && actives.length==1){
			//派发改变对象锁定状态的事件
			this.event.emit('changelock',actives,e)
		}
    },
  },
};
</script>

<style></style>
