<template>
  <div v-show="selecMode=='one'">
	<!-- 只有在单个元素选中的时候也显示，与layerset组件相关，那么注意此时数据要保存到mixin中共享 -->

  <!-- 字体设置 -->
<div v-show="textType.includes(selecOneType)">
	<Divider plain orientation="left">字体</Divider>
	<Form ref="formInline"  inline :label-width="40" label-position="left">
        <FormItem label="大小">
            <InputNumber
            size="small" v-model="fontAtrr.fontSize"  @on-change="(value)=>changeCommon('fontSize',value)"
          ></InputNumber>
        </FormItem>
        <FormItem label="字体">
            <Select
            size="small"
		v-model="fontAtrr.fontFamily"
		@on-change="changeFontFamily"
          >
            <Option
              v-for="item in fontFamilyList"
			  :value="item"
              :key="'font-' + item"
              >{{ item }}</Option
            >
          </Select>
        </FormItem>
		<FormItem label="对齐" 
		>
			<RadioGroup  type="button" size="small"
			v-model="fontAtrr.textAlign"
            @on-change="(value) => changeCommon('textAlign', value)"
			>
            <Radio label="left"><svg t="1669022957826" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5218" width="14" height="14"><path d="M96 128h832v96H96zM96 576h832v96H96zM96 352h576v96H96zM96 800h576v96H96z" p-id="5219" fill="#515151"></path></svg></Radio>
            <Radio label="center"><svg t="1669023034249" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5779" width="15" height="15"><path d="M96 128h832v96H96zM96 576h832v96H96zM224 352h576v96H224zM224 800h576v96H224z" p-id="5780" fill="#515151"></path></svg></Radio>
            <Radio label="right"><svg t="1669023002707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5576" width="14" height="14"><path d="M96 128h832v96H96zM96 576h832v96H96zM352 352h576v96H352zM352 800h576v96H352z" p-id="5577" fill="#515151"></path></svg></Radio>
        </RadioGroup>
        </FormItem>
		<div style="padding:5px 30px">
			加粗：<i-switch size="small" 
			v-model='fontAtrr.fontWeight' true-value="bold" false-value="normal" @on-change="value=>{changeCommon('fontWeight',value)}"></i-switch>
			斜体：<i-switch size="small" v-model='fontAtrr.fontStyle' true-value="italic" false-value="normal" @on-change="value=>{changeCommon('fontStyle',value)}"></i-switch>
			下划：<i-switch size="small"  v-model="fontAtrr.underline"
			@on-change="value=>{changeCommon('underline',value)}"></i-switch>
			中划：<i-switch size="small" v-model='fontAtrr.linethrough' @on-change="value=>{changeCommon('linethrough',value)}"></i-switch>
			上划：<i-switch size="small" v-model='fontAtrr.overline' @on-change="value=>{changeCommon('overline',value)}"></i-switch>
		</div>
		<FormItem label="行高">
            <InputNumber
            size="small" v-model="fontAtrr.lineHeight"  @on-change="(value)=>changeCommon('lineHeight',value)"
          ></InputNumber>
        </FormItem>
		<FormItem label="间距">
            <InputNumber
            size="small" v-model="fontAtrr.charSpacing"  @on-change="(value)=>changeCommon('charSpacing',value)"
          ></InputNumber>
        </FormItem>
    </Form>
