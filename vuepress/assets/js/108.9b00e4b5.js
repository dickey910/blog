(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{652:function(e,v,_){"use strict";_.r(v);var t=_(12),r=Object(t.a)({},function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"http"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[e._v("#")]),e._v(" http")]),e._v(" "),_("h2",{attrs:{id:"get-、post"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get-、post","aria-hidden":"true"}},[e._v("#")]),e._v(" get 、post ?")]),e._v(" "),_("ul",[_("li",[e._v("GET在浏览器回退时是无害的，而POST会再次提交请求。")]),e._v(" "),_("li",[e._v("GET产生的URL地址可以被Bookmark，而POST不可以。")]),e._v(" "),_("li",[e._v("GET请求会被浏览器主动cache，而POST不会，除非手动设置。")]),e._v(" "),_("li",[e._v("GET请求只能进行url编码，而POST支持多种编码方式。")]),e._v(" "),_("li",[e._v("GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。")]),e._v(" "),_("li",[e._v("GET请求在URL中传送的参数是有长度限制的，而POST没有。")]),e._v(" "),_("li",[e._v("对参数的数据类型，GET只接受ASCII字符，而POST没有限制。")]),e._v(" "),_("li",[e._v("GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。")]),e._v(" "),_("li",[e._v("GET参数通过URL传递，POST放在Request body中。")])]),e._v(" "),_("p",[e._v("实际上————")]),e._v(" "),_("p",[e._v("GET和POST本质上就是TCP连接，并无差别。但是由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。")]),e._v(" "),_("p",[e._v("两者有一个最大的区别就是——")]),e._v(" "),_("p",[_("strong",[e._v("GET产生一个TCP数据包；POST产生两个TCP数据包。")])]),e._v(" "),_("p",[e._v("对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；\n而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。")]),e._v(" "),_("p",[e._v("参考\n"),_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI3NzIzMzg3Mw==&mid=100000054&idx=1&sn=71f6c214f3833d9ca20b9f7dcd9d33e4#rd",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),_("OutboundLink")],1)]),e._v(" "),_("h2",{attrs:{id:"缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存","aria-hidden":"true"}},[e._v("#")]),e._v(" 缓存")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("它们的优先级是：(由上到下寻找，找到即返回；找不到则继续)")]),e._v(" "),_("ul",[_("li",[e._v("Service Worker")]),e._v(" "),_("li",[e._v("Memory Cache")]),e._v(" "),_("li",[e._v("Disk Cache")]),e._v(" "),_("li",[e._v("网络请求")])])]),e._v(" "),_("li",[_("p",[e._v("当浏览器要请求资源时")]),e._v(" "),_("ul",[_("li",[e._v("调用 Service Worker 的 fetch 事件响应")]),e._v(" "),_("li",[e._v("查看 memory cache")]),e._v(" "),_("li",[e._v("查看 disk cache。这里又细分：\n"),_("ul",[_("li",[e._v("如果有强制缓存且未失效，则使用强制缓存，不请求服务器。这时的状态码全部是 200")]),e._v(" "),_("li",[e._v("如果有强制缓存但已失效，使用对比缓存，比较后确定 304 还是 200")])])])])]),e._v(" "),_("li",[_("p",[e._v("发送网络请求，等待网络响应")])]),e._v(" "),_("li",[_("p",[e._v("把响应内容存入 disk cache (如果 HTTP 头信息配置可以存的话)")])]),e._v(" "),_("li",[_("p",[e._v("把响应内容 的引用 存入 memory cache (无视 HTTP 头信息的配置)")])]),e._v(" "),_("li",[_("p",[e._v("把响应内容存入 Service Worker 的 Cache Storage (如果 Service Worker 的脚本调用了 cache.put())")])])]),e._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.im/post/5c22ee806fb9a049fb43b2c5",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),_("OutboundLink")],1),e._v(" "),_("a",{attrs:{href:"https://www.jianshu.com/p/54cc04190252",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),_("OutboundLink")],1)]),e._v(" "),_("h2",{attrs:{id:"dns解析过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns解析过程","aria-hidden":"true"}},[e._v("#")]),e._v(" DNS解析过程")]),e._v(" "),_("p",[e._v("Domain Name Server，域名服务器，是进行域名(domain name)和与之相对应的IP地址 (IP address)转换的服务器。")]),e._v(" "),_("ul",[_("li",[e._v("1.判断本地的HOSTS文件是否存在相应映射文件。存在就返回")]),e._v(" "),_("li",[e._v("2.不存在的话，查询本地DNS解析缓存。")]),e._v(" "),_("li",[e._v("3.查询TCP/IP中设置的首个DNS服务器，查询本地区域是否存在相应映射。")]),e._v(" "),_("li",[e._v("4.如果查询的域名不由本地区域管理，查看本地DNS缓存中是否存在映射。")]),e._v(" "),_("li",[e._v("5.跳转至根DNS服务器，查询负责该请求的顶级域，并返回一个负责该域的IP地址。")]),e._v(" "),_("li",[e._v("6.本地DNS在根据该顶级域去联系负责该IP地址的域。")]),e._v(" "),_("li",[e._v("7.如果采用转发模式，会将返回结果交由上一级DNS服务器处理，如果不能处理，交由根DNS服务器处理或者上上级处理。")])])])},[],!1,null,null,null);v.default=r.exports}}]);