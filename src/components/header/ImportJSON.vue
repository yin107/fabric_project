<template>
  <div class="import-file">
    <Button size="small" type="default" @click="modal1=true">导入文件</Button>
    <!-- 对话框显示 -->
    <Modal
        v-model="modal1"
        title="请选择"
        @on-ok="ok">
        <Upload :before-upload="handleUpload" action="#">
        <Button icon="ios-cloud-upload-outline">选择JSON文件</Button>
    </Upload>
    </Modal>
    </div>
</template>

<script>
import {downFontByJSON} from '@/utils/utils'
import {mixins} from '@/mixin/index'
export default {
    name: 'ToolBar',
    mixins:[mixins],
    data () {
            return {
               modal1:false,
               jsonFile:null
            }
    },
    methods: {
        ok() {
            if(!this.jsonFile){//没有传入json文件
            this.$Message.error('请选择JSON文件')//vue消息提示this.$Message( )
            return 
            }
            //点击确定后，将刚刚传入的JSON文件渲染到页面上
            downFontByJSON(this.jsonFile).then(()=>{
                this.canvas.c.loadFromJSON(this.jsonFile,this.canvas.c.renderAll.bind(this.canvas.c))
            })
        //    this.canvas.c.loadFromJSON(this.jsonFile,this.canvas.c.renderAll.bind(this.canvas.c))
        },

        handleUpload(file) {
      const reader=new FileReader()
reader.readAsText(file,'UTF-8')
reader.onload=()=>{
this.jsonFile=reader.result
console.log(this.jsonFile);
}
return false //避免因此action没有上传而报错
    }
    },
   
}
</script>

<style scoped>
.import-file{
    display:inline
}
</style>