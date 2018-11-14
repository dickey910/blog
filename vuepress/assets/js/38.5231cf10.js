(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{345:function(t,s,a){"use strict";a.r(s);var n=a(1),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),a("p",[t._v("人们阅读文本时，如果眼睛从一行的终点移动到下一个行的开始需要太长时间，它们就会丢失它们所在的行。\n因此，为了最大限度地利用大屏幕，如果可以将文本分成多块列并排放置，就像报纸一样，想必会方便很多。\n而CSS3里的多栏(multi-col)布局，就是为此而生了。")]),t._m(3),a("p",[t._v("这个属性相当简单，今天跟大家一起学习一下。")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),a("p",[t._v("如果想让某元素在多栏容器中占据整行(横穿所有栏)，需要用到column-span。该属性只有两个值：'all'、'none'。\n详见下例。")]),a("p",[t._v("但是这个属性目前pc端的Firefox还没支持，奇怪的是移动端的Firefox竟然支持😄 。")]),a("p",[t._v("下面是浏览器计算column-count、column-width和容器可用宽度的伪代码：")]),t._m(12),t._m(13),a("Columns-Demo"),t._m(14),t._m(15)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"columns-——-css多栏布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#columns-——-css多栏布局","aria-hidden":"true"}},[this._v("#")]),this._v(" Columns —— CSS多栏布局")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{href:"https://denzel.netlify.com/css/columns.html?_=7654323456782357",target:"_blank",rel:"noopener noreferrer"}},[this._v("原文链接")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("若文章页混乱，请移步原文地址："),s("a",{attrs:{href:"https://denzel.netlify.com/css/columns.html?_=7654323456782357",target:"_blank",rel:"noopener noreferrer"}},[this._v("原文链接")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"正文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正文","aria-hidden":"true"}},[this._v("#")]),this._v(" 正文")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"columns声明多栏布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#columns声明多栏布局","aria-hidden":"true"}},[this._v("#")]),this._v(" columns声明多栏布局")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token property"}},[this._v("columns")]),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" column-width | column-count"),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"column-gap、column-rule样式控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#column-gap、column-rule样式控制","aria-hidden":"true"}},[this._v("#")]),this._v(" column-gap、column-rule样式控制")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("column-gap "),a("span",{attrs:{class:"token comment"}},[t._v("/*栏之间的间隔*/")]),t._v("\ncolumn-rule "),a("span",{attrs:{class:"token comment"}},[t._v("/*分割线 与border的写法几乎一毛一样*/")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/*column-rule分开写是这样的：*/")]),t._v("\ncolumn-rule-width "),a("span",{attrs:{class:"token comment"}},[t._v("/*分割线宽*/")]),t._v("\ncolumn-rule-style "),a("span",{attrs:{class:"token comment"}},[t._v("/*分割线样式*/")]),t._v("\ncolumn-rule-color "),a("span",{attrs:{class:"token comment"}},[t._v("/*分割线颜色*/")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("一个相对完整的多栏布局结构是这样的：\n"),s("img",{attrs:{src:"http://p8rbt50i2.bkt.clouddn.com/columns.svg",alt:"demo"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),s("p",[this._v("多栏容器中的其他元素，样式中的百分比是相对其所在的某一栏的。\n见下例中的图片，宽度是100%。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"column-span"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#column-span","aria-hidden":"true"}},[this._v("#")]),this._v(" column-span")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("N")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//column-count")]),t._v("\n    "),a("span",{attrs:{class:"token constant"}},[t._v("W")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//column-width ")]),t._v("\n    "),a("span",{attrs:{class:"token constant"}},[t._v("W")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//容器的可用宽度")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("width "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" auto"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" auto"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* 不是多栏容器 */")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("width "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" auto"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token constant"}},[t._v("N")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" column"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" auto"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token constant"}},[t._v("N")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("floor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" column"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("width "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" column"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token constant"}},[t._v("N")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("min")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("floor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" column"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("width "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" column"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token constant"}},[t._v("W")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" column"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("N")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" column"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Demo:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/columns",target:"_blank",rel:"noopener noreferrer"}},[this._v("columns")])]),s("li",[s("a",{attrs:{href:"https://drafts.csswg.org/css-multicol-1/",target:"_blank",rel:"noopener noreferrer"}},[this._v("CSS Multi-column Layout Module Level 1")])]),s("li",[s("a",{attrs:{href:"https://drafts.csswg.org/css-multicol-2/",target:"_blank",rel:"noopener noreferrer"}},[this._v("CSS Multi-column Layout Module Level 2")])])])}],!1,null,null,null);s.default=o.exports}}]);