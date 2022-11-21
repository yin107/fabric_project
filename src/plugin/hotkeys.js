//快捷键设置

import hotkeys from 'hotkeys-js'
export default function (canvas){
	// console.log(canvas);
	// hotkeys('a',function(e){
	// 	console.log('aaa',e);
	// })
	//上下左右热键
    hotkeys('left,right,down,up',function(event,keyHandler){
		const activeObject=canvas.getActiveObject()
		if(activeObject){
			switch(keyHandler.key){
				case 'left':
					activeObject.set('left',activeObject.left - 1)
					break;
					case 'right':
						activeObject.set('left',activeObject.left + 1)
						break;
						case 'down':
							activeObject.set('top',activeObject.top + 1)
							break;
							case 'up':
								activeObject.set('top',activeObject.top - 1)
								break;
			}
			canvas.requestRenderAll()
		}

	})

	//删除热键
	hotkeys('backspace',function(event,){
		event.preventDefault()
		const activeObject=canvas.getActiveObjects()
		if(activeObject){
activeObject.map(item=>canvas.remove(item))
canvas.requestRenderAll()
canvas.discardActiveObject()//取消画布中所有对象的选中状态
		}
	})
}