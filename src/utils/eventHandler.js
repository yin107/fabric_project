//自定义事件
import EventEmitter from "events";

class EventHandle extends EventEmitter{
init(handler){
	this.handler=handler//是canvas对象
	const This=this
	this.handler.on('selection:created',function(){
		This._selectemit()
	})
	this.handler.on('selection:updated',function(){
		This._selectemit()
	})
	this.handler.on('selection:cleared',()=>{
		This._selectemit()
	})

}
_selectemit(){
	//派发元素选中事件
	const actives=this.handler.getActiveObjects()
   //this是canvas,所以要提前用This来保存
if(actives && actives.length===1){
	this.emit('selectOne',actives)
}
else	if(actives && actives.length>1){
		this.emit('selecMultiple',actives)
	}
	else{
		this.emit('selecCancel',actives)
	}
}
}

export default EventHandle