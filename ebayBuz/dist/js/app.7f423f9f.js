(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],m=0,f=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],r=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var r={},n={app:0},a=[];function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=r,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"4e78":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Navbar"),o("router-view")],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("nav",{staticClass:"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3"},[o("div",{staticClass:"container"},[t._m(0),o("div",{staticClass:"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse"},[o("ul",{staticClass:"navbar-nav flex-grow-1"},[o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v(" Home ")])],1),o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:"Profit"}},[t._v(" Profit Manager ")])],1)])])])])])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[o("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"Navbar"},c=l,u=o("2877"),m=Object(u["a"])(c,i,s,!1,null,"030b9169",null),f=m.exports,d={name:"app",components:{Navbar:f}},b=d,p=Object(u["a"])(b,n,a,!1,null,null,null),v=p.exports,y=o("dad3"),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),o("div",[o("h5",[t._v("Total Inventory Investment: "+t._s(t.invInvested))])]),o("div",{staticClass:"mx-5"},[o("h2",[t._v(" Current Inventory")]),o("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"currentInventory"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),o("b-table",{attrs:{id:"currentInventory",striped:"",bordered:"",hover:"",items:t.current,"per-page":t.perPage,"current-page":t.currentPage,fields:t.currFields},scopedSlots:t._u([{key:"cell(ebayItemId)",fn:function(e){return[o("b-form-input",{staticStyle:{width:"9em"},on:{change:function(o){return t.updateEbayId(e.item,e.value)}},model:{value:e.value,callback:function(o){t.$set(e,"value",o)},expression:"data.value"}})]}},{key:"cell(qty)",fn:function(e){return[o("b-form-input",{attrs:{type:"number"},model:{value:e.value,callback:function(o){t.$set(e,"value",o)},expression:"data.value"}})]}},{key:"cell(datePurchased)",fn:function(e){return[o("b-form-datepicker",{attrs:{size:"sm","date-format-options":{year:"numeric",month:"numeric",date:"numeric"}},model:{value:e.value,callback:function(o){t.$set(e,"value",o)},expression:"data.value"}})]}},{key:"cell(returnBy)",fn:function(e){return[o("b-form-datepicker",{attrs:{size:"sm","date-format-options":{year:"numeric",month:"numeric",date:"numeric"}},model:{value:e.value,callback:function(o){t.$set(e,"value",o)},expression:"data.value"}})]}},{key:"cell(edit)",fn:function(e){return[o("b-form-checkbox",{attrs:{size:"xl"},on:{change:function(o){return t.getCheckedItems(!0,e.item,e.index,e.rowSelected)}},model:{value:e.rowSelected,callback:function(o){t.$set(e,"rowSelected",o)},expression:"data.rowSelected"}})]}}])}),o("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[o("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){return t.deleteCurrentInv()}}},[o("b-icon-trash",{attrs:{"font-scale":"2"}})],1),o("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.updateCurrentInv()}}},[o("b-icon-arrow-clockwise",{attrs:{"font-scale":"2",variant:"light"}})],1)])],1),o("div",{staticClass:"mx-5"},[o("h2",[t._v("Incoming Inventory")]),o("b-table",{attrs:{id:"incomingInventory",striped:"",bordered:"",hover:"",items:t.incoming,fields:t.incFields},scopedSlots:t._u([{key:"cell(datePurchased)",fn:function(e){return[o("b-form-datepicker",{attrs:{size:"sm","date-format-options":{year:"numeric",month:"numeric",date:"numeric"}},model:{value:e.value,callback:function(o){t.$set(e,"value",o)},expression:"data.value"}})]}},{key:"cell(estimatedDelivery)",fn:function(e){return[o("b-form-datepicker",{attrs:{size:"sm","date-format-options":{year:"numeric",month:"numeric",date:"numeric"}},model:{value:e.value,callback:function(o){t.$set(e,"value",o)},expression:"data.value"}})]}},{key:"cell(edit)",fn:function(e){return[o("b-form-checkbox",{attrs:{size:"xl"},on:{change:function(o){return t.getCheckedItems(!1,e.item,e.index,e.rowSelected)}},model:{value:e.rowSelected,callback:function(o){t.$set(e,"rowSelected",o)},expression:"data.rowSelected"}})]}}])}),o("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[o("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){return t.deleteIncomingInv()}}},[o("b-icon-trash",{attrs:{"font-scale":"2"}})],1),o("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.moveIncomingInv()}}},[o("b-icon-arrow-up",{attrs:{"font-scale":"2",variant:"light"}})],1),o("button",{staticClass:"btn btn-info btn-sm"},[o("b-icon-arrow-clockwise",{attrs:{"font-scale":"2",variant:"light"}})],1)])],1),o("div",{staticClass:"mx-5"},[o("button",{staticClass:"btn btn-info text-light",staticStyle:{"margin-right":"10px"},on:{click:function(e){t.addInv=!t.addInv}}},[t._v("Add Inventory")]),o("button",{staticClass:"btn btn-info text-light",staticStyle:{"margin-right":"10px"},on:{click:function(e){t.inventoryId=!t.inventoryId}}},[t._v("Add Inventory ID ")])]),t.inventoryId?o("div",{staticClass:"mx-5 mt-3"},[o("h2",{staticClass:"d-flex justify-content-center"},[t._v("Inventory Id Mappings")]),o("b-table",{attrs:{stripped:"",bordered:"",hover:"",items:t.invNameMappingsTransformed,headers:t.headers}}),o("h2",{staticClass:"d-flex justify-content-center"},[t._v("Inventory ID Form")]),o("b-card",[o("b-container",[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Name"}},[o("b-form-input",{attrs:{type:"text"},model:{value:t.inventoryIdForm.invName,callback:function(e){t.$set(t.inventoryIdForm,"invName",e)},expression:"inventoryIdForm.invName"}})],1)],1)],1)],1),o("div",{staticClass:"mt-3",staticStyle:{display:"flex","justify-content":"flex-end"}},[o("button",{staticClass:"btn btn-success btn-sm",on:{click:function(e){return t.addInvMappings()}}},[o("b-icon-plus",{attrs:{"font-scale":"2",variant:"light"}})],1)])],1)],1):t._e(),t.addInv?o("div",{staticClass:"mx-5"},[o("h2",{staticClass:"d-flex justify-content-center"},[t._v("Inventory Form")]),o("b-card",{attrs:{"bg-variant":"light"}},[o("h5",[t._v("Inventory Classification")]),o("b-card",[o("b-container",[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Current Inventory"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:t.boolOptions},model:{value:t.form.currentInventory,callback:function(e){t.$set(t.form,"currentInventory",e)},expression:"form.currentInventory"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Inventory ID"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:t.boolOptions},model:{value:t.formInvId,callback:function(e){t.formInvId=e},expression:"formInvId"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Dad Purchased"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:t.boolOptions},model:{value:t.form.dadPurchased,callback:function(e){t.$set(t.form,"dadPurchased",e)},expression:"form.dadPurchased"}})],1)],1)],1)],1)],1),o("h5",[t._v("Order Details")]),o("b-card",[o("b-container",[o("b-row",[t.formInvId?t._e():o("b-col",[o("b-form-group",{attrs:{label:"Name"}},[o("b-form-input",{attrs:{name:"requiredInput"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t.formInvId?o("b-col",[o("b-form-group",{attrs:{label:"Name"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:t.invIdNames},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1):t._e(),o("b-col",[o("b-form-group",{attrs:{label:"Quantity"}},[o("b-form-input",{attrs:{type:"number",name:"requiredInput"},model:{value:t.form.qty,callback:function(e){t.$set(t.form,"qty",e)},expression:"form.qty"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Condition"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:t.conditionCategories},model:{value:t.form.condition,callback:function(e){t.$set(t.form,"condition",e)},expression:"form.condition"}})],1)],1)],1),o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Vendor"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:t.vendors,name:"requiredInput"},model:{value:t.form.vendor,callback:function(e){t.$set(t.form,"vendor",e)},expression:"form.vendor"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Warranty"}},[o("b-form-input",{model:{value:t.form.warranty,callback:function(e){t.$set(t.form,"warranty",e)},expression:"form.warranty"}})],1)],1)],1)],1)],1),o("h5",{staticClass:"mt-2"},[t._v("Pricing Details")]),o("b-card",[o("b-container",[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Total Price"}},[o("b-form-input",{attrs:{name:"requiredInput"},model:{value:t.form.unitPrice,callback:function(e){t.$set(t.form,"unitPrice",e)},expression:"form.unitPrice"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Sales Tax"}},[o("b-form-input",{model:{value:t.form.salesTax,callback:function(e){t.$set(t.form,"salesTax",e)},expression:"form.salesTax"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Payment"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:t.paymentMethods,name:"requiredInput"},model:{value:t.form.payment,callback:function(e){t.$set(t.form,"payment",e)},expression:"form.payment"}})],1)],1)],1)],1)],1),o("h5",{staticClass:"mt-2"},[t._v("Tracking Details")]),o("b-card",[o("b-container",[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Date Purchased"}},[o("b-form-input",{attrs:{type:"date",name:"requiredInput"},model:{value:t.form.datePurchased,callback:function(e){t.$set(t.form,"datePurchased",e)},expression:"form.datePurchased"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Estimated Delivery"}},[o("b-form-input",{attrs:{type:"date"},model:{value:t.form.estimatedDelivery,callback:function(e){t.$set(t.form,"estimatedDelivery",e)},expression:"form.estimatedDelivery"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Tracking Number"}},[o("b-form-input",{model:{value:t.form.trackingNumber,callback:function(e){t.$set(t.form,"trackingNumber",e)},expression:"form.trackingNumber"}})],1)],1)],1)],1)],1)],1),o("div",{staticClass:"mt-3",staticStyle:{display:"flex","justify-content":"flex-end"}},[o("button",{staticClass:"btn btn-success btn-sm",on:{click:function(e){return t.addInventory()}}},[o("b-icon-plus",{attrs:{"font-scale":"2",variant:"light"}})],1)]),o("b-card",{attrs:{header:"Form Data Results"}},[o("pre",{staticClass:"m-0"},[t._v(t._s(t.form))])])],1):t._e()])},g=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center"},[o("h2",[t._v("Inventory Manager")])])}],k=(o("e9c4"),o("d3b7"),o("159b"),o("c740"),o("a434"),o("4de4"),o("b0c0"),o("d81d"),o("bc3a")),F=o.n(k),I={name:"Home",components:{},methods:{addInventory:function(){var t=this;alert(JSON.stringify(this.form)),F.a.post("https://localhost:44314/inventory/addincominginventory",this.form).then((function(e){t.clearForm(),console.log(e)}),(function(e){t.clearForm(),console.log(e)}))},addInvMappings:function(){var t=this;F.a.post("https://localhost:44314/inventory/addinventorymapping",this.inventoryIdForm).then((function(e){t.inventoryIdForm.invName="",console.log(e)}),(function(e){t.inventoryIdForm.invName="",console.log(e)}))},deleteIncomingInv:function(){var t=this;F.a.delete("https://localhost:44314/inventory/deleteinventory",{data:{ids:this.incomingRowsSelected}}).then((function(e){console.log(e),t.incomingRowsSelected.forEach((function(e,o){var r=t.incoming.findIndex((function(t){return t.idInventory==e}));t.incoming.splice(r,1),console.log(e,o)}))}),(function(t){console.log(t)}))},updateIncomingInv:function(){},deleteCurrentInv:function(){var t=this;F.a.delete("https://localhost:44314/inventory/deleteinventory",{data:{ids:this.currentRowsSelected}}).then((function(e){console.log(e),t.currentRowsSelected.forEach((function(e,o){var r=t.current.findIndex((function(t){return t.idInventory==e}));t.current.splice(r,1),console.log(e,o)}))}),(function(t){console.log(t)}))},updateCurrentInv:function(){F.a.put("https://localhost:44314/inventory/UpdateCurrentInventory",this.updatedCurrInv).then((function(t){console.log(t)}),(function(t){console.log(t)}))},moveIncomingInv:function(){var t=this;F.a.put("https://localhost:44314/inventory/moveincominginventory",this.incomingRowsSelected).then((function(e){t.incomingRowsSelected.forEach((function(e,o){var r=t.incoming.findIndex((function(t){return t.idInventory==e}));t.current.push(t.incoming[r]),t.incoming.splice(r,1),console.log(e,o)})),console.log(e)}),(function(t){console.log(t)}))},getData:function(){var t=this;F.a.get("https://localhost:44314/inventory/currentinventory").then((function(e){t.current=e.data})),F.a.get("https://localhost:44314/inventory/incominginventory").then((function(e){t.incoming=e.data})),F.a.get("https://localhost:44314/inventory/InventoryInvested").then((function(e){t.invInvested=e.data})),F.a.get("https://localhost:44314/inventory/inventorymappings").then((function(e){t.invIdNames=e.data}))},getCheckedItems:function(t,e,o,r){console.log(o),t?r?(this.currentRowsSelected.push(e.idInventory),console.log(e.ebayItemId)):this.currentRowsSelected=this.currentRowsSelected.filter((function(t){return t!=e.idInventory})):r?this.incomingRowsSelected.push(e.idInventory):this.incomingRowsSelected=this.incomingRowsSelected.filter((function(t){return t!=e.idInventory}))},updateEbayId:function(t,e){var o=this.updatedCurrInv.filter((function(e){return e.idInventory==t.idInventory}));0==o.length?(t.ebayItemId=e,this.updatedCurrInv.push(t)):o.ebayItemId=e},clearForm:function(){this.form.currentInventory=!1,this.form.name="",this.form.qty="",this.form.vendor="",this.form.payment="",this.form.warranty="NA",this.form.unitPrice="",this.form.salesTax=null,this.form.discount=null,this.form.datePurchased="",this.form.estimatedDelivery=null,this.form.trackingNumber="NA",this.form.condition="",this.form.dadPurchased=!1}},data:function(){return{perPage:5,currentPage:1,form:{currentInventory:"false",condition:"New",name:"",qty:"",vendor:"",payment:"",warranty:"NA",unitPrice:"",salesTax:null,discount:null,datePurchased:"",estimatedDelivery:null,trackingNumber:"NA",dadPurchased:"false"},inventoryIdForm:{invName:""},currFields:[{key:"ebayItemId",label:"eBay Item Id"},{key:"name",label:"Name"},{key:"qty",label:"Quantity"},{key:"unitPrice",label:"Price/Piece"},{key:"vendor",label:"Vendor"},{key:"condition",label:"Condition"},{key:"datePurchased",label:"Date Purchased"},{key:"warranty",label:"Warranty"},{key:"returnBy",label:"Return By"},{key:"edit",label:"Edit"}],current:[],incoming:[],incFields:[{key:"name",label:"Name"},{key:"qty",label:"Quantity"},{key:"unitPrice",label:"Unit Price"},{key:"vendor",label:"Vendor"},{key:"condition",label:"Condition"},{key:"datePurchased",label:"Date Purchased"},{key:"estimatedDelivery",label:"Estimated Delivery"},{key:"trackingNumber",label:"Tracking"},{key:"edit",label:"Edit"}],paymentMethods:["Wells Fargo - 0777","Wells Fargo - 9386","Wells Fargo - Checking","Chase - Amazon","Chase - Freedom","American Express - 41002","American Express - 01009","American Express - Amazon","PayPal","Sychrony"],vendors:["Amazon","Woot","Best Buy","B&H","Target","Harman Audio","Vitamix","Costco","eBay"],conditionCategories:["New","Refurbished","Used - Like New","Used - Very Good","Used - Good","Used - Acceptable","Used"],boolOptions:["true","false"],currentRowsSelected:[],incomingRowsSelected:[],updatedCurrInv:[],inventoryId:!1,addInv:!1,headers:[{text:"Column",value:"item"}],formInvId:!1,invIdNames:[],invInvested:0,inventoryIds:[]}},computed:{rows:function(){return this.current.length},invNameMappingsTransformed:function(){return this.invIdNames.map((function(t){return{item:t}}))}},mounted:function(){this.getData()}},x=I,P=(o("c550"),Object(u["a"])(x,h,g,!1,null,"ef90d694",null)),C=P.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),o("div",{staticClass:"mx-5"},[o("h5",[t._v("Profit For The Year To Date: "+t._s(t.totalProfit))])]),o("div",{staticClass:"mx-5"},[o("h5",[t._v("Profit Breakdown")]),o("b-table",{attrs:{id:"monthlyProfit",stripped:"",bordered:"",hover:"",items:t.mProfit,fields:t.months}})],1),o("div",{staticClass:"mx-5"},[o("button",{staticClass:"btn btn-info text-light",staticStyle:{"margin-right":"10px"},on:{click:function(e){t.sale=!t.sale}}},[t._v("Add Sale")])]),t.sale?o("div",{staticClass:"mx-5"},[o("h2",{staticClass:"d-flex justify-content-center"},[t._v("Sale Details")]),o("b-card",{attrs:{"bg-variant":"light"}},[o("h5",{staticClass:"mt-2"},[t._v("Sale Type")]),o("b-card",[o("b-container",[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Type of Sale"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:t.typeOfSale},model:{value:t.profitForm.saleType,callback:function(e){t.$set(t.profitForm,"saleType",e)},expression:"profitForm.saleType"}})],1)],1)],1)],1)],1),o("h5",{staticClass:"mt-2"},[t._v("Sale Details")]),o("b-card",[o("b-container",[o("b-row",["Adorama"==t.profitForm.saleType?o("b-col",[o("b-form-group",{attrs:{label:"Name"}},[o("b-form-input",{model:{value:t.profitForm.soldItemName,callback:function(e){t.$set(t.profitForm,"soldItemName",e)},expression:"profitForm.soldItemName"}})],1)],1):t._e(),"Adorama"!=t.profitForm.saleType?o("b-col",[o("b-form-group",{attrs:{label:"eBay Id"}},[o("b-form-input",{model:{value:t.profitForm.ebayId,callback:function(e){t.$set(t.profitForm,"ebayId",e)},expression:"profitForm.ebayId"}})],1)],1):t._e(),o("b-col",[o("b-form-group",{attrs:{label:" Quantity Sold"}},[o("b-form-input",{attrs:{type:"number"},model:{value:t.profitForm.qtySold,callback:function(e){t.$set(t.profitForm,"qtySold",e)},expression:"profitForm.qtySold"}})],1)],1)],1),o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Record Date"}},[o("b-form-input",{attrs:{type:"date"},model:{value:t.profitForm.recordDate,callback:function(e){t.$set(t.profitForm,"recordDate",e)},expression:"profitForm.recordDate"}})],1)],1)],1)],1)],1),o("h5",{staticClass:"mt-2"},[t._v("Pricing Details")]),o("b-card",[o("b-container",[o("b-row",["Adorama"==t.profitForm.saleType?o("b-col",[o("b-form-group",{attrs:{label:"Total Cost"}},[o("b-form-input",{model:{value:t.profitForm.totalCost,callback:function(e){t.$set(t.profitForm,"totalCost",e)},expression:"profitForm.totalCost"}})],1)],1):t._e(),"Adorama"!=t.profitForm.saleType?o("b-col",[o("b-form-group",{attrs:{label:"Shipping Costs"}},[o("b-form-input",{model:{value:t.profitForm.shippingCost,callback:function(e){t.$set(t.profitForm,"shippingCost",e)},expression:"profitForm.shippingCost"}})],1)],1):t._e(),"Adorama"==t.profitForm.saleType?o("b-col",[o("b-form-group",{attrs:{label:"Sales Tax"}},[o("b-form-input",{model:{value:t.profitForm.salesTax,callback:function(e){t.$set(t.profitForm,"salesTax",e)},expression:"profitForm.salesTax"}})],1)],1):t._e(),o("b-col",[o("b-form-group",{attrs:{label:"eBay Fees"}},[o("b-form-input",{model:{value:t.profitForm.ebayFees,callback:function(e){t.$set(t.profitForm,"ebayFees",e)},expression:"profitForm.ebayFees"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"eBay Promo Fees"}},[o("b-form-input",{model:{value:t.profitForm.promoFees,callback:function(e){t.$set(t.profitForm,"promoFees",e)},expression:"profitForm.promoFees"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Total Price Sold"}},[o("b-form-input",{model:{value:t.profitForm.totalPriceSold,callback:function(e){t.$set(t.profitForm,"totalPriceSold",e)},expression:"profitForm.totalPriceSold"}})],1)],1)],1)],1)],1)],1),o("div",{staticClass:"mt-3",staticStyle:{display:"flex","justify-content":"flex-end"}},[o("button",{staticClass:"btn btn-success btn-sm",on:{click:function(e){return t.SendProfitForm()}}},[o("b-icon-plus",{attrs:{"font-scale":"2",variant:"light"}})],1)]),o("b-card",{attrs:{header:"Form Data Results"}},[o("pre",{staticClass:"m-0"},[t._v(t._s(t.profitForm))])])],1):t._e(),o("div",{staticClass:"mx-5"},[o("button",{staticClass:"btn btn-info text-light",staticStyle:{"margin-right":"10px"},on:{click:function(e){t.quickAdd=!t.quickAdd}}},[t._v("Short - Add Sale")])]),t.quickAdd?o("div",{staticClass:"mx-5"},[o("h2",{staticClass:"d-flex justify-content-center"},[t._v("Sale Details")]),o("b-card",{attrs:{"bg-variant":"light"}},[o("b-card",[o("b-container",[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Name"}},[o("b-form-input",{model:{value:t.quickProfitForm.itemName,callback:function(e){t.$set(t.quickProfitForm,"itemName",e)},expression:"quickProfitForm.itemName"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Type of Sale"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:t.typeOfSale},model:{value:t.quickProfitForm.saleType,callback:function(e){t.$set(t.quickProfitForm,"saleType",e)},expression:"quickProfitForm.saleType"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:" Quantity Sold"}},[o("b-form-input",{attrs:{type:"number"},model:{value:t.quickProfitForm.qtySold,callback:function(e){t.$set(t.quickProfitForm,"qtySold",e)},expression:"quickProfitForm.qtySold"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Record Date"}},[o("b-form-input",{attrs:{type:"date"},model:{value:t.quickProfitForm.recordDate,callback:function(e){t.$set(t.quickProfitForm,"recordDate",e)},expression:"quickProfitForm.recordDate"}})],1)],1)],1),o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Total Cost"}},[o("b-form-input",{model:{value:t.quickProfitForm.totalCost,callback:function(e){t.$set(t.quickProfitForm,"totalCost",e)},expression:"quickProfitForm.totalCost"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Shipping Costs"}},[o("b-form-input",{model:{value:t.quickProfitForm.shippingCost,callback:function(e){t.$set(t.quickProfitForm,"shippingCost",e)},expression:"quickProfitForm.shippingCost"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"eBay Fees"}},[o("b-form-input",{model:{value:t.quickProfitForm.ebayFees,callback:function(e){t.$set(t.quickProfitForm,"ebayFees",e)},expression:"quickProfitForm.ebayFees"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"eBay Promo Fees"}},[o("b-form-input",{model:{value:t.quickProfitForm.promoFees,callback:function(e){t.$set(t.quickProfitForm,"promoFees",e)},expression:"quickProfitForm.promoFees"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Total Price Sold"}},[o("b-form-input",{model:{value:t.quickProfitForm.totalPriceSold,callback:function(e){t.$set(t.quickProfitForm,"totalPriceSold",e)},expression:"quickProfitForm.totalPriceSold"}})],1)],1)],1)],1)],1)],1),o("div",{staticClass:"mt-3",staticStyle:{display:"flex","justify-content":"flex-end"}},[o("button",{staticClass:"btn btn-success btn-sm",on:{click:function(e){return t.SendQuickProfitForm()}}},[o("b-icon-plus",{attrs:{"font-scale":"2",variant:"light"}})],1)])],1):t._e()])},w=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center"},[o("h2",[t._v("Profit Manager")])])}],q={name:"Profit",methods:{GetData:function(){var t=this;F.a.get("https://localhost:44314/sales/totalprofit").then((function(e){t.totalProfit=e.data,console.log(e)}),(function(t){console.log(t)})),F.a.get("https://localhost:44314/sales/monthlyprofit").then((function(e){t.mProfit=e.data}))},SendProfitForm:function(){var t=this;F.a.post("https://localhost:44314/sales/addsalesrecord",this.profitForm).then((function(e){t.clearProfitForm(),console.log(e)}),(function(e){t.clearProfitForm(),console.log(e)}))},SendQuickProfitForm:function(){var t=this;F.a.post("https://localhost:44314/sales/addquicksalesrecord",this.quickProfitForm).then((function(e){t.clearQuickProfitForm(),console.log(e)}),(function(e){t.clearQuickProfitForm(),console.log(e)}))},clearProfitForm:function(){this.profitForm.itemName="",this.profitForm.totalCost="",this.profitForm.qtySold="",this.profitForm.totalPriceSold="",this.profitForm.saleType="",this.profitForm.recordDate="",this.profitForm.ebayId="",this.profitForm.shippingCost="",this.profitForm.ebayFees="",this.profitForm.promoFees="",this.profitForm.salesTax=""},clearQuickProfitForm:function(){this.quickProfitForm.itemName="",this.quickProfitForm.totalCost="",this.quickProfitForm.shippingCost="",this.quickProfitForm.ebayFees="",this.quickProfitForm.promoFees="",this.quickProfitForm.qtySold="",this.quickProfitForm.totalPriceSold="",this.quickProfitForm.saleType="",this.quickProfitForm.recordDate=""}},data:function(){return{profitForm:{itemName:"",totalCost:"",shippingCost:"",ebayFees:"",promoFees:"",qtySold:"",totalPriceSold:"",saleType:"",recordDate:"",ebayId:"",salesTax:""},quickProfitForm:{itemName:"",totalCost:"",shippingCost:"",ebayFees:"",promoFees:"",qtySold:"",totalPriceSold:"",saleType:"",recordDate:""},typeOfSale:["Adorama","eBay","Facebook"],months:["month","sum"],totalProfit:"",mProfit:[],sale:!1,quickAdd:!1}},mounted:function(){this.GetData()}},_=q,$=(o("8970"),Object(u["a"])(_,S,w,!1,null,"74768a34",null)),T=$.exports;r["default"].use(y["a"]);var N=new y["a"]({routes:[{path:"/",component:C},{path:"/Profit",component:T}]}),D=(o("7b17"),o("ab8b"),o("1f1a")),A=o("5f5b"),j=o("b1e0"),O=o("3d31"),R=o("d435"),E=o("d047"),z=o("b720"),B=o("9ae9");r["default"].use(D["a"]),r["default"].use(A["a"]),r["default"].use(j["a"]),r["default"].use(R["a"]),r["default"].use(E["a"]),r["default"].use(z["a"]),r["default"].use(O["a"]),r["default"].use(B["a"]),r["default"].config.productionTip=!0,new r["default"]({router:N,render:function(t){return t(v)}}).$mount("#app")},8970:function(t,e,o){"use strict";o("9172")},9172:function(t,e,o){},c550:function(t,e,o){"use strict";o("4e78")}});
//# sourceMappingURL=app.7f423f9f.js.map