</div>
<!-- 通用属性外观部分 -->
<div v-show="baseType.includes(selecOneType)">
	<Divider plain orientation="left">外观</Divider>
	<Form ref="formInline"  inline :label-width="40" label-position="left">
        <FormItem label="颜色">
			<ColorPicker
            v-model="baseAttr.fill"
            @on-change="(value) => changeCommon('fill', value)"
            alpha
            transfer
            size="small"
          />
        </FormItem>
		<FormItem label="旋转">
			<InputNumber
            v-model="baseAttr.angle"
            :max="360"
            @on-change="(value) => changeCommon('angle', value)"
            size="small"
          ></InputNumber>
        </FormItem>
		<FormItem label="X轴">
			<InputNumber
            v-model="baseAttr.left"
            @on-change="(value) => changeCommon('left', value)"
            size="small"
          ></InputNumber>
        </FormItem>
		<FormItem label="Y轴">
			<InputNumber
            v-model="baseAttr.top"
            @on-change="(value) => changeCommon('top', value)"
            size="small"
          ></InputNumber>
        </FormItem>
		<FormItem label="透明">
            <Slider v-model="baseAttr.opacity"  @on-change="(value) => changeCommon('opacity', value)"
            size="small"></Slider>
        </FormItem>
    </Form>
	<Divider plain orientation="left">描边</Divider>
	<Form ref="formInline"  inline :label-width="40" label-position="left">
		<FormItem label="宽度">
          <InputNumber
            v-model="baseAttr.strokeWidth"
            :max="360"
            @on-change="(value) => changeCommon('strokeWidth', value)"
            size="small"
          ></InputNumber>
        </FormItem>
		<FormItem label="颜色">
          <ColorPicker
            v-model="baseAttr.stroke"
            @on-change="(value) => changeCommon('stroke', value)"
            alpha
            transfer
            size="small"
          />
        </FormItem>
    </Form>
	<Divider plain orientation="left">阴影</Divider>
	<Form ref="formInline"  inline :label-width="40" label-position="left">
		<FormItem label="颜色">
          <ColorPicker
            size="small"
            v-model="baseAttr.shadow.color"
            @on-change="(value) => changeShadow('color', value)"
            alpha
            transfer
          />
        </FormItem>
		<FormItem label="模糊">
          <InputNumber
            v-model="baseAttr.shadow.blur"
            @on-change="(value) => changeShadow('blur', value)"
            size="small"
          ></InputNumber>
        </FormItem>
		<FormItem label="X轴">
          <InputNumber
            v-model="baseAttr.shadow.offsetX"
            @on-change="(value) => changeShadow('offsetX', value)"
            size="small"
          ></InputNumber>
        </FormItem>
        <FormItem label="Y轴">
          <InputNumber
            v-model="baseAttr.shadow.offsetY"
            @on-change="(value) => changeShadow('offsetY', value)"
            size="small"
          ></InputNumber>
        </FormItem>
    </Form>
</div>
	<!-- 图片属性 -->
	<div v-show="selecOneType==='image'">
      <Divider plain orientation="left">图片滤镜</Divider>
      模糊：<Slider
        v-model="imgAttr.blur"
        :max="1"
        :min="0"
        :step="0.1"
        @on-change="imgBlur"
        size="small"
      ></Slider>
    </div>
  </div>
</template>

