(window.webpackJsonp=window.webpackJsonp||[]).push([[16,55],{335:function(t,i,n){"use strict";n.r(i);var s=n(330),e=n.n(s),a=(n(337),{data:function(){return{canvas:null,canvasCtx:null,audioCtx:null,gainNode:null,analyser:null,scriptProcessor:null,canvasFillStyle:"rgb(225, 112, 85)"}},methods:{renderCanvas:function(){this.canvas=this.$refs.canvas,this.canvasCtx=this.canvas.getContext("2d");var t=this.$refs.analyser.offsetWidth;this.canvas.width=t,this.canvasCtx.fillStyle=this.canvasFillStyle},initAudioContext:function(){AudioContext||webkitAudioContext?this.audioCtx=new(AudioContext||webkitAudioContext):alert("您的浏览器不支持audioContext!")},initGain:function(){this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=1,this.gainNode.connect(this.audioCtx.destination)},initAnalyser:function(){this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=256,this.bufferLength=this.analyser.frequencyBinCount,this.dataArray=new Uint8Array(this.bufferLength)},initScriptProcessor:function(){this.scriptProcessor=this.audioCtx.createScriptProcessor(2048,1,1),this.analyser.connect(this.scriptProcessor),this.scriptProcessor.connect(this.audioCtx.destination)},bindDrawEvent:function(){this.scriptProcessor.onaudioprocess=this.draw},draw:function(){var t,i=this.canvas.width,n=this.canvas.height,s=e()(.5*i/this.bufferLength),a=0;this.canvasCtx.clearRect(0,0,i,n),this.analyser.getByteFrequencyData(this.dataArray);for(var o=0;o<this.bufferLength;o++)t=e()(.4*this.dataArray[o]),this.canvasCtx.fillRect(a,n-t,s,t),a+=s+3},init:function(){this.renderCanvas(),this.initAudioContext(),this.initAnalyser(),this.initGain(),this.initScriptProcessor()}},mounted:function(){var t=this;this.init(),window.onresize=function(){t.renderCanvas()}}}),o=n(12),r=Object(o.a)(a,void 0,void 0,!1,null,null,null);i.default=r.exports},370:function(t,i,n){},446:function(t,i,n){"use strict";var s=n(370);n.n(s).a},518:function(t,i,n){"use strict";n.r(i);var s={mixins:[n(335).default],data:function(){return{showCancel:!1,canvasFillStyle:"rgb(125, 95, 255)"}},methods:{onProcessFile:function(t){this.file=t.target.files[0];var i=URL.createObjectURL(this.file),n=new Audio;n.src=i,this.init(),n.oncanplay=this.initAudioSource(n),this.showCancel=!0},onCancel:function(){"closed"!=this.audioCtx.state&&this.audioCtx.close(),URL.revokeObjectURL(this.file),this.fileInput.value="",this.showCancel=!1},initAudioSource:function(t){this.fileInput=this.$refs.fileInput,this.audioSource=this.audioCtx.createMediaElementSource(t),this.audioSource.connect(this.analyser),this.audioSource.connect(this.gainNode),t.play(),this.bindDrawEvent()}},mounted:function(){}},e=(n(446),n(12)),a=Object(e.a)(s,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"audio-wrapper"},[i("div",{ref:"analyser",staticClass:"analyser"},[i("canvas",{ref:"canvas",attrs:{width:"100%",height:"100"}})]),this._v(" "),i("div",{staticClass:"file"},[i("input",{ref:"fileInput",attrs:{type:"file",accept:"audio/*"},on:{change:this.onProcessFile}}),this._v(" "),this.showCancel?i("el-button",{attrs:{size:"small"},on:{click:this.onCancel}},[this._v("取消")]):this._e()],1)])},[],!1,null,"d130ebd0",null);i.default=a.exports}}]);