(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{186:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"_106-convert-sorted-list-to-binary-search-tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_106-convert-sorted-list-to-binary-search-tree","aria-hidden":"true"}},[t._v("#")]),t._v(" 106. Convert Sorted List to Binary Search Tree")]),t._v(" "),a("p",[t._v("#Lintcode/分治法")]),t._v(" "),a("hr"),t._v(" "),a("h1",{attrs:{id:"idea"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idea","aria-hidden":"true"}},[t._v("#")]),t._v(" Idea")]),t._v(" "),a("ol",[a("li",[t._v("首先求得整个list的长度 O(n)")]),t._v(" "),a("li",[t._v("利用 helper 函数进行递归，helper(head, len) 表示把从 head 开始的，长度为len的链表，转换为一个bst并且return。与此同时，把global variable的指针挪到head开始的第 len + 1个listnode上。")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Convert =>")]),t._v(" "),a("ol",[a("li",[t._v("把head开头的长度为 len/2的先变成bst，也就是我们的左子树，convert(head, len / 2)。这个时候他顺便会把global variable 挪到第len / 2 + 1的那个node，这个就是我们的root。")]),t._v(" "),a("li",[t._v("然后得到了root之后，把global variable 往下挪一个挪到 第 len/2 + 2个点，也就是右子树开头的那个点，然后调用 convert(global variable, len - len/2 -1)，构造出右子树。")]),t._v(" "),a("li",[t._v("然后把root，左子树，右子树，拼接在一起，return")])]),t._v(" "),a("hr"),t._v(" "),a("h1",{attrs:{id:"codes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#codes","aria-hidden":"true"}},[t._v("#")]),t._v(" Codes")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" ListNode current"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getLength")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ListNode head"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" size "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        head "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        size"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" size"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" TreeNode "),a("span",{attrs:{class:"token function"}},[t._v("sortedListToBST")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ListNode head"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" null"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" null"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" size "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getLength")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    current "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("convert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" TreeNode "),a("span",{attrs:{class:"token function"}},[t._v("convert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" size"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" null"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    TreeNode left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("convert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    TreeNode root "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("TreeNode")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    current "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    TreeNode right "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("convert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" size "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" left"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" right"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="106. Convert Sorted List to Binary Search Tree.md";s.default=e.exports}}]);