(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{394:function(t,o,n){},474:function(t,o,n){"use strict";var e=n(394);n.n(e).a},496:function(t,o,n){"use strict";n.r(o);var e={data:function(){return{address:""}},methods:{onGetGeoLocation:function(){var t=new AMap.Map("geolocation-container2",{resizeEnable:!0,zoom:15});function o(t){console.log(t)}function n(t){console.log(t)}t.plugin("AMap.Geolocation",function(){var e=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonOffset:new AMap.Pixel(10,20),zoomToAccuracy:!0,buttonPosition:"RB"});t.addControl(e),e.getCurrentPosition(),AMap.event.addListener(e,"complete",o),AMap.event.addListener(e,"error",n)})}}},a=(n(474),n(12)),i=Object(a.a)(e,function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"geolocation-wrapper"},[o("RemoteScript",{attrs:{src:"https://webapi.amap.com/maps?v=1.4.6&key=127225798a44ffd56967d469fe90b7da"}}),this._v(" "),o("div",{staticClass:"btn"},[o("el-button",{attrs:{size:"small"},on:{click:this.onGetGeoLocation}},[this._v("获取我的位置")])],1),this._v(" "),o("div",{attrs:{id:"geolocation-container2"}})],1)},[],!1,null,null,null);o.default=i.exports}}]);