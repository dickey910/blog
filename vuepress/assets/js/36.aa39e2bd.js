(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{377:function(t,a,e){},528:function(t,a,e){"use strict";var n=e(377);e.n(n).a},589:function(t,a,e){"use strict";e.r(a);var n={data:function(){return{canvas:null,ctx:null,color:null,exterbalUrl:"../../../../static/blog/else/miaoWechatIMG241526366731_.pic.jpg"}},methods:{pick:function(t,a){var e=t.layerX,n=t.layerY,i=a.getImageData(e,n,1,1).data,r="rgba("+i[0]+","+i[1]+","+i[2]+","+(i[3]/255).toFixed(2)+")";this.color.style.background=r,this.color.textContent=r},onFileChange:function(t){var a=this,e=t.target.files[0],n=new Blob([e]),i=URL.createObjectURL(n),r=new Image;r.src=i,r.onload=function(){a.draw(r),URL.revokeObjectURL(i)}},draw:function(t){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(t,0,0,this.canvas.width,this.canvas.height)},onConfirmUrl:function(){var t=this,a=new Image;a.crossOrigin="anonymous",a.src=this.exterbalUrl,a.onload=function(){t.draw(a)}}},mounted:function(){var t=this;this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.color=this.$refs.color,this.onConfirmUrl(),this.canvas.onmousemove=function(){t.pick(event,t.ctx)}}},i=(e(528),e(12)),r=Object(i.a)(n,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pixelPick-wrapper"},[e("input",{attrs:{type:"file",name:""},on:{change:t.onFileChange}}),t._v(" "),e("el-input",{attrs:{placeholder:"请输入图片url",size:"small",clearable:""},model:{value:t.exterbalUrl,callback:function(a){t.exterbalUrl=a},expression:"exterbalUrl"}},[e("el-button",{attrs:{slot:"append"},on:{click:t.onConfirmUrl},slot:"append"},[t._v("确定")])],1),t._v(" "),e("p",{ref:"color",attrs:{id:"color"}}),t._v(" "),e("canvas",{ref:"canvas",attrs:{id:"canvas",width:"500",height:"400"}})],1)},[],!1,null,"17193366",null);a.default=r.exports}}]);