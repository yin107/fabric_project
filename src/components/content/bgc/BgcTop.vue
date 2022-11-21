<template>
  <div style="padding-left: 10px">
    <Divider plain orientation="left">尺寸</Divider>
    <Form>
      <FormItem label="宽度" :label-width="40">
        <InputNumber
          :max="2000"
          :min="1"
          v-model="ValueWidth"
          size="small"
          @on-change="setsizewidth"
        />
      </FormItem>
      <FormItem label="高度" :label-width="40">
        <InputNumber
          :max="2000"
          :min="1"
          v-model="ValueHeight"
          size="small"
          @on-change="setsizeheight"
        />
      </FormItem>
    </Form>
    <Divider plain orientation="left">预设尺寸</Divider>
    <ButtonGroup vertical>
      <Button
        v-for="item in presetsize"
        :key="item.label"
        size="small"
        @click="setBY(item)"
        >{{ item.label }}{{ item.height }}x{{ item.width }}*{{
          item.scale
        }}</Button
      >
    </ButtonGroup>
    <Divider plain orientation="left">颜色</Divider>
    <Form>
      <FormItem label="颜色" :label-width="40">
        <ColorPicker v-model="colorbgc" size="small" @on-change="setcolor" transfer />
      </FormItem>
      <FormItem label="图片" :label-width="40">
        <Button
          size="small"
          icon="ios-cloud-upload-outline"
          @click="modal = true"
          >上传图片</Button
        >
        <Modal v-model="modal" title="请选择背景图片" @on-ok="setbgc">
          <Upload action="#" :before-upload="handleUpload">
            <Button icon="ios-cloud-upload-outline">选择图片文件</Button>
          </Upload>
        </Modal>
      </FormItem>
    </Form>
	<!-- 配色部分 -->
    <Divider plain orientation="left">配色</Divider>
    <div v-for="item in colorList" :key="item.label" class="item">
      <span class="item-text">{{ item.label }}：</span>
      <span
        v-for="itemimg in item.color"
        :key="itemimg"
        :style="`background:${itemimg}`"
     class="item-color"  @click="setBgcolor(itemimg)">
      </span>
    </div>
	<Divider plain orientation="left">背景纹理</Divider>
	<img
        src="@/assets/1.png"
        @click="setbgcwenli($event)"
        class="img"
      />
      <img
        src="@/assets/2.png"
		@click="setbgcwenli($event)"
        class="img"
        alt=""
      />
      <img
        src="@/assets/3.png"
		@click="setbgcwenli($event)"
        class="img"
        alt=""
      />
      <img
        src="@/assets/4.png"
		@click="setbgcwenli($event)"
        class="img"
        alt=""
      />
      <img
        src="@/assets/5.png"
		@click="setbgcwenli($event)"
        class="img"
        alt=""
      />
  </div>
</template>

<script>
import { mixins } from "@/mixin/index";
import { getImgstr } from "@/utils/utils";

const presetConfigSize = [
  {
    label: "红书竖版",
    width: 900,
    height: 1200,
    scale: 0.5,
  },
  {
    label: "红书横版",
    width: 1200,
    height: 900,
    scale: 0.5,
  },
  {
    label: "手机壁纸",
    width: 1080,
    height: 1920,
    scale: 0.4,
  },
];

