(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{191:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"_701-trim-a-binary-search-tree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_701-trim-a-binary-search-tree","aria-hidden":"true"}},[t._v("#")]),t._v(" 701. Trim a Binary Search Tree")]),t._v(" "),s("p",[t._v("#Lintcode/DFS")]),t._v(" "),s("hr"),t._v(" "),s("h1",{attrs:{id:"idea"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea","aria-hidden":"true"}},[t._v("#")]),t._v(" Idea")]),t._v(" "),s("ol",[s("li",[t._v("分治法，先判断root是否在区间内，是的话，对左右分治")]),t._v(" "),s("li",[t._v("root如果小于区间，则root及其左子树都可以剪去，反之亦然。")])]),t._v(" "),s("hr"),t._v(" "),s("h1",{attrs:{id:"codes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codes","aria-hidden":"true"}},[t._v("#")]),t._v(" Codes")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" TreeNode "),s("span",{attrs:{class:"token function"}},[t._v("trimBST")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TreeNode root"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" minimum"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" maximum"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimum "),s("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" root"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" root"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" maximum"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("trimBST")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minimum"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maximum"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        root"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("trimBST")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minimum"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maximum"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maximum "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" root"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("trimBST")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minimum"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maximum"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("trimBST")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minimum"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maximum"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="701. Trim a Binary Search Tree.md";a.default=o.exports}}]);