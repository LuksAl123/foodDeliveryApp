"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1547],{1547:(L,p,l)=>{l.r(p),l.d(p,{ItemsPageModule:()=>Y});var c=l(4755),g=l(5030),a=l(6794),m=l(4517),d=l(5861),t=l(2223),h=l(2158),_=l(1479),f=l(7020),I=l(3001),Z=l(8081);function x(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"ion-row",5),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.quantityPlus())}),t.TgZ(1,"ion-text",6),t._uU(2,"Add"),t.qZA()()}}function C(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"ion-row")(1,"ion-icon",7),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.quantityMinus())}),t.qZA(),t.TgZ(2,"ion-text",8),t._uU(3),t.qZA(),t.TgZ(4,"ion-icon",9),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.quantityPlus())}),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(3),t.Oqu(null==e.item?null:e.item.quantity)}}let y=(()=>{class i{constructor(){this.fallbackImage="assets/imgs/1.jpg",this.add=new t.vpe,this.minus=new t.vpe}ngOnInit(){}onImgError(e){e.target.src=this.fallbackImage}quantityPlus(){this.add.emit(this.item)}quantityMinus(){this.minus.emit(this.item)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-item"]],inputs:{item:"item",index:"index"},outputs:{add:"add",minus:"minus"},decls:14,vars:9,consts:[["slot","start"],[3,"src","error"],[1,"ion-text-wrap"],[3,"click",4,"ngIf"],[4,"ngIf"],[3,"click"],["color","success",1,"add"],["color","success","name","remove-outline",3,"click"],["color","success",1,"ion-text-center","quantity"],["color","success","name","add-outline",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-item")(1,"ion-thumbnail",0)(2,"img",1),t.NdJ("error",function(r){return n.onImgError(r)}),t.qZA()(),t.TgZ(3,"ion-label",2)(4,"ion-text"),t._uU(5),t.qZA(),t.TgZ(6,"p",2),t._uU(7),t.qZA(),t.TgZ(8,"ion-text")(9,"p"),t._uU(10),t.ALo(11,"number"),t.qZA()()(),t.YNc(12,x,3,0,"ion-row",3),t.YNc(13,C,5,1,"ion-row",4),t.qZA()),2&e&&(t.xp6(2),t.Q6J("src",null!=n.item&&n.item.cover?null==n.item?null:n.item.cover:n.fallbackImage,t.LSH),t.xp6(3),t.Oqu(null==n.item?null:n.item.name),t.xp6(2),t.Oqu(null==n.item?null:n.item.desc),t.xp6(3),t.hij("\u20b9",t.xi3(11,6,null==n.item?null:n.item.price,"0.2-2"),""),t.xp6(2),t.Q6J("ngIf",!(null!=n.item&&n.item.quantity)||(null==n.item?null:n.item.quantity)<=0),t.xp6(1),t.Q6J("ngIf",(null==n.item?null:n.item.quantity)>0))},dependencies:[c.O5,a.gu,a.Ie,a.Q$,a.Nd,a.yW,a.Bs,c.JJ],styles:["ion-thumbnail[_ngcontent-%COMP%]{height:10vh;width:20vw}ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;height:100%;width:100%}ion-row[_ngcontent-%COMP%]{border:1px solid var(--ion-color-medium);border-radius:2px;padding:.3rem}.quantity[_ngcontent-%COMP%]{width:2rem}ion-text[_ngcontent-%COMP%]{font-size:.8rem}.add[_ngcontent-%COMP%]{padding:0 1.3rem}ion-label[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:.9rem!important;font-weight:700}ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.75rem!important}ion-label[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%], ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:44vw!important}"]}),i})();function T(i,s){1&i&&(t.TgZ(0,"ion-grid",1)(1,"ion-item",2)(2,"ion-label")(3,"h1"),t._UZ(4,"ion-skeleton-text",3),t.qZA(),t.TgZ(5,"p"),t._UZ(6,"ion-skeleton-text",4),t.qZA(),t.TgZ(7,"p"),t._UZ(8,"ion-skeleton-text",5),t.qZA()()(),t.TgZ(9,"ion-row")(10,"ion-col",6)(11,"ion-label",7)(12,"p"),t._UZ(13,"ion-skeleton-text",8),t.qZA(),t.TgZ(14,"p"),t._UZ(15,"ion-skeleton-text",9),t.qZA()()(),t.TgZ(16,"ion-col",6)(17,"ion-label",7)(18,"p"),t._UZ(19,"ion-skeleton-text",8),t.qZA(),t.TgZ(20,"p"),t._UZ(21,"ion-skeleton-text",9),t.qZA()()(),t.TgZ(22,"ion-col",6)(23,"ion-label",7)(24,"p"),t._UZ(25,"ion-skeleton-text",8),t.qZA(),t.TgZ(26,"p"),t._UZ(27,"ion-skeleton-text",9),t.qZA()()()()())}function v(i,s){if(1&i&&(t.TgZ(0,"ion-text")(1,"p"),t._uU(2),t.qZA()()),2&i){const e=t.oxw(2);t.xp6(2),t.Oqu(e.getCuisine(e.data.cuisines))}}function P(i,s){if(1&i&&(t.TgZ(0,"ion-grid",1)(1,"ion-row",10)(2,"ion-label")(3,"h1"),t._uU(4),t.qZA(),t.YNc(5,v,3,1,"ion-text",11),t.TgZ(6,"p"),t._uU(7),t.qZA()()(),t.TgZ(8,"ion-row")(9,"ion-col",6)(10,"ion-label",7)(11,"ion-text")(12,"p"),t._UZ(13,"ion-icon",12),t._uU(14),t.qZA()(),t.TgZ(15,"p"),t._uU(16,"Ratings"),t.qZA()()(),t.TgZ(17,"ion-col",6)(18,"ion-label",7)(19,"ion-text")(20,"p"),t._uU(21),t.qZA()(),t.TgZ(22,"p"),t._uU(23,"Delivery Time"),t.qZA()()(),t.TgZ(24,"ion-col",6)(25,"ion-label",7)(26,"ion-text")(27,"p"),t._uU(28),t.qZA()(),t.TgZ(29,"p"),t._uU(30,"For Two"),t.qZA()()()()()),2&i){const e=t.oxw();t.xp6(4),t.Oqu(null==e.data?null:e.data.name),t.xp6(1),t.Q6J("ngIf",null==e.data?null:e.data.cuisines),t.xp6(2),t.Oqu(null==e.data?null:e.data.address),t.xp6(7),t.hij("",null==e.data?null:e.data.rating," "),t.xp6(7),t.hij(" ",null==e.data?null:e.data.delivery_time," MINS "),t.xp6(7),t.hij(" \u20b9",null==e.data?null:e.data.price," ")}}let q=(()=>{class i{constructor(){}ngOnInit(){}getCuisine(e){return e.join(", ")}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-restaurant-detail"]],inputs:{data:"data",isLoading:"isLoading"},decls:2,vars:2,consts:[["class","borderBottom",4,"ngIf"],[1,"borderBottom"],["lines","none",1,"ion-padding-horizontal","dashedBorderBottom"],["animated","",2,"width","50%"],["animated","",2,"width","60%"],["animated","",2,"width","80%"],["size","4"],[1,"ion-text-center"],["animated","",2,"width","30%"],["animated","",2,"width","35%"],[1,"ion-padding-horizontal","dashedBorderBottom"],[4,"ngIf"],["name","star"]],template:function(e,n){1&e&&(t.YNc(0,T,28,0,"ion-grid",0),t.YNc(1,P,31,6,"ion-grid",0)),2&e&&(t.Q6J("ngIf",n.isLoading),t.xp6(1),t.Q6J("ngIf",(null==n.data?null:n.data.name)&&!n.isLoading))},dependencies:[c.O5,a.wI,a.jY,a.gu,a.Ie,a.Q$,a.Nd,a.CK,a.yW],styles:[".dashedBorderBottom[_ngcontent-%COMP%]{padding-bottom:1vh;margin-bottom:1vh}h1[_ngcontent-%COMP%]{font-weight:700;font-size:1.2rem}"]}),i})();function M(i,s){1&i&&t._UZ(0,"app-loading-restaurant")}function w(i,s){if(1&i&&t._UZ(0,"app-empty-screen",9),2&i){const e=t.oxw();t.Q6J("model",e.model)}}function O(i,s){if(1&i&&(t.TgZ(0,"ion-list-header"),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==e?null:e.name," ")}}function A(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"app-item",13),t.NdJ("add",function(o){t.CHM(e);const r=t.oxw(3);return t.KtG(r.quantityPlus(o))})("minus",function(o){t.CHM(e);const r=t.oxw(3);return t.KtG(r.quantityMinus(o))}),t.qZA()}if(2&i){const e=t.oxw(),o=e.index;t.Q6J("item",e.$implicit)("index",o)}}function D(i,s){if(1&i&&(t.ynx(0),t.YNc(1,A,1,2,"app-item",12),t.BQk()),2&i){const e=s.$implicit,n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",n.id==e.category_id.id)}}function b(i,s){if(1&i&&(t.TgZ(0,"ion-list",10),t.YNc(1,O,2,1,"ion-list-header",6),t.YNc(2,D,2,1,"ng-container",11),t.qZA()),2&i){const e=s.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.checkItemCategory(e.id)),t.xp6(1),t.Q6J("ngForOf",n.items)}}function U(i,s){1&i&&(t.TgZ(0,"span"),t._uU(1,"s"),t.qZA())}function J(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"ion-footer")(1,"ion-toolbar",14)(2,"ion-label",15)(3,"h4"),t._uU(4),t.YNc(5,U,2,0,"span",6),t._uU(6),t.ALo(7,"number"),t.qZA(),t.TgZ(8,"ion-text",16)(9,"p"),t._uU(10,"Extra charges may apply"),t.qZA()()(),t.TgZ(11,"ion-button",17),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.viewCart())}),t._UZ(12,"ion-icon",18),t._uU(13," VIEW CART "),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(4),t.hij("",null==e.cartData?null:e.cartData.totalItem," Item"),t.xp6(1),t.Q6J("ngIf",(null==e.cartData?null:e.cartData.totalItem)>1),t.xp6(1),t.hij(" | \u20b9",t.xi3(7,3,null==e.cartData?null:e.cartData.totalPrice,"0.2-2"),"")}}const N=[{path:"",component:(()=>{class i{constructor(e,n,o,r,u,B){this.navCtrl=e,this.route=n,this.router=o,this.api=r,this.cartService=u,this.global=B,this.data={},this.items=[],this.veg=!1,this.cartData={},this.storedData={},this.model={icon:"fast-food-outline",title:"No Menu Available"},this.categories=[],this.allItems=[]}ngOnInit(){const e=this.route.snapshot.paramMap.get("restaurantId");console.log("check id: ",e),e?(this.id=e,console.log("id: ",this.id),this.cartSub=this.cartService.cart.subscribe(n=>{console.log("cart items: ",n),this.cartData={},this.storedData={},n&&n?.totalItem>0?(this.storedData=n,this.cartData.totalItem=this.storedData.totalItem,this.cartData.totalPrice=this.storedData.totalPrice,n?.restaurant?.uid===this.id?(this.allItems.forEach(o=>{let r=!1;n.items.forEach(u=>{o.id==u.id&&(o.quantity=u.quantity,r=!0)}),console.log(`element check (${r}): `,o?.name+" | "+o?.quantity),!r&&o?.quantity&&(o.quantity=0)}),console.log("allitems: ",this.allItems),this.cartData.items=this.allItems.filter(o=>o.quantity>0),this.items=1==this.veg?this.allItems.filter(o=>!0===o.veg):[...this.allItems]):(this.allItems.forEach(o=>{o.quantity=0}),this.items=1==this.veg?this.allItems.filter(o=>!0===o.veg):[...this.allItems])):(this.allItems.forEach(o=>{o.quantity=0}),this.items=1==this.veg?this.allItems.filter(o=>!0===o.veg):[...this.allItems])}),this.getItems()):this.navCtrl.back()}getItems(){var e=this;return(0,d.Z)(function*(){try{e.isLoading=!0,e.data={},e.cartData={},e.storedData={},e.data=yield e.api.getRestaurantById(e.id),e.categories=yield e.api.getRestaurantCategories(e.id),e.allItems=yield e.api.getRestaurantMenu(e.id),e.items=[...e.allItems],console.log("items: ",e.items),console.log("restaurant: ",e.data),yield e.cartService.getCartData(),e.isLoading=!1}catch(n){console.log(n),e.isLoading=!1,e.global.errorToast()}})()}vegOnly(e){console.log(e.detail.checked),this.items=[],this.items=1==e.detail.checked?this.allItems.filter(n=>!0===n.veg):this.allItems,console.log("items: ",this.items)}quantityPlus(e){const n=this.allItems.findIndex(o=>o.id===e.id);console.log(n),this.allItems[n].quantity&&0!=this.allItems[n].quantity?this.cartService.quantityPlus(n,this.allItems,this.data):!this.storedData.restaurant||this.storedData.restaurant&&this.storedData.restaurant.uid==this.id?(console.log("index item: ",this.allItems),this.cartService.quantityPlus(n,this.allItems,this.data)):this.cartService.alertClearCart(n,this.allItems,this.data)}quantityMinus(e){const n=this.allItems.findIndex(o=>o.id===e.id);this.cartService.quantityMinus(n,this.allItems)}saveToCart(){try{this.cartData.restaurant={},this.cartData.restaurant=this.data,console.log("save cartData: ",this.cartData),this.cartService.saveCart()}catch(e){console.log(e)}}viewCart(){var e=this;return(0,d.Z)(function*(){console.log("save cartdata: ",e.cartData),e.cartData.items&&e.cartData.items.length>0&&(yield e.saveToCart()),console.log("router url: ",e.router.url),e.router.navigate([e.router.url+"/cart"])})()}checkItemCategory(e){return!!this.items.find(o=>o.category_id.id==e)}ionViewWillLeave(){var e=this;return(0,d.Z)(function*(){console.log("ionViewWillLeave ItemsPage"),e.cartData?.items&&e.cartData?.items.length>0&&(yield e.saveToCart())})()}ngOnDestroy(){this.cartSub&&this.cartSub.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(a.SH),t.Y36(m.gz),t.Y36(m.F0),t.Y36(h.s),t.Y36(_.N),t.Y36(f.U))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-items"]],decls:15,vars:7,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","/tabs/home"],[3,"data","isLoading"],[1,"ion-padding","veg","borderBottomSmall"],["mode","md","color","success",3,"ngModel","ionChange","ngModelChange"],[4,"ngIf"],[3,"model",4,"ngIf"],["lines","none",4,"ngFor","ngForOf"],[3,"model"],["lines","none"],[4,"ngFor","ngForOf"],[3,"item","index","add","minus",4,"ngIf"],[3,"item","index","add","minus"],["color","success"],["color","white"],["color","light"],["slot","end","fill","clear","color","white",3,"click"],["slot","end","name","basket-outline"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA()()(),t.TgZ(4,"ion-content"),t._UZ(5,"app-restaurant-detail",3),t.TgZ(6,"ion-row",4)(7,"ion-label")(8,"h4"),t._uU(9,"VEG ONLY"),t.qZA()(),t.TgZ(10,"ion-toggle",5),t.NdJ("ionChange",function(r){return n.vegOnly(r)})("ngModelChange",function(r){return n.veg=r}),t.qZA()(),t.YNc(11,M,1,0,"app-loading-restaurant",6),t.YNc(12,w,1,1,"app-empty-screen",7),t.YNc(13,b,3,2,"ion-list",8),t.qZA(),t.YNc(14,J,14,6,"ion-footer",6)),2&e&&(t.xp6(5),t.Q6J("data",n.data)("isLoading",n.isLoading),t.xp6(5),t.Q6J("ngModel",n.veg),t.xp6(1),t.Q6J("ngIf",n.isLoading),t.xp6(1),t.Q6J("ngIf",!n.isLoading&&0==(null==n.categories?null:n.categories.length)),t.xp6(1),t.Q6J("ngForOf",n.categories),t.xp6(1),t.Q6J("ngIf",(null==n.cartData?null:n.cartData.totalItem)>0))},dependencies:[c.sg,c.O5,g.JJ,g.On,a.oU,a.YG,a.Sm,a.W2,a.fr,a.Gu,a.gu,a.Q$,a.q_,a.yh,a.Nd,a.yW,a.ho,a.sr,a.w,a.cs,I.R,Z.s,y,q,c.JJ],styles:[".veg[_ngcontent-%COMP%]{align-items:center}ion-list-header[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;letter-spacing:.5px}ion-footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], ion-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:3%}ion-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.55rem!important;letter-spacing:.5px}"]}),i})()},{path:"cart",loadChildren:()=>Promise.all([l.e(7123),l.e(5949)]).then(l.bind(l,5949)).then(i=>i.CartPageModule)}];let k=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.Bz.forChild(N),m.Bz]}),i})();var Q=l(5642);let Y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.ez,g.u5,a.Pc,k,Q.K]}),i})()}}]);