export default {
  name: "BgcTop",
  mixins: [mixins],
  data() {
    return {
      modal: false,
      ValueWidth: 450,
      ValueHeight: 600,
      presetsize: [...presetConfigSize],
      colorbgc: "",
      bgcImage: "",
      colorList: [
        {
          label: "方案1",
          color: ["#5F2B63", "#B23554", "#F27E56", "#FCE766"],
        },
        {
          label: "方案2",
          color: ["#86DCCD", "#E7FDCB", "#FFDC84", "#F57677"],
        },
        {
          label: "方案3",
          color: ["#5FC2C7", "#98DFE5", "#C2EFF3", "#DDFDFD"],
        },
        {
          label: "方案4",
          color: ["#9EE9D3", "#2FC6C8", "#2D7A9D", "#48466d"],
        },
        {
          label: "方案5",
          color: ["#61c0bf", "#bbded6", "#fae3d9", "#ffb6b9"],
        },
        {
          label: "方案6",
          color: ["#ffaaa5", "#ffd3b6", "#dcedc1", "#a8e6cf"],
        },
      ],
    };
  },
  methods: {
    setsizewidth() {
      this.canvas.c.setWidth(this.ValueWidth);
      if (this.bgcImage != "") {
        this.setbgc();
      }

      this.canvas.c.renderAll();
    },
    setsizeheight() {
      this.canvas.c.setHeight(this.ValueHeight);
      if (this.bgcImage != "") {
        this.setbgc();
      }
      this.canvas.c.renderAll();
    },
    setBY(item) {
      this.ValueHeight = item.height * item.scale;
      this.ValueWidth = item.width * item.scale;
      this.setsizeheight();
      this.setsizewidth();
      if (this.bgcImage != "") {
        this.setbgc();
      }
      this.canvas.c.renderAll();
    },
    //设置背景颜色
	setccolorrot(color){
		this.canvas.c.setBackgroundImage(); //设置背景图片为空
      this.canvas.c.setBackgroundColor(
        color,
        this.canvas.c.renderAll.bind(this.canvas.c)
      );
      this.bgcImage = ""; //清除之前保存的背景图片
      this.canvas.c.renderAll();
	},
    setcolor() {
		this.setccolorrot(this.colorbgc)
    },
	setBgcolor(itemimg){
		this.setccolorrot(itemimg)
	},
    //给背景变量赋值
    handleUpload(file) {
      getImgstr(file).then((res) => {
        this.bgcImage = res;
      });
      return false;
    },
    //按下确定后设置背景图片
    setbgc() {
      this.canvas.c.setBackgroundColor();
      if (this.bgcImage == "") {
        return this.$Message.error("请选择图片文件");
      }
      /*		//按下确定后，将刚刚获取到的base64格式的文件字符串作为URL设置背景
		fabric.Image.fromURL(this.bgcImage,(img)=>{
			img.set({
				scaleX:this.canvas.c.width/img.width,
				scaleY:this.canvas.c.height/img.height
			})
			this.canvas.c.setBackgroundImage(img,this.canvas.c.renderAll.bind(this.canvas.c))
			this.canvas.c.renderAll()
		})
		*/
      //通过建立一个DOM元素来设置背景
      const imgEl = document.createElement("img");
      imgEl.src = this.bgcImage;
      //插入页面
      document.body.appendChild(imgEl);
      imgEl.onload = () => {
        this.setBgImg(imgEl);
        imgEl.remove();
      };
    },
    //设置背景图片
    setBgImg(target) {
      const imgEl = target.cloneNode(true);
      imgEl.onload = () => {
        //跨域设置
        const imgInstance = new this.fabric.Image(imgEl, {
          crossOrigin: "anonymous",
        });
        //渲染背景
        this.canvas.c.setBackgroundImage(
          imgInstance,
          this.canvas.c.renderAll.bind(this.canvas.c),
          {
            // 通过scale来设置图片大小，这里设置和画布一样大
            scaleX: this.canvas.c.width / imgInstance.width,
            scaleY: this.canvas.c.height / imgInstance.height,
          }
        );
        this.canvas.c.renderAll();
        this.canvas.c.requestRenderAll();
      };
    },
	setbgcwenli(e){
		this.setBgImg(e.target)
		this.bgcImage =e.target.src
	}
  },
};
</script>

<style scoped>
.ivu-form-item {
  margin-bottom: 0px;
}
.item{
	height: 30px;
  text-align: center;
display: flex;
align-content: flex-start;
justify-content: flex-start;
align-items: center
}

.item-text{
	display: inline-block;
  width:50px;
  height: 20px;
  text-align: center;
  line-height: 20px;
}
.item-color {
  display: inline-block;
  width: 20px;
  height: 20px;
 margin-left:7px;
}
</style>
