(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],m=0,f=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={app:0},a=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"4e78":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Navbar"),o("router-view")],1)},a=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("nav",{staticClass:"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3"},[o("div",{staticClass:"container"},[e._m(0),o("div",{staticClass:"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse"},[o("ul",{staticClass:"navbar-nav flex-grow-1"},[o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v(" Home ")])],1),o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:"Profit"}},[e._v(" Profit Manager ")])],1),o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:"BusinessExpenses"}},[e._v(" Business Expense Manager ")])],1)])])])])])},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[o("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"Navbar"},c=l,u=o("2877"),m=Object(u["a"])(c,s,i,!1,null,"aa1bdcc0",null),f=m.exports,d={name:"app",components:{Navbar:f}},p=d,b=Object(u["a"])(p,r,a,!1,null,null,null),v=b.exports,y=o("dad3"),h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),o("div",[o("h5",[e._v("Total Inventory Investment: "+e._s(e.invInvested))])]),o("div",{staticClass:"mx-5"},[o("h2",[e._v(" Current Inventory")]),o("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"currentInventory"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),o("b-table",{attrs:{id:"currentInventory",striped:"",bordered:"",hover:"",items:e.current,"per-page":e.perPage,"current-page":e.currentPage,fields:e.currFields},scopedSlots:e._u([{key:"cell(ebayItemId)",fn:function(t){return[o("b-form-input",{staticStyle:{width:"9em"},on:{change:function(o){return e.updateEbayId(t.item,t.value)}},model:{value:t.value,callback:function(o){e.$set(t,"value",o)},expression:"data.value"}})]}},{key:"cell(qty)",fn:function(t){return[o("b-form-input",{attrs:{type:"number"},model:{value:t.value,callback:function(o){e.$set(t,"value",o)},expression:"data.value"}})]}},{key:"cell(datePurchased)",fn:function(t){return[o("b-form-datepicker",{attrs:{size:"sm","date-format-options":{year:"numeric",month:"numeric",date:"numeric"}},model:{value:t.value,callback:function(o){e.$set(t,"value",o)},expression:"data.value"}})]}},{key:"cell(returnBy)",fn:function(t){return[o("b-form-datepicker",{attrs:{size:"sm","date-format-options":{year:"numeric",month:"numeric",date:"numeric"}},model:{value:t.value,callback:function(o){e.$set(t,"value",o)},expression:"data.value"}})]}},{key:"cell(edit)",fn:function(t){return[o("b-form-checkbox",{attrs:{size:"xl"},on:{change:function(o){return e.getCheckedItems(!0,t.item,t.index,t.rowSelected)}},model:{value:t.rowSelected,callback:function(o){e.$set(t,"rowSelected",o)},expression:"data.rowSelected"}})]}}])}),o("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[o("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(t){return e.deleteCurrentInv()}}},[o("b-icon-trash",{attrs:{"font-scale":"2"}})],1),o("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.updateCurrentInv()}}},[o("b-icon-arrow-clockwise",{attrs:{"font-scale":"2",variant:"light"}})],1)])],1),o("div",{staticClass:"mx-5"},[o("h2",[e._v("Incoming Inventory")]),o("b-table",{attrs:{id:"incomingInventory",striped:"",bordered:"",hover:"",items:e.incoming,fields:e.incFields},scopedSlots:e._u([{key:"cell(datePurchased)",fn:function(t){return[o("b-form-datepicker",{attrs:{size:"sm","date-format-options":{year:"numeric",month:"numeric",date:"numeric"}},model:{value:t.value,callback:function(o){e.$set(t,"value",o)},expression:"data.value"}})]}},{key:"cell(estimatedDelivery)",fn:function(t){return[o("b-form-datepicker",{attrs:{size:"sm","date-format-options":{year:"numeric",month:"numeric",date:"numeric"}},model:{value:t.value,callback:function(o){e.$set(t,"value",o)},expression:"data.value"}})]}},{key:"cell(edit)",fn:function(t){return[o("b-form-checkbox",{attrs:{size:"xl"},on:{change:function(o){return e.getCheckedItems(!1,t.item,t.index,t.rowSelected)}},model:{value:t.rowSelected,callback:function(o){e.$set(t,"rowSelected",o)},expression:"data.rowSelected"}})]}}])}),o("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[o("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(t){return e.deleteIncomingInv()}}},[o("b-icon-trash",{attrs:{"font-scale":"2"}})],1),o("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(t){return e.moveIncomingInv()}}},[o("b-icon-arrow-up",{attrs:{"font-scale":"2",variant:"light"}})],1),o("button",{staticClass:"btn btn-info btn-sm"},[o("b-icon-arrow-clockwise",{attrs:{"font-scale":"2",variant:"light"}})],1)])],1),o("div",{staticClass:"mx-5"},[o("button",{staticClass:"btn btn-info text-light",staticStyle:{"margin-right":"10px"},on:{click:function(t){e.addInv=!e.addInv}}},[e._v("Add Inventory")]),o("button",{staticClass:"btn btn-info text-light",staticStyle:{"margin-right":"10px"},on:{click:function(t){e.inventoryId=!e.inventoryId}}},[e._v("Add Inventory ID ")])]),e.inventoryId?o("div",{staticClass:"mx-5 mt-3"},[o("h2",{staticClass:"d-flex justify-content-center"},[e._v("Inventory Id Mappings")]),o("b-table",{attrs:{stripped:"",bordered:"",hover:"",items:e.invNameMappingsTransformed,headers:e.headers}}),o("h2",{staticClass:"d-flex justify-content-center"},[e._v("Inventory ID Form")]),o("b-card",[o("b-container",[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Name"}},[o("b-form-input",{attrs:{type:"text"},model:{value:e.inventoryIdForm.invName,callback:function(t){e.$set(e.inventoryIdForm,"invName",t)},expression:"inventoryIdForm.invName"}})],1)],1)],1)],1),o("div",{staticClass:"mt-3",staticStyle:{display:"flex","justify-content":"flex-end"}},[o("button",{staticClass:"btn btn-success btn-sm",on:{click:function(t){return e.addInvMappings()}}},[o("b-icon-plus",{attrs:{"font-scale":"2",variant:"light"}})],1)])],1)],1):e._e(),e.addInv?o("div",{staticClass:"mx-5"},[o("h2",{staticClass:"d-flex justify-content-center"},[e._v("Inventory Form")]),o("b-card",{attrs:{"bg-variant":"light"}},[o("h5",[e._v("Inventory Classification")]),o("b-card",[o("b-container",[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Current Inventory"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:e.boolOptions},model:{value:e.form.currentInventory,callback:function(t){e.$set(e.form,"currentInventory",t)},expression:"form.currentInventory"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Inventory ID"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:e.boolOptions},model:{value:e.formInvId,callback:function(t){e.formInvId=t},expression:"formInvId"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Dad Purchased"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:e.boolOptions},model:{value:e.form.dadPurchased,callback:function(t){e.$set(e.form,"dadPurchased",t)},expression:"form.dadPurchased"}})],1)],1)],1)],1)],1),o("h5",[e._v("Order Details")]),o("b-card",[o("b-container",[o("b-row",[e.formInvId?e._e():o("b-col",[o("b-form-group",{attrs:{label:"Name"}},[o("b-form-input",{attrs:{name:"requiredInput"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e.formInvId?o("b-col",[o("b-form-group",{attrs:{label:"Name"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:e.invIdNames},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1):e._e(),o("b-col",[o("b-form-group",{attrs:{label:"Quantity"}},[o("b-form-input",{attrs:{type:"number",name:"requiredInput"},model:{value:e.form.qty,callback:function(t){e.$set(e.form,"qty",t)},expression:"form.qty"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Condition"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:e.conditionCategories},model:{value:e.form.condition,callback:function(t){e.$set(e.form,"condition",t)},expression:"form.condition"}})],1)],1)],1),o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Vendor"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:e.vendors,name:"requiredInput"},model:{value:e.form.vendor,callback:function(t){e.$set(e.form,"vendor",t)},expression:"form.vendor"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Warranty"}},[o("b-form-input",{model:{value:e.form.warranty,callback:function(t){e.$set(e.form,"warranty",t)},expression:"form.warranty"}})],1)],1)],1)],1)],1),o("h5",{staticClass:"mt-2"},[e._v("Pricing Details")]),o("b-card",[o("b-container",[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Total Price"}},[o("b-form-input",{attrs:{name:"requiredInput"},model:{value:e.form.unitPrice,callback:function(t){e.$set(e.form,"unitPrice",t)},expression:"form.unitPrice"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Sales Tax"}},[o("b-form-input",{model:{value:e.form.salesTax,callback:function(t){e.$set(e.form,"salesTax",t)},expression:"form.salesTax"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Payment"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:e.paymentMethods,name:"requiredInput"},model:{value:e.form.payment,callback:function(t){e.$set(e.form,"payment",t)},expression:"form.payment"}})],1)],1)],1)],1)],1),o("h5",{staticClass:"mt-2"},[e._v("Tracking Details")]),o("b-card",[o("b-container",[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Date Purchased"}},[o("b-form-input",{attrs:{type:"date",name:"requiredInput"},model:{value:e.form.datePurchased,callback:function(t){e.$set(e.form,"datePurchased",t)},expression:"form.datePurchased"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Estimated Delivery"}},[o("b-form-input",{attrs:{type:"date"},model:{value:e.form.estimatedDelivery,callback:function(t){e.$set(e.form,"estimatedDelivery",t)},expression:"form.estimatedDelivery"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Tracking Number"}},[o("b-form-input",{model:{value:e.form.trackingNumber,callback:function(t){e.$set(e.form,"trackingNumber",t)},expression:"form.trackingNumber"}})],1)],1)],1)],1)],1)],1),o("div",{staticClass:"mt-3",staticStyle:{display:"flex","justify-content":"flex-end"}},[o("button",{staticClass:"btn btn-success btn-sm",on:{click:function(t){return e.addInventory()}}},[o("b-icon-plus",{attrs:{"font-scale":"2",variant:"light"}})],1)]),o("b-card",{attrs:{header:"Form Data Results"}},[o("pre",{staticClass:"m-0"},[e._v(e._s(e.form))])])],1):e._e()])},g=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-center"},[o("h2",[e._v("Inventory Manager")])])}],x=(o("e9c4"),o("d3b7"),o("159b"),o("c740"),o("a434"),o("4de4"),o("b0c0"),o("d81d"),o("bc3a")),F=o.n(x),k={name:"Home",components:{},methods:{addInventory:function(){var e=this;alert(JSON.stringify(this.form)),F.a.post("https://localhost:44314/inventory/addincominginventory",this.form).then((function(t){e.clearForm(),console.log(t)}),(function(t){e.clearForm(),console.log(t)}))},addInvMappings:function(){var e=this;F.a.post("https://localhost:44314/inventory/addinventorymapping",this.inventoryIdForm).then((function(t){e.inventoryIdForm.invName="",console.log(t)}),(function(t){e.inventoryIdForm.invName="",console.log(t)}))},deleteIncomingInv:function(){var e=this;F.a.delete("https://localhost:44314/inventory/deleteinventory",{data:{ids:this.incomingRowsSelected}}).then((function(t){console.log(t),e.incomingRowsSelected.forEach((function(t,o){var n=e.incoming.findIndex((function(e){return e.idInventory==t}));e.incoming.splice(n,1),console.log(t,o)}))}),(function(e){console.log(e)}))},updateIncomingInv:function(){},deleteCurrentInv:function(){var e=this;F.a.delete("https://localhost:44314/inventory/deleteinventory",{data:{ids:this.currentRowsSelected}}).then((function(t){console.log(t),e.currentRowsSelected.forEach((function(t,o){var n=e.current.findIndex((function(e){return e.idInventory==t}));e.current.splice(n,1),console.log(t,o)}))}),(function(e){console.log(e)}))},updateCurrentInv:function(){F.a.put("https://localhost:44314/inventory/UpdateCurrentInventory",this.updatedCurrInv).then((function(e){console.log(e)}),(function(e){console.log(e)}))},moveIncomingInv:function(){var e=this;F.a.put("https://localhost:44314/inventory/moveincominginventory",this.incomingRowsSelected).then((function(t){e.incomingRowsSelected.forEach((function(t,o){var n=e.incoming.findIndex((function(e){return e.idInventory==t}));e.current.push(e.incoming[n]),e.incoming.splice(n,1),console.log(t,o)})),console.log(t)}),(function(e){console.log(e)}))},getData:function(){var e=this;F.a.get("https://localhost:44314/inventory/currentinventory").then((function(t){e.current=t.data})),F.a.get("https://localhost:44314/inventory/incominginventory").then((function(t){e.incoming=t.data})),F.a.get("https://localhost:44314/inventory/InventoryInvested").then((function(t){e.invInvested=t.data})),F.a.get("https://localhost:44314/inventory/inventorymappings").then((function(t){e.invIdNames=t.data}))},getCheckedItems:function(e,t,o,n){console.log(o),e?n?(this.currentRowsSelected.push(t.idInventory),console.log(t.ebayItemId)):this.currentRowsSelected=this.currentRowsSelected.filter((function(e){return e!=t.idInventory})):n?this.incomingRowsSelected.push(t.idInventory):this.incomingRowsSelected=this.incomingRowsSelected.filter((function(e){return e!=t.idInventory}))},updateEbayId:function(e,t){var o=this.updatedCurrInv.filter((function(t){return t.idInventory==e.idInventory}));0==o.length?(e.ebayItemId=t,this.updatedCurrInv.push(e)):o.ebayItemId=t},clearForm:function(){this.form.currentInventory=!1,this.form.name="",this.form.qty="",this.form.vendor="",this.form.payment="",this.form.warranty="NA",this.form.unitPrice="",this.form.salesTax=null,this.form.discount=null,this.form.datePurchased="",this.form.estimatedDelivery=null,this.form.trackingNumber="NA",this.form.condition="",this.form.dadPurchased=!1}},data:function(){return{perPage:5,currentPage:1,form:{currentInventory:"false",condition:"New",name:"",qty:"",vendor:"",payment:"",warranty:"NA",unitPrice:"",salesTax:null,discount:null,datePurchased:"",estimatedDelivery:null,trackingNumber:"NA",dadPurchased:"false"},inventoryIdForm:{invName:""},currFields:[{key:"ebayItemId",label:"eBay Item Id"},{key:"name",label:"Name"},{key:"qty",label:"Quantity"},{key:"unitPrice",label:"Price/Piece"},{key:"vendor",label:"Vendor"},{key:"condition",label:"Condition"},{key:"datePurchased",label:"Date Purchased"},{key:"warranty",label:"Warranty"},{key:"returnBy",label:"Return By"},{key:"edit",label:"Edit"}],current:[],incoming:[],incFields:[{key:"name",label:"Name"},{key:"qty",label:"Quantity"},{key:"unitPrice",label:"Unit Price"},{key:"vendor",label:"Vendor"},{key:"condition",label:"Condition"},{key:"datePurchased",label:"Date Purchased"},{key:"estimatedDelivery",label:"Estimated Delivery"},{key:"trackingNumber",label:"Tracking"},{key:"edit",label:"Edit"}],paymentMethods:["Wells Fargo - 0777","Wells Fargo - 9386","Wells Fargo - Checking","Chase - Amazon","Chase - Freedom","American Express - 41002","American Express - 01009","American Express - Amazon","PayPal","Sychrony"],vendors:["Amazon","Woot","Best Buy","B&H","Target","Harman Audio","Vitamix","Costco","eBay"],conditionCategories:["New","Refurbished","Used - Like New","Used - Very Good","Used - Good","Used - Acceptable","Used"],boolOptions:["true","false"],currentRowsSelected:[],incomingRowsSelected:[],updatedCurrInv:[],inventoryId:!1,addInv:!1,headers:[{text:"Column",value:"item"}],formInvId:!1,invIdNames:[],invInvested:0,inventoryIds:[]}},computed:{rows:function(){return this.current.length},invNameMappingsTransformed:function(){return this.invIdNames.map((function(e){return{item:e}}))}},mounted:function(){this.getData()}},I=k,C=(o("c550"),Object(u["a"])(I,h,g,!1,null,"ef90d694",null)),P=C.exports,S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),o("div",{staticClass:"mx-5"},[o("h5",[e._v("Profit For The Year To Date: "+e._s(e.totalProfit))])]),o("div",{staticClass:"mx-5"},[o("h5",[e._v("Profit Breakdown")]),o("b-table",{attrs:{id:"monthlyProfit",stripped:"",bordered:"",hover:"",items:e.mProfit,fields:e.months}})],1),o("div",{staticClass:"mx-5"},[o("button",{staticClass:"btn btn-info text-light",staticStyle:{"margin-right":"10px"},on:{click:function(t){e.sale=!e.sale}}},[e._v("Add Sale")])]),e.sale?o("div",{staticClass:"mx-5"},[o("h2",{staticClass:"d-flex justify-content-center"},[e._v("Sale Details")]),o("b-card",{attrs:{"bg-variant":"light"}},[o("h5",{staticClass:"mt-2"},[e._v("Sale Type")]),o("b-card",[o("b-container",[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Type of Sale"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:e.typeOfSale},model:{value:e.profitForm.saleType,callback:function(t){e.$set(e.profitForm,"saleType",t)},expression:"profitForm.saleType"}})],1)],1)],1)],1)],1),o("h5",{staticClass:"mt-2"},[e._v("Sale Details")]),o("b-card",[o("b-container",[o("b-row",["Adorama"==e.profitForm.saleType?o("b-col",[o("b-form-group",{attrs:{label:"Name"}},[o("b-form-input",{model:{value:e.profitForm.soldItemName,callback:function(t){e.$set(e.profitForm,"soldItemName",t)},expression:"profitForm.soldItemName"}})],1)],1):e._e(),"Adorama"!=e.profitForm.saleType?o("b-col",[o("b-form-group",{attrs:{label:"eBay Id"}},[o("b-form-input",{model:{value:e.profitForm.ebayId,callback:function(t){e.$set(e.profitForm,"ebayId",t)},expression:"profitForm.ebayId"}})],1)],1):e._e(),o("b-col",[o("b-form-group",{attrs:{label:" Quantity Sold"}},[o("b-form-input",{attrs:{type:"number"},model:{value:e.profitForm.qtySold,callback:function(t){e.$set(e.profitForm,"qtySold",t)},expression:"profitForm.qtySold"}})],1)],1)],1),o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Record Date"}},[o("b-form-input",{attrs:{type:"date"},model:{value:e.profitForm.recordDate,callback:function(t){e.$set(e.profitForm,"recordDate",t)},expression:"profitForm.recordDate"}})],1)],1)],1)],1)],1),o("h5",{staticClass:"mt-2"},[e._v("Pricing Details")]),o("b-card",[o("b-container",[o("b-row",["Adorama"==e.profitForm.saleType?o("b-col",[o("b-form-group",{attrs:{label:"Total Cost"}},[o("b-form-input",{model:{value:e.profitForm.totalCost,callback:function(t){e.$set(e.profitForm,"totalCost",t)},expression:"profitForm.totalCost"}})],1)],1):e._e(),"Adorama"!=e.profitForm.saleType?o("b-col",[o("b-form-group",{attrs:{label:"Shipping Costs"}},[o("b-form-input",{model:{value:e.profitForm.shippingCost,callback:function(t){e.$set(e.profitForm,"shippingCost",t)},expression:"profitForm.shippingCost"}})],1)],1):e._e(),"Adorama"==e.profitForm.saleType?o("b-col",[o("b-form-group",{attrs:{label:"Sales Tax"}},[o("b-form-input",{model:{value:e.profitForm.salesTax,callback:function(t){e.$set(e.profitForm,"salesTax",t)},expression:"profitForm.salesTax"}})],1)],1):e._e(),o("b-col",[o("b-form-group",{attrs:{label:"eBay Fees"}},[o("b-form-input",{model:{value:e.profitForm.ebayFees,callback:function(t){e.$set(e.profitForm,"ebayFees",t)},expression:"profitForm.ebayFees"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"eBay Promo Fees"}},[o("b-form-input",{model:{value:e.profitForm.promoFees,callback:function(t){e.$set(e.profitForm,"promoFees",t)},expression:"profitForm.promoFees"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Total Price Sold"}},[o("b-form-input",{model:{value:e.profitForm.totalPriceSold,callback:function(t){e.$set(e.profitForm,"totalPriceSold",t)},expression:"profitForm.totalPriceSold"}})],1)],1)],1)],1)],1)],1),o("div",{staticClass:"mt-3",staticStyle:{display:"flex","justify-content":"flex-end"}},[o("button",{staticClass:"btn btn-success btn-sm",on:{click:function(t){return e.SendProfitForm()}}},[o("b-icon-plus",{attrs:{"font-scale":"2",variant:"light"}})],1)]),o("b-card",{attrs:{header:"Form Data Results"}},[o("pre",{staticClass:"m-0"},[e._v(e._s(e.profitForm))])])],1):e._e(),o("div",{staticClass:"mx-5"},[o("button",{staticClass:"btn btn-info text-light",staticStyle:{"margin-right":"10px"},on:{click:function(t){e.quickAdd=!e.quickAdd}}},[e._v("Short - Add Sale")])]),e.quickAdd?o("div",{staticClass:"mx-5"},[o("h2",{staticClass:"d-flex justify-content-center"},[e._v("Sale Details")]),o("b-card",{attrs:{"bg-variant":"light"}},[o("b-card",[o("b-container",[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Name"}},[o("b-form-input",{model:{value:e.quickProfitForm.itemName,callback:function(t){e.$set(e.quickProfitForm,"itemName",t)},expression:"quickProfitForm.itemName"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Type of Sale"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:e.typeOfSale},model:{value:e.quickProfitForm.saleType,callback:function(t){e.$set(e.quickProfitForm,"saleType",t)},expression:"quickProfitForm.saleType"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:" Quantity Sold"}},[o("b-form-input",{attrs:{type:"number"},model:{value:e.quickProfitForm.qtySold,callback:function(t){e.$set(e.quickProfitForm,"qtySold",t)},expression:"quickProfitForm.qtySold"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Record Date"}},[o("b-form-input",{attrs:{type:"date"},model:{value:e.quickProfitForm.recordDate,callback:function(t){e.$set(e.quickProfitForm,"recordDate",t)},expression:"quickProfitForm.recordDate"}})],1)],1)],1),o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Total Cost"}},[o("b-form-input",{model:{value:e.quickProfitForm.totalCost,callback:function(t){e.$set(e.quickProfitForm,"totalCost",t)},expression:"quickProfitForm.totalCost"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Shipping Costs"}},[o("b-form-input",{model:{value:e.quickProfitForm.shippingCost,callback:function(t){e.$set(e.quickProfitForm,"shippingCost",t)},expression:"quickProfitForm.shippingCost"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"eBay Fees"}},[o("b-form-input",{model:{value:e.quickProfitForm.ebayFees,callback:function(t){e.$set(e.quickProfitForm,"ebayFees",t)},expression:"quickProfitForm.ebayFees"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"eBay Promo Fees"}},[o("b-form-input",{model:{value:e.quickProfitForm.promoFees,callback:function(t){e.$set(e.quickProfitForm,"promoFees",t)},expression:"quickProfitForm.promoFees"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Total Price Sold"}},[o("b-form-input",{model:{value:e.quickProfitForm.totalPriceSold,callback:function(t){e.$set(e.quickProfitForm,"totalPriceSold",t)},expression:"quickProfitForm.totalPriceSold"}})],1)],1)],1)],1)],1)],1),o("div",{staticClass:"mt-3",staticStyle:{display:"flex","justify-content":"flex-end"}},[o("button",{staticClass:"btn btn-success btn-sm",on:{click:function(t){return e.SendQuickProfitForm()}}},[o("b-icon-plus",{attrs:{"font-scale":"2",variant:"light"}})],1)])],1):e._e()])},_=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-center"},[o("h2",[e._v("Profit Manager")])])}],w={name:"Profit",methods:{GetData:function(){var e=this;F.a.get("https://localhost:44314/sales/totalprofit").then((function(t){e.totalProfit=t.data,console.log(t)}),(function(e){console.log(e)})),F.a.get("https://localhost:44314/sales/monthlyprofit").then((function(t){e.mProfit=t.data}))},SendProfitForm:function(){var e=this;F.a.post("https://localhost:44314/sales/addsalesrecord",this.profitForm).then((function(t){e.clearProfitForm(),console.log(t)}),(function(t){e.clearProfitForm(),console.log(t)}))},SendQuickProfitForm:function(){var e=this;F.a.post("https://localhost:44314/sales/addquicksalesrecord",this.quickProfitForm).then((function(t){e.clearQuickProfitForm(),console.log(t)}),(function(t){e.clearQuickProfitForm(),console.log(t)}))},clearProfitForm:function(){this.profitForm.itemName="",this.profitForm.totalCost="",this.profitForm.qtySold="",this.profitForm.totalPriceSold="",this.profitForm.saleType="",this.profitForm.recordDate="",this.profitForm.ebayId="",this.profitForm.shippingCost="",this.profitForm.ebayFees="",this.profitForm.promoFees="",this.profitForm.salesTax=""},clearQuickProfitForm:function(){this.quickProfitForm.itemName="",this.quickProfitForm.totalCost="",this.quickProfitForm.shippingCost="",this.quickProfitForm.ebayFees="",this.quickProfitForm.promoFees="",this.quickProfitForm.qtySold="",this.quickProfitForm.totalPriceSold="",this.quickProfitForm.saleType="",this.quickProfitForm.recordDate=""}},data:function(){return{profitForm:{itemName:"",totalCost:"",shippingCost:"",ebayFees:"",promoFees:"",qtySold:"",totalPriceSold:"",saleType:"",recordDate:"",ebayId:"",salesTax:""},quickProfitForm:{itemName:"",totalCost:"",shippingCost:"",ebayFees:"",promoFees:"",qtySold:"",totalPriceSold:"",saleType:"",recordDate:""},typeOfSale:["Adorama","eBay","Facebook"],months:["month","sum"],totalProfit:"",mProfit:[],sale:!1,quickAdd:!1}},mounted:function(){this.GetData()}},q=w,E=(o("8970"),Object(u["a"])(q,S,_,!1,null,"74768a34",null)),$=E.exports,T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),o("div",{staticClass:"mx-5"},[o("h2",[e._v(e._s(this.currentYear)+" Business Expenses")]),o("b-table",{attrs:{striped:"",bordered:"",hover:"",items:e.businessExpenses,fields:e.expenses}}),o("h2",[e._v("Insurance Expenses")]),o("b-table",{attrs:{items:e.insuranceExpenses,striped:"",bordered:"",hover:"",fields:e.insuranceFields}})],1),o("div",{staticClass:"mx-5"},[o("button",{staticClass:"btn btn-info text-light",staticStyle:{"margin-right":"10px"},on:{click:function(t){e.buzExpense=!e.buzExpense}}},[e._v("Add Business Expense")]),o("button",{staticClass:"btn btn-info text-light",on:{click:function(t){e.insExpense=!e.insExpense}}},[e._v("Add Insurance Expense")])]),e.buzExpense?o("div",{staticClass:"mx-5"},[o("h2",[e._v("Business Expense Form")]),o("b-card",{attrs:{"bg-variant":"light"}},[o("h5",{staticClass:"mt-2"},[e._v("Item Details")]),o("b-card",[o("b-form-group",{attrs:{label:"Name"}},[o("b-form-input",{model:{value:e.expenseForm.expenseName,callback:function(t){e.$set(e.expenseForm,"expenseName",t)},expression:"expenseForm.expenseName"}})],1)],1),o("h5",{staticClass:"mt-2"},[e._v("Cost Details")]),o("b-card",[o("b-container",[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Expense Category"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:e.expenseCategories},model:{value:e.expenseForm.expenseCategory,callback:function(t){e.$set(e.expenseForm,"expenseCategory",t)},expression:"expenseForm.expenseCategory"}})],1)],1)],1),o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Cost"}},[o("b-form-input",{model:{value:e.expenseForm.cost,callback:function(t){e.$set(e.expenseForm,"cost",t)},expression:"expenseForm.cost"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Payment Info"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:e.paymentMethods},model:{value:e.expenseForm.paymentInfo,callback:function(t){e.$set(e.expenseForm,"paymentInfo",t)},expression:"expenseForm.paymentInfo"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Expense Date"}},[o("b-form-input",{attrs:{type:"date"},model:{value:e.expenseForm.purchaseDate,callback:function(t){e.$set(e.expenseForm,"purchaseDate",t)},expression:"expenseForm.purchaseDate"}})],1)],1)],1)],1)],1)],1),o("div",{staticClass:"mt-3",staticStyle:{display:"flex","justify-content":"flex-end"}},[o("button",{staticClass:"btn btn-success btn-sm",on:{click:function(t){return e.sendExpenseForm()}}},[o("b-icon-plus",{attrs:{"font-scale":"2",variant:"light"}})],1)])],1):e._e(),e.insExpense?o("div",{staticClass:"mx-5"},[o("h2",[e._v("Insurance Expense Form")]),o("b-card",{attrs:{variant:"light"}},[o("h5",[e._v("Insurance Details")]),o("b-card",[o("b-container",[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Insurance Expense Type"}},[o("b-form-select",{staticClass:"form-select form-select-font-size-lg",attrs:{options:e.insuranceOptions},model:{value:e.insuranceForm.type,callback:function(t){e.$set(e.insuranceForm,"type",t)},expression:"insuranceForm.type"}})],1)],1),o("b-col",[o("b-form-group",{attrs:{label:"Amount"}},[o("b-form-input",{attrs:{type:"number"},model:{value:e.insuranceForm.amount,callback:function(t){e.$set(e.insuranceForm,"amount",t)},expression:"insuranceForm.amount"}})],1)],1)],1)],1)],1),o("div",{staticClass:"mt-3",staticStyle:{display:"flex","justify-content":"flex-end"}},[o("button",{staticClass:"btn btn-success btn-sm",on:{click:function(t){return e.sendInsuranceForm()}}},[o("b-icon-plus",{attrs:{"font-scale":"2",variant:"light"}})],1)])],1)],1):e._e()])},N=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-center"},[o("h2",[e._v("Expense Manager")])])}],D={name:"BusinessExpenses",methods:{resetExpenseForm:function(){this.expenseForm.expenseName="",this.expenseForm.expenseCategory="",this.expenseForm.cost="",this.expenseForm.paymentInfo="",this.expenseForm.purchaseDate=""},sendExpenseForn:function(){var e=this;F.a.post("https://localhost:44314/BusinessExpenses/AddExpense",this.expenseForm).then((function(t){console.log(t),e.resetExpenseForm()}),(function(e){console.log(e)}))},getExpenses:function(){var e=this;F.a.get("https://localhost:44314/BusinessExpenses/GetExpenseTotals").then((function(t){e.businessExpenses=t.data}))}},data:function(){return{expenseForm:{expenseVendor:"",expenseName:"",expenseCategory:"",cost:"",paymentInfo:"",purchaseDate:""},insuranceForm:{amount:"",type:""},insuranceFields:[{key:"insuranceTotal",label:"Insurance Costs"},{key:"claimTotal",label:"Claim Refunds"},{key:"losses",label:"Lost Inventory"},{key:"saved",label:"Money Saved"}],expenses:[{key:"inventory",label:"Inventory"},{key:"supplies",label:"Supplies"},{key:"subscriptions",label:"Subscriptions"},{key:"officeSpace",label:"Office Space"},{key:"utilities",label:"Utilities"},{key:"food",label:"Food"},{key:"gas",label:"Gas"},{key:"car",label:"Car"},{key:"travel",label:"Travel"},{key:"miscExpenses",label:"Misc. Expenses"}],insuranceExpenses:[],businessExpenses:[],buzExpense:!1,insExpense:!1,currentYear:(new Date).getFullYear(),insuranceOptions:["Claim Refund","Insurance Cost","Lost Inventory","Money Saved"],paymentMethods:["Wells Fargo - 4524","Wells Fargo - 0777","Wells Fargo - 9386","Wells Fargo - Checking","Chase - Amazon","Chase - Freedom","American Express - 41002","American Express - 01009","American Express - Amazon","PayPal","Sychrony"],expenseCategories:["Supplies","Subscriptions","Office Space (Rent & Insurance)","Utilities","Food","Gas","Car Expenses (Insurance & Maintance)","Travel","Misc Business Expenses"]}},mounted:function(){this.getExpenses()}},A=D,O=Object(u["a"])(A,T,N,!1,null,null,null),j=O.exports;n["default"].use(y["a"]);var z=new y["a"]({routes:[{path:"/",component:P},{path:"/Profit",component:$},{path:"/BusinessExpenses",component:j}]}),B=(o("7b17"),o("ab8b"),o("1f1a")),M=o("5f5b"),R=o("b1e0"),Q=o("3d31"),W=o("d435"),U=o("d047"),G=o("b720"),V=o("9ae9");n["default"].use(B["a"]),n["default"].use(M["a"]),n["default"].use(R["a"]),n["default"].use(W["a"]),n["default"].use(U["a"]),n["default"].use(G["a"]),n["default"].use(Q["a"]),n["default"].use(V["a"]),n["default"].config.productionTip=!0,new n["default"]({router:z,render:function(e){return e(v)}}).$mount("#app")},8970:function(e,t,o){"use strict";o("9172")},9172:function(e,t,o){},c550:function(e,t,o){"use strict";o("4e78")}});
//# sourceMappingURL=app.7a8c91b0.js.map