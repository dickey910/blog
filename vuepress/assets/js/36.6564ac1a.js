(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{384:function(e,t,o){},461:function(e,t,o){"use strict";var s=o(384);o.n(s).a},506:function(e,t,o){"use strict";o.r(t);o(59),o(82);var s={data:function(){return{list:[{cover:"http://pq3mt9wke.bkt.clouddn.com/3213214321.png",url:"http://pq3mt9wke.bkt.clouddn.com/1552895951232209.mp4",description:"大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫呀大花猫大花猫呀大花猫大花猫呀大花猫大花猫呀大花猫大花猫呀大花猫大花猫呀大花猫大花猫呀大花猫"},{cover:"http://pq3mt9wke.bkt.clouddn.com/143124321.png",url:"http://pq3mt9wke.bkt.clouddn.com/1552895945898993.mp4",description:"小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟啊小乌龟小乌龟啊小乌龟小乌龟啊小乌龟小乌龟啊小乌龟小乌龟啊小乌龟小乌龟啊小乌龟"},{cover:"http://pq3mt9wke.bkt.clouddn.com/586337357.png",url:"http://pq3mt9wke.bkt.clouddn.com/1552896499270164.mp4",description:"哈哈哈哈哈哈哈哈哈哈"},{cover:"http://pq3mt9wke.bkt.clouddn.com/678976986798.png",url:"http://pq3mt9wke.bkt.clouddn.com/1552896500269933.mp4",description:"嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿"},{cover:"http://pq3mt9wke.bkt.clouddn.com/6095487609.png",url:"http://pq3mt9wke.bkt.clouddn.com/1552896502100868.mp4",description:"呵呵呵呵呵呵呵呵"},{cover:"http://pq3mt9wke.bkt.clouddn.com/48666754765.png",url:"http://pq3mt9wke.bkt.clouddn.com/1552896503859343.mp4",description:"哈哈哈哈哈哈哈哈哈哈"},{cover:"http://pq3mt9wke.bkt.clouddn.com/434689743867.png",url:"http://pq3mt9wke.bkt.clouddn.com/1552896506605984.mp4",description:"哈哈哈哈哈哈哈哈哈哈"}],errorMsg:"",showConsole:!1}},methods:{reserveCallback:function(e){this.showConsole&&console.log(e);var t=e[0].intersectionRatio,o=e[0].target;o.querySelector(".js-span").innerText=t,1-t<=.03&&this.onPlay(o)},onPlay:function(e){this.onPauseAllVideos();var t=e.querySelector(".js-video"),o=e.querySelector(".js-cover"),s=t.querySelector("video");o.classList.add("hide"),t.classList.remove("hide"),s.play().then(function(){s.muted=!1})},onPause:function(e){var t=e.querySelector(".js-video"),o=e.querySelector(".js-cover"),s=t.querySelector("video");o.classList.remove("hide"),t.classList.add("hide"),s.muted=!0,s.pause()},onPauseAllVideos:function(){var e=this;document.querySelectorAll(".js-item").forEach(function(t,o){e.onPause(t)})},onClickCover:function(e){this.onPauseAllVideos();var t=e.target.parentNode,o=t.nextSibling,s=o.querySelector("video");t.classList.add("hide"),o.classList.remove("hide"),s.muted=!1,s.play()},onClickVideo:function(e){var t=e.target;t.paused?(t.muted=!1,t.play()):(t.muted=!0,t.pause())},addObserver:function(e){for(var t=0,o=e.length;t<o;t++)this.observer.observe(e[t])}},mounted:function(){if("IntersectionObserver"in window){var e=document.querySelector(".js-content"),t=document.querySelectorAll(".js-item");this.observer=new IntersectionObserver(this.reserveCallback,{root:e,rootMargin:"0px",threshold:[.7,.8,.9,1]}),this.addObserver(t)}else this.errorMsg="您的浏览器不支持 IntersectionObserver API"}},r=(o(461),o(12)),c=Object(r.a)(s,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"intersection-wrapper"},[o("label",{attrs:{for:"c1"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.showConsole,expression:"showConsole"}],attrs:{id:"c1",type:"checkbox"},domProps:{checked:Array.isArray(e.showConsole)?e._i(e.showConsole,null)>-1:e.showConsole},on:{change:function(t){var o=e.showConsole,s=t.target,r=!!s.checked;if(Array.isArray(o)){var c=e._i(o,null);s.checked?c<0&&(e.showConsole=o.concat([null])):c>-1&&(e.showConsole=o.slice(0,c).concat(o.slice(c+1)))}else e.showConsole=r}}}),e._v("看log(打开开发者工具看log)")]),e._v(" "),e.errorMsg?o("p",{staticClass:"txt-red"},[o("i",{staticClass:"el-icon-info"}),e._v(e._s(e.errorMsg)+"，请更新chrome浏览器查看。")]):o("div",{staticClass:"wrapper"},[o("div",{staticClass:"sectionContent js-content"},[o("ul",{staticClass:"list"},e._l(e.list,function(t,s){return o("li",{staticClass:"item js-item"},[o("span",{staticClass:"label"},[e._v(e._s(s+1)+"("),o("span",{staticClass:"js-span"}),e._v(")")]),e._v(" "),o("div",{staticClass:"cover js-cover"},[o("img",{attrs:{src:t.cover,alt:"封面"}}),e._v(" "),o("i",{staticClass:"btn-start el-icon-caret-right",on:{click:e.onClickCover}})]),e._v(" "),o("div",{staticClass:"video js-video hide"},[o("video",{attrs:{src:t.url,muted:""},domProps:{muted:!0},on:{click:e.onClickVideo}})]),e._v(" "),o("div",{staticClass:"description"},[o("p",{staticStyle:{"-webkit-box-orient":"vertical"}},[e._v(e._s(t.description))])])])}),0)])])])},[],!1,null,"668e4a45",null);t.default=c.exports}}]);