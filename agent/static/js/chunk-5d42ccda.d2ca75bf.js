(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d42ccda"],{"541e":function(t,e,a){},f8f0:function(t,e,a){"use strict";var s=a("541e"),n=a.n(s);n.a},fe61:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pad_5"},[a("div",{staticClass:"query_fields pad_b_no handle_timerange"},[a("el-form",{ref:"queryForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.queryForm,size:"mini"}},[a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handle_refresh}},[t._v("刷新")])],1)],1)],1),t._v(" "),a("div",[a("h5",{staticClass:"table_title"},[t._v("账户信息")]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading_account,expression:"tableLoading_account"}],staticStyle:{width:"100%"},attrs:{data:t.tableData_account,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"account_user",label:"开户名",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"account_bank",label:"开户行",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"account_no",label:"银行账号",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"开户地",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.row.account_province+e.row.account_city)+"\n                ")]}}])})],1)],1),t._v(" "),a("div",[a("h5",{staticClass:"table_title"},[t._v("收益信息")]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"virtualMonthTotal",label:"贝壳收益(元)",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"accountMonthTotal",label:"出行收益(元)",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalAmont",label:"收益金额",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"month",label:"收益周期",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"revenue_status","show-overflow-tooltip":"",label:"收益状态",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.revenue_status?a("span",[t._v("待开票")]):2==e.row.revenue_status?a("span",[t._v("已开票")]):3==e.row.revenue_status?a("span",[t._v("已发放")]):4==e.row.revenue_status?a("span",[t._v("待发放")]):5==e.row.revenue_status?a("span",[t._v("拒绝")]):6==e.row.revenue_status?a("span",[t._v("数据错误")]):t._e()]}}])})],1),t._v(" "),a("div",{staticClass:"block mar_t10"},[a("el-pagination",{attrs:{"current-page":t.currentPage,total:t.pageTotal,background:"",layout:"total, prev, pager, next, jumper"},on:{"current-change":t.handleCurrentChange}})],1)],1)])},n=[],r=a("cf45"),i={name:"proceedsCash",data:function(){return{tableLoading:!1,tableData:[],tableLoading_account:!1,tableData_account:[],pageTotal:0,currentPage:1,queryForm:{virtual_classs:[{id:1,value:"礼物"},{id:2,value:"红包"}],virtual_class:"",city_agent_name:"",customid:"",allTime:"",endTime:"",startTime:"",virtual_profit_cityagent_statuss:[{id:1,value:"入账完成"},{id:2,value:"入账失败"},{id:3,value:"待入账"},{id:4,value:"入帐中"},{id:5,value:"作废"}],virtual_profit_cityagent_status:""}}},created:function(){this.getTabelDataList(1)},methods:{getTabelDataList:function(t){var e=this,a={data:{signInUserId:this.$store.getters.userId,pageNum:t,pageSize:10}};this.tableLoading=!0,this.$http.post("".concat(r["a"].baseUrl,"/agent/findByAgentAccount"),a).then(function(t){"0000"==t.data.code&&(console.log(t),e.tableData=t.data.data.agentAccountList,e.tableData_account.push(t.data.data.agent),e.pageTotal=t.data.data.page.pageTotal,e.tableLoading=!1)}).catch(function(t){})},handle_refresh:function(){this.getTabelDataList(this.currentPage)},exportData:function(){var t=this,e={data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,virtual_class:this.queryForm.virtual_class,city_agent_name:this.queryForm.city_agent_name,customid:this.queryForm.customid,startTime:this.queryForm.startTime,endTime:this.queryForm.endTime}};this.$http.post("".concat(r["a"].baseUrl,"/virtualProfit/exportVirtualProfit"),e).then(function(e){"0000"==e.data.code&&t.m_message(e.data.msg,"success")}).catch(function(t){})},queryData:function(){this.queryForm.allTime.length>0&&(this.queryForm.startTime=this.queryForm.allTime[0],this.queryForm.endTime=this.queryForm.allTime[1]),this.getTabelDataList(1),this.currentPage=1},resetData:function(t){this.$refs[t].resetFields(),this.queryForm.startTime="",this.queryForm.endTime=""},handleCurrentChange:function(t){this.currentPage=t,this.getTabelDataList(t)},m_message:function(t,e){this.$message({message:t,type:e})}}},l=i,o=(a("f8f0"),a("2877")),u=Object(o["a"])(l,s,n,!1,null,"47ea01b0",null);e["default"]=u.exports}}]);