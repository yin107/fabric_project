<template>
  <div class="import-file">
    <Button size="small" type="default" @click="modal1=true">插入图片</Button>
        <!-- 对话框显示 -->
        <Modal
        v-model="modal1"
        title="请选择"
        @on-ok="ok">
        <Upload  :before-upload="handleUpload" action="#">
        <Button icon="ios-cloud-upload-outline">选择图片文件</Button>
    </Upload>
    </Modal>
  </div>
</template>

<script>
import {mixins} from '@/mixin/index'
import {getImgstr} from '@/utils/utils'
import { fabric } from 'fabric';
import {uuid} from 'vue-uuid'
export default {
  mixins:[mixins],
    name: 'ToolBar',
    data () {
            return {
               modal1:false,
               imgFile:null
            }
    },
    methods: {
        ok() {//是点击了确定之后，才把刚刚上传的图片放到canvas中
/*通过URL来添加图片
                fabric.Image.fromURL(this.imgFile,img=>{
                  this.canvas.c.add(img).renderAll()
                },{crossOrigin:'anonymous'})
 */
//通过DOM元素来添加图片，并修改图片的相关属性
const imgEl=document.createElement('img')
imgEl.src=this.imgFile
imgEl.onload=()=>{
  const imgInstance=new fabric.Image(imgEl,{
    id:uuid.v1(),
    name:'图片1',
    left:30,
    top:20
  })
  imgInstance.scale(0.2)//设置图片的缩放
  this.canvas.c.add(imgInstance)
this.canvas.c.setActiveObject(imgInstance)
  this.canvas.c.renderAll()
}
        },
        handleUpload(file) {
        getImgstr(file).then(res=>{
          this.imgFile=res
        })
        return false
    }
    },
}
</script>

<style>
.import-file{
    display:inline
}
</style>