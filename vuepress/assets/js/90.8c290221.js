(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{270:function(t,e,n){},316:function(t,e,n){"use strict";var a=n(270);n.n(a).a},415:function(t,e,n){"use strict";n.r(e);var a={data:function(){return{canvas:null,ctx:null,color:null,exterbalUrl:"http://pn4meizzc.bkt.clouddn.com/blog/else/miaoWechatIMG241526366731_.pic.jpg"}},methods:{pick:function(t,e){var n=t.layerX,a=t.layerY,c=e.getImageData(n,a,1,1).data,i="rgba("+c[0]+","+c[1]+","+c[2]+","+(c[3]/255).toFixed(2)+")";this.color.style.background=i,this.color.textContent=i},onFileChange:function(t){var e=this,n=t.target.files[0],a=new Blob([n]),c=URL.createObjectURL(a),i=new Image;i.src=c,i.onload=function(){e.draw(i),URL.revokeObjectURL(c)}},draw:function(t){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(t,0,0,this.canvas.width,this.canvas.height)},onConfirmUrl:function(){var t=this,e=new Image;e.crossOrigin="anonymous",e.src=this.exterbalUrl,e.onload=function(){t.draw(e)}}},mounted:function(){var t=this;this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.color=this.$refs.color,this.onConfirmUrl(),this.canvas.onmousemove=function(){t.pick(event,t.ctx)}}},c=(n(316),n(1)),i=Object(c.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pixelPick-wrapper"},[n("input",{attrs:{type:"file",name:""},on:{change:t.onFileChange}}),n("el-input",{attrs:{placeholder:"请输入图片url",size:"small",clearable:""},model:{value:t.exterbalUrl,callback:function(e){t.exterbalUrl=e},expression:"exterbalUrl"}},[n("el-button",{attrs:{slot:"append"},on:{click:t.onConfirmUrl},slot:"append"},[t._v("确定")])],1),n("p",{ref:"color",attrs:{id:"color"}}),n("canvas",{ref:"canvas",attrs:{id:"canvas",width:"500",height:"400"}})],1)},[],!1,null,"6ce87936",null);e.default=i.exports}}]);