(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,a){},217:function(e,t,a){e.exports=a(439)},22:function(e,t){var a="https://mp.langjie.com",n={getMenuSider:a+"/getMenuSider",getSignUpList:a+"/actionTrain/signUpList",getFilterSignUpList:a+"/actionTrain/FilterSignUpList",getPrizes:a+"/exhibition/prizes",participants:a+"/exhibition/participants",draw_number:a+"/exhibition/draw_number",uploadImg:a+"/exhibition/uploadImg",addPrize:a+"/exhibition/prize",exhibition_img_url:a+"/upload",deletePrize:a+"/exhibition/prize",updatePrize:a+"/exhibition/prize",getPrize:a+"/exhibition/prize",exportExcel:a+"/exhibition/export_excel",search_attendee:a+"/exhibition/search_attendee",actSummerMemberList:a+"/sumActive/MemberList",updateExpressInfo:a+"/sumActive/expressInfo"};e.exports=n},367:function(e,t,a){},437:function(e,t,a){},439:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(8),l=a.n(r),o=a(77),c=a(15),u=a(16),s=a(19),d=a(17),p=a(18),m=a(149),h=a(446),g=a(63),f=(a(152),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleClick=function(e){},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("p",null,"\u9996\u9875")}}]),t}(i.a.Component)),b=a(26),y=a.n(b),v=a(22),E=a.n(v),x=a(89),S=a(440),O=a(452),j=a(112),w=a(441),k=a(44),C=a(447),z=a(70),_=a.n(z),I=(x.a.Option,[{title:"\u59d3\u540d",dataIndex:"name",width:160},{title:"\u8054\u7cfb\u65b9\u5f0f",dataIndex:"phone",width:160},{title:"\u516c\u53f8\u540d\u79f0",dataIndex:"company",width:180},{title:"\u5934\u50cf",dataIndex:"portrait",width:80,render:function(e,t){return i.a.createElement(S.a,{src:e})}},{title:"\u62a5\u540d\u65f6\u95f4",dataIndex:"sign_time",width:220,render:function(e){return e?i.a.createElement("p",{style:{width:160}},_()(e).format("YYYY-MM-DD HH:mm:ss")):i.a.createElement("p",{style:{width:160}})}},{title:"\u62a5\u540d\u72b6\u6001",dataIndex:"state",width:120,render:function(e){return 1===e?(e="\u5df2\u7ecf\u62a5\u540d",i.a.createElement(O.a,{color:"#2db7f5"},e)):0===e?(e="\u672a\u62a5\u540d",i.a.createElement(O.a,null,e)):void 0}},{title:"\u662f\u5426\u665a\u9910",dataIndex:"need_dinner",width:120,render:function(e){return 1===e?(e="\u53c2\u52a0\u665a\u9910",i.a.createElement(O.a,{color:"#87d068"},e)):0===e?(e="\u4e0d\u53c2\u52a0\u665a\u9910",i.a.createElement(O.a,null,e)):void 0}}]),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).changeRadio=function(e){for(var t in a.state.tagOption)a.state.tagOption[t].tagName==e.target.value?(a.state.tagOption[t].visible=!0,a.setState({radioValue:e.target.value})):a.state.tagOption[t].visible=!1;var n=0;"\u5df2\u7ecf\u62a5\u540d"==e.target.value?n=1:"\u672a\u62a5\u540d"==e.target.value&&(n=0),a.setState({isJoin:n});var i={isJoin:n,page:a.state.page,pageSize:a.state.pageSize};y.a.get(E.a.getFilterSignUpList,{params:i,headers:{"Content-Type":"application/json"}}).then(function(e){e.data.data.rows=e.data.data.rows.filter(function(e){return e.name}),a.setState({dataSource:e.data.data.rows,countAll:e.data.data.count})})},a.onCloseTags=function(e){if(a.state.radioValue)for(var t in a.state.tagOption)a.state.tagOption[t].tagName==a.state.radioValue&&(a.state.tagOption[t].visible=!1,a.setState({radioValue:"",isJoin:""}));var n={page:a.state.page,pageSize:a.state.pageSize};a.Fetch(n)},a.state={page:1,pageSize:30,dataSource:[],countAll:0,loading:!1,radioOption:[{label:"\u5df2\u7ecf\u62a5\u540d",value:"\u5df2\u7ecf\u62a5\u540d"},{label:"\u672a\u62a5\u540d",value:"\u672a\u62a5\u540d"}],radioValue:"",isJoin:"",tagOption:[{tagName:"\u5df2\u7ecf\u62a5\u540d",visible:!1},{tagName:"\u672a\u62a5\u540d",visible:!1}]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e={page:this.state.page,pageSize:this.state.pageSize};this.Fetch(e)}},{key:"Fetch",value:function(e){var t=this;this.setState({loading:!0}),y.a.get(E.a.getSignUpList,{params:e,headers:{"Content-Type":"application/json"}}).then(function(e){e.data.data.rows=e.data.data.rows.filter(function(e){return e.name}),t.setState({dataSource:e.data.data.rows,countAll:e.data.data.count,loading:!1})})}},{key:"render",value:function(){var e=this,t={height:"30px",lineHeight:"30px",width:100},a=i.a.createElement("div",null,i.a.createElement(j.a.Group,{name:"radiogroup",defaultValue:1,style:{flexWrap:"wrap",width:240},onChange:this.changeRadio,value:this.state.radioValue},this.state.radioOption.map(function(e,a){return i.a.createElement(j.a,{key:a,style:t,value:e.value},e.label)}))),n={showSizeChanger:!0,pageSize:this.state.pageSize,defaultCurrent:1,total:this.state.countAll,showTotal:function(e){return i.a.createElement("p",{style:{paddingRight:40,fontSize:"16px"}},"\u5f53\u524d\u4eba\u6570\uff1a",e)},onShowSizeChange:function(t,a){e.setState({pageSize:a});var n={page:t,pageSize:a,isJoin:e.state.isJoin};e.Fetch(n)},onChange:function(t,a){var n={page:t,pageSize:a,isJoin:e.state.isJoin};e.Fetch(n)}};return i.a.createElement("div",null,i.a.createElement("div",{style:{margin:"0 0 20px 0"}},i.a.createElement("div",{style:{margin:"0 0 20px 0"}},i.a.createElement(w.a,{title:"\u7b5b\u9009\u6761\u4ef6",content:a,placement:"bottomLeft"},i.a.createElement(k.a,{type:"primary"},"\u7b5b\u9009"))),this.state.tagOption.map(function(t,a){return i.a.createElement(O.a,{key:a,closable:!0,visible:t.visible,onClose:e.onCloseTags},t.tagName)})),i.a.createElement(C.a,{rowKey:function(e){return e.id},columns:I,scroll:{x:1e3,y:500},pagination:n,dataSource:this.state.dataSource,loading:this.state.loading}))}}]),t}(i.a.Component),M=a(59),F=a(34),D=a(50),P=a(146),V=a(450),Y=a(449),L=a(451),N=a(442),A=a(443),J=(a(367),V.a.Search),q=[{key:"0",title:"\u59d3\u540d",dataIndex:"user_name",width:150},{key:"1",title:"\u8054\u7cfb\u65b9\u5f0f",dataIndex:"phone",width:150},{key:"2",title:"\u516c\u53f8",dataIndex:"company",width:250},{key:"3",title:"\u5934\u50cf",dataIndex:"portrait",width:150,render:function(e,t){return i.a.createElement(S.a,{src:e})}},{key:"4",title:"\u72b6\u6001",dataIndex:"state",width:150,filters:[{text:"\u672a\u62a5\u540d",value:0},{text:"\u5df2\u62a5\u540d",value:1},{text:"\u672a\u7b7e\u5230",value:2},{text:"\u5df2\u7b7e\u5230",value:3}],render:function(e){switch(e){case"\u672a\u62a5\u540d":return i.a.createElement(O.a,null,e);case"\u5df2\u62a5\u540d":return i.a.createElement(O.a,{color:"green"},e);case"\u672a\u7b7e\u5230":return i.a.createElement(O.a,{color:"red"},e);case"\u5df2\u7b7e\u5230":return i.a.createElement(O.a,{color:"blue"},e)}}},{key:"5",title:"\u62a5\u540d\u65f6\u95f4",dataIndex:"sign_time",width:200,render:function(e){if(e)return i.a.createElement("div",null,_()(e).format("YYYY-MM-DD HH:mm:ss"))}},{key:"6",title:"\u62bd\u5956\u53f7",dataIndex:"draw_number",width:150,editable:!0},{key:"7",title:"\u662f\u5426\u53c2\u52a0\u5348\u5bb4",dataIndex:"need_lunch",width:150}],K=i.a.createContext(),R=Y.a.create()(function(e){var t=e.form,a=(e.index,Object(P.a)(e,["form","index"]));return i.a.createElement(K.Provider,{value:t},i.a.createElement("tr",a))}),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={editing:!1},a.toggleEdit=function(){var e=!a.state.editing;a.setState({editing:e},function(){e&&a.input.focus()})},a.save=function(e){var t=a.props,n=t.record,i=t.handleSave;a.form.validateFields(function(t,r){y.a.put(E.a.draw_number,{data:{unionId:n.unionid,draw_number:r.draw_number}}).then(function(e){-20005==e.data.code?(L.a.error("\u4fe1\u606f\u51b2\u7a81\uff01"),a.setState({editing:!0})):-20001==e.data.code?(L.a.error("\u8bf7\u8f93\u5165\u62bd\u5956\u53f7"),a.setState({editing:!0})):L.a.success("\u66f4\u65b0\u6210\u529f\uff01")}),t&&t[e.currentTarget.id]||(a.toggleEdit(),i(Object(D.a)({},n,r)))})},a.renderCell=function(e){a.form=e;var t=a.props,n=t.children,r=t.dataIndex,l=t.record;t.title;return a.state.editing?i.a.createElement(Y.a.Item,{style:{margin:0}},e.getFieldDecorator(r,{initialValue:l[r]})(i.a.createElement(V.a,{ref:function(e){return a.input=e},onPressEnter:a.save,onBlur:a.save}))):i.a.createElement("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:a.toggleEdit},n)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.editable,a=(e.dataIndex,e.title,e.record,e.index,e.handleSave,e.children),n=Object(P.a)(e,["editable","dataIndex","title","record","index","handleSave","children"]);return i.a.createElement("td",n,t?i.a.createElement(K.Consumer,null,this.renderCell):a)}}]),t}(i.a.Component),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).Fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),y()({url:E.a.participants,method:"GET",params:Object(D.a)({},e)}).then(function(e){a.state.lunchTotal=e.data.data.lunch_total.count,a.state.pagination.total=e.data.data.result.count,a.transView({dataSource:e.data.data.result.rows}),a.state.dataSource=e.data.data.result.rows,a.setState({loading:!1})}).catch(function(e){console.log(e)})},a.handleSave=function(e){var t=Object(M.a)(a.state.dataSource),n=t.findIndex(function(t){return e.id===t.id}),i=t[n];t.splice(n,1,Object(D.a)({},i,e)),a.setState({dataSource:t})},a.handleExportExcel=function(){var e=a.state.pagination.filter;0==Object.keys(e).length&&(e.state=[0,1,2,3]),y()({method:"GET",url:E.a.exportExcel,params:{filter:e}}).then(function(e){200==e.data.code?window.location.href=e.data.data:L.a.error("\u6682\u65e0\u6570\u636e\uff0c\u4e0d\u652f\u6301\u5bfc\u51fa")})},a.handleSearch=function(e){a.setState({loading:!0,searchValue:e}),y()({method:"GET",url:E.a.search_attendee,params:{searchValue:e}}).then(function(e){var t=0;e.data.data.forEach(function(e,a){1==e.need_lunch&&t++}),a.transView({dataSource:e.data.data}),a.state.lunchTotal=t,a.state.pagination.total=e.data.data.length,a.setState({loading:!1,dataSource:e.data.data})}).catch(function(e){return console.log(e)})},a.handleCancel=function(){a.Fetch({current:1,pageSize:a.state.pagination.pageSize,filter:{state:""}})},a.state={pagination:{current:1,pageSize:30,total:0,lunchTotal:0,keyWord:"",order:"",filter:{},showSizeChanger:!0,pageSizeOptions:["30","50","100","200"],onShowSizeChange:function(e,t){a.state.pagination.pageSize=t,a.setState({pageSize:t})},onChange:function(e,t){var n=a.state.pagination;n.current=e,n.pageSize=t},showTotal:function(e){return i.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.a.createElement("p",{style:{paddingRight:40,fontSize:"16px"}},"\u5f53\u524d\u4eba\u6570\uff1a",e),i.a.createElement("p",{style:{paddingRight:40,fontSize:"16px"}},"\u5c31\u9910\u4eba\u6570\uff1a",a.state.lunchTotal))}},loading:!1,dataSource:[],lunchTotal:0},a.handleCancel=a.handleCancel.bind(Object(F.a)(a)),a.handleTableChange=a.handleTableChange.bind(Object(F.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.Fetch({current:1,pageSize:30,filter:{state:""}}),this.handleCancel()}},{key:"transView",value:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).dataSource.forEach(function(e,t){0==e.state?e.state="\u672a\u62a5\u540d":1==e.state?e.state="\u5df2\u62a5\u540d":2==e.state?e.state="\u672a\u7b7e\u5230":3==e.state&&(e.state="\u5df2\u7b7e\u5230"),1==e.need_lunch?e.need_lunch="\u53c2\u52a0":e.need_lunch="\u4e0d\u53c2\u52a0"})}},{key:"handleTableChange",value:function(e,t){t="object"===typeof t?t:JSON.parse(t);var a=this.state.pagination;a.filter.state=Object.values(t)[0],a.current=e.current,a.pageSize=e.pageSize,this.Fetch({current:a.current,pageSize:a.pageSize,filter:a.filter})}},{key:"render",value:function(){var e=this,t=this.state,a=t.pagination,n=t.dataSource,r=t.loading,l=(t.searchValue,{body:{row:R,cell:U}}),o=q.map(function(t){return t.editable?Object(D.a)({},t,{onCell:function(a){return{record:a,editable:t.editable,dataIndex:t.dataIndex,title:t.title,handleSave:e.handleSave}}}):t});return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(N.a,{type:"flex",justify:"space-between",style:{marginBottom:12}},i.a.createElement(A.a,{span:8},i.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.a.createElement(J,{placeholder:"\u8f93\u5165\u59d3\u540d\u6216\u8005\u516c\u53f8\u540d\u79f0",id:"searchValue",onSearch:function(t){return e.handleSearch(t)},enterButton:"Search"}),i.a.createElement("div",{style:{paddingLeft:"20px"}},i.a.createElement(k.a,{type:"default",onClick:this.handleCancel},"\u53d6\u6d88")))),i.a.createElement(A.a,{span:12,style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement(k.a,{type:"default",onClick:this.handleExportExcel},"\u5bfc\u51faExcel\u8868\u683c")))),i.a.createElement(C.a,{components:l,rowKey:function(e){return e.id},columns:o,rowClassName:function(){return"editable-row"},scroll:{x:1300,y:500},pagination:a,dataSource:n,loading:r,onChange:this.handleTableChange}))}}]),t}(i.a.Component),B=a(448),G=a(9),Z=Y.a.Item,W=(x.a.Option,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e?console.log(e):y()({method:"POST",url:E.a.addPrize,data:t}).then(function(e){a.props.history.goBack()})})},a.state={labelProperty:{name:{label:"\u5956\u54c1\u540d\u79f0",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5956\u54c1\u540d\u79f0"}]},price:{label:"\u4ef7\u683c",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4ef7\u683c"}]},number:{label:"\u6570\u91cf",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6570\u91cf"}]},img_url:{label:"\u56fe\u7247",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u56fe\u7247"}]},content:{label:"\u9644\u52a0\u8bf4\u660e",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8bf4\u660e"}]}},fileList:[]},a.handleSubmit=a.handleSubmit.bind(Object(F.a)(a)),a.uploadProps=a.uploadProps.bind(Object(F.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"uploadProps",value:function(e){var t=this;return{action:E.a.uploadImg,accept:"image/*",listType:"picture",name:"file",defaultFileList:Object(M.a)(this.state.fileList),multiple:!1,onChange:function(e){if("done"==e.file.status){var a=e.file.response.name;t.props.form.setFieldsValue({img_url:a})}},onRemove:function(e){t.props.form.setFieldsValue({img_url:""})}}}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=[],a=this.state.labelProperty,n=this.props.form.getFieldDecorator,r={labelCol:{xs:{span:6}},wrapperCol:{xs:{span:12}}};for(var l in a)if("img_url"==l){var o=this.uploadProps();t.push(i.a.createElement(Z,Object.assign({},r,{label:a[l].label}),i.a.createElement(B.a,o,i.a.createElement(k.a,null,i.a.createElement(G.a,{type:"upload"}),"\u4e0a\u4f20\u7167\u7247")),n(l,{initialValue:a[l].initialValue,rules:a[l].rules})(i.a.createElement(V.a,{name:"album",type:"hidden"}))))}else"content"==l?t.push(i.a.createElement(Z,Object.assign({},r,{label:a[l].label}),n(l,{})(i.a.createElement(V.a.TextArea,{name:""})))):t.push(i.a.createElement(Z,Object.assign({key:l},r,{label:a[l].label}),n(l,{rules:a[l].rules})(i.a.createElement(V.a,{name:""}))));return i.a.createElement(Y.a,{onSubmit:this.handleSubmit,style:{padding:24}},i.a.createElement("div",null,t.map(function(e,t){return i.a.createElement("div",{key:t},e)})),i.a.createElement(Z,{style:{textAlign:"center"}},i.a.createElement(k.a,{type:"primary",htmlType:"submit",style:{marginRight:50}},"\u63d0\u4ea4"),i.a.createElement(k.a,{type:"default",onClick:function(){e.props.history.goBack()}},"\u8fd4\u56de")))}}]),t}(i.a.Component)),X=Y.a.create()(W),Q=a(444),$=a(445),ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).Fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),y()({method:"GET",url:E.a.getPrizes,params:Object(D.a)({},e)}).then(function(e){console.log(e),e.data.data.map(function(e){e.img_url=E.a.exhibition_img_url+"/"+e.img_url});var t=a.state.pagination;t.total=e.data.data.length,a.setState({loading:!1,dataSource:e.data.data,pagination:t})}).catch(function(e){console.log(e)})},a.handleDelete=function(e){var t=Object(M.a)(a.state.dataSource);y()({method:"DELETE",url:E.a.deletePrize,data:{id:e}}).then(function(n){a.state.pagination.total=t.length,a.setState({dataSource:t.filter(function(t){return t.id!==e})})})},a.handleEdit=function(e){a.props.history.push("./editPrize?id=".concat(e))},a.state={pagination:{current:1,pageSize:50,total:0,showSizeChanger:!0,pageSizeOptions:["30","50","100","200"],onShowSizeChange:function(e,t){a.state.pagination.pageSize=t,a.setState({pageSize:t})},onChange:function(e,t){var n=a.state.pagination;n.current=e,n.pageSize=t},showTotal:function(e){return i.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.a.createElement("p",{style:{paddingRight:40,fontSize:"16px"}},"\u5956\u54c1\u6570\u91cf\uff1a",e))}},loading:!1,dataSource:[]},a.COLUMNS=[{title:"\u5956\u54c1\u540d\u79f0",dataIndex:"name",width:150},{title:"\u4ef7\u683c",dataIndex:"price",width:150},{title:"\u8f6e\u6b21",dataIndex:"round",width:150,render:function(e){switch(e){case 1:return i.a.createElement("p",null,"\u7b2c\u4e00\u8f6e");case 2:return i.a.createElement("p",null,"\u7b2c\u4e8c\u8f6e");case 3:return i.a.createElement("p",null,"\u7b2c\u4e09\u8f6e")}}},{title:"\u56fe\u7247",dataIndex:"img_url",width:150,render:function(e){return i.a.createElement(S.a,{src:e,shape:"square",size:40})}},{title:"\u5956\u54c1\u8bf4\u660e",dataIndex:"content",width:300},{title:"\u64cd\u4f5c",width:150,render:function(e,t){return i.a.createElement("div",null,i.a.createElement(Q.a,{title:"\u662f\u5426\u786e\u5b9a\u5220\u9664",onConfirm:function(){return a.handleDelete(t.id)}},i.a.createElement("a",null,"\u5220\u9664")),i.a.createElement($.a,{type:"vertical"}),i.a.createElement("a",{onClick:function(){return a.handleEdit(t.id)}},"\u7f16\u8f91"))}}],a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.Fetch({current:this.state.pagination.current,pageSize:this.state.pagination.pageSize,filter:{}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.dataSource,n=t.loading,r=t.pagination;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(N.a,{type:"flex",justify:"end",style:{marginBottom:12}},i.a.createElement(A.a,null,i.a.createElement(k.a,{type:"primary",onClick:function(){return e.props.history.push("./addPrize")}},"\u65b0\u589e")))),i.a.createElement(C.a,{rowKey:function(e){return e.id},columns:this.COLUMNS,scroll:{x:1300,y:500},dataSource:a,pagination:r,loading:n}))}}]),t}(i.a.Component),te=Y.a.Item,ae=x.a.Option,ne=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){console.log(t),e?console.log(e):(t.id=a.props.location.search.split("=")[1],t.img_url=t.img_url.split("/upload/")[t.img_url.split("/upload/").length-1],y()({method:"PUT",url:E.a.updatePrize,data:t}).then(function(e){200==e.data.code&&a.props.history.goBack()}))})},a.Fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};y()({method:"GET",url:E.a.getPrize,params:e}).then(function(e){e.data.data.img_url=E.a.exhibition_img_url+"/"+e.data.data.img_url;var t=e.data.data;a.props.form.setFieldsValue({name:t.name,price:t.price,round:t.round,img_url:t.img_url,content:t.content})})},a.state={labelProperty:{name:{label:"\u5956\u54c1\u540d\u79f0",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5956\u54c1\u540d\u79f0"}]},price:{label:"\u4ef7\u683c",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4ef7\u683c"}]},round:{label:"\u8f6e\u6b21",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8f6e\u6b21"}]},img_url:{label:"\u56fe\u7247",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u56fe\u7247"}]},content:{label:"\u9644\u52a0\u8bf4\u660e",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8bf4\u660e"}]}},fileList:[]},a.uploadProps=a.uploadProps.bind(Object(F.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(F.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"uploadProps",value:function(e){var t=this;return{action:E.a.uploadImg,accept:"image/*",listType:"picture",name:"file",defaultFileList:Object(M.a)(this.state.fileList),multiple:!1,onChange:function(e){if("done"==e.file.status){var a=e.file.response.name;t.props.form.setFieldsValue({img_url:a})}},onRemove:function(e){t.props.form.setFieldsValue({img_url:""})},onPreview:function(e){}}}},{key:"componentDidMount",value:function(){var e=this.props.location.search.split("=")[1];this.Fetch({id:e})}},{key:"render",value:function(){var e=this,t=[],a=this.state.labelProperty,n=this.props.form.getFieldDecorator,r={labelCol:{xs:{span:6}},wrapperCol:{xs:{span:12}}};for(var l in a)if("img_url"==l){var o=this.uploadProps();t.push(i.a.createElement(te,Object.assign({},r,{label:a[l].label}),i.a.createElement(B.a,o,i.a.createElement(k.a,null,i.a.createElement(G.a,{type:"upload"}),"\u4e0a\u4f20\u7167\u7247")),n(l,{initialValue:a[l].initialValue,rules:a[l].rules})(i.a.createElement(V.a,{name:"album",type:"hidden"}))))}else"round"==l?t.push(i.a.createElement(te,Object.assign({},r,{label:a[l].label}),n(l,{rules:a[l].rules})(i.a.createElement(x.a,{style:{width:150}},i.a.createElement(ae,{value:1},"\u7b2c\u4e00\u8f6e"),i.a.createElement(ae,{value:2},"\u7b2c\u4e8c\u8f6e"),i.a.createElement(ae,{value:3},"\u7b2c\u4e09\u8f6e"))))):"content"==l?t.push(i.a.createElement(te,Object.assign({},r,{label:a[l].label}),n(l,{})(i.a.createElement(V.a.TextArea,{name:""})))):t.push(i.a.createElement(te,Object.assign({key:l},r,{label:a[l].label}),n(l,{rules:a[l].rules})(i.a.createElement(V.a,{name:""}))));return i.a.createElement(Y.a,{onSubmit:this.handleSubmit,style:{padding:24}},i.a.createElement("div",null,t.map(function(e,t){return i.a.createElement("div",{key:t},e)})),i.a.createElement(te,{style:{textAlign:"center"}},i.a.createElement(k.a,{type:"primary",htmlType:"submit",style:{marginRight:50}},"\u63d0\u4ea4"),i.a.createElement(k.a,{type:"default",onClick:function(){e.props.history.goBack()}},"\u8fd4\u56de")))}}]),t}(i.a.Component),ie=Y.a.create()(ne),re=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={rounds:[{title:"\u7b2c\u4e00\u8f6e",index:1},{title:"\u7b2c\u4e8c\u8f6e",index:2},{title:"\u7b2c\u4e09\u8f6e",index:3}]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.rounds;return i.a.createElement("div",null,i.a.createElement("div",{style:{height:260,display:"flex",alignItems:"center",justifyContent:"center",fontSize:30}},"\u6717\u6770\u5c55\u4f1a\u62bd\u5956"),i.a.createElement("div",null,i.a.createElement(N.a,{type:"flex",justify:"center"},e.map(function(e){return i.a.createElement(A.a,{key:e.index},i.a.createElement("div",{style:{width:"50%",margin:40}},i.a.createElement(k.a,{type:"primary",onClick:function(){window.open("https://mp.langjie.com/exhibition/pc_draw_prizes?round=".concat(e.index))}},e.title)))}))))}}]),t}(i.a.Component),le=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("p",null,"\u62bd\u5956\u754c\u9762")}}]),t}(i.a.Component),oe=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null))}}]),t}(i.a.Component),ce=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,"\u521b\u5efa\u6d3b\u52a8")}}]),t}(i.a.Component),ue=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,"\u4f1a\u5458\u5217\u8868")}}]),t}(i.a.Component),se=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={pagination:{current:1,pageSize:30,total:0,filter:{},pageSizeOptions:["30","50","100","200"],showSizeChanger:!0,onShowSizeChange:function(e,t){var n=a.state.pagination;n.current=e,n.pageSize=t,a.setState({pagination:n})},onChange:function(e,t){var n=a.state.pagination;n.current=e,n.pageSize=t,a.setState({pagination:n})},showTotal:function(e){return i.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.a.createElement("p",{style:{paddingRight:40,fontSize:"16px"}},"\u5f53\u524d\u4eba\u6570\uff1a",e))}},loading:!1,data:[],express_no:"",exp_company:"",columns:[{title:"\u59d3\u540d",dataIndex:"name",key:"name",align:"center",width:80},{title:"\u624b\u673a\u53f7",dataIndex:"phone",key:"phone",align:"center",width:100},{title:"\u516c\u53f8",dataIndex:"company",key:"company",align:"center",width:120},{title:"\u5730\u5740",dataIndex:"address",key:"address",align:"center",width:160},{title:"\u7ade\u731c\u6570\u5b57",dataIndex:"quiz_answer",key:"quiz_answer",align:"center",width:80},{title:"\u6709\u6548\u6570\u5b57",dataIndex:"valid_answer",key:"valid_answer",align:"center",width:100},{title:"\u7ade\u731c\u65f6\u95f4",dataIndex:"quiz_time",key:"quiz_time",align:"center",width:100,render:function(e){if(e)return i.a.createElement("div",null,_()(e).format("YYYY-MM-DD HH:mm:ss"))}},{title:"\u72b6\u6001",dataIndex:"status",key:"status",align:"center",width:100,render:function(e){return"\u672a\u4e2d\u5956"===e||"\u7ade\u731c\u4e2d"===e?i.a.createElement(O.a,{color:"red"},e):"\u90ae\u9012\u4e2d"===e?i.a.createElement(O.a,{color:"blue"},e):i.a.createElement(O.a,null,e)},filters:[{text:"\u672a\u4e2d\u5956",value:"\u672a\u4e2d\u5956"},{text:"\u5f85\u9886\u53d6",value:"\u5f85\u9886\u53d6"},{text:"\u786e\u8ba4\u5730\u5740\u4e2d",value:"\u786e\u8ba4\u5730\u5740\u4e2d"},{text:"\u5f85\u53d1\u8d27",value:"\u5f85\u53d1\u8d27"},{text:"\u5df2\u53d1\u8d27",value:"\u90ae\u9012\u4e2d"}]},{title:"\u662f\u5426\u83b7\u5956",dataIndex:"is_winning",key:"is_winning",align:"center",width:80,render:function(e){return 1===e?i.a.createElement("span",null,"\u662f"):i.a.createElement("span",null,"\u5426")}},{title:"\u5feb\u9012\u5355\u53f7",dataIndex:"express_no",key:"express_no",align:"center",width:200,render:function(e){return i.a.createElement(V.a,{width:"100px",defaultValue:e,onChange:function(e){return a.setState({express_no:e.currentTarget.value})}})}},{title:"\u53d1\u8d27\u65f6\u95f4",dataIndex:"express_time",key:"express_time",align:"center",width:100,render:function(e){if(e)return i.a.createElement("div",null,_()(e).format("YYYY-MM-DD HH:mm:ss"))}},{title:"\u64cd\u4f5c",dataIndex:"union_id",align:"center",width:100,render:function(e){return i.a.createElement("div",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){return a.submit(e)}},"\u63d0\u4ea4"))}}]},a.handleChange=a.handleChange.bind(Object(F.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.pagination,t={page:e.current,pageSize:e.pageSize};this.Fetch(t)}},{key:"Fetch",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=this.state.pagination;this.setState({loading:!0,pagination:a}),y.a.get(E.a.actSummerMemberList,{params:Object(D.a)({},t)}).then(function(t){200===t.data.code&&(a.total=t.data.data.count,e.setState({data:t.data.data.rows,pagination:a,loading:!1}))})}},{key:"handleChange",value:function(e,t){t="object"===typeof t?t:JSON.parse(t);var a=this.state.pagination;a.filter=t,a.current=e.current,a.pageSize=e.pageSize;var n=Object(D.a)({page:a.current,pageSize:a.pageSize},a.filter);this.Fetch(n)}},{key:"submit",value:function(e){this.updateExpressInfo(e)}},{key:"updateExpressInfo",value:function(e){var t=this;y.a.put(E.a.updateExpressInfo,{express_no:this.state.express_no,exp_company:this.state.exp_company,unionId:e}).then(function(a){if(console.log(a),-20001===a.data.code)L.a.error("\u5feb\u9012\u5355\u53f7\u6216\u516c\u53f8\u4e0d\u80fd\u4e3a\u7a7a");else{var n=t.state.data;n.map(function(t){t.union_id===e&&(t.express_time=a.data.data.express_time,t.status=a.data.data.status)}),t.setState({data:n}),L.a.success("\u63d0\u4ea4\u6210\u529f")}})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.pagination,n=e.loading,r=e.columns;return i.a.createElement("div",{style:{height:"100%"}},i.a.createElement(C.a,{columns:r,dataSource:t,scroll:{x:1500,y:500},rowKey:function(e){return e.id},pagination:a,onChange:this.handleChange,loading:n}))}}]),t}(i.a.Component),de=(a(437),m.a.SubMenu),pe=(h.a.Header,h.a.Content),me=h.a.Sider,he=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).rootSubmenuKeys=[],a.state={openKeys:["index"],current:[],MenuSider:[]},a.onOpenChange=function(e){var t=e.find(function(e){return-1===a.state.openKeys.indexOf(e)});-1===a.rootSubmenuKeys.indexOf(t)?a.setState({openKeys:e}):a.setState({openKeys:t?[t]:[]})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){}},{key:"Fetch",value:function(){var e=this;y.a.get(E.a.getMenuSider,{headers:{"Content-Type":"application/json",token:"eyJkYXRhIjp7InVzZXJJZCI6IjE4MDIiLCJwYXNzV29yZCI6ImUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNlIn0sImNyZWF0ZWQiOjE1NjYzNDc1OTA4NTksImV4cCI6MzYwMDAwMH0=.VLzKQ6BX6ATvVb4849BTC5/pyyxY0/Fh54Y+3NwUbZs="}}).then(function(t){200==t.status&&(e.setState({MenuSider:t.data}),t.data.forEach(function(t,a){e.rootSubmenuKeys.push(t.key)}))})}},{key:"componentWillMount",value:function(){this.Fetch()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.a,null,i.a.createElement(h.a,null,i.a.createElement(me,{width:200,style:{background:"#fff"}},i.a.createElement(m.a,{mode:"inline",defaultSelectedKeys:["index"],openKeys:this.state.openKeys,onOpenChange:this.onOpenChange,onClick:this.handleClick,style:{height:"100%",borderRight:0}},this.state.MenuSider.map(function(e){return 0===e.subMenus.length?i.a.createElement(m.a.Item,{key:e.key},i.a.createElement(o.b,{to:e.path},e.text)):i.a.createElement(de,{key:e.key,title:i.a.createElement("span",null,e.text)},e.subMenus.map(function(e){return i.a.createElement(m.a.Item,{key:e.key},i.a.createElement(o.b,{to:e.path},e.text))}))}))),i.a.createElement(h.a,{style:{padding:"0 0 24px 24px"}},i.a.createElement(pe,{style:{background:"#fff",padding:24,margin:0,minHeight:600}},i.a.createElement(g.d,null,i.a.createElement(g.b,{path:"/index",component:f}),i.a.createElement(g.b,{path:"/actionTrain/signUp",component:T}),i.a.createElement(g.b,{path:"/exhibition/participants",component:H}),i.a.createElement(g.b,{path:"/exhibition/addPrize",component:X}),i.a.createElement(g.b,{path:"/exhibition/prize_list",component:ee}),i.a.createElement(g.b,{path:"/exhibition/editPrize",component:ie}),i.a.createElement(g.b,{path:"/exhibition/draw",component:re}),i.a.createElement(g.b,{path:"/exhibition/round",component:le}),i.a.createElement(g.b,{path:"/activity/list",component:oe}),i.a.createElement(g.b,{path:"/activity/create",component:ce}),i.a.createElement(g.b,{path:"/activity/member",component:ue}),i.a.createElement(g.b,{path:"/act_summer/memberList",component:se}),i.a.createElement(g.a,{from:"/",to:"/index"})))))))}}]),t}(i.a.Component);l.a.render(i.a.createElement(o.a,null,i.a.createElement(he,null)),document.getElementById("root"))}},[[217,1,2]]]);
//# sourceMappingURL=main.49cd55cf.chunk.js.map