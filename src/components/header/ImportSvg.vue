<template>
    <div class="import-file">
      <Button size="small" type="default" @click="insert">插入SVG元素</Button>
      <!-- 对话框显示 -->
      <Modal
          v-model="modal1"
          title="请选择"
          @on-ok="ok">
          <RadioGroup v-model="button4" type="button" size="large">
                   <Radio label="string">字符串</Radio>
                  <Radio label="file">文件</Radio>
    </RadioGroup>
    <!-- 字符串 -->
    <Input v-if="button4==='string'" v-model="svgStr"  show-word-limit type="textarea" placeholder="请输入SVG字符"  />
    <!-- 文件 -->
    <Upload v-if="button4==='file'" action="#" :before-upload="handleUpload">
        <Button icon="ios-cloud-upload-outline">选择SVG文件</Button>
    </Upload>
      </Modal>
      </div>
  </template>
  
  <script>
import {mixins} from '@/mixin/index'
import { getImgstr } from '@/utils/utils'
import {uuid} from 'vue-uuid'

  export default {
      name: 'ToolBar',
      mixins:[mixins],
      data () {
              return {
                  modal1: false,
                  button4:'string',
                  svgStr:'',
                  svgFile:null
              }
      },
      methods: {
        insert(){
            this.modal1=true
this.svgStr=''
this.svgFile=null
        },
          ok() {
                  if(this.button4==='string'){
                    this.insertSvgStr()
                  }
                  else{
                    this.insertSvgFile()
                  }
          },
          //插入svg字符串,转换为canvas元素
          insertSvgStr(){
            const This=this //一定要保存当前环境下的this，不然后面的this.canvas.c就取不到
// This.fabric.loadSVGFromString(this.svgStr,function(objects,options)
// {
// var obj=This.fabric.util.groupSVGElements(objects,options)
// This.canvas.c.add(obj).renderAll()
// }
        //   )
//或者使用
This.fabric.loadSVGFromString(this.svgStr,function(objects,options){
    const item=This.fabric.util.groupSVGElements(objects,{...options,name:'defaultSVG',id:uuid.v1()})
    This.canvas.c.add(item).centerObject(item).renderAll()
})
},
//添加SVG文件
insertSvgFile(){
    const This=this
    this.fabric.loadSVGFromURL(this.svgFile,function(objects,options){
        const item=This.fabric.util.groupSVGElements(objects,{...options,name:"defaultSVG",id:uuid.v1()})
        This.canvas.c.add(item).centerObject(item).renderAll()
    })
} ,
handleUpload(file){
getImgstr(file).then(res=>{
    this.svgFile=res//将svg图像转换为base64编码的字符串
})
return false
}
    }
  }
  </script>
  
  <style scoped>
  .import-file{
      display:inline
  }
  </style>