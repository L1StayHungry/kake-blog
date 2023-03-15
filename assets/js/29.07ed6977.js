(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{453:function(t,n,a){"use strict";a.r(n);var s=a(2),r=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[t._v("#")]),t._v(" 排序")]),t._v(" "),n("h4",{attrs:{id:"快速排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速排序"}},[t._v("#")]),t._v(" 快速排序")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("思路")]),t._v(" "),n("ul",[n("li",[t._v("取基数，分区")])])]),t._v(" "),n("li",[n("p",[t._v("实现")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("我的实现：在原有数组上操作")])]),t._v(" "),n("li",[n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("quickSort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parentLeftIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parentRightIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否满足排序基本条件")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parentLeftIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" parentRightIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" leftIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parentLeftIndex\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rightIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parentRightIndex\n  \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 取基数。我取最后一个数为基数")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rightIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 分区")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" rightIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为取的最后一个数为基数，所以从左边开始遍历")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 找到第一个比基数大的数，放到无效位置处，此时无效位置为arr[rightIndex]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" rightIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("leftIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      leftIndex"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 找到了，没找到也不会有影响，大不了原地赋值")]),t._v("\n    arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rightIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("leftIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时无效数据为arr[leftIndex]")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 找到第一个比基数小的数，放到无效位置处，此时无效位置为arr[rightIndex]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" rightIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rightIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rightIndex"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 找到了，没找到也不会有影响，大不了原地赋值")]),t._v("\n    arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("leftIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rightIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时无效数据为arr[rightIndex]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将基数放到上述无效数据处就完成了分区")]),t._v("\n  arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rightIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" target\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 分区排序")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rightIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" parentLeftIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("quickSort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parentLeftIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rightIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" parentRightIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rightIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("quickSort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rightIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parentRightIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [6,  7,  8,  9,10, 11, 17, 22]")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'结果'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("quickSort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("其实可以新增两数组，操作简单很多，但是数据量大的话就显得比较蠢")])])])])]),t._v(" "),n("h4",{attrs:{id:"冒泡排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#冒泡排序"}},[t._v("#")]),t._v(" 冒泡排序")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("思路")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("每次排序把最大的数放在最后")])]),t._v(" "),n("li",[n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sortM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" len "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sortM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])])]),t._v(" "),n("h4",{attrs:{id:"选择排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#选择排序"}},[t._v("#")]),t._v(" 选择排序")]),t._v(" "),n("ul",[n("li",[t._v("思路\n"),n("ul",[n("li",[t._v("每次迭代，选择最大\\最小的数放在一边")])])])]),t._v(" "),n("h4",{attrs:{id:"插入排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插入排序"}},[t._v("#")]),t._v(" 插入排序")]),t._v(" "),n("ul",[n("li",[t._v("思路\n"),n("ul",[n("li",[t._v("无序区选择一个，从后往前查找，插入有序区\n"),n("ul",[n("li",[t._v("直接插入")]),t._v(" "),n("li",[t._v("希尔插入")])])])])])]),t._v(" "),n("h4",{attrs:{id:"归并排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#归并排序"}},[t._v("#")]),t._v(" 归并排序")]),t._v(" "),n("ul",[n("li",[t._v("思路\n"),n("ul",[n("li",[t._v("分久必合")])])])]),t._v(" "),n("h2",{attrs:{id:"数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),n("ul",[n("li",[t._v("题目\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/pascals-triangle/",target:"_blank",rel:"noopener noreferrer"}},[t._v("118. 杨辉三角"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/pascals-triangle-ii/",target:"_blank",rel:"noopener noreferrer"}},[t._v("119. 杨辉三角 II"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/image-smoother/",target:"_blank",rel:"noopener noreferrer"}},[t._v("661. 图片平滑器"),n("OutboundLink")],1)])])])]),t._v(" "),n("h2",{attrs:{id:"字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),n("h2",{attrs:{id:"哈希表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#哈希表"}},[t._v("#")]),t._v(" 哈希表")]),t._v(" "),n("ul",[n("li",[t._v("题目\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer 35. 复杂链表的复制"),n("OutboundLink")],1)])])])]),t._v(" "),n("h2",{attrs:{id:"数学"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数学"}},[t._v("#")]),t._v(" 数学")]),t._v(" "),n("h2",{attrs:{id:"回溯"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#回溯"}},[t._v("#")]),t._v(" 回溯")]),t._v(" "),n("h2",{attrs:{id:"动态规划"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[t._v("#")]),t._v(" 动态规划")]),t._v(" "),n("ul",[n("li",[t._v("题目\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/fibonacci-number/",target:"_blank",rel:"noopener noreferrer"}},[t._v("509. 斐波那契数"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer 42. 连续子数组的最大和"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer 47. 礼物的最大价值"),n("OutboundLink")],1)])])])]),t._v(" "),n("h2",{attrs:{id:"树"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#树"}},[t._v("#")]),t._v(" 树")]),t._v(" "),n("h2",{attrs:{id:"贪心算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法"}},[t._v("#")]),t._v(" 贪心算法")]),t._v(" "),n("ul",[n("li",[t._v("题目\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/can-place-flowers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("605. 种花问题"),n("OutboundLink")],1)])])])]),t._v(" "),n("h2",{attrs:{id:"dfs深度优先搜索"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dfs深度优先搜索"}},[t._v("#")]),t._v(" DFS深度优先搜索")]),t._v(" "),n("ul",[n("li",[t._v("题目\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer 26. 树的子结构"),n("OutboundLink")],1)])])])]),t._v(" "),n("h2",{attrs:{id:"bfs广度优先搜索"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bfs广度优先搜索"}},[t._v("#")]),t._v(" BFS广度优先搜索")]),t._v(" "),n("ul",[n("li",[t._v("题目\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer 32 - I. 从上到下打印二叉树"),n("OutboundLink")],1)])])])]),t._v(" "),n("h2",{attrs:{id:"栈和队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#栈和队列"}},[t._v("#")]),t._v(" 栈和队列")]),t._v(" "),n("ul",[n("li",[t._v("题目\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer 09. 用两个栈实现队列"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer 30. 包含min函数的栈"),n("OutboundLink")],1)])])])]),t._v(" "),n("h2",{attrs:{id:"滑动窗口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[t._v("#")]),t._v(" 滑动窗口")]),t._v(" "),n("ul",[n("li",[t._v("题目\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/maximum-sum-of-3-non-overlapping-subarrays/",target:"_blank",rel:"noopener noreferrer"}},[t._v("689. 三个无重叠子数组的最大和"),n("OutboundLink")],1)])])])]),t._v(" "),n("h2",{attrs:{id:"双指针"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#双指针"}},[t._v("#")]),t._v(" 双指针")]),t._v(" "),n("h2",{attrs:{id:"二分查找"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二分查找"}},[t._v("#")]),t._v(" 二分查找")]),t._v(" "),n("ul",[n("li",[t._v("题目\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer 11. 旋转数组的最小数字"),n("OutboundLink")],1)])])])]),t._v(" "),n("h2",{attrs:{id:"二叉树"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[t._v("#")]),t._v(" 二叉树")]),t._v(" "),n("ul",[n("li",[t._v("题目\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer 04. 二维数组中的查找"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer 32 - I. 从上到下打印二叉树"),n("OutboundLink")],1)])])])]),t._v(" "),n("h2",{attrs:{id:"数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),n("h2",{attrs:{id:"位运算"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#位运算"}},[t._v("#")]),t._v(" 位运算")]),t._v(" "),n("h2",{attrs:{id:"前缀和"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前缀和"}},[t._v("#")]),t._v(" 前缀和")]),t._v(" "),n("h2",{attrs:{id:"查找表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查找表"}},[t._v("#")]),t._v(" 查找表")]),t._v(" "),n("h2",{attrs:{id:"链表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[t._v("#")]),t._v(" 链表")]),t._v(" "),n("ul",[n("li",[t._v("题目\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer 06. 从尾到头打印链表"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer 24. 反转链表"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer 35. 复杂链表的复制"),n("OutboundLink")],1)])])])]),t._v(" "),n("p",[t._v("待刷题：")]),t._v(" "),n("p",[n("strong",[t._v("一. 数组")]),t._v("\n题目分类\t题目编号\n数组的遍历\t"),n("s",[t._v("485、495、414、628")]),t._v("\n统计数组中的元素\t"),n("s",[t._v("645、697、448、442、41、274")]),t._v("\n数组的改变、移动\t"),n("s",[t._v("453、665、283")]),t._v("\n二维数组及滚动数组\t"),n("s",[t._v("118、119、661、598")]),t._v("、419\n数组的旋转\t189、396\n特定顺序遍历二维数组\t54、59、498\n二维数组变换\t566、48、73、289\n前缀和数组\t303、304、238\n题解\t数组篇\n"),n("strong",[t._v("二. 字符串")]),t._v("\n题目分类\t题目编号\n字符\t"),n("s",[t._v("520")]),t._v("\n回文串的定义\t"),n("s",[t._v("125")]),t._v("\n公共前缀\t14\n单词\t434、58\n字符串的反转\t344、541、557、151\n字符的统计\t387、389、383、242、49、451、423、657、551、696、467、535\n数字与字符串间转换\t299、412、506、539、553、537、592、640、38、443、8、13、12、273、165、481\n子序列\t392、524、521、522\n高精度运算\t66、67、415、43、306\n字符串变换\t482、6、68\n字符串匹配\t28、686、459、214\n中心拓展法\t5、647\n"),n("strong",[t._v("三. 数与位")]),t._v("\n题目分类\t题目编号\n数字的位操作\t7、9、479、564、231、342、326、504、263、190、191、476、461、477、693、393、172、458、258、319、405、171、168、670、233、357、400\n简单数学题\t492、29、507\n快速幂\t50、372\n"),n("strong",[t._v("四. 栈与递归")]),t._v("\n题目分类\t题目编号\n用栈访问最后若干元素\t682、71、388\n栈与计算器\t150、227、224\n栈与括号匹配\t20、636、591、32\n递归\t385、341、394\n"),n("strong",[t._v("五. 链表")]),t._v("\n题目分类\t题目编号\n链表的删除\t203、237、19\n链表的遍历\t430\n链表的旋转与反转\t61、24、206、92、25\n链表高精度加法\t2、445\n链表的合并\t21、23\n"),n("strong",[t._v("六. 哈希表")]),t._v("\n题目分类\t题目编号\n哈希表的查找、插入及删除\t217、633、349、128、202、500、290、532、205、166、466、138\n哈希表与索引\t1、167、599、219、220\n哈希表与统计\t594、350、554、609、454、18\n哈希表与前缀和\t560、523、525\n"),n("strong",[t._v("七. 贪心算法")]),t._v("\n题目分类\t题目编号\n数组与贪心算法\t"),n("s",[t._v("605")]),t._v("、121、122、561、455、575、135、409、621、179、56、57、228、452、435、646、406、48、169、215、75、324、517、649、678、420\n子数组与贪心算法\t53、134、581、152\n子序列与贪心算法\t334、376、659\n数字与贪心\t343\n单调栈法\t496、503、456、316、402、321、84、85\n"),n("strong",[t._v("八. 双指针法")]),t._v("\n题目分类\t题目编号\n头尾指针\t"),n("s",[t._v("345")]),t._v("、680、167、15、16、18、11、42\n同向双指针、滑动窗口\t27、26、80、83、82、611、187、643、674、209、3、438、567、424、76、30\n分段双指针\t86、328、160、88、475\n快慢指针\t141、142、143、234、457、287\n"),n("strong",[t._v("九. 树")]),t._v("\n题目分类\t题目编号\n树与递归\t100、222、101、226、437、563、617、508、572、543、654、687、87\n树的层次遍历\t102、429、690、559、662、671、513、515、637、103、107、257、623、653、104、111、112、113、129、404、199、655、116、117\n树的前序遍历\t144、589\n树的前序序列化\t606、331、652、297、449\n树的后序遍历\t145、590\n树的中序遍历与二叉搜索树\t94、700、530、538、230、98、173、669、450、110、95、108、109\n重构二叉树\t105、106\n二叉树的展开\t114\n最近公共祖先\t235、236\nMorris中序遍历\t501、99\n四叉树\t558、427\n"),n("strong",[t._v("十. 图与搜索")]),t._v("\n题目分类\t题目编号\n图的建立与应用\t565\n深度优先搜索\t17、397\n回溯法\t526、401、36、37、51、52、77、39、216、40、46、47、31、556、60、491、78、90、79、93、332\n回溯法与表达式\t241、282、679\n回溯法与括号\t22、301\n回溯法与贪心\t488\n广度优先搜索\t133、200、695、463、542、130、417、529、127、126、433、675\n并查集\t547、684、685\n拓扑排序\t399、207、210\n有限状态自动机\t65、468\n"),n("strong",[t._v("十一. 二分查找")]),t._v("\n题目分类\t题目编号\n二分查找应用(简单)\t374、35、278、367、69、441\n二分查找应用(中等)\t34、540、275、436、300、354、658、162、4\n二分查找与旋转数组\t153、154、33、81\n二分查找与矩阵\t74、240\n二分答案法\t378、668、410、483\n"),n("strong",[t._v("十二. 二进制运算的应用")]),t._v("\n题目分类\t题目编号\n异或的应用\t89、136、137、260、268\n与或非的应用\t371、318、201\n"),n("strong",[t._v("十三. 动态规划")]),t._v("\n题目分类\t题目编号\n数组中的动态规划\t509、70、338、45、55、198、213、650、91、639、552、123、188、309、32、264、313、403\n子数组、子序列中的动态规划\t689、413、446、368、416、279\n背包问题\t322、518、474、494、377\n矩阵中的动态规划\t62、63、64、120、576、688、221、629、174、96、329\n动态规划与字符串匹配\t583、72、97、115、516、132、131、139、140、514、10、44\n状态压缩动态规划\t464、691、698、638、473\n区间中的动态规划\t486、664、375、312、546\n树形dp\t337、124\n数位dp\t233、600\n"),n("strong",[t._v("十四. 数据结构")]),t._v("\n题目分类\t题目编号\n数据结构设计——栈与队列\t225、232、284、622、641、155\n数据结构设计——哈希表\t676、355、380、381\n数据结构设计——哈希与双向链表\t432、146、460\n前缀树\t208、211、648、386、677、472、421、212、336、440\n堆\t23、373、378、632、347、692、502、630、407、295、480\n树状数组\t307、315、493、327、673\n线段树\t699\n平衡树(set/map)\t352、218、363\n"),n("strong",[t._v("十五. 采样")]),t._v("\n题目分类\t题目编号\n按权值采样\t528、497\n蓄水池抽样\t382、398\n拒绝采样\t470、478、519\n"),n("strong",[t._v("十六. 计算几何")]),t._v("\n题目分类\t题目编号\n计算几何基础\t593、447、223、149\n分类讨论法\t335\n凸包\t587\n覆盖问题\t391\n"),n("strong",[t._v("十七. 常用技巧与算法")]),t._v("\n题目分类\t题目编号\n博弈论\t292\n分块\t239、164\n倍增法\t330\n拓展欧几里得算法\t365\n洗牌算法\t384\n找规律\t390、672\n分治法\t395、667\n排序算法\t147、148\n线性筛\t204\n摩尔投票法\t229")])])}),[],!1,null,null,null);n.default=r.exports}}]);