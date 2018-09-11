(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{230:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"_845-greatest-common-divisor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_845-greatest-common-divisor","aria-hidden":"true"}},[t._v("#")]),t._v(" 845. Greatest Common Divisor")]),t._v(" "),s("p",[t._v("#Lintcode/二分法")]),t._v(" "),s("h2",{attrs:{id:"辗转相除法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#辗转相除法","aria-hidden":"true"}},[t._v("#")]),t._v(" 辗转相除法")]),t._v(" "),s("p",[t._v("辗转相除法， 又名欧几里德算法（Euclidean algorithm），是求最大公约数的一种方法。它的具体做法是：用较小数除较大数，再用出现的余数（第一余数）去除除数，再用出现的余数（第二余数）去除第一余数，如此反复，直到最后余数是0为止。如果是求两个数的最大公约数，那么最后的除数就是这两个数的最大公约数。")]),t._v(" "),s("h3",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子","aria-hidden":"true"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("求10 和 15 的最大公约数\n\n10 / 15 = 0 ... 10 # 第一步\n15 / 10 = 1 ... 5  # 第二步\n10 / 5  = 2 ... 0  # 第三步\n\n则最大公约数为 5，最后的除数\n")])])]),s("h3",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),s("ol",[s("li",[t._v("因为第一步时候，以小数去模大数时结果一定为小数的值，那么在递归中则可以直接将小数转进去")]),t._v(" "),s("li",[t._v("算法的关键为::用第二余数去除第一余数::，而第一次没有余数，所以要将小数去除大数来得到第一余数，直到 "),s("code",[t._v("第k+1余数 / 第k余数 = x ... 0")]),t._v("时，就可以确定最大公约数是 x")])]),t._v(" "),s("h2",{attrs:{id:"codes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codes","aria-hidden":"true"}},[t._v("#")]),t._v(" Codes")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("gcd")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("gcd")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a "),s("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(" b"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="845. Greatest Common Divisor.md";a.default=e.exports}}]);