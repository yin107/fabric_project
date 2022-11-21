export const mixins={
	inject:['canvas','fabric','event'],
	data(){
		return {
			selectid: "",//单个选中元素的id属性
			selectids: [],//多个选中元素的id属性放在一个数组中
             selecMode:' ',//判断是单选还是多选 one|multiple
selecOneType:''//单个选中元素的类型 i-text | group ...
		} 
	},
	created(){
		this.event.on("selectOne", (e) => {
			this.selectids=[]
		  this.selectid = e[0].id;
		  this.selecMode='one'
		  this.selecOneType=e[0].type
		});
		this.event.on("selecMultiple", (e) => {
			this.selectid=''
		  this.selectids =e.map((item) => item.id);
		  this.selecMode='multiple'
		});
		this.event.on('selecCancel',()=>{
			this.selectid=''
			this.selectids=[]
			this.selecMode=''
			this.selecOneType=''
		})
	}
}