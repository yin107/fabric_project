<template>
  <div>
    <ButtonGroup size="small">
      <!--元素翻转-->
      <Button @click="flipx()"
	  :disabled="!(selecMode==='one')"
        ><svg t="1668739866535" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6194" width="15" height="15"><path d="M252.76928 299.904l146.2784 0 0 472.42752-146.2784 0 0-472.42752Z" p-id="6195" fill="#515151"></path><path d="M477.48096 85.34528l70.87104 0 0 885.80608-70.87104 0 0-885.80608Z" p-id="6196" fill="#515151"></path><path d="M629.80096 284.8l31.0016 0 0 502.88128-31.0016 0L629.80096 284.8zM776.42752 284.8l31.0016 0 0 502.88128-31.0016 0L776.42752 284.8zM657.09056 315.8016l0-31.0016 123.04896 0 0 31.0016L657.09056 315.8016zM657.27488 787.64544l0-31.0016 123.04896 0 0 31.0016L657.27488 787.64544z" p-id="6197" fill="#515151"></path></svg>
      </Button>
      <Button @click="flipy()"
	  :disabled="!(selecMode==='one')"
        ><svg t="1668739901580" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6399" width="15" height="15"><path d="M286.01856 250.91584l472.4224 0 0 146.2784-472.4224 0 0-146.2784Z" p-id="6400"></path><path d="M87.19872 475.62752l885.80096 0 0 70.87104-885.80096 0 0-70.87104Z" p-id="6401"></path><path d="M773.55008 627.94752l0 31.0016L270.6688 658.94912l0-31.0016L773.55008 627.94752zM773.55008 774.5792l0 31.0016L270.6688 805.5808l0-31.0016L773.55008 774.5792zM742.54848 655.24224l31.0016 0 0 123.04896-31.0016 0L742.54848 655.24224zM270.70464 655.42144l31.0016 0 0 123.04896-31.0016 0L270.70464 655.42144z" p-id="6402"></path></svg>
      </Button>
    </ButtonGroup>
  </div>
</template>

<script>
import { mixins } from "@/mixin/index";

export default {
  name: "FlipTool",
  mixins: [mixins],

  methods:{
flipx(){
	this.canvas.c.getActiveObject().set('scaleX',-1).setCoords()
	this.canvas.c.requestRenderAll()
},
flipy(){
	this.canvas.c.getActiveObject().set('scaleY',-1).setCoords()
	this.canvas.c.requestRenderAll()
}
  }
};
</script>

<style></style>