<script>
import { mixins } from "@/mixin/index";
import fontList from "@/assets/fonts/font";
import FontFaceObserver from 'fontfaceobserver'
import { fabric } from "fabric";
export default {
name:'AttributeSet',
mixins: [mixins],
data(){
	return {
		//字体元素
		textType:['i-text', 'textbox', 'text'],
		//字体下拉列表
		fontFamilyList:fontList.map(item=>item.fontFamily),
		//字体属性
		fontAtrr:{
			fontSize:14,
			fontFamily:'',
			textBackgroundColor:'#fff',
			textAlign: '',
			fontWeight:'',
			fontStyle:'',
			underline:false,
			linethrough:false,
			overline:false,
			lineHeight:0,
			charSpacing:0
		},
		//通用元素
		baseType: ['text', 'i-text', 'textbox', 'rect', 'circle', 'triangle', 'image', 'group'],
		//通用属性
		baseAttr:{
			fill:'#fff',
			angle:0,
			left:0,
			top:0,
			opacity:0,
			strokeWidth:0,
			stroke:'#fff',
			shadow:{
				color:'#fff',
				blur:0,
				offsetX:0,
				offsetY:0
			}
		},
		//图片属性
		imgAttr:{
			blur:0
		}

	}
},
created(){
//在元素创建阶段对整个属性进行初始化
this.event.on('selectOne',()=>{
	const activeObject = this.canvas.c.getActiveObjects()[0];
	if (activeObject) {
        // base
        this.baseAttr.opacity = activeObject.get('opacity') * 100
        this.baseAttr.fill = activeObject.get('fill')
        this.baseAttr.left = activeObject.get('left')
        this.baseAttr.top = activeObject.get('top')
        this.baseAttr.stroke = activeObject.get('stroke')
        this.baseAttr.strokeWidth = activeObject.get('strokeWidth')
        this.baseAttr.shadow = activeObject.get('shadow') || {}
        if (activeObject.type === 'i-text' || activeObject.type === 'text' || activeObject.type === 'textbox') {
          this.fontAtrr.fontSize = activeObject.get('fontSize')
          this.fontAtrr.fontFamily = activeObject.get('fontFamily')
          this.fontAtrr.lineHeight = activeObject.get('lineHeight')
          this.fontAtrr.textAlign = activeObject.get('textAlign')
          this.fontAtrr.underline = activeObject.get('underline')
          this.fontAtrr.linethrough = activeObject.get('linethrough')
          this.fontAtrr.charSpacing = activeObject.get('charSpacing')
          this.fontAtrr.overline = activeObject.get('overline')
          this.fontAtrr.fontStyle = activeObject.get('fontStyle')
          this.fontAtrr.textBackgroundColor = activeObject.get('textBackgroundColor')
          this.fontAtrr.fontWeight = activeObject.get('fontWeight')
        }

        // 图片滤镜
        if (activeObject.type === 'image') {
          this.imgAttr.blur = activeObject.filters[0] ? activeObject.filters[0].blur : 0
        }

	}
})

	},
methods:{
	channe(value){
		console.log(value);
	},
	// 修改字体
changeFontFamily(fontName) {
	if(!fontName) return
//跳过加载的属性
const skipFonts=['arial','Microsoft','YaHei']
if(skipFonts.includes(fontName)){
	const activeObject=this.canvas.c.getActiveObject()
		activeObject.set('fontFamily',fontName)
		this.canvas.c.renderAll()
		return
}
this.$Spin.show()
	//字体加载
	 var font=new FontFaceObserver(fontName)
	 font.load(null,150000).then(()=>{
		const activeObject=this.canvas.c.getActiveObject()
		activeObject.set('fontFamily',fontName)
		this.canvas.c.renderAll()
		this.$Spin.hide()
	 }).catch((err)=>{
console.log(err);
this.$Spin.hide()
	 })
    },
	//通用属性设置
		changeCommon(key,value){
			const activeObject=this.canvas.c.getActiveObject()
			//透明度特殊转换
			if(key==='opacity'){
				activeObject.set(key,(value)/100)
				this.canvas.c.renderAll()
				return
			}
			activeObject.set(key,value)
			this.canvas.c.renderAll()
		},
		//阴影设置
		changeShadow(){
			const object=this.canvas.c.getActiveObject()
			object.set('shadow',new fabric.Shadow(this.baseAttr.shadow))
			this.canvas.c.renderAll()
		},
		 // 图片属性
		 imgBlur(blur) {
      const activeObject = this.canvas.c.getActiveObjects()[0]
      if (activeObject) {
        const filter = new this.fabric.Image.filters.Blur({ blur });
        activeObject.filters = [filter]
        activeObject.applyFilters();
        this.canvas.c.renderAll()
      }
    },
	}
}
</script>

<style>
.ivu-form-item {
	width:100%;
  margin-bottom: 0;
}
.ivu-color-picker {
  display: block;
  width: 100%;
}
.ivu-input-number {
  display: block;
  width: 100%;
  top: 4px;
}

.ivu-divider-plain.ivu-divider-with-text-left {
  margin: 10px 0;
  font-weight: bold;
}
</style>