(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31b79e31"],{4127:function(e,t,r){"use strict";var n=r("d233"),o=r("b313"),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,r,o,a,i,c,s,u,p,f,d,y){var m=t;if("function"===typeof s)m=s(r,m);else if(m instanceof Date)m=f(m);else if(null===m){if(a)return c&&!y?c(r,l.encoder):r;m=""}if("string"===typeof m||"number"===typeof m||"boolean"===typeof m||n.isBuffer(m)){if(c){var b=y?r:c(r,l.encoder);return[d(b)+"="+d(c(m,l.encoder))]}return[d(r)+"="+d(String(m))]}var g,v=[];if("undefined"===typeof m)return v;if(Array.isArray(s))g=s;else{var h=Object.keys(m);g=u?h.sort(u):h}for(var w=0;w<g.length;++w){var j=g[w];i&&null===m[j]||(v=Array.isArray(m)?v.concat(e(m[j],o(r,j),o,a,i,c,s,u,p,f,d,y)):v.concat(e(m[j],r+(p?"."+j:"["+j+"]"),o,a,i,c,s,u,p,f,d,y)))}return v};e.exports=function(e,t){var r=e,i=t?n.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!==typeof i.encoder)throw new TypeError("Encoder has to be a function.");var s="undefined"===typeof i.delimiter?l.delimiter:i.delimiter,u="boolean"===typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,p="boolean"===typeof i.skipNulls?i.skipNulls:l.skipNulls,f="boolean"===typeof i.encode?i.encode:l.encode,d="function"===typeof i.encoder?i.encoder:l.encoder,y="function"===typeof i.sort?i.sort:null,m="undefined"!==typeof i.allowDots&&i.allowDots,b="function"===typeof i.serializeDate?i.serializeDate:l.serializeDate,g="boolean"===typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if("undefined"===typeof i.format)i.format=o["default"];else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var v,h,w=o.formatters[i.format];"function"===typeof i.filter?(h=i.filter,r=h("",r)):Array.isArray(i.filter)&&(h=i.filter,v=h);var j,O=[];if("object"!==typeof r||null===r)return"";j=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var x=a[j];v||(v=Object.keys(r)),y&&v.sort(y);for(var _=0;_<v.length;++_){var A=v[_];p&&null===r[A]||(O=O.concat(c(r[A],A,x,u,p,f?d:null,h,y,m,b,w,g)))}var k=O.join(s),C=!0===i.addQueryPrefix?"?":"";return k.length>0?C+k:""}},4328:function(e,t,r){"use strict";var n=r("4127"),o=r("9e6a"),a=r("b313");e.exports={formats:a,parse:o,stringify:n}},"9e6a":function(e,t,r){"use strict";var n=r("d233"),o=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,l=n.split(t.delimiter,i),c=0;c<l.length;++c){var s,u,p=l[c],f=p.indexOf("]="),d=-1===f?p.indexOf("="):f+1;-1===d?(s=t.decoder(p,a.decoder),u=t.strictNullHandling?null:""):(s=t.decoder(p.slice(0,d),a.decoder),u=t.decoder(p.slice(d+1),a.decoder)),o.call(r,s)?r[s]=[].concat(r[s]).concat(u):r[s]=u}return r},l=function(e,t,r){for(var n=t,o=e.length-1;o>=0;--o){var a,i=e[o];if("[]"===i)a=[],a=a.concat(n);else{a=r.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,c=parseInt(l,10);!isNaN(c)&&i!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(a=[],a[c]=n):a[l]=n}n=a}return n},c=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,c=a.exec(n),s=c?n.slice(0,c.index):n,u=[];if(s){if(!r.plainObjects&&o.call(Object.prototype,s)&&!r.allowPrototypes)return;u.push(s)}var p=0;while(null!==(c=i.exec(n))&&p<r.depth){if(p+=1,!r.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+n.slice(c.index)+"]"),l(u,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"===typeof r.depth?r.depth:a.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var o="string"===typeof e?i(e,r):e,l=r.plainObjects?Object.create(null):{},s=Object.keys(o),u=0;u<s.length;++u){var p=s[u],f=c(p,o[p],r);l=n.merge(l,f,r)}return n.compact(l)}},b313:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},c73f:function(e,t,r){"use strict";var n=r("c986"),o=r.n(n);o.a},c986:function(e,t,r){},d233:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e){var t;while(e.length){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],o=0;o<t.length;++o)"undefined"!==typeof t[o]&&n.push(t[o]);r.obj[r.prop]=n}}return t},i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r},l=function e(t,r,o){if(!r)return t;if("object"!==typeof r){if(Array.isArray(t))t.push(r);else{if("object"!==typeof t)return[t,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!==typeof t)return[t].concat(r);var a=t;return Array.isArray(t)&&!Array.isArray(r)&&(a=i(t,o)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,a){n.call(t,a)?t[a]&&"object"===typeof t[a]?t[a]=e(t[a],r,o):t.push(r):t[a]=r}),t):Object.keys(r).reduce(function(t,a){var i=r[a];return n.call(t,a)?t[a]=e(t[a],i,o):t[a]=i,t},a)},c=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},s=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},u=function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),r="",n=0;n<t.length;++n){var a=t.charCodeAt(n);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(n):a<128?r+=o[a]:a<2048?r+=o[192|a>>6]+o[128|63&a]:a<55296||a>=57344?r+=o[224|a>>12]+o[128|a>>6&63]+o[128|63&a]:(n+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(n)),r+=o[240|a>>18]+o[128|a>>12&63]+o[128|a>>6&63]+o[128|63&a])}return r},p=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],l=Object.keys(i),c=0;c<l.length;++c){var s=l[c],u=i[s];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:s}),r.push(u))}return a(t)},f=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},d=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:i,assign:c,compact:p,decode:s,encode:u,isBuffer:d,isRegExp:f,merge:l}},dec7:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pad_5"},[r("div",{staticClass:"query_fields"},[r("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryForm,size:"mini"}},[r("el-form-item",{attrs:{label:"机构名称"}},[r("el-input",{staticClass:"wid_140",attrs:{placeholder:"请输入机构名称"},model:{value:e.queryForm.name,callback:function(t){e.$set(e.queryForm,"name",t)},expression:"queryForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"收益周期"}},[r("el-date-picker",{staticClass:"wid_140",attrs:{type:"month",placeholder:"请选择时间"},model:{value:e.queryForm.profitTime,callback:function(t){e.$set(e.queryForm,"profitTime",t)},expression:"queryForm.profitTime"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.queryData}},[e._v("查询")])],1)],1)],1),e._v(" "),r("div",[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[r("el-table-column",{attrs:{prop:"agentName",label:"机构名称",width:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"account_total",label:"收益金额",width:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"shell_profit",label:"贝壳收益",width:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"other_profit",label:"其他收益",width:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"profit_time",label:"收益周期",width:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"",label:"操作",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.handle_invoiceInfo(t.row)}}},[e._v("发票信息")]),e._v(" "),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.handle_review(t.row)}}},[e._v("审核")])]}}])})],1),e._v(" "),r("div",{staticClass:"block mar_t10"},[r("el-pagination",{attrs:{"current-page":e.currentPage,total:e.pageTotal,background:"",layout:"total, prev, pager, next, jumper"},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"新增业务人员",visible:e.add_dialog,width:"30%",center:""},on:{"update:visible":function(t){e.add_dialog=t}}},[r("div",{staticClass:"wid_b75"}),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"mini"},on:{click:function(t){e.add_dialog=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("确 定")])],1)])],1)},o=[],a=(r("96cf"),r("3b8d")),i=r("db72"),l=r("2f62"),c=r("cf45"),s=(r("4328"),{name:"agentAccountExamine",data:function(){return{tableLoading:!1,tableData:[{agentName:"xx",account_total:"xx",month:"xx",revenue_status:"xx",state:"xx"}],queryForm:{name:"",profitTime:""},pageTotal:100,currentPage:1,add_dialog:!1}},created:function(){},computed:Object(i["a"])({},Object(l["b"])(["name","roles"])),methods:{getDataList:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$store.getters.userId,r={signInUserId:t,signInRole:"admin",pageNum:1,pageSize:10},e.next=4,this.$http.post("".concat(c["a"].baseUrl,"/agentAccount/getAgentAccount"),{data:r});case 4:n=e.sent,console.log(n.data.data.agentAccountList),this.tableData=n.data.data.agentAccountList;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),queryData:function(){},changeProfitState:function(e){console.log},handleCurrentChange:function(e){this.currentPage=e}}}),u=s,p=(r("ec74"),r("c73f"),r("2877")),f=Object(p["a"])(u,n,o,!1,null,"1c77baa2",null);t["default"]=f.exports},e77a:function(e,t,r){},ec74:function(e,t,r){"use strict";var n=r("e77a"),o=r.n(n);o.a}}